import { motion } from 'framer-motion'
import { CalendarCheck, ArrowRight } from 'lucide-react'
import Container from '../../components/shared/Container'
import { barbershop as b } from './data'

export default function BarbershopHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0A0A0A] pb-20 pt-40 md:pt-48">
      {/* Diagonal stripe texture — this template's signature motif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)',
        }}
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 border border-[#F5A623]/40 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
            {b.hero.eyebrow}
          </span>

          <h1 className="mt-6 max-w-xl font-sans text-6xl font-black uppercase leading-[0.95] text-white sm:text-7xl">
            Precision <span className="text-[#F5A623]">cuts.</span>
            <br />
            No shortcuts.
          </h1>

          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-white/60">{b.hero.sub}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] px-7 py-4 font-sans text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-[1.03]"
            >
              <CalendarCheck size={17} />
              Book Your Slot
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 font-sans text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-[#F5A623]/50"
            >
              See Services
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Signature visual: bold numeric stat block, sharp edges, no rounding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative aspect-square w-full max-w-sm justify-self-center border border-white/10 bg-[#141414] p-8"
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="font-sans text-7xl font-black text-[#F5A623]">6</p>
              <p className="mt-1 font-sans text-sm font-semibold uppercase tracking-wide text-white/60">Chairs, always open</p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="font-sans text-2xl font-black text-white">4.8★</p>
                <p className="font-sans text-xs uppercase text-white/40">Rating</p>
              </div>
              <div>
                <p className="font-sans text-2xl font-black text-white">2019</p>
                <p className="font-sans text-xs uppercase text-white/40">Since</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
