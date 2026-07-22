import { motion } from 'framer-motion'
import { restaurant as r } from './data'

export default function RestaurantMenu() {
  return (
    <section id="menu" className="bg-[#14100D] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A24B]">Menu Highlights</span>
          <h2 className="mt-4 font-display text-4xl italic text-[#F3E9DC] md:text-5xl">
            Cooked over wood, every service.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {r.menu.map((section, si) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: si * 0.1 }}
            >
              <h3 className="border-b border-[#C9A24B]/25 pb-3 font-display text-xl italic text-[#C9A24B]">
                {section.category}
              </h3>
              <div className="mt-6 flex flex-col gap-6">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-sans text-sm font-semibold text-[#F3E9DC]">{item.name}</p>
                      <span className="font-mono text-xs text-[#C9A24B]">{item.price}</span>
                    </div>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-[#8B8377]">{item.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
