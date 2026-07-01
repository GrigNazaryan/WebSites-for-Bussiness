import { motion } from 'framer-motion'
import { Star, UtensilsCrossed, CalendarCheck } from 'lucide-react'
import Container from '../../components/shared/Container'
import { restaurant as r } from './data'

export default function RestaurantHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#14100D] pb-20 pt-40 md:pt-48">
      {/* Ambient grill-glow gradient, this template's signature atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#6B1E23] opacity-30 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#C9A24B] opacity-15 blur-[100px]" />
      </div>

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A24B]/30 bg-[#C9A24B]/10 px-4 py-1.5 font-sans text-xs uppercase tracking-[0.15em] text-[#C9A24B]">
            {r.hero.eyebrow}
          </span>

          <h1 className="mt-6 max-w-xl font-display text-5xl font-medium italic leading-[1.1] text-[#F3E9DC] sm:text-6xl">
            {r.hero.headline}
          </h1>

          <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-[#C9BEB0]">
            {r.hero.sub}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24B] px-7 py-3.5 font-sans text-sm font-semibold text-[#14100D] shadow-lg shadow-[#C9A24B]/20 transition-transform hover:scale-[1.03]"
            >
              <CalendarCheck size={17} />
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-sans text-sm font-semibold text-[#F3E9DC] transition-colors hover:border-[#C9A24B]/50"
            >
              <UtensilsCrossed size={17} />
              View Menu
            </a>
          </div>

          <div className="mt-11 flex items-center gap-4">
            <div className="flex gap-0.5 text-[#C9A24B]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="font-sans text-sm text-[#C9BEB0]">
              <span className="font-semibold text-[#F3E9DC]">{r.hero.rating}</span> from {r.hero.reviews} guest reviews
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10"
          style={{
            background: 'linear-gradient(155deg, #3A1418 0%, #6B1E23 45%, #C9A24B 130%)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur-md">
            <p className="font-display italic text-[#F3E9DC]">Tonight&rsquo;s special</p>
            <p className="mt-1 font-sans text-sm text-[#E8DCC8]">Sevan trout, grilled over walnut wood</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
