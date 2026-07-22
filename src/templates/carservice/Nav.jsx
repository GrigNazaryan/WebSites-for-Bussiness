import { useState } from 'react'
import { Menu, X, Wrench } from 'lucide-react'
import { carService as c } from './data'

export default function CarServiceNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-sans text-lg font-bold text-[#12181F]">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1E3A5F] text-white">
            <Wrench size={16} />
          </span>
          {c.brand}
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-sans text-sm font-medium text-slate-600 transition-colors hover:text-[#FF6B35]">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-[#FF6B35] px-5 py-2.5 font-sans text-sm font-semibold text-white transition-transform hover:scale-105 lg:inline-flex"
        >
          Book a Slot
        </a>
        <button onClick={() => setOpen((v) => !v)} className="text-[#12181F] lg:hidden" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-sans text-sm font-medium text-slate-600">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-md bg-[#FF6B35] px-5 py-2.5 text-center font-sans text-sm font-semibold text-white">
              Book a Slot
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
