import { motion } from 'framer-motion'
import { barbershop as b } from './data'

export default function BarbershopAbout() {
  return (
    <section id="about" className="border-t border-white/10 bg-[#141414] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">Who We Are</span>
            <h2 className="mt-4 font-sans text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              {b.about.heading}
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-white/60">{b.about.body}</p>

            <div className="mt-8 grid grid-cols-4 gap-3">
              {b.about.stats.map((s) => (
                <div key={s.label} className="border border-white/10 p-4 text-center">
                  <p className="font-sans text-xl font-black text-[#F5A623]">{s.value}</p>
                  <p className="mt-1 font-sans text-[10px] uppercase leading-tight text-white/40">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {b.about.barbers.map((barber) => (
              <div key={barber.name} className="flex items-center gap-4 border border-white/10 bg-[#0A0A0A] p-5">
                <div className="flex h-12 w-12 items-center justify-center bg-[#F5A623] font-sans text-sm font-black text-black">
                  {barber.name[0]}
                </div>
                <div>
                  <p className="font-sans text-sm font-bold uppercase text-white">{barber.name}</p>
                  <p className="font-sans text-xs text-white/50">{barber.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
