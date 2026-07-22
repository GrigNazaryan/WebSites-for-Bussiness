import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Sparkles, ArrowLeft } from 'lucide-react'
import BrowserMockup from '../components/BrowserMockup'

const templates = [
  {
    id: 'restaurant',
    path: '/restaurant',
    name: 'Lavash & Vine',
    category: 'Restaurant / Cafe',
    description: 'Warm, dark fine-dining layout with a full menu, chef story and reservation flow.',
    palette: ['#C9A24B', '#6B1E23'],
    archetype: 'menu',
  },
  {
    id: 'barbershop',
    path: '/barbershop',
    name: 'Fade & Co.',
    category: 'Barbershop / Beauty Salon',
    description: 'Bold, high-contrast layout built for booking-first businesses — sharp, masculine, fast.',
    palette: ['#F5A623', '#0A0A0A'],
    archetype: 'booking',
  },
  {
    id: 'car-service',
    path: '/car-service',
    name: 'TorqueLine',
    category: 'Car Service / Automotive',
    description: 'Light, technical layout that leads with trust — transparent pricing, diagnostics, certifications.',
    palette: ['#1E3A5F', '#FF6B35'],
    archetype: 'clinical',
  },
  {
    id: 'real-estate',
    path: '/real-estate',
    name: 'Meridian Properties',
    category: 'Real Estate Agency',
    description: 'Editorial, luxury layout with generous whitespace — built to sell listings, not just list them.',
    palette: ['#1B2A41', '#B08D57'],
    archetype: 'catalog',
  },
]

export default function TemplateSelector() {
  return (
    <div className="min-h-screen bg-ink">
      <header className="border-b border-surface-line">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-10">
          <div>
            <span className="eyebrow">Template System</span>
            <h1 className="mt-3 font-display text-4xl font-medium text-ivory md:text-5xl">
              Pick an industry. <span className="text-gradient italic">See it live.</span>
            </h1>
            <p className="mt-3 max-w-xl font-sans text-sm text-ivory-dim">
              Four complete, production-ready templates — each with its own visual identity,
              built for a different kind of business.
            </p>
          </div>
          <Link
            to="/agency"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-surface-line px-5 py-2.5 font-sans text-sm text-ivory-dim transition-colors hover:border-brass/40 hover:text-ivory lg:inline-flex"
          >
            <ArrowLeft size={15} />
            Main Agency Site
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {templates.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-surface-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-brass/40 hover:shadow-soft"
            >
              <div className="p-3">
                <BrowserMockup
                  palette={t.palette}
                  archetype={t.archetype}
                  label={`${t.id}.am`}
                  className="transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              <div className="px-6 pb-7 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-brass">{t.category}</span>
                <h3 className="mt-1.5 font-display text-2xl font-medium text-ivory">{t.name}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ivory-dim">{t.description}</p>

                <div className="mt-6 flex items-center gap-3">
                  <Link
                    to={t.path}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-surface-line bg-surface-raised px-4 py-2.5 font-sans text-xs font-semibold text-ivory transition-colors hover:border-brass/50"
                  >
                    <ExternalLink size={14} />
                    Open Demo
                  </Link>
                  <a
                    href="/agency#contact"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-signature-gradient px-4 py-2.5 font-sans text-xs font-semibold text-ink transition-transform hover:scale-[1.03]"
                  >
                    <Sparkles size={14} />
                    Use This Design
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center lg:hidden">
          <Link to="/agency" className="btn-secondary inline-flex">
            <ArrowLeft size={15} />
            Main Agency Site
          </Link>
        </div>
      </div>
    </div>
  )
}
