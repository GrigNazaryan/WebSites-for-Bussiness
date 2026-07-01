import { useState } from 'react'
import { MapPin, Clock, Phone, CheckCircle2 } from 'lucide-react'
import { carService as c } from './data'

export default function CarServiceContact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', issue: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-slate-200 bg-[#F5F6F8] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wide text-[#FF6B35]">Find Us</span>
          <h2 className="mt-4 font-sans text-3xl font-bold text-[#12181F] md:text-4xl">Bring it in, or book ahead</h2>

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[#1E3A5F]" size={18} />
              <p className="font-sans text-sm text-slate-600">{c.address}</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 shrink-0 text-[#1E3A5F]" size={18} />
              <a href={`tel:${c.phone}`} className="font-sans text-sm text-slate-600 hover:text-[#12181F]">
                {c.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 shrink-0 text-[#1E3A5F]" size={18} />
              <div className="font-sans text-sm text-slate-600">
                {c.hours.map((h) => (
                  <div key={h.day} className="flex gap-3">
                    <span className="w-24 text-slate-400">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex h-40 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono text-xs text-slate-400">
            Map embed — Admiral Isakov Avenue, Yerevan
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={38} className="text-[#1E3A5F]" />
              <h3 className="mt-4 font-sans text-xl font-bold text-[#12181F]">Request received</h3>
              <p className="mt-2 font-sans text-sm text-slate-500">
                We&rsquo;ll call {form.name || 'you'} shortly to confirm a slot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <h3 className="font-sans text-xl font-bold text-[#12181F]">Book a diagnostic slot</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs text-slate-500">Name</span>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Vardan Manukyan" className="car-input" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-sans text-xs text-slate-500">Phone</span>
                  <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+374 XX XXX XXX" className="car-input" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block font-sans text-xs text-slate-500">Vehicle make / model / year</span>
                  <input required name="vehicle" value={form.vehicle} onChange={handleChange} placeholder="Toyota Camry, 2018" className="car-input" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block font-sans text-xs text-slate-500">What&rsquo;s the issue?</span>
                  <textarea required rows={3} name="issue" value={form.issue} onChange={handleChange} placeholder="Brief description of the problem" className="car-input resize-none" />
                </label>
              </div>
              <button type="submit" className="mt-2 rounded-md bg-[#FF6B35] px-6 py-3.5 font-sans text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
                Request Booking
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .car-input {
          width: 100%;
          background: #F5F6F8;
          border: 1px solid #E2E5EA;
          border-radius: 0.5rem;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: #12181F;
          font-family: inherit;
        }
        .car-input:focus { outline: none; border-color: #1E3A5F; background: white; }
      `}</style>
    </section>
  )
}
