## Goal
Replace the current 4-tile `CategoryStrip` with a minimal 2-card MVP category section: **سماعات الرأس** and **الميكروفونات**, each with a transparent product image on the opposite side of the Arabic title.

## Assets
Register both uploads as Lovable CDN assets (kept out of the repo binary):
- `src/assets/cat-headphones.png.asset.json` ← `user-uploads://image_155.png`
- `src/assets/cat-microphone.png.asset.json` ← `user-uploads://image_154.png`

## Component: `src/components/home/CategoryCards.tsx` (new)
- RTL section, container `max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24`.
- Grid: `grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8` (stack on mobile, one row on desktop).
- Each card is an `<a href="#headphones">` / `href="#microphones">` (real category routes come later), equal size:
  - `bg-white`, `border border-edio-sky/40`, `rounded-[28px]`, `min-h-[280px] lg:min-h-[340px]`.
  - Two-column inner grid `grid-cols-[minmax(0,1fr)_minmax(0,1fr)]` — strict protected zones so image never overlaps title.
  - Text zone (right in RTL): Arabic title only, TT Neoris Pro, weight 600, `text-3xl lg:text-5xl`, `text-edio-navy`, vertically centered, generous padding.
  - Image zone (left in RTL): transparent PNG, `object-contain`, fills its half with inner padding so nothing is cropped.
- Hover: subtle lift (`hover:-translate-y-0.5 transition`), border darkens slightly. No badges, no subtitle, no CTA text.

## Wiring
- Remove `CategoryStrip` import + usage in `src/routes/index.tsx`, render `<CategoryCards />` instead.
- Delete `src/components/home/CategoryStrip.tsx` (superseded).

## Constraints honored
- Only two cards, titles only — no promo copy, subtitles, badges, or "more details".
- RTL layout via `dir="rtl"` on the section; logical padding.
- Palette limited to cream/white/soft-blue/navy tokens already in `src/styles.css`.
- Uses the locally registered TT Neoris Pro (no Google/CDN fonts added).
- Fully responsive: 2-up desktop, stacked mobile, image and title never collide.

## Out of scope
Real category routes/data, hover animations beyond a subtle lift, additional categories.