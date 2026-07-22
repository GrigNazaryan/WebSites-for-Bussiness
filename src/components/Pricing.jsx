import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingTiers } from '../data/pricing'

export default function Pricing() {
  return (
    <section id="pricing" className="section py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="eyebrow justify-center">Investment</span>
        <h2 className="mt-4 font-display text-4xl font-medium text-ivory md:text-5xl">
          Pricing built for <span className="text-gradient italic">every stage</span> of growth
        </h2>
        <p className="mt-4 font-sans text-ivory-dim">
          Transparent packages. No hidden fees, no hourly surprises.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex flex-col rounded-3xl border p-8 ${
              tier.featured
                ? 'border-brass/50 bg-surface-raised shadow-glow lg:-translate-y-3'
                : 'border-surface-line bg-surface'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-signature-gradient px-4 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink">
                Most Popular
              </span>
            )}

            <h3 className="font-display text-2xl font-medium text-ivory">{tier.name}</h3>
            <p className="mt-2 font-sans text-sm text-ivory-dim">{tier.description}</p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-4xl text-ivory">{tier.price}</span>
              <span className="font-mono text-xs text-muted">{tier.period}</span>
            </div>

            <a
              href="#contact"
              className={tier.featured ? 'btn-primary mt-7' : 'btn-secondary mt-7'}
            >
              {tier.cta}
            </a>

            <ul className="mt-8 flex flex-col gap-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-ivory-dim">
                  <Check size={16} className="mt-0.5 shrink-0 text-brass" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center font-sans text-sm text-muted">
        Need something specific? <a href="#contact" className="text-brass underline-offset-4 hover:underline">Let&rsquo;s talk about a custom scope.</a>
      </p>
    </section>
  )
}
