import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { realEstate as re } from './data'

export default function RealEstateNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#listings', label: 'Listings' },
    { href: '#about', label: 'About' },
    { href: '#reviews', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E7E2D8] bg-[#FBF9F4]/90 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-xl tracking-tight text-[#1B2A41]">
          {re.brand}
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-sans text-[13px] uppercase tracking-[0.1em] text-[#5C6470] transition-colors hover:text-[#B08D57]">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden border border-[#1B2A41] px-6 py-2.5 font-sans text-[13px] uppercase tracking-[0.1em] text-[#1B2A41] transition-colors hover:bg-[#1B2A41] hover:text-white lg:inline-flex"
        >
          Book Consultation
        </a>
        <button onClick={() => setOpen((v) => !v)} className="text-[#1B2A41] lg:hidden" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#E7E2D8] bg-[#FBF9F4] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-sans text-sm uppercase tracking-wide text-[#5C6470]">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="border border-[#1B2A41] px-5 py-2.5 text-center font-sans text-sm uppercase tracking-wide text-[#1B2A41]">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
