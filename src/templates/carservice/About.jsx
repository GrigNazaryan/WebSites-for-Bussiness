import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { carService as c } from './data'

export default function CarServiceAbout() {
  return (
    <section id="about" className="border-t border-slate-200 bg-[#F5F6F8] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:px-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-wide text-[#FF6B35]">Why TorqueLine</span>
          <h2 className="mt-4 font-sans text-3xl font-bold leading-tight text-[#12181F] md:text-4xl">{c.about.heading}</h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-slate-600">{c.about.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          {c.about.certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <ShieldCheck className="shrink-0 text-[#1E3A5F]" size={20} />
              <p className="font-sans text-sm font-medium text-[#12181F]">{cert}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
