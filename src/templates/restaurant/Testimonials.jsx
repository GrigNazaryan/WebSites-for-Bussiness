import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { restaurant as r } from './data'

export default function RestaurantTestimonials() {
  return (
    <section id="reviews" className="bg-[#14100D] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A24B]">Guest Reviews</span>
          <h2 className="mt-4 font-display text-4xl italic text-[#F3E9DC] md:text-5xl">What our guests say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {r.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#1B1611] p-7"
            >
              <Quote className="text-[#C9A24B]/50" size={22} />
              <div className="mt-4 flex gap-0.5 text-[#C9A24B]">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-3 font-sans text-sm leading-relaxed text-[#C9BEB0]">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 font-sans text-sm font-semibold text-[#F3E9DC]">{t.name}</p>
              <p className="font-sans text-xs text-[#8B8377]">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
