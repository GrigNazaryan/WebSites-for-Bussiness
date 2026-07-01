# Yerevan Web Studio — Multi-Template Business System

A production-ready React application containing:

1. **The main agency marketing site** (`/agency`) — sells web design services.
2. **A template gallery** (`/`) — lets prospects browse 4 live, fully-built demo websites.
3. **Four complete, independent business website templates**, each a real working site:
   - `/restaurant` — **Lavash & Vine**, a modern Armenian bistro
   - `/barbershop` — **Fade & Co.**, a barbershop
   - `/car-service` — **TorqueLine**, an auto service shop
   - `/real-estate` — **Meridian Properties**, a real estate agency

Built with **React + Vite + Tailwind CSS + Framer Motion + Lucide Icons + React Router**.

---

## 1. Why 4 different visual identities

Each template is deliberately built as its own design system — different palette, typography treatment, layout rhythm and interaction style — so it reads as four different real businesses, not one theme re-skinned four times.

| Template | Mode | Palette | Typographic voice | Layout signature |
|---|---|---|---|---|
| Restaurant (Lavash & Vine) | Dark | Charcoal `#14100D` · Burgundy `#6B1E23` · Gold `#C9A24B` | Italic serif (Fraunces), warm & editorial | Full-bleed hero glow, menu columns |
| Barbershop (Fade & Co.) | Dark | Black `#0A0A0A` · Amber `#F5A623` | Black-weight uppercase sans, zero border-radius | Diagonal stripe texture, hard-edged grid |
| Car Service (TorqueLine) | Light | Off-white `#F5F6F8` · Steel blue `#1E3A5F` · Safety orange `#FF6B35` | Monospace data accents | "Diagnostic report" card, flat-rate service grid |
| Real Estate (Meridian) | Light | Cream `#FBF9F4` · Navy `#1B2A41` · Champagne gold `#B08D57` | Serif display, generous tracking | Editorial listing spread, wide whitespace |

Every template still includes the same required sections — **Hero, Services, About, Testimonials, Contact, floating WhatsApp/Call/Instagram CTAs** — just expressed in a completely different visual language, and with realistic, business-specific copy (menus, service pricing, real Yerevan addresses, named team members, etc.) instead of lorem ipsum.

---

## 2. Routing

Routing is handled by **React Router v6**, set up in `src/main.jsx` (`<BrowserRouter>`) and `src/App.jsx` (`<Routes>`):

```
/              → Template Selector (grid of 4 template cards)
/agency        → Main agency marketing site (the original landing page)
/restaurant    → Lavash & Vine (Restaurant / Cafe template)
/barbershop    → Fade & Co. (Barbershop / Beauty Salon template)
/car-service   → TorqueLine (Car Service / Automotive template)
/real-estate   → Meridian Properties (Real Estate template)
```

Every demo page has a floating **"All Templates"** pill (top-left) to jump back to the gallery, and the agency navbar has a **"Templates"** link. `ScrollToTop.jsx` resets scroll position on every route change so navigation always lands at the top of the new page.

---

## 3. Full project structure

```
agency-site/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/favicon.svg
└── src/
    ├── main.jsx                     # Mounts <BrowserRouter><App /></BrowserRouter>
    ├── App.jsx                      # <Routes> definition — all 6 routes
    ├── index.css                    # Global tokens, .btn-primary, .input, etc.
    │
    ├── pages/
    │   ├── TemplateSelector.jsx     # "/" — grid of 4 template cards
    │   └── AgencyHome.jsx           # "/agency" — the original agency landing page
    │
    ├── templates/                   # ⭐ The 4 independent business templates
    │   ├── restaurant/
    │   │   ├── RestaurantTemplate.jsx   # Page root — assembles all sections
    │   │   ├── Nav.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Services.jsx             # "Menu Highlights"
    │   │   ├── About.jsx
    │   │   ├── Testimonials.jsx
    │   │   ├── Contact.jsx              # Includes reservation form
    │   │   └── data.js                  # ALL copy for this template lives here
    │   ├── barbershop/     (same file pattern)
    │   ├── carservice/     (same file pattern)
    │   └── realestate/     (same file pattern; Services.jsx renders property listings)
    │
    ├── components/
    │   ├── shared/                  # ⭐ Reused across every template
    │   │   ├── Container.jsx        # Max-width layout wrapper
    │   │   ├── FloatingCTA.jsx      # Configurable WhatsApp / Call / Instagram buttons
    │   │   ├── BackToGallery.jsx    # "All Templates" pill shown on every demo page
    │   │   └── ScrollToTop.jsx      # Resets scroll on route change
    │   │
    │   └── (Navbar, Hero, Services, Pricing, FAQ, Contact, etc.)
    │       — components used only by the main agency site (AgencyHome.jsx)
    │
    └── data/                        # Copy for the main agency site only
        ├── templates.js             # The 14-category showcase — 4 of them now link
        │                             to real live routes via a `demoPath` field
        ├── services.js, pricing.js, faq.js, testimonials.js, portfolio.js, process.js, reasons.js
```

**Design principle:** every template is self-contained inside its own folder — its own `Nav`, `Hero`, `Services`, `About`, `Testimonials`, `Contact` and `data.js`. Nothing in `templates/restaurant/` imports from `templates/barbershop/`. The only things templates share are the utility layer in `components/shared/` (container, floating CTA, back-to-gallery, scroll reset) — so adding a 5th template never risks breaking the other four.

---

## 4. How to run the project

Requires Node.js 18+.

```bash
cd agency-site
npm install
npm run dev        # http://localhost:5173

npm run build       # production build → dist/
npm run preview     # preview the production build locally
```

Once running, visit:
- `http://localhost:5173/` for the template gallery
- `http://localhost:5173/agency` for the agency marketing site
- `http://localhost:5173/restaurant`, `/barbershop`, `/car-service`, `/real-estate` for each live demo

---

## 5. Deploying to Vercel

**Option A — via the Vercel dashboard**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Vercel, click **Add New → Project** and import the repo.
3. Framework preset: Vercel auto-detects **Vite** — leave build command as `npm run build` and output directory as `dist`.
4. Click **Deploy**.

**Option B — via the Vercel CLI**
```bash
npm install -g vercel
cd agency-site
vercel          # first deploy, follow the prompts
vercel --prod   # subsequent production deploys
```

**Important — client-side routing on Vercel:** since this app uses React Router with real paths (`/restaurant`, `/car-service`, etc.), direct visits or refreshes on those URLs need to be rewritten to `index.html`. Add a `vercel.json` in the project root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Without this, refreshing `/restaurant` directly (instead of navigating there from `/`) will 404 on Vercel's static hosting.

---

## 6. Replacing demo content with a real client's content

Each template's **entire copy lives in its `data.js` file** — brand name, tagline, phone, WhatsApp/Instagram links, address, hours, services/menu/listings, about text, stats, and testimonials. To turn a demo into a real client site:

1. Open `src/templates/<template>/data.js` and replace every field with the client's real information.
2. Update the **floating CTA numbers** — they're read directly from `data.js` (`whatsapp`, `phone`, `instagram`), so step 1 already handles this.
3. Wire the **contact form** — each `Contact.jsx` currently shows a local "submitted" confirmation state (see the `handleSubmit` function). Connect it to a real backend: [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), [EmailJS](https://www.emailjs.com), or your own API route.
4. Swap the stylized gradient "photo" panels (in `Hero.jsx`, listing cards, etc.) for real client photography once available — keep the same wrapping element/rounded corners for visual consistency.
5. If the client wants a different accent color, it's usually 2–4 hex values used consistently across that one template folder (search the folder for the hex codes listed in the table above).

---

## 7. Duplicating a template for a new customer (under 10 minutes)

1. **Copy the closest-matching template folder**, e.g. `cp -r src/templates/restaurant src/templates/new-client`.
2. **Rename the data export** in `new-client/data.js` (e.g. `restaurant` → `newClient`) and update every import inside the copied files to match.
3. **Add a route** in `App.jsx`:
   ```jsx
   import NewClientTemplate from './templates/new-client/NewClientTemplate'
   // ...
   <Route path="/new-client" element={<NewClientTemplate />} />
   ```
4. **Replace all content** in `data.js` with the real client's business info (see Section 6).
5. **Re-theme** by find-and-replacing the 2–3 accent hex codes used throughout that folder — everything else (spacing, animation, structure) stays untouched.
6. **Add a card** to `src/pages/TemplateSelector.jsx`'s `templates` array so the new template is browsable from the gallery.
7. **Deploy** — push and let Vercel redeploy automatically.

Because content, theme colors and routing are each isolated to a single small edit, this reliably takes under 10 minutes once you've done it once.

---

## 8. Notes on production readiness

- All animations respect `prefers-reduced-motion` (see `index.css`).
- Keyboard focus states are visible site-wide.
- Every template is fully responsive from small phones to ultra-wide desktops.
- No external UI libraries beyond Tailwind, Framer Motion and Lucide — lightweight and fast.
- SEO meta tags live in `index.html`; for multi-page SEO per template, consider adding `react-helmet-async` to set a unique `<title>`/meta description per route.
