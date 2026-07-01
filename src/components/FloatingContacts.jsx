import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, ArrowUp } from 'lucide-react'

export default function FloatingContacts() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-line bg-surface-raised text-ivory-dim shadow-soft transition-colors hover:text-brass"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="https://t.me/yerevanwebstudio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on Telegram"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-soft transition-transform hover:scale-110"
      >
        <Send size={22} />
      </a>

      <a
        href="https://wa.me/37477123456"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-110"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  )
}
