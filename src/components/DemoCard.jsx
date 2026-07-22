import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Sparkles, Clock } from 'lucide-react'
import BrowserMockup from './BrowserMockup'

export default function DemoCard({ template, index }) {
  const hasLiveDemo = Boolean(template.demoPath)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-brass/40 hover:shadow-soft"
    >
      <div className="p-3">
        <BrowserMockup
          palette={template.palette}
          archetype={template.archetype}
          label={`${template.id}.am`}
          className="transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-1">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-brass">
            {template.name}
          </span>
          {!hasLiveDemo && (
            <span className="inline-flex items-center gap-1 rounded-full bg-surface-raised px-2.5 py-0.5 font-mono text-[10px] text-muted">
              <Clock size={10} />
              Coming soon
            </span>
          )}
        </div>
        <h3 className="mt-1.5 font-display text-xl font-medium text-ivory">{template.tagline}</h3>
        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-ivory-dim">
          {template.description}
        </p>

        <div className="mt-5 flex items-center gap-3">
          {hasLiveDemo ? (
            <Link
              to={template.demoPath}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-surface-line bg-surface-raised px-4 py-2.5 font-sans text-xs font-semibold text-ivory transition-colors hover:border-brass/50"
            >
              <ExternalLink size={14} />
              Live Demo
            </Link>
          ) : (
            <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-full border border-surface-line bg-surface-raised/50 px-4 py-2.5 font-sans text-xs font-semibold text-muted">
              <ExternalLink size={14} />
              Live Demo
            </span>
          )}
          <a
            href="#contact"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-signature-gradient px-4 py-2.5 font-sans text-xs font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            <Sparkles size={14} />
            Use This Design
          </a>
        </div>
      </div>
    </motion.div>
  )
}
