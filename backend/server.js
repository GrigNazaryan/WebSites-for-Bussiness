require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const rateLimit = require('express-rate-limit')
const { pool, ensureSchema } = require('./db')

const app = express()
app.set('trust proxy', 1) // needed on Render for correct client IPs / rate limiting

app.use(express.json({ limit: '100kb' }))

// --- CORS -------------------------------------------------------------
// FRONTEND_ORIGIN can be a comma-separated list, e.g.:
// https://yerevanwebstudio.com,https://www.yerevanwebstudio.com
const allowedOrigins = (process.env.FRONTEND_ORIGIN || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)

app.use(
  cors({
    origin: allowedOrigins.length === 0 ? true : allowedOrigins,
  })
)

// --- Rate limiting (protects the public form endpoint from spam) -----
const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Слишком много запросов. Попробуйте позже.' },
})

// --- Config for each form type -----------------------------------------
// Maps the fields each frontend form sends into a common DB row, and
// declares which fields are required.
const FORM_CONFIG = {
  agency_contact: {
    required: ['name', 'business', 'message'],
    map: (b) => ({
      name: b.name,
      business: b.business,
      business_type: b.type,
      message: b.message,
    }),
  },
  restaurant_reservation: {
    required: ['name', 'phone', 'date'],
    map: (b) => ({
      name: b.name,
      phone: b.phone,
      guests: b.guests,
      preferred_date: b.date,
    }),
  },
  barbershop_booking: {
    required: ['name', 'phone', 'time'],
    map: (b) => ({
      name: b.name,
      phone: b.phone,
      service: b.service,
      preferred_date: b.time,
    }),
  },
  carservice_request: {
    required: ['name', 'phone', 'vehicle', 'issue'],
    map: (b) => ({
      name: b.name,
      phone: b.phone,
      vehicle: b.vehicle,
      message: b.issue,
    }),
  },
  realestate_lead: {
    required: ['name', 'phone', 'message'],
    map: (b) => ({
      name: b.name,
      phone: b.phone,
      intent: b.intent,
      message: b.message,
    }),
  },
}

function clean(str, max = 2000) {
  if (typeof str !== 'string') return null
  return str.trim().slice(0, max) || null
}

// --- Public: health check ----------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

// --- Public: submit a form ----------------------------------------------
app.post('/api/submissions', submitLimiter, async (req, res) => {
  const body = req.body || {}
  const formType = body.form_type

  const config = FORM_CONFIG[formType]
  if (!config) {
    return res.status(400).json({ error: 'Unknown form_type' })
  }

  const missing = config.required.filter((field) => !clean(body[field]))
  if (missing.length > 0) {
    return res.status(400).json({ error: `Missing required field(s): ${missing.join(', ')}` })
  }

  const mapped = config.map(body)
  const ip = req.ip || req.headers['x-forwarded-for'] || null

  try {
    const result = await pool.query(
      `INSERT INTO submissions
        (form_type, name, phone, email, business, business_type, service, vehicle, intent, guests, preferred_date, message, raw_payload, ip_address)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
       RETURNING id, created_at`,
      [
        formType,
        clean(mapped.name),
        clean(mapped.phone, 50),
        clean(mapped.email, 200),
        clean(mapped.business, 200),
        clean(mapped.business_type, 200),
        clean(mapped.service, 200),
        clean(mapped.vehicle, 200),
        clean(mapped.intent, 100),
        clean(mapped.guests, 20),
        clean(mapped.preferred_date, 100),
        clean(mapped.message, 3000),
        JSON.stringify(body),
        ip,
      ]
    )

    res.status(201).json({ success: true, id: result.rows[0].id })
  } catch (err) {
    console.error('Failed to save submission:', err)
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

// --- Admin auth middleware ----------------------------------------------
function requireAdmin(req, res, next) {
  const key = req.header('x-admin-key')
  if (!process.env.ADMIN_KEY) {
    return res.status(500).json({ error: 'ADMIN_KEY not configured on server' })
  }
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}

// --- Admin: list submissions ---------------------------------------------
app.get('/api/submissions', requireAdmin, async (req, res) => {
  const { form_type, limit = 100, offset = 0 } = req.query
  const params = []
  let where = ''
  if (form_type) {
    params.push(form_type)
    where = `WHERE form_type = $${params.length}`
  }
  params.push(Math.min(Number(limit) || 100, 500))
  params.push(Number(offset) || 0)

  const result = await pool.query(
    `SELECT * FROM submissions ${where} ORDER BY created_at DESC LIMIT $${params.length - 1} OFFSET $${params.length}`,
    params
  )
  res.json({ submissions: result.rows })
})

// --- Admin: delete a submission -------------------------------------------
app.delete('/api/submissions/:id', requireAdmin, async (req, res) => {
  await pool.query('DELETE FROM submissions WHERE id = $1', [req.params.id])
  res.json({ success: true })
})

// --- Admin: export as CSV -------------------------------------------------
app.get('/api/submissions/export.csv', requireAdmin, async (req, res) => {
  const result = await pool.query('SELECT * FROM submissions ORDER BY created_at DESC')
  const rows = result.rows
  const headers = ['id', 'form_type', 'name', 'phone', 'email', 'business', 'business_type', 'service', 'vehicle', 'intent', 'guests', 'preferred_date', 'message', 'created_at']
  const escape = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`
  const csv = [headers.join(',')]
    .concat(rows.map((r) => headers.map((h) => escape(r[h])).join(',')))
    .join('\n')

  res.setHeader('Content-Type', 'text/csv')
  res.setHeader('Content-Disposition', 'attachment; filename="submissions.csv"')
  res.send(csv)
})

// --- Simple built-in admin dashboard (static page, no build step) --------
app.use('/admin', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 4000

ensureSchema()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Failed to set up database schema:', err)
    process.exit(1)
  })
