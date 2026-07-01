export const carService = {
  brand: 'TorqueLine',
  tagline: 'Auto Service & Diagnostics',
  phone: '+37477987654',
  phoneDisplay: '+374 77 987 654',
  whatsapp: '37477987654',
  instagram: 'https://instagram.com/torqueline.yerevan',
  address: '58 Admiral Isakov Avenue, Yerevan, Armenia',
  hours: [
    { day: 'Mon – Sat', time: '09:00 – 19:00' },
    { day: 'Sunday', time: 'Closed' },
  ],

  hero: {
    eyebrow: 'Certified diagnostics · All makes & models',
    headline: 'Your car, actually fixed the first time.',
    sub: 'Full diagnostics, transparent pricing, and a written report before we touch a bolt. TorqueLine has been keeping Yerevan on the road since 2014.',
    stats: [
      { value: '11', label: 'Years in service' },
      { value: '18,000+', label: 'Cars serviced' },
      { value: '45 min', label: 'Avg. diagnostic time' },
    ],
  },

  services: [
    { name: 'Full Diagnostics', price: '8,000֏', note: 'Computer scan across all systems, written report' },
    { name: 'Oil & Filter Change', price: '12,000֏', note: 'Synthetic oil, filter, 21-point inspection' },
    { name: 'Brake Service', price: 'from 15,000֏', note: 'Pads, discs, fluid — front or rear' },
    { name: 'Suspension & Steering', price: 'from 20,000֏', note: 'Shocks, struts, alignment check' },
    { name: 'AC Service & Recharge', price: '10,000֏', note: 'Leak check, recharge, cabin filter' },
    { name: 'Tire Fitting & Balancing', price: 'from 3,000֏/tire', note: 'Seasonal changeover, balancing included' },
  ],

  about: {
    heading: 'Every job, documented and explained.',
    body: 'TorqueLine was founded by two mechanics who were tired of shops that upsold work customers didn\u2019t need. Every diagnostic comes with a written report and photos before any repair starts — you approve the work, we do exactly that, nothing more. Our bay is certified for European, Japanese and Korean vehicles, with OEM-level diagnostic equipment.',
    certifications: ['Bosch Certified Diagnostics', 'ASE-equivalent Trained Techs', 'OEM-level Scan Tools'],
  },

  testimonials: [
    { name: 'Vardan M.', quote: 'First shop that showed me the actual worn part instead of just telling me. Fixed the real issue, not the expensive guess.', rating: 5 },
    { name: 'Anahit G.', quote: 'Quoted 15,000, charged exactly 15,000. In this city that alone earns loyalty.', rating: 5 },
    { name: 'Tigran V.', quote: 'Same-day brake job, picked up by 6pm. Clear explanation of what was replaced and why.', rating: 5 },
  ],
}
