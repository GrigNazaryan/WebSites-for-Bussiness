import { motion } from 'framer-motion'
import { reasons } from '../data/reasons'

export default function WhyWebsite() {
  return (
    <section className="section py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="eyebrow justify-center">Why it matters</span>
        <h2 className="mt-4 font-display text-4xl font-medium text-ivory md:text-5xl">
          Every business needs a website.
          <br />
          <span className="text-gradient italic">Most just don&rsquo;t have a good one.</span>
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-2xl border border-surface-line bg-surface p-7 transition-colors duration-300 hover:border-brass/40"
          >
            <r.icon className="text-brass" size={22} strokeWidth={1.75} />
            <p className="mt-5 font-display text-3xl text-ivory">{r.stat}</p>
            <h3 className="mt-2 font-sans text-base font-semibold text-ivory">{r.title}</h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ivory-dim">{r.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
