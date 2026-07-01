export const barbershop = {
  brand: 'FADE & CO.',
  tagline: 'Barbershop — Yerevan',
  phone: '+37493456789',
  phoneDisplay: '+374 93 456 789',
  whatsapp: '37493456789',
  instagram: 'https://instagram.com/fadeandco.yerevan',
  address: '27 Tumanyan Street, Yerevan, Armenia',
  hours: [
    { day: 'Mon – Fri', time: '10:00 – 21:00' },
    { day: 'Saturday', time: '10:00 – 20:00' },
    { day: 'Sunday', time: '12:00 – 18:00' },
  ],

  hero: {
    eyebrow: 'Walk-ins welcome · Booking preferred',
    headline: 'Precision cuts. No shortcuts.',
    sub: 'Skin fades, straight-razor shaves and beard sculpting from barbers who treat every chair like their own shop. Book online, or just walk through the door.',
  },

  services: [
    { name: 'Classic Haircut', price: '3,500֏', duration: '30 min', note: 'Scissor or clipper cut, wash & style' },
    { name: 'Skin Fade', price: '4,500֏', duration: '40 min', note: 'Precision fade, blended by hand' },
    { name: 'Beard Sculpt', price: '2,800֏', duration: '25 min', note: 'Shape, line-up, hot towel finish' },
    { name: 'Hot Towel Shave', price: '3,800֏', duration: '35 min', note: 'Straight razor, pre-shave oil' },
    { name: 'Cut + Beard Combo', price: '6,500֏', duration: '55 min', note: 'Full service, most booked' },
    { name: 'Kids Cut (Under 12)', price: '2,500֏', duration: '25 min', note: 'Patient barbers, quick and clean' },
  ],

  about: {
    heading: 'Six chairs. Zero compromise.',
    body: 'Fade & Co. opened in 2019 with one rule: every barber trains for a full year before touching a paying client\u2019s hairline. That standard hasn\u2019t moved. We\u2019ve grown to six chairs and a loyal client list that books the same barber, same day, every few weeks — because consistency is the whole business.',
    stats: [
      { value: '6', label: 'Barber chairs' },
      { value: '5,000+', label: 'Cuts a year' },
      { value: '2019', label: 'Est.' },
      { value: '4.8', label: 'Average rating' },
    ],
    barbers: [
      { name: 'Vahe', role: 'Master Barber, 11 yrs' },
      { name: 'Narek', role: 'Fades & Design, 6 yrs' },
      { name: 'Aram', role: 'Classic Cuts & Shaves, 8 yrs' },
    ],
  },

  testimonials: [
    { name: 'Gevorg A.', quote: 'Been going to Vahe for three years. Never once had a bad fade. Book a week ahead on Saturdays.', rating: 5 },
    { name: 'Hakob T.', quote: 'The hot towel shave is genuinely relaxing, not just a gimmick. Worth every dram.', rating: 5 },
    { name: 'Robert S.', quote: 'Only barbershop in Yerevan where every single barber is actually good — not just one guy.', rating: 5 },
  ],
}
