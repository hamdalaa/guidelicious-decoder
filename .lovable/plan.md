# Edio — Corrective Redesign Pass

Scope: fix what's wrong in the current build. No new features, no new sections. Preserve i18n, currency, cart, search, account, routes.

## 1. Fonts — TT Neoris Pro only (local)

- Upload the new zip's `.woff2` weights (Regular 400, Medium 500, DemiBold 600, Bold 700, plus Light 300 for large display) as Lovable Assets. Reuse the existing pointers where the file is identical.
- In `src/styles.css`:
  - Remove `IBM Plex Sans Arabic` `@import` and any Google Fonts / external URL.
  - Keep only `@font-face` blocks pointing at the uploaded CDN URLs.
  - Set `--font-en-main` and `--font-ar-main` both to `"TT Neoris Pro", system-ui, sans-serif` (Latin glyphs for Latin, system Arabic fallback for Arabic since Neoris has no Arabic — this is the only compliant path given "use only uploaded fonts"; noted explicitly so we don't re-add IBM Plex).
- In `src/routes/__root.tsx`: delete the `fonts.googleapis.com` `preconnect` + stylesheet `<link>` entries.
- Apply globally via `body { font-family: var(--font-en-main); }` and `html[lang="ar"] body { font-family: var(--font-ar-main); }`. Force inheritance on `button, input, select, textarea`.

## 2. RTL — dynamic and real

- `src/lib/i18n.tsx`: set `document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"` (currently locked to `ltr`). Remove per-component `dir={dir}` overrides on `<header>`, `<main>`, `<footer>`, `HeroCard`, `CategoryStrip`, drawer.
- Remove manual reversers: `flex-row-reverse`, `justify-end`/`text-end` gated on `isAr`, `start-0`/`end-0` swaps in the drawer, `ms-auto` in hero, gradient side swap in hero.
- Replace physical Tailwind classes with logical ones project-wide in edited files: `ml/mr → ms/me`, `left/right → start/end`, `text-left/right → text-start/end`, `pl/pr → ps/pe`, `border-l/r → border-s/e`. Rely on native RTL flow from `dir="rtl"` on `<html>`.
- Icons: only flip directional ones (arrow CTA in hero) via `[dir="rtl"] .rtl-flip { transform: scaleX(-1); }`. Leave search/cart/user/menu/chevron untouched.

## 3. Language + currency utility group

- `LangToggle`: compact text switch `EN · AR` (middot separator, no slash, no underline). Active = `text-edio-navy font-semibold`, inactive = `text-edio-navy/40`. Same height as neighboring icon buttons (36px). Remove `dir="ltr"` lock.
- `CurrencyToggle`: trigger shows `USD ⌄` in the same 36px height. Dropdown: white bg, `rounded-xl`, subtle border `border-edio-navy/10`, soft shadow (no dark navy fill). Rows show `USD  $` and `IQD  د.ع` with active row `bg-edio-sky/30 text-edio-navy`. Aligns to trigger via logical `inset-inline-end: 0`. Opens downward; flips upward if within 200px of viewport bottom.
- Both live in one right-side cluster with consistent 12px gap and matching hover states.

## 4. Desktop header

- Structure stays `[logo | nav | utilities]` with `grid-cols-[auto_1fr_auto]`.
- Remove `bg-edio-cream/85 backdrop-blur-md`; use plain transparent header, thin bottom hairline `border-b border-edio-navy/8` only after scroll (skip scroll listener — just always subtle).
- Height: 72px (mobile) / 88px (desktop).
- Nav: 5 links + outlined Shop pill unchanged, tighter gap-7, weight 500, color `text-edio-navy/75`, hover `text-edio-navy`.
- Utilities order: Lang, Currency, Search, Account, Cart. Icon buttons 36px, `rounded-full`, hover `bg-edio-navy/5`.

## 5. Mobile header + drawer

- Mobile header: logo (start), hamburger + cart (end). Hide Lang/Currency/Search/Account from the top bar entirely; they live in the drawer.
- Drawer: full-height sheet, `bg-edio-cream` (opaque, not translucent), enters from the inline-end side (natural via `inset-inline-end: 0` + translate). Backdrop `bg-edio-navy/40`.
- On open: `document.body.style.overflow = "hidden"`; restore on close/unmount.
- Contents (top → bottom): close button (end-aligned), nav links (18px, generous 16px vertical padding), Shop pill full-width, divider, then Lang switch and Currency switch as two clear rows near the bottom, then socials.
- No hero visible behind — backdrop is opaque enough and the drawer covers full viewport height.

## 6. Hero — mobile fix + desktop simplification

- Single component `HeroCard`, one rounded card (`rounded-[28px]` mobile / `rounded-[40px]` desktop). Removed all secondary panels/teasers.
- Layout:
  - Desktop (≥1024px): 2-col grid inside the card — text (start) / product image (end). Card min-height 560px. Overlay only behind text via a soft cream gradient using logical `inset-inline-start`.
  - Tablet: same 2-col, min-height 460px.
  - Mobile (<768px): stacked. Order: eyebrow → headline → tagline → 2 buttons (full-width stacked below 380px, side-by-side ≥380px) → product image below in its own aspect box `aspect-[4/3]`. No overlap. Card min-height auto.
- Copy unchanged (`hero.eyebrow`, `hero.headline`, `hero.tagline`, two CTAs).
- No Lang/Currency inside hero. Arrow icon uses `.rtl-flip`.
- Verify at 320/375/390/430/480/768/1024/1440/1920 — no clipping, no horizontal scroll.

## 7. Category strip

- Keep 4-item structure. Desktop: single row `grid-cols-4`, equal widths, `h-32`. Mobile: `grid-cols-2`, equal heights, 12px gap.
- Remove `flex-row-reverse` — natural RTL from `dir="rtl"` handles order.
- Section container matches shared max-width and horizontal padding (see §9).

## 8. Footer

- Reduce vertical padding: `pt-10 pb-6` (desktop) / `pt-8 pb-5` (mobile).
- Container: same `max-w-7xl` as header/hero, `rounded-2xl` (not 32px), `p-6` desktop / `p-5` mobile.
- Same 3 columns on desktop, 1 column stacked on mobile with 24px gaps. Logical alignment — no manual reversing.
- Copyright row: single line, small, muted.

## 9. Shared container system

- Constants used everywhere: `max-w-7xl`, page padding `px-5 sm:px-8`, section vertical rhythm `py-10 sm:py-14`, radius scale `rounded-2xl` (cards) / `rounded-[28px]`–`rounded-[40px]` (hero only), button height 44px, icon-button 36px, icon size 20px.

## 10. Files touched

- `src/styles.css` — font-face cleanup, remove IBM Plex/Google, add logical-property helpers, `.rtl-flip`.
- `src/routes/__root.tsx` — drop external font links.
- `src/lib/i18n.tsx` — set real `<html dir>`, remove content-scoped hack + `edio-lang-swap` reflow.
- `src/components/site/Header.tsx` — restructure per §4, §5.
- `src/components/site/LangToggle.tsx` — compact text switch.
- `src/components/site/CurrencyToggle.tsx` — refined dropdown.
- `src/components/hero/HeroCard.tsx` — rebuild responsive layout, drop `isAr` branching.
- `src/components/home/CategoryStrip.tsx` — logical alignment, container parity.
- `src/components/site/Footer.tsx` — tighten dimensions, logical alignment.
- Font asset pointers under `src/assets/fonts/` — only the weights we actually use.

## 11. Verification

Playwright screenshots at 375, 768, 1440 in both EN and AR, plus: menu open (mobile), currency dropdown open (desktop RTL + LTR), footer height, and a network-blocked reload to confirm fonts still load from the CDN (no Google/IBM requests).

## Explicit non-goals

- No new products, testimonials, carousels, animations, or routes.
- No changes to cart/search/account behavior.
- No Arabic-glyph font swap beyond system fallback (only Neoris was uploaded).