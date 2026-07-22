import { motion } from 'framer-motion'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="section">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">What we build</span>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-medium text-ivory md:text-5xl">
              Services built around <span className="text-gradient italic">one goal</span>: more customers.
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-ivory-dim">
            Every project is custom-built — no drag-and-drop templates, no generic themes.
            Just a site engineered for your business.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-surface-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brass/40 hover:shadow-soft"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-signature-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-raised text-brass">
                <s.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-sans text-lg font-semibold text-ivory">{s.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ivory-dim">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
