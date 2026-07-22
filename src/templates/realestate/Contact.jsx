import { useState } from 'react'
import { MapPin, Clock, Phone, CheckCircle2 } from 'lucide-react'
import { realEstate as re } from './data'
import { submitForm } from '../../lib/api'

export default function RealEstateContact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', intent: 'Buying', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSending(true)
    try {
      await submitForm('realestate_lead', form)
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="border-t border-[#E7E2D8] bg-[#FBF9F4] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#B08D57]">Get in Touch</span>
          <h2 className="mt-4 font-display text-3xl text-[#1B2A41] md:text-4xl">Start with a conversation</h2>

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[#B08D57]" size={18} />
              <p className="font-sans text-sm text-[#5C6470]">{re.address}</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 shrink-0 text-[#B08D57]" size={18} />
              <a href={`tel:${re.phone}`} className="font-sans text-sm text-[#5C6470] hover:text-[#1B2A41]">
                {re.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 shrink-0 text-[#B08D57]" size={18} />
              <div className="font-sans text-sm text-[#5C6470]">
                {re.hours.map((h) => (
                  <div key={h.day} className="flex gap-3">
                    <span className="w-28 text-[#8A8F98]">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex h-40 items-center justify-center border border-[#E7E2D8] bg-white font-mono text-xs text-[#8A8F98]">
            Map embed — Northern Avenue, Yerevan
          </div>
        </div>

        <div className="border border-[#E7E2D8] bg-white p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={38} className="text-[#B08D57]" />
              <h3 className="mt-4 font-display text-xl text-[#1B2A41]">Message sent</h3>
              <p className="mt-2 font-sans text-sm text-[#5C6470]">
                Thank you, {form.name || 'there'}. An advisor will call within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <h3 className="font-display text-xl text-[#1B2A41]">Book a consultation</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs text-[#5C6470]">Name</span>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Elen Sargsyan" className="re-input" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs text-[#5C6470]">Phone</span>
                  <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+374 XX XXX XXX" className="re-input" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block font-sans text-xs text-[#5C6470]">I am</span>
                  <select name="intent" value={form.intent} onChange={handleChange} className="re-input">
                    <option>Buying</option>
                    <option>Selling</option>
                    <option>Just exploring</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block font-sans text-xs text-[#5C6470]">Message</span>
                  <textarea required rows={3} name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you're looking for" className="re-input resize-none" />
                </label>
              </div>
              {error && <p className="font-sans text-xs text-red-500">{error}</p>}
              <button type="submit" disabled={sending} className="mt-2 bg-[#1B2A41] px-6 py-3.5 font-sans text-sm uppercase tracking-wide text-white transition-transform hover:scale-[1.02] disabled:opacity-60">
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .re-input {
          width: 100%;
          background: #FBF9F4;
          border: 1px solid #E7E2D8;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: #1B2A41;
          font-family: inherit;
        }
        .re-input:focus { outline: none; border-color: #B08D57; background: white; }
      `}</style>
    </section>
  )
}
