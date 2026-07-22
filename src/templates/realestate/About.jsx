import { motion } from 'framer-motion'
import { realEstate as re } from './data'

export default function RealEstateAbout() {
  return (
    <section id="about" className="border-t border-[#E7E2D8] bg-[#FBF9F4] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:px-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#B08D57]">About Meridian</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[#1B2A41] md:text-4xl">{re.about.heading}</h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-[#5C6470]">{re.about.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {re.about.stats.map((s) => (
            <div key={s.label} className="border border-[#E7E2D8] bg-white p-6 text-center">
              <p className="font-display text-3xl text-[#B08D57]">{s.value}</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-wide text-[#8A8F98]">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
