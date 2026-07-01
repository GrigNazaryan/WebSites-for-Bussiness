import { motion } from 'framer-motion'
import { CalendarCheck, FileSearch } from 'lucide-react'
import Container from '../../components/shared/Container'
import { carService as c } from './data'

export default function CarServiceHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#F5F6F8] pb-20 pt-40 md:pt-48">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#1E3A5F]/5 blur-3xl" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-md border border-[#1E3A5F]/15 bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-[#1E3A5F]">
            {c.hero.eyebrow}
          </span>

          <h1 className="mt-6 max-w-xl font-sans text-5xl font-bold leading-[1.08] text-[#12181F] sm:text-6xl">
            Your car, actually fixed <span className="text-[#FF6B35]">the first time.</span>
          </h1>

          <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-slate-600">{c.hero.sub}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF6B35] px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-lg shadow-[#FF6B35]/20 transition-transform hover:scale-[1.03]"
            >
              <CalendarCheck size={17} />
              Book a Slot
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-3.5 font-sans text-sm font-semibold text-[#12181F] transition-colors hover:border-[#1E3A5F]/40"
            >
              <FileSearch size={17} />
              See Pricing
            </a>
          </div>

          <div className="mt-11 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            {c.hero.stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-2xl font-bold text-[#1E3A5F]">{s.value}</p>
                <p className="mt-1 font-sans text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Signature visual: technical "diagnostic report" card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="font-mono text-xs uppercase tracking-wide text-slate-400">Diagnostic Report</span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-600">PASSED</span>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {[
              { label: 'Engine', status: 'OK' },
              { label: 'Brakes', status: 'OK' },
              { label: 'Suspension', status: 'Check soon' },
              { label: 'Battery', status: 'OK' },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between font-mono text-xs">
                <span className="text-slate-500">{row.label}</span>
                <span className={row.status === 'OK' ? 'text-emerald-600' : 'text-[#FF6B35]'}>{row.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-[#F5F6F8] p-3 font-mono text-[11px] text-slate-500">
            Full report sent to client before repair begins.
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
