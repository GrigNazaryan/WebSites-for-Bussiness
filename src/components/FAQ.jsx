import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/faq'

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-surface-line py-6">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-base font-medium text-ivory">{faq.question}</span>
        <Plus
          size={18}
          className={`shrink-0 text-brass transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-3 font-sans text-sm leading-relaxed text-ivory-dim">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">Questions</span>
          <h2 className="mt-4 font-display text-4xl font-medium text-ivory">
            Frequently asked <span className="text-gradient italic">questions</span>
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-ivory-dim">
            Still unsure about something? Send us a message — we reply within a few hours.
          </p>
          <a href="#contact" className="btn-secondary mt-6 inline-flex">
            Ask a Question
          </a>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
