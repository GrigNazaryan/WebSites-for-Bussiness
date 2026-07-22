import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Star } from 'lucide-react'
import BrowserMockup from './BrowserMockup'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40 md:pt-48">
      {/* Ambient grain texture for premium, non-flat feel */}
      <div className="pointer-events-none absolute inset-0 bg-grain" />

      <div className="section grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            Web Design Studio — Yerevan, Armenia
          </span>

          <h1 className="max-w-xl font-display text-[2.6rem] font-medium leading-[1.08] text-ivory sm:text-6xl">
            A website that makes customers choose{' '}
            <span className="text-gradient italic">you</span> first.
          </h1>

          <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-ivory-dim">
            We design and build premium, fast, conversion-focused websites for restaurants,
            clinics, hotels, salons and growing businesses across Yerevan — the kind of site
            that turns visitors into calls, bookings and customers.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Get Free Consultation
              <ArrowRight size={16} />
            </a>
            <a href="#templates" className="btn-secondary">
              <PlayCircle size={18} />
              View Live Demos
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {['AH', 'DP', 'MS', 'TM'].map((i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-surface-raised font-mono text-[10px] text-ivory-dim"
                >
                  {i}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-brass">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-1 font-mono text-xs text-muted">Trusted by 30+ Yerevan businesses</p>
            </div>
          </div>
        </motion.div>

        {/* Signature visual: a tilted stack of real-looking website previews */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-signature-gradient opacity-20 blur-3xl" />

          <div className="relative">
            <BrowserMockup
              palette={['#5BB6E8', '#1B3A4B']}
              archetype="clinical"
              label="lusinedental.am"
              className="absolute -left-6 top-10 w-3/4 rotate-[-8deg] opacity-90 animate-float-slow"
            />
            <BrowserMockup
              palette={['#C9A24B', '#0F2A3D']}
              archetype="hospitality"
              label="araratviewhotel.am"
              className="absolute -right-4 top-0 w-3/4 rotate-[6deg] opacity-95 animate-float"
            />
            <BrowserMockup
              palette={['#C9A24B', '#7A1F1F']}
              archetype="menu"
              label="sasrestaurant.am"
              className="relative z-10 w-full translate-y-16 shadow-glow"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
