import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { realEstate as re } from './data'

export default function RealEstateTestimonials() {
  return (
    <section id="reviews" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#B08D57]">Client Stories</span>
          <h2 className="mt-4 font-display text-4xl text-[#1B2A41] md:text-5xl">What clients say</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {re.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t-2 border-[#B08D57] pt-6"
            >
              <Quote className="text-[#B08D57]/50" size={22} />
              <p className="mt-4 font-display text-lg italic leading-relaxed text-[#1B2A41]">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 font-sans text-sm font-semibold text-[#1B2A41]">{t.name}</p>
              <p className="font-sans text-xs uppercase tracking-wide text-[#8A8F98]">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
