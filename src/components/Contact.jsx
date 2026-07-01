import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, MessageCircle, Instagram, CheckCircle2 } from 'lucide-react'

const channels = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+374 77 123 456', href: 'https://wa.me/37477123456' },
  { icon: Send, label: 'Telegram', value: '@yerevanwebstudio', href: 'https://t.me/yerevanwebstudio' },
  { icon: Instagram, label: 'Instagram', value: '@yerevanwebstudio', href: 'https://instagram.com/yerevanwebstudio' },
  { icon: Mail, label: 'Email', value: 'hello@yerevanwebstudio.com', href: 'mailto:hello@yerevanwebstudio.com' },
  { icon: Phone, label: 'Phone', value: '+374 77 123 456', href: 'tel:+37477123456' },
]

const businessTypes = [
  'Restaurant / Cafe', 'Hotel', 'Barbershop / Beauty Salon', 'Medical / Dental Clinic',
  'Car Service / Dealership', 'Fitness Club', 'Retail Store', 'Construction Company',
  'Real Estate Agency', 'Lawyer / Accountant', 'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', business: '', type: businessTypes[0], message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: Wire this up to a real backend or form service (Formspree,
    // EmailJS, Resend, etc.) — see README "Connect the contact form".
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section">
        <div className="relative overflow-hidden rounded-3xl border border-surface-line bg-surface-raised p-8 md:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signature-gradient opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo opacity-10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="eyebrow">Let&rsquo;s talk</span>
              <h2 className="mt-4 font-display text-4xl font-medium text-ivory md:text-5xl">
                Get a website that <span className="text-gradient italic">earns its keep</span>
              </h2>
              <p className="mt-5 max-w-md font-sans text-ivory-dim">
                Tell us about your business and we&rsquo;ll reply with a free consultation —
                including a quick look at what your new site could look like.
              </p>

              <div className="mt-10 flex flex-col gap-3">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-surface-line bg-surface px-4 py-3 transition-colors hover:border-brass/40"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-raised text-brass">
                      <c.icon size={16} />
                    </span>
                    <span>
                      <span className="block font-sans text-xs text-muted">{c.label}</span>
                      <span className="block font-sans text-sm text-ivory">{c.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-brass/30 bg-surface p-10 text-center">
                  <CheckCircle2 size={40} className="text-brass" />
                  <h3 className="mt-4 font-display text-xl text-ivory">Message sent</h3>
                  <p className="mt-2 font-sans text-sm text-ivory-dim">
                    Thanks, {form.name || 'there'}. We&rsquo;ll reply within a few hours with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-surface-line bg-surface p-7">
                  <div className="grid gap-5">
                    <Field label="Your name">
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ani Hovhannisyan"
                        className="input"
                      />
                    </Field>

                    <Field label="Business name">
                      <input
                        required
                        name="business"
                        value={form.business}
                        onChange={handleChange}
                        placeholder="Sas Restaurant"
                        className="input"
                      />
                    </Field>

                    <Field label="Business type">
                      <select name="type" value={form.type} onChange={handleChange} className="input">
                        {businessTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="What do you need?">
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us a bit about your business and what you're looking for..."
                        className="input resize-none"
                      />
                    </Field>

                    <button type="submit" className="btn-primary w-full">
                      Get Free Consultation
                    </button>
                    <p className="text-center font-mono text-[11px] text-muted">
                      No spam. No obligation. Reply within a few hours.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-xs font-medium text-ivory-dim">{label}</span>
      {children}
    </label>
  )
}
