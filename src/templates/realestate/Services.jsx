import { motion } from 'framer-motion'
import { BedDouble, Bath, Ruler } from 'lucide-react'
import { realEstate as re } from './data'

export default function RealEstateListings() {
  return (
    <section id="listings" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#B08D57]">Current Listings</span>
          <h2 className="mt-4 font-display text-4xl text-[#1B2A41] md:text-5xl">A short list, chosen carefully</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {re.listings.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group"
            >
              <div
                className="relative aspect-[4/3] w-full overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #1B2A41 0%, #2E4258 60%, #B08D57 140%)`,
                }}
              >
                <span className="absolute left-4 top-4 bg-white px-3 py-1 font-sans text-[10px] uppercase tracking-wide text-[#1B2A41]">
                  {l.tag}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg text-[#1B2A41]">{l.title}</h3>
                  <p className="mt-0.5 font-sans text-xs uppercase tracking-wide text-[#8A8F98]">{l.district}</p>
                </div>
                <p className="shrink-0 font-display text-lg text-[#1B2A41]">{l.price}</p>
              </div>
              <div className="mt-3 flex items-center gap-5 font-sans text-xs text-[#5C6470]">
                <span className="flex items-center gap-1.5"><BedDouble size={14} /> {l.beds} bed</span>
                <span className="flex items-center gap-1.5"><Bath size={14} /> {l.baths} bath</span>
                <span className="flex items-center gap-1.5"><Ruler size={14} /> {l.area}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
