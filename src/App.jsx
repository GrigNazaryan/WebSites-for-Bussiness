import { Routes, Route } from 'react-router-dom'
import TemplateSelector from './pages/TemplateSelector'
import AgencyHome from './pages/AgencyHome'
import RestaurantTemplate from './templates/restaurant/RestaurantTemplate'
import BarbershopTemplate from './templates/barbershop/BarbershopTemplate'
import CarServiceTemplate from './templates/carservice/CarServiceTemplate'
import RealEstateTemplate from './templates/realestate/RealEstateTemplate'
import ScrollToTop from './components/shared/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Template gallery — the entry point for browsing all 4 demo templates */}
        <Route path="/" element={<TemplateSelector />} />

        {/* Main agency marketing site (the original landing page) */}
        <Route path="/agency" element={<AgencyHome />} />

        {/* Live business templates, one route per industry */}
        <Route path="/restaurant" element={<RestaurantTemplate />} />
        <Route path="/barbershop" element={<BarbershopTemplate />} />
        <Route path="/car-service" element={<CarServiceTemplate />} />
        <Route path="/real-estate" element={<RealEstateTemplate />} />
      </Routes>
    </>
  )
}
