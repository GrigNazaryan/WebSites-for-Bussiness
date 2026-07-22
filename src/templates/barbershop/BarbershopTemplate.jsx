import BarbershopNav from './Nav'
import BarbershopHero from './Hero'
import BarbershopServices from './Services'
import BarbershopAbout from './About'
import BarbershopTestimonials from './Testimonials'
import BarbershopContact from './Contact'
import FloatingCTA from '../../components/shared/FloatingCTA'
import BackToGallery from '../../components/shared/BackToGallery'
import { barbershop as b } from './data'

export default function BarbershopTemplate() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans">
      <BackToGallery />
      <BarbershopNav />
      <main>
        <BarbershopHero />
        <BarbershopServices />
        <BarbershopAbout />
        <BarbershopTestimonials />
        <BarbershopContact />
      </main>

      <footer className="border-t border-white/10 bg-[#0A0A0A] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p className="font-sans text-sm font-black uppercase tracking-tight text-white">{b.brand}</p>
          <p className="font-mono text-xs text-white/40">© {new Date().getFullYear()} {b.brand}. All rights reserved.</p>
        </div>
      </footer>

      <FloatingCTA whatsapp={b.whatsapp} phone={b.phone} instagram={b.instagram} />
    </div>
  )
}
