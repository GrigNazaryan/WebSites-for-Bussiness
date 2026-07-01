import RealEstateNav from './Nav'
import RealEstateHero from './Hero'
import RealEstateListings from './Services'
import RealEstateAbout from './About'
import RealEstateTestimonials from './Testimonials'
import RealEstateContact from './Contact'
import FloatingCTA from '../../components/shared/FloatingCTA'
import BackToGallery from '../../components/shared/BackToGallery'
import { realEstate as re } from './data'

export default function RealEstateTemplate() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] font-sans">
      <BackToGallery light />
      <RealEstateNav />
      <main>
        <RealEstateHero />
        <RealEstateListings />
        <RealEstateAbout />
        <RealEstateTestimonials />
        <RealEstateContact />
      </main>

      <footer className="border-t border-[#E7E2D8] bg-[#FBF9F4] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p className="font-display text-[#1B2A41]">{re.brand}</p>
          <p className="font-mono text-xs text-[#8A8F98]">© {new Date().getFullYear()} {re.brand}. All rights reserved.</p>
        </div>
      </footer>

      <FloatingCTA whatsapp={re.whatsapp} phone={re.phone} instagram={re.instagram} />
    </div>
  )
}
