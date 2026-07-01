import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import Container from '../../components/shared/Container'
import { realEstate as re } from './data'

export default function RealEstateHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FBF9F4] pb-24 pt-44 md:pt-56">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#B08D57]">{re.hero.eyebrow}</span>
          <h1 className="mt-6 font-display text-5xl leading-[1.1] text-[#1B2A41] md:text-6xl">
            {re.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-[#5C6470]">
            {re.hero.sub}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1B2A41] px-8 py-3.5 font-sans text-sm uppercase tracking-wide text-white transition-transform hover:scale-[1.02]"
            >
              Book a Consultation
              <ArrowRight size={15} />
            </a>
            <a
              href="#listings"
              className="inline-flex items-center justify-center gap-2 border border-[#1B2A41]/20 px-8 py-3.5 font-sans text-sm uppercase tracking-wide text-[#1B2A41] transition-colors hover:border-[#1B2A41]"
            >
              View Listings
            </a>
          </div>
        </motion.div>

        {/* Signature visual: editorial "listing spread" — wide image band with overlaid card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-20 aspect-[16/8] w-full max-w-5xl overflow-hidden"
          style={{ background: 'linear-gradient(120deg, #1B2A41 0%, #2E4258 55%, #B08D57 130%)' }}
        >
          <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl text-white">Northern Avenue Penthouse</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-wide text-white/70">Kentron District · 3 Bed · 178 m²</p>
            </div>
            <p className="font-display text-2xl text-white">$420,000</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
