import { MessageCircle, Send, Instagram, Mail } from 'lucide-react'

const social = [
  { icon: MessageCircle, href: 'https://wa.me/37477123456', label: 'WhatsApp' },
  { icon: Send, href: 'https://t.me/yerevanwebstudio', label: 'Telegram' },
  { icon: Instagram, href: 'https://instagram.com/yerevanwebstudio', label: 'Instagram' },
  { icon: Mail, href: 'mailto:hello@yerevanwebstudio.com', label: 'Email' },
]

const columns = [
  {
    title: 'Studio',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Templates',
    links: [
      { label: 'Restaurant & Cafe', href: '#templates' },
      { label: 'Clinics & Salons', href: '#templates' },
      { label: 'Hotels', href: '#templates' },
      { label: 'Online Stores', href: '#templates' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-surface-line">
      <div className="section py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-medium text-ivory">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signature-gradient text-sm font-bold text-ink">Y</span>
              Yerevan Web Studio
            </a>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-ivory-dim">
              Premium, conversion-focused websites for small and medium businesses in Yerevan, Armenia.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-line text-ivory-dim transition-colors hover:border-brass/50 hover:text-brass"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="font-sans text-sm text-ivory-dim transition-colors hover:text-brass">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface-line pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Yerevan Web Studio. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">Designed & built in Yerevan, Armenia 🇦🇲</p>
        </div>
      </div>
    </footer>
  )
}
