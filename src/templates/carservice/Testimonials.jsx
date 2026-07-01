import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { carService as c } from './data'

export default function CarServiceTestimonials() {
  return (
    <section id="reviews" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-wide text-[#FF6B35]">Client Reviews</span>
          <h2 className="mt-4 font-sans text-4xl font-bold text-[#12181F] md:text-5xl">Trusted by Yerevan drivers</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {c.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-slate-200 bg-[#F5F6F8] p-6"
            >
              <Quote className="text-[#1E3A5F]/30" size={20} />
              <div className="mt-3 flex gap-0.5 text-[#FF6B35]">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-3 font-sans text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 font-sans text-sm font-semibold text-[#12181F]">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
