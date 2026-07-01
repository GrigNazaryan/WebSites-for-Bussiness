import { motion } from 'framer-motion'
import { restaurant as r } from './data'

export default function RestaurantAbout() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#1B1611] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A24B]">Our Story</span>
          <h2 className="mt-4 font-display text-3xl italic leading-tight text-[#F3E9DC] md:text-4xl">
            {r.about.heading}
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-[#C9BEB0]">{r.about.body}</p>

          <blockquote className="mt-8 border-l-2 border-[#C9A24B] pl-5">
            <p className="font-display text-lg italic text-[#F3E9DC]">{r.about.quote}</p>
            <cite className="mt-2 block font-sans text-xs not-italic text-[#8B8377]">{r.about.quoteAuthor}</cite>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {r.about.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-[#14100D] p-6 text-center">
              <p className="font-display text-3xl italic text-[#C9A24B]">{s.value}</p>
              <p className="mt-1 font-sans text-xs text-[#8B8377]">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
