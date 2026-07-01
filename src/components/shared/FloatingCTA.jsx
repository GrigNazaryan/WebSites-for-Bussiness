import { motion } from 'framer-motion'
import { MessageCircle, Phone, Instagram } from 'lucide-react'

/**
 * Configurable floating action bar used by every business template.
 * Pass a `theme` object to restyle it per-brand:
 *   { whatsapp: '#25D366', call: '#111', instagram: 'linear-gradient(...)' }
 * and contact info: { whatsapp, phone, instagram }
 */
export default function FloatingCTA({ whatsapp, phone, instagram, position = 'bottom-6 right-6' }) {
  const buttons = [
    {
      key: 'instagram',
      href: instagram,
      label: 'Message us on Instagram',
      icon: Instagram,
      bg: 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)',
    },
    {
      key: 'call',
      href: `tel:${phone}`,
      label: 'Call now',
      icon: Phone,
      bg: '#1F2937',
    },
    {
      key: 'whatsapp',
      href: `https://wa.me/${whatsapp}`,
      label: 'Message us on WhatsApp',
      icon: MessageCircle,
      bg: '#25D366',
    },
  ]

  return (
    <div className={`fixed z-[60] flex flex-col items-end gap-3 ${position}`}>
      {buttons.map((b, i) => (
        <motion.a
          key={b.key}
          href={b.href}
          target={b.key !== 'call' ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={b.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.1 }}
          className="flex h-13 w-13 items-center justify-center rounded-full text-white shadow-xl"
          style={{ background: b.bg, width: '3.25rem', height: '3.25rem' }}
        >
          <b.icon size={20} />
        </motion.a>
      ))}
    </div>
  )
}
