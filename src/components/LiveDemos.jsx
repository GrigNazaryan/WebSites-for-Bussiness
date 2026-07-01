import { templates } from '../data/templates'
import DemoCard from './DemoCard'

export default function LiveDemos() {
  return (
    <section id="templates" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-surface-line to-transparent" />
      <div className="section">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="eyebrow justify-center">See it before you commit</span>
          <h2 className="mt-4 font-display text-4xl font-medium text-ivory md:text-5xl">
            Live demo templates for <span className="text-gradient italic">your industry</span>
          </h2>
          <p className="mt-4 font-sans text-ivory-dim">
            Real, working layouts for 14 business categories. Find yours, picture your brand
            in it, and tell us which one to build.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t, i) => (
            <DemoCard key={t.id} template={t} index={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="font-sans text-sm text-ivory-dim">
            Don&rsquo;t see your industry? We design custom layouts for any business.
          </p>
          <a href="#contact" className="btn-secondary mt-5 inline-flex">
            Request a Custom Design
          </a>
        </div>
      </div>
    </section>
  )
}
