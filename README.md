# The Dermatology Diary

Website for Dr. KM Hlophe's dermatology practice, built with Next.js (App
Router) and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx      # fonts, metadata, root HTML shell
  page.tsx         # assembles the homepage sections
  globals.css      # Tailwind + a few global rules
components/
  Nav.tsx
  Hero.tsx
  CredentialStrip.tsx
  About.tsx
  Services.tsx
  Booking.tsx
  Locations.tsx
  Footer.tsx
```

Everything is one page today, linked by in-page anchors (`#about`,
`#services`, `#bookings`, `#locations`). If you later want real
sub-pages (e.g. a blog), each becomes a new folder under `app/`.

## Editing content

- **Text & prices**: edit directly inside the matching component in
  `components/`.
- **Images**: currently pulled from your Supabase storage bucket
  (`branding/Dr K Hlope.jpg` in the hero, `branding/Dr Hlope Facebook.jpg`
  in the About section). To swap them, either replace those files in
  Supabase, or change the `src` in `components/Hero.tsx` /
  `components/About.tsx`. To use local images instead, drop them in
  `public/` and reference them as `src="/your-file.jpg"`.
- **Colors/fonts**: edit `tailwind.config.ts` (the `gold`, `ink`, `ivory`
  tokens) and `app/layout.tsx` (Google Fonts: Fraunces + Manrope).
- **Social links**: `components/Footer.tsx` — the Facebook/Instagram
  `href="#"` placeholders need your real page URLs.
- **Maps**: `components/Locations.tsx` embeds Google Maps by address
  text (no API key needed). If an address ever changes, edit the
  `query` field for that location.

## Deploying

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub
   repo.
2. Framework preset: Vercel auto-detects **Next.js** — no config needed.
3. Click **Deploy**. Every push to `main` redeploys automatically.

### Custom domain

In the Vercel project → **Settings → Domains**, add
`thedermatologydiary.com` and follow the DNS instructions Vercel gives
you (usually an `A` record or `CNAME` at your domain registrar).

## Notes

- Images are loaded from your existing Supabase bucket via
  `next/image`, with that host allow-listed in `next.config.mjs`.
- The site is a single responsive page — resize the browser or check
  it on your phone to see the mobile layout.
