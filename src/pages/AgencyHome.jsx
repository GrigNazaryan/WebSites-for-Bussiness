import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyWebsite from '../components/WhyWebsite'
import Services from '../components/Services'
import Process from '../components/Process'
import LiveDemos from '../components/LiveDemos'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingContacts from '../components/FloatingContacts'

export default function AgencyHome() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">
      <Navbar />
      <main>
        <Hero />
        <WhyWebsite />
        <Services />
        <Process />
        <LiveDemos />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingContacts />
    </div>
  )
}
