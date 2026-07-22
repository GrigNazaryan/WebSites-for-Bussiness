import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { carService as c } from './data'

export default function CarServiceServices() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-[#FF6B35]">Services & Pricing</span>
            <h2 className="mt-4 font-sans text-4xl font-bold text-[#12181F] md:text-5xl">Flat rates. No surprises.</h2>
          </div>
          <p className="max-w-sm font-sans text-sm text-slate-500">
            Every quote is fixed before we start. If something extra comes up, we call first.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group rounded-xl border border-slate-200 bg-[#F5F6F8] p-6 transition-all hover:border-[#1E3A5F]/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-sans text-base font-semibold text-[#12181F]">{s.name}</h3>
                <ArrowRight size={16} className="mt-1 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#FF6B35]" />
              </div>
              <p className="mt-2 font-sans text-sm text-slate-500">{s.note}</p>
              <p className="mt-4 font-mono text-sm font-bold text-[#1E3A5F]">{s.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
