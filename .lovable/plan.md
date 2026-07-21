# Edio MVP Redesign — Minimal Editorial Homepage

Rebuild the homepage into a spacious, premium, product-focused MVP inspired by the Luminous Labs reference. Keep Edio brand identity (logo, cream bg, navy text, soft blue accents), full bilingual EN/AR with correct RTL, and all utility controls (lang, currency, search, account, cart).

## Scope

Only four surfaces exist in this MVP: **Header, Hero, Category strip, Footer**. No animations, carousels, testimonials, filters, or extra sections.

## 1. Header (`src/components/site/Header.tsx`)

- Height 80–100px, sticky, cream/blur background, no border.
- **EN layout**: Logo left → centered nav → utilities right.
- **AR layout**: Logo right → centered nav → utilities left (natural RTL flip; scope `dir="rtl"` on the header wrapper when `lang="ar"`).
- Nav links (centered, plain text — no pills): Headphones, Speakers, Microphones, Audio Equipment, Brands. Add matching keys to `src/lib/i18n.tsx`.
- **Shop** button: outlined pill (1px navy border, transparent bg) — the only pill in the header.
- Utilities cluster: `LangToggle` (EN|AR minimal), `CurrencyToggle` (USD/IQD, simplified — no heavy blue bg), `FiSearch`, `FiUser`, `FiShoppingBag` with cart badge. Uniform 20px line icons, 40px hit targets, no hover pill fills.
- Remove excess blue backgrounds behind icons.

## 2. Hero (`src/components/hero/HeroCard.tsx`)

Single full-width editorial card directly below header.

- Max-width 1440px, desktop height 600–680px, radius 32–40px, soft single shadow.
- Full-bleed product image (reuse `edio-hero.png` for now) with a subtle left-side gradient overlay only where text sits — keep the product occupying most of the frame.
- Content block (aligned start in EN, end in AR), stacked with generous whitespace:
  - Small uppercase category label
  - Large headline, max 4 words
  - One short supporting sentence
  - Primary **Explore** button (solid navy) + secondary **Shop Audio** button (outlined navy)
- **Copy**
  - EN: "Curated Audio" / "Hear the Difference" / "Discover hand-picked audio gear for a clearer, richer experience." / "Explore" / "Shop Audio"
  - AR: "صوتيات مختارة" / "اسمع الفرق" / "اكتشف أجهزة صوتية مختارة بعناية لتجربة أوضح وأغنى." / "استكشف" / "تسوق الصوتيات"
- Delete the current mobile "Essential bundles"/teaser block entirely (already partly removed — verify gone).

## 3. Category strip (new `src/components/home/CategoryStrip.tsx`)

Below the hero. Simple horizontal row of 4 minimal category cards:

- Headphones · Speakers · Microphones · Audio Equipment
- Each: small icon (react-icons), category name, thin hairline separator or transparent card — no floating boxes, no badges.
- Grid: 4 cols desktop, 2 cols tablet, horizontal scroll on mobile (scrollbars already hidden globally).
- Placeholder `href="#"` links; no product data required for MVP.

## 4. Footer (`src/components/site/Footer.tsx`)

Keep existing minimal structure. Trim any residual clutter, ensure it uses only line icons + text. No changes to legal link list.

## 5. Responsive rules

- **Desktop (≥1024px)**: full nav visible, hero 600–680px.
- **Tablet (640–1023px)**: nav condenses (reduced gaps), hero ~480px, category strip 2-col.
- **Mobile (<640px)**: hamburger menu replaces center nav (drawer with the 5 nav links + Shop), utility cluster collapses to Search + Cart, hero stacks (text above image or overlaid on shorter image ~420px), category strip becomes horizontal snap-scroll.
- RTL verified on all three breakpoints — mirrored order, text alignment, and icon direction (`rtl:rotate-180` on arrows only).

## 6. Typography & tokens

- Continue using TT Neoris Pro (already wired) for Latin.
- Add **IBM Plex Sans Arabic** via `<link>` in `__root.tsx` head as the Arabic fallback until the Neoris Arabic cut is delivered. Update `--font-ar-main` in `src/styles.css` to prefer it. (Reverses the earlier full purge — user is now explicitly requesting an Arabic-compatible fallback.)
- 8px spacing scale, consistent radii (buttons 9999px, cards 32–40px), navy `#090A32` primary text.

## Files touched

- `src/components/site/Header.tsx` — rebuild
- `src/components/site/LangToggle.tsx` — visual simplification
- `src/components/site/CurrencyToggle.tsx` — remove heavy blue bg
- `src/components/hero/HeroCard.tsx` — rebuild editorial hero
- `src/components/home/CategoryStrip.tsx` — new
- `src/components/site/Footer.tsx` — light cleanup
- `src/routes/index.tsx` — render Header + Hero + CategoryStrip + Footer
- `src/routes/__root.tsx` — add IBM Plex Arabic `<link>`; add mobile nav drawer state if needed
- `src/lib/i18n.tsx` — new nav keys + hero copy
- `src/styles.css` — Arabic font var, spacing helpers if needed
- `mem://index.md` — record MVP scope + Arabic fallback decision

## Out of scope (MVP)

Animations, video, carousels, filters, testimonials, promo strips, product detail pages, cart drawer, checkout.