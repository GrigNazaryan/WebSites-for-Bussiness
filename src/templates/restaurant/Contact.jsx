import { useState } from 'react'
import { MapPin, Clock, Phone, CheckCircle2 } from 'lucide-react'
import { restaurant as r } from './data'

export default function RestaurantContact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', guests: '2', date: '', phone: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#1B1611] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A24B]">Find Us</span>
          <h2 className="mt-4 font-display text-3xl italic text-[#F3E9DC] md:text-4xl">
            Visit us on Saryan Street
          </h2>

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[#C9A24B]" size={18} />
              <p className="font-sans text-sm text-[#C9BEB0]">{r.address}</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 shrink-0 text-[#C9A24B]" size={18} />
              <a href={`tel:${r.phone}`} className="font-sans text-sm text-[#C9BEB0] hover:text-[#F3E9DC]">
                {r.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 shrink-0 text-[#C9A24B]" size={18} />
              <div className="font-sans text-sm text-[#C9BEB0]">
                {r.hours.map((h) => (
                  <div key={h.day} className="flex gap-3">
                    <span className="w-24 text-[#8B8377]">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stylized map placeholder — swap for a real embed in production */}
          <div className="mt-8 flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-[#14100D] font-mono text-xs text-[#8B8377]">
            Map embed — Saryan Street, Yerevan
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#14100D] p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={38} className="text-[#C9A24B]" />
              <h3 className="mt-4 font-display text-xl italic text-[#F3E9DC]">Table requested</h3>
              <p className="mt-2 font-sans text-sm text-[#C9BEB0]">
                We&rsquo;ll confirm by phone within the hour. See you soon, {form.name || 'friend'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <h3 className="font-display text-xl italic text-[#F3E9DC]">Reserve a table</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs text-[#C9BEB0]">Name</span>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Sona Martirosyan" className="restaurant-input" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs text-[#C9BEB0]">Phone</span>
                  <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+374 XX XXX XXX" className="restaurant-input" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs text-[#C9BEB0]">Date & time</span>
                  <input required type="datetime-local" name="date" value={form.date} onChange={handleChange} className="restaurant-input" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs text-[#C9BEB0]">Guests</span>
                  <select name="guests" value={form.guests} onChange={handleChange} className="restaurant-input">
                    {[1, 2, 3, 4, 5, 6, '7+'].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </label>
              </div>
              <button type="submit" className="mt-2 rounded-full bg-[#C9A24B] px-6 py-3.5 font-sans text-sm font-semibold text-[#14100D] transition-transform hover:scale-[1.02]">
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .restaurant-input {
          width: 100%;
          background: #1B1611;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: #F3E9DC;
          font-family: inherit;
        }
        .restaurant-input:focus { outline: none; border-color: #C9A24B; }
      `}</style>
    </section>
  )
}
