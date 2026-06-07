# Odd Ritual Golf — Replica

A React + Vite replica of the [oddritualgolf.com](https://oddritualgolf.com) homepage. Built from the screenshots and the live HTML structure.

## What's included

- Vite + React 18 setup
- Single-page replica of the homepage with these sections:
  - Fixed header with logo + menu + nav
  - Full-viewport hero slider (3 slides, click numbers to switch)
  - About / brand statement
  - Featured products carousel (with hover image swap)
  - Three feature blocks (Our Products / Our Story / Our Community)
  - "Designed and made locally" section
  - Image gallery with prev/next
  - "More Than Just Golf" + Giving Back text
  - Community partners
  - Multi-column footer

All product images and gallery photos are loaded directly from Odd Ritual's Shopify CDN, so they match the live site.

## Getting started

```bash
# install deps
npm install

# start the dev server (default: http://localhost:5173)
npm run dev

# production build
npm run build

# preview the production build
npm run preview
```

## Project structure

```
odd-ritual-clone/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                # global styles, CSS variables, font loading
    └── components/
        ├── Header.jsx + .css
        ├── Hero.jsx + .css
        ├── About.jsx + .css
        ├── FeaturedProducts.jsx + .css
        ├── ThreeSections.jsx + .css
        ├── MadeLocally.jsx + .css
        ├── Gallery.jsx + .css
        ├── MoreThanGolf.jsx + .css
        ├── Community.jsx + .css
        └── Footer.jsx + .css
```

## Notes on fidelity

- **Font**: The original uses `PpNeueMontrealVariable`. The CSS pulls it directly from the original site's CDN. If that ever 403s, swap to a similar Google Font (try `Manrope` or `Inter Tight`).
- **Display serif**: For the "MORE THAN JUST GOLF" header and italic numbers, the design uses a contrasty editorial serif. This project uses `Cormorant Garamond` from Google Fonts as a stand-in — for a closer match you can buy/license `PP Editorial New` from Pangram Pangram.
- **Logos / monograms / bird**: Recreated as inline SVGs since the originals are proprietary artwork. They're structurally similar but won't be pixel-identical to the bespoke marks.
- **Mix-blend-mode header**: The original navigation uses `mix-blend-mode: difference` so it flips between black and white over imagery. That's preserved here.
- **Smooth scroll, hover image swap, slider state**: All implemented with React state + CSS transitions. No external animation libs.

## URL note

The URL you originally provided was `https://oddritualgolf.com/collections/all` (product grid), but the screenshots are from the homepage. This project replicates the **homepage**. If you want the `/collections/all` grid page instead, let me know and I can scaffold that as a route.
