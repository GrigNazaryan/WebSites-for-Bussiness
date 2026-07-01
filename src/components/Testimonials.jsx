import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="section">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="eyebrow justify-center">Client feedback</span>
          <h2 className="mt-4 font-display text-4xl font-medium text-ivory md:text-5xl">
            What business owners <span className="text-gradient italic">are saying</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="flex flex-col rounded-2xl border border-surface-line bg-surface p-7"
            >
              <Quote className="text-brass/60" size={24} strokeWidth={1.5} />
              <p className="mt-4 flex-1 font-display text-base italic leading-relaxed text-ivory-dim">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-signature-gradient font-mono text-[11px] font-bold text-ink">
                  {t.initials}
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-ivory">{t.name}</p>
                  <p className="font-sans text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
