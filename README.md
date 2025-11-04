# Taormina – Lava Stone & Ceramics

A modern, artistic storefront site inspired by Sicilian maiolica. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Home hero with parallax background and scroll indicator
- Asymmetric photo collage with scroll-reveal
- Products gallery (justified rows) with hover captions and lightbox
- Contact page with WhatsApp button and React Hook Form validation
- Shared header/footer with Sicilian tile-inspired divider
- SEO metadata and LocalBusiness schema
- Accessible, mobile-first, and lightweight

## Tech

- Next.js 15 (app router) + React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- react-photo-album + yet-another-react-lightbox (dynamic import)
- React Hook Form

## Getting started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open http://localhost:3000

## Assets

Place the following images in `public/assets/images/`:

- hero_sicily.jpg — hero background
- collage_sea.jpg — sea view
- collage_couple.jpg — couple with scooter
- collage_car_window.jpg — woman in car
- tile_palette.jpg — palette reference (optional)

You can add product images later and update the `lib/data/products.ts` file with real dimensions and alt text in Italian and English.

## Update contact info

- Header logo text: `components/Header.tsx`
- Footer address + socials: `components/Footer.tsx`
- Contact page phone/email/WhatsApp: `app/contact/page.tsx`

## Add new products

Edit `lib/data/products.ts` and add entries:

```ts
{
  name: "Tavolo Etna Blu",
  slug: "tavolo-etna-blu",
  src: "/assets/images/tavolo-etna-blu.jpg",
  width: 1600,
  height: 1200,
  material: "Pietra lavica smaltata",
  alt_it: "Tavolo in pietra lavica smaltata blu",
  alt_en: "Blue glazed lava-stone table",
}
```

The gallery and lightbox will pick them up automatically.

## Deployment

- Vercel: push to a Git repo and import the project in Vercel.
- Netlify: use Next 15 adapter or Netlify Next plugin. For static export, consider `next export` (note: some features like lightbox still work client-side; API routes not used).

## Performance tips

- Use properly sized images and set accurate `width`/`height` in `products.ts`.
- Prefer `.webp` where possible.
- Lightbox is dynamically imported to keep the initial bundle small.

## Using a downloaded font (next/font/local)

1. Add your font files to `public/fonts/` (prefer `.woff2`). Example:

- `public/fonts/MyFont-Variable.woff2` (or regular/bold static files)

2. Use the provided template in `app/fonts.ts`:

- Edit the `src` paths to match your file names.
- It exports `localSerif` bound to the CSS var `--font-serif`.

3. Wire it in `app/layout.tsx`:

- Replace the Google serif with the local one by importing `localSerif` and applying its variable on `<html>`:
  - `className={`${localSerif.variable} ${inter.variable}`}`

4. Tailwind mapping is already set in `tailwind.config.ts`:

- `font-serif` resolves to `var(--font-serif)`. Use `className="font-serif"` to apply.

Tips

- Keep `display: "swap"` for better perceived performance.
- Include sensible fallbacks and verify license terms for the font.

## License

Proprietary for client use.
