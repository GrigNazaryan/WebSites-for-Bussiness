import { useState } from 'react'
import { Menu, X, Scissors } from 'lucide-react'
import { barbershop as b } from './data'

export default function BarbershopNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'Barbers' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-sans text-lg font-black uppercase tracking-tight text-white">
          <Scissors className="text-[#F5A623]" size={20} />
          {b.brand}
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-sans text-sm font-semibold uppercase tracking-wide text-white/60 transition-colors hover:text-[#F5A623]">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden bg-[#F5A623] px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105 lg:inline-flex"
        >
          Book Now
        </a>
        <button onClick={() => setOpen((v) => !v)} className="text-white lg:hidden" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#0A0A0A] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-sans text-sm font-semibold uppercase text-white/70">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-[#F5A623] px-5 py-2.5 text-center font-sans text-sm font-bold uppercase text-black">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
