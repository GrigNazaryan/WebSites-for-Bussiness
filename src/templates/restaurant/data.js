export const restaurant = {
  brand: 'Lavash & Vine',
  tagline: 'Modern Armenian Bistro',
  phone: '+37455123456',
  phoneDisplay: '+374 55 123 456',
  whatsapp: '37455123456',
  instagram: 'https://instagram.com/lavashandvine',
  address: '14 Saryan Street, Yerevan, Armenia',
  hours: [
    { day: 'Mon – Thu', time: '11:00 – 23:00' },
    { day: 'Fri – Sat', time: '11:00 – 01:00' },
    { day: 'Sunday', time: '12:00 – 22:00' },
  ],

  hero: {
    eyebrow: 'Est. 2016 · Saryan Street, Yerevan',
    headline: 'Armenian tradition, plated for tonight.',
    sub: 'Wood-fired grill, seasonal wine, and a dining room built for long evenings with people you like. Book a table or walk in — we always keep a few seats open.',
    rating: '4.9',
    reviews: '412',
  },

  menu: [
    {
      category: 'Starters',
      items: [
        { name: 'Smoked Eggplant & Walnut', price: '2,800֏', note: 'Charred eggplant, walnut tarator, pomegranate' },
        { name: 'Jingalov Hats', price: '2,400֏', note: 'Herb-stuffed flatbread, 12 wild greens' },
        { name: 'Lavash & Cheese Board', price: '3,600֏', note: 'Chanakh, motal, string cheese, herb butter' },
      ],
    },
    {
      category: 'From the Grill',
      items: [
        { name: 'Khorovats Trio', price: '7,900֏', note: 'Pork, lamb, chicken, grilled vegetables' },
        { name: 'Lula Kebab', price: '5,200֏', note: 'Hand-minced beef & lamb, sumac onions' },
        { name: 'Trout in Grape Leaves', price: '6,400֏', note: 'Sevan trout, tarragon, lemon' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Gata & Honey Ice Cream', price: '2,100֏', note: 'Warm sweet bread, wild honey' },
        { name: 'Pakhlava', price: '1,900֏', note: 'Walnut, rose water syrup' },
      ],
    },
  ],

  about: {
    heading: 'A kitchen run on memory, not trend.',
    body: 'Lavash & Vine started as a single grill on a side street in Kentron. Nine years later, the grill is still the heart of the kitchen — every dish traces back to a family recipe, reworked just enough for a modern table. We buy from the same three farms every week, age our own cheese, and pour wine from six small Armenian producers you won\u2019t find in a supermarket.',
    quote: '\u201cWe don\u2019t chase trends. We just cook the way my grandmother taught me — properly, and for people, not for photos.\u201d',
    quoteAuthor: 'Armen Ghukasyan, Head Chef & Owner',
    stats: [
      { value: '9', label: 'Years open' },
      { value: '120', label: 'Covers a night' },
      { value: '6', label: 'Local wine producers' },
      { value: '4.9', label: 'Average rating' },
    ],
  },

  testimonials: [
    {
      name: 'Sona M.',
      role: 'Google Review',
      quote: 'The khorovats trio is worth the trip alone. Service is warm without hovering, and the wine list actually has depth.',
      rating: 5,
    },
    {
      name: 'James H.',
      role: 'Visiting from London',
      quote: 'Best meal we had in Yerevan by a wide margin. Booked back-to-back nights on the same trip.',
      rating: 5,
    },
    {
      name: 'Nare K.',
      role: 'Regular guest',
      quote: 'Our family\u2019s default spot for every celebration since 2019. Consistent, every single time.',
      rating: 5,
    },
  ],
}
