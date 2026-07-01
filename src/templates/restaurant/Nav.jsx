import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { restaurant as r } from './data'

export default function RestaurantNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#14100D]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-xl italic tracking-wide text-[#F3E9DC]">
          {r.brand}
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-sans text-sm text-[#C9BEB0] transition-colors hover:text-[#C9A24B]">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#C9A24B] px-5 py-2.5 font-sans text-sm font-semibold text-[#14100D] transition-transform hover:scale-105 lg:inline-flex"
        >
          Reserve a Table
        </a>
        <button onClick={() => setOpen((v) => !v)} className="text-[#F3E9DC] lg:hidden" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-[#14100D] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-sans text-sm text-[#C9BEB0]">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-[#C9A24B] px-5 py-2.5 text-center font-sans text-sm font-semibold text-[#14100D]">
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
