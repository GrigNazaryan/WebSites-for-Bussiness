import { motion } from 'framer-motion'
import { process } from '../data/process'

export default function Process() {
  return (
    <section id="process" className="section py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="eyebrow justify-center">How we work</span>
        <h2 className="mt-4 font-display text-4xl font-medium text-ivory md:text-5xl">
          From first call to <span className="text-gradient italic">launch day</span>
        </h2>
        <p className="mt-4 font-sans text-ivory-dim">Seven steps. No surprises along the way.</p>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brass via-indigo to-transparent md:left-1/2" />

        <div className="flex flex-col gap-10">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className={`relative flex items-start gap-6 md:w-1/2 ${
                i % 2 === 0 ? 'md:self-start md:pr-10' : 'md:flex-row-reverse md:self-end md:pl-10 md:text-right'
              }`}
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-surface-line bg-surface-raised font-mono text-sm text-brass">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-ivory">{step.title}</h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-ivory-dim">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
