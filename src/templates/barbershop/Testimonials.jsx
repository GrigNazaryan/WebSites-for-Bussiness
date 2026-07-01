import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { barbershop as b } from './data'

export default function BarbershopTestimonials() {
  return (
    <section id="reviews" className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">Client Reviews</span>
          <h2 className="mt-4 font-sans text-4xl font-black uppercase text-white md:text-5xl">No filler reviews.</h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {b.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0A0A0A] p-7"
            >
              <div className="flex gap-0.5 text-[#F5A623]">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 font-sans text-sm font-bold uppercase text-white">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
