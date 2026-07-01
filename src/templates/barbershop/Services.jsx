import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { barbershop as b } from './data'

export default function BarbershopServices() {
  return (
    <section id="services" className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">Services & Pricing</span>
          <h2 className="mt-4 font-sans text-4xl font-black uppercase text-white md:text-5xl">Every chair, one standard.</h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {b.services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group bg-[#0A0A0A] p-7 transition-colors hover:bg-[#141414]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-sans text-lg font-bold uppercase text-white">{s.name}</h3>
                <span className="shrink-0 font-mono text-sm font-bold text-[#F5A623]">{s.price}</span>
              </div>
              <p className="mt-2 font-sans text-sm text-white/50">{s.note}</p>
              <div className="mt-4 flex items-center gap-1.5 font-mono text-xs text-white/40">
                <Clock size={12} />
                {s.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
