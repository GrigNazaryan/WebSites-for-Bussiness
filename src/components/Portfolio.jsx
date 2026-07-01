import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import BrowserMockup from './BrowserMockup'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="eyebrow justify-center">Recent work</span>
        <h2 className="mt-4 font-display text-4xl font-medium text-ivory md:text-5xl">
          Real projects, <span className="text-gradient italic">real results</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((p, i) => (
          <motion.div
            key={p.client}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group overflow-hidden rounded-2xl border border-surface-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo/40 hover:shadow-soft"
          >
            <div className="p-3">
              <BrowserMockup palette={p.palette} archetype="catalog" label={p.client} />
            </div>
            <div className="px-5 pb-6 pt-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-medium text-ivory">{p.client}</h3>
                </div>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition-colors group-hover:text-brass" />
              </div>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ivory-dim">{p.description}</p>
              <p className="mt-4 inline-flex rounded-full bg-surface-raised px-3 py-1.5 font-mono text-xs font-medium text-brass">
                {p.result}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
