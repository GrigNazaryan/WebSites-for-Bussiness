import { useState } from 'react'
import { MapPin, Clock, Phone, CheckCircle2 } from 'lucide-react'
import { barbershop as b } from './data'

export default function BarbershopContact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', service: b.services[0].name, phone: '', time: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-white/10 bg-[#141414] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">Find Us</span>
          <h2 className="mt-4 font-sans text-3xl font-black uppercase text-white md:text-4xl">Walk in. Sit down.</h2>

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[#F5A623]" size={18} />
              <p className="font-sans text-sm text-white/60">{b.address}</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 shrink-0 text-[#F5A623]" size={18} />
              <a href={`tel:${b.phone}`} className="font-sans text-sm text-white/60 hover:text-white">
                {b.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 shrink-0 text-[#F5A623]" size={18} />
              <div className="font-sans text-sm text-white/60">
                {b.hours.map((h) => (
                  <div key={h.day} className="flex gap-3">
                    <span className="w-24 text-white/35">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex h-40 items-center justify-center border border-white/10 bg-[#0A0A0A] font-mono text-xs text-white/40">
            Map embed — Tumanyan Street, Yerevan
          </div>
        </div>

        <div className="border border-white/10 bg-[#0A0A0A] p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={38} className="text-[#F5A623]" />
              <h3 className="mt-4 font-sans text-xl font-black uppercase text-white">Booking requested</h3>
              <p className="mt-2 font-sans text-sm text-white/60">
                We&rsquo;ll confirm your slot by phone shortly, {form.name || 'there'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <h3 className="font-sans text-xl font-black uppercase text-white">Book your slot</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs uppercase text-white/50">Name</span>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Gevorg Antonyan" className="barber-input" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs uppercase text-white/50">Phone</span>
                  <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+374 XX XXX XXX" className="barber-input" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs uppercase text-white/50">Service</span>
                  <select name="service" value={form.service} onChange={handleChange} className="barber-input">
                    {b.services.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs uppercase text-white/50">Preferred time</span>
                  <input required type="datetime-local" name="time" value={form.time} onChange={handleChange} className="barber-input" />
                </label>
              </div>
              <button type="submit" className="mt-2 bg-[#F5A623] px-6 py-3.5 font-sans text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-[1.02]">
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .barber-input {
          width: 100%;
          background: #141414;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: #fff;
          font-family: inherit;
        }
        .barber-input:focus { outline: none; border-color: #F5A623; }
      `}</style>
    </section>
  )
}
