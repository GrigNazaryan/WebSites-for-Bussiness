const { Pool } = require('pg')

// Render's managed PostgreSQL gives you a DATABASE_URL — just paste it
// into the environment variables of the backend service and everything
// below works with zero extra setup.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('localhost')
    ? false
    : { rejectUnauthorized: false },
})

// Creates the table on first boot if it doesn't exist yet — no manual
// migration step needed when you deploy.
async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      form_type TEXT NOT NULL,
      name TEXT,
      phone TEXT,
      email TEXT,
      business TEXT,
      business_type TEXT,
      service TEXT,
      vehicle TEXT,
      intent TEXT,
      guests TEXT,
      preferred_date TEXT,
      message TEXT,
      raw_payload JSONB,
      ip_address TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `)
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_submissions_form_type ON submissions (form_type);`)
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions (created_at DESC);`)
}

module.exports = { pool, ensureSchema }
