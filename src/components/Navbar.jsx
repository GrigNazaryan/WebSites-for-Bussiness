import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X, LayoutGrid } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#templates', label: 'Live Demos' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="section flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-medium text-ivory">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signature-gradient text-sm font-bold text-ink">Y</span>
          Yerevan Web Studio
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-ivory-dim transition-colors hover:text-brass"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-surface-line px-4 py-2.5 font-sans text-sm text-ivory-dim transition-colors hover:border-brass/40 hover:text-ivory"
          >
            <LayoutGrid size={14} />
            Templates
          </Link>
          <a href="#contact" className="btn-primary !px-5 !py-2.5">
            Get Free Consultation
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-surface-line p-2 text-ivory lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="glass lg:hidden"
        >
          <div className="section flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm text-ivory-dim hover:text-brass"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 font-sans text-sm text-ivory-dim hover:text-brass"
            >
              <LayoutGrid size={14} />
              All Templates
            </Link>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Get Free Consultation
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
