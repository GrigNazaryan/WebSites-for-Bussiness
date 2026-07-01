import CarServiceNav from './Nav'
import CarServiceHero from './Hero'
import CarServiceServices from './Services'
import CarServiceAbout from './About'
import CarServiceTestimonials from './Testimonials'
import CarServiceContact from './Contact'
import FloatingCTA from '../../components/shared/FloatingCTA'
import BackToGallery from '../../components/shared/BackToGallery'
import { carService as c } from './data'

export default function CarServiceTemplate() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <BackToGallery light />
      <CarServiceNav />
      <main>
        <CarServiceHero />
        <CarServiceServices />
        <CarServiceAbout />
        <CarServiceTestimonials />
        <CarServiceContact />
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p className="font-sans text-sm font-bold text-[#12181F]">{c.brand}</p>
          <p className="font-mono text-xs text-slate-400">© {new Date().getFullYear()} {c.brand}. All rights reserved.</p>
        </div>
      </footer>

      <FloatingCTA whatsapp={c.whatsapp} phone={c.phone} instagram={c.instagram} />
    </div>
  )
}
