
## Scope

Only the hero landing on `/`. No product listing, no auth, no backend, no legal pages. Those come later per your roadmap.

## Language decision (flagging one conflict)

You said "don't add Arabic" for hero copy, and the nav labels you gave are English (Headphones / IEMs / DAC & AMPS / Deals). Memory currently locks Arabic-as-default. I will:

- Flip the default document to `<html lang="en" dir="ltr">` for now.
- Keep the AR/EN toggle wired; clicking AR switches to `lang="ar" dir="rtl"` and swaps the font stack via the existing `html[lang]` rules — no layout rewrites needed later.
- Update memory so Arabic-first is no longer a hard rule; it becomes "bilingual with EN default, AR fully supported."

If you actually want AR as the default and English only as a secondary toggle, say so and I'll flip it.

## Header

- Left: `<EdioLogo />` pill lockup (already built).
- Center: nav pill with 4 links — **Headphones · IEMs · DAC & AMPS · Deals**.
- Right: `EN / AR` toggle (visual only for now, updates `document.documentElement.lang` + `dir`) and a minimal cart icon (non-functional placeholder).
- Sticky, translucent cream background, rounded pill container, matches Luminous Labs header proportions.

## Hero card (the one big Luminous-Labs-style rounded block)

- Massive `rounded-[2.5rem]` card, cream page background, card interior uses a soft blue gradient consistent with Edio palette (not red like the reference — Edio is navy/blue).
- Left side (desktop) / top (mobile): short premium English copy. I'll write it with the best model in Edio's calm-guide voice. Draft direction (final in build):
  - Eyebrow: `Sound, guided.`
  - Headline (Saans-placeholder Switzer Medium, ~72px desktop / 40px mobile, tight tracking): `Find the sound that fits you.`
  - Sub (Switzer Regular, muted navy): `Edio helps you choose the right audio gear — no noise, no pressure.`
  - CTA: solid navy pill `Explore` + ghost pill `How it works`.
- Right side / bottom: the product-group photo you uploaded (silver/white gear on light-blue cubes) placed inside the card with generous padding, subtle drop shadow, no crop.
- All numbers/specs (if any tiny label appears) use `--font-technical` (IBM Plex Mono).

## Footer (minimal, this step only)

- Small centered row: Edio wordmark · © 2026 · Telegram (`t.me/edio_iq`) · Instagram (`instagram.com/edio.iq`).
- Placeholder line: "Legal pages coming soon" — real privacy/returns/terms land in a later step.

## Responsiveness (locked as a project rule)

- Mobile-first. Design and test at 375px first, then scale up.
- Hero stacks vertically on mobile; image sits below copy, still inside the rounded card, with reduced padding and radius (`rounded-[1.75rem]`).
- Nav collapses to a hamburger drawer under `md`.
- Type scales down via `clamp()` — no fixed pixel headings.
- Absolutely nothing that reads as "AI slop": no purple gradients, no generic hero blobs, no stock 3D shapes, no lorem-style filler, no default shadcn card look. Every surface uses Edio tokens.

## Memory updates in the same step

- `mem://index.md` Core: change "Arabic-first RTL" → "Bilingual (EN default, AR toggle with RTL). Mobile-first is mandatory. Never AI-slop aesthetics."
- `mem://design/edio-brand.md`: reflect language default flip + mobile-first + no-AI-slop rule.
- New `mem://features/nav-and-footer.md`: locks the 4 nav items and the two social URLs so later steps reuse them verbatim.

## Files touched (technical section)

- `src/routes/index.tsx` — replace placeholder with hero page composition.
- `src/routes/__root.tsx` — flip default `lang`/`dir` to `en`/`ltr`; wire a tiny client-side toggle.
- `src/components/site/Header.tsx` *(new)* — logo + nav pill + lang toggle.
- `src/components/site/Footer.tsx` *(new)* — minimal footer.
- `src/components/hero/HeroCard.tsx` *(new)* — the rounded hero block.
- `src/components/site/LangToggle.tsx` *(new)* — sets `documentElement.lang`/`dir`.
- Head metadata on `/`: unique title + description + og:title/description; og:image uses the uploaded product-group CDN URL (leaf route only).

## What I am NOT doing this step

- No product cards on the home page (the featured-products component stays unused until you send catalog data).
- No AR translations of the hero copy yet (toggle will show EN for both until you send AR strings).
- No cart, no auth, no checkout, no Swagger wiring.
- No legal pages, no full footer sitemap.

## What I still need from you eventually (not blocking hero)

- Arabic translations for nav + hero copy (for real AR toggle).
- Product catalog / Swagger.
- Final legal copy (or approval to generate standard Shopify-style pages).
- Confirmation on default language (EN vs AR).

Approve and I'll build the hero exactly to this spec.
