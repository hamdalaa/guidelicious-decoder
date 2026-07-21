
## 1. Streamline icons (Ultimate Regular – Free)

- Add a thin `StreamlineIcon` wrapper that loads SVGs on-demand from Streamline's public CDN:
  `https://cdn.streamlinehq.com/icons/ultimate-regular-free/{slug}.svg`
  (inlined via `fetch` + `dangerouslySetInnerHTML` so we can recolor with `currentColor`).
- Replace every `lucide-react` icon in the header, hero, footer, and product cards with `StreamlineIcon` using the mapped Ultimate Regular slugs (menu, close, cart, arrow-left, chevron, headphones, etc.).
- Cache fetched SVGs in a module-level `Map` so each icon is fetched once per session.

Note: no API key needed for the free set; if the CDN path 404s at build time we fall back to committing the small set of SVGs we use into `src/assets/icons/`.

## 2. Header — rebuild to match `image-3.png`

Discard the current pill-nav header. New composition, identical on mobile and desktop (only spacing scales):

```text
[ ← back ]   [ 🎧 ](sky pill)  Edio          [ EN | ع ]  [ 🛒 ]
```

- Left: circular back button (Streamline `arrow-left`) on white.
- Center-left: light-blue pill (`bg-edio-sky/60`) containing the Edio icon logo + wordmark "Edio" in Geist 500.
- Right: language toggle + cart button, both circular white chips.
- No nav links in the bar (matches reference); category nav moves to the hero section / a secondary strip later.
- Sticky, translucent cream background, same rounded-full container.
- Fully responsive: same layout at every breakpoint, only padding/size tokens change (no separate mobile drawer, no hamburger).

## 3. Language toggle — fix + real-time i18n

Current bugs:
- Selected label renders black because `text-edio-cream` isn't resolving against the navy thumb on some states → switch to explicit `text-white` token via `--edio-on-navy` and ensure the inactive state uses `text-edio-navy/60`.
- Clicking "ع" flips `dir`/`lang` but no visible content changes because strings are hard-coded English.

Fix:
- Create `src/i18n/strings.ts` with an `en` / `ar` dictionary covering every visible string currently on the site (header labels, hero headline + subcopy + CTAs, footer columns, product card copy).
- Create `src/i18n/LangProvider.tsx`: React context holding `{ lang, setLang, t(key) }`. On `setLang` it:
  1. writes `documentElement.lang` + `dir`
  2. persists to `localStorage`
  3. triggers the existing `edio-lang-swap` fade
- Wrap `<RootComponent>` children in `<LangProvider>`.
- Replace all hard-coded strings in `Header`, `HeroCard`, `Footer`, `FeaturedProducts`, `BuyNowButton` with `t("…")`.
- `LangToggle` reads `lang` / `setLang` from context (no local state), so switching is instantaneous everywhere.
- Labels shown in the toggle: `EN` and `ع` (Arabic glyph, not "AR"), matching brand tone.
- Font swap already handled by `html[lang="ar"]` selector in `src/styles.css` — verify `--font-ar-main` (IBM Plex Sans Arabic placeholder for Edio Arabic) is applied to `<html>` and inherits everywhere; add `font-family: var(--font-ar-main)` on `body[dir="rtl"]` as belt-and-suspenders.

## 4. Mobile parity

- Remove the mobile drawer + hamburger from the header.
- Hero, header, footer keep the desktop composition on mobile, only scaling type and padding — no separate mobile-only layouts.

## 5. Verification

After build:
- Toggle EN ↔ ع and confirm: header/hero/footer strings swap, `dir` flips, font switches to Arabic, active pill stays readable (white on navy) in both states, layout mirrors correctly.
- Confirm Streamline SVGs render and recolor on hover.

## Files touched

- new: `src/components/StreamlineIcon.tsx`, `src/i18n/strings.ts`, `src/i18n/LangProvider.tsx`
- rewrite: `src/components/site/Header.tsx`, `src/components/site/LangToggle.tsx`
- edit: `src/routes/__root.tsx` (mount provider), `src/components/site/HeroCard.tsx`, `src/components/site/Footer.tsx`, `src/components/FeaturedProducts.tsx`, `src/components/BuyNowButton.tsx`, `src/styles.css` (Arabic font fallback rule + toggle color token)
