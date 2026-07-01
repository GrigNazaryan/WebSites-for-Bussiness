import RestaurantNav from './Nav'
import RestaurantHero from './Hero'
import RestaurantMenu from './Services'
import RestaurantAbout from './About'
import RestaurantTestimonials from './Testimonials'
import RestaurantContact from './Contact'
import FloatingCTA from '../../components/shared/FloatingCTA'
import BackToGallery from '../../components/shared/BackToGallery'
import { restaurant as r } from './data'

export default function RestaurantTemplate() {
  return (
    <div className="min-h-screen bg-[#14100D] font-sans">
      <BackToGallery />
      <RestaurantNav />
      <main>
        <RestaurantHero />
        <RestaurantMenu />
        <RestaurantAbout />
        <RestaurantTestimonials />
        <RestaurantContact />
      </main>

      <footer className="border-t border-white/5 bg-[#14100D] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p className="font-display italic text-[#F3E9DC]">{r.brand}</p>
          <p className="font-mono text-xs text-[#8B8377]">© {new Date().getFullYear()} {r.brand}. All rights reserved.</p>
        </div>
      </footer>

      <FloatingCTA whatsapp={r.whatsapp} phone={r.phone} instagram={r.instagram} />
    </div>
  )
}
