# Cleanup & Header/Mobile Fixes

## 1. Fonts — Edio (TT Neoris Pro) only

- Remove **all** other font files and references:
  - Delete IBM Plex Sans Arabic, IBM Plex Mono, Switzer, and Geist Variable from `src/assets/fonts/` and from the CDN asset pointers.
  - Remove `@fontsource-variable/geist` from `package.json`.
  - Remove every `@font-face` / `@import` for those families in `src/styles.css`.
  - Remove `--font-technical` and any `font-technical` utility usage (SKUs, prices go back to Neoris).
- Upload the TT Neoris Pro Trial `.woff2` weights (Regular 400, Medium 500, DemiBold 600, Bold 700) as Lovable Assets and wire them via `@font-face`.
- Set both `--font-en-main` and `--font-ar-main` to `"TT Neoris Pro Trial"`. `body`/`html[lang="ar"]`/`html[lang="en"]` all resolve to Neoris — no other family in the stack except the generic `system-ui` fallback.

> Note: the uploaded zip only ships the Latin cut of Neoris. Arabic glyphs will fall back to the browser's default Arabic system face until you upload the Arabic cut. I'll flag this in the code so it's easy to drop in later.

## 2. Language & currency switchers

- **Direction bug** — today toggling AR flips `<html dir="rtl">`, which mirrors the whole page including the switcher itself. Fix: keep `<html dir>` on `ltr`, and instead scope RTL to the content shell (`<main dir="rtl">` / `<footer dir="rtl">`) so header controls stay in place. Buttons/icons that need mirroring (arrows, chevrons) use `rtl:rotate-180` inside the RTL scope only.
- **EN|AR pill** — match the reference (image-12): navy thumb over the *active* label, active text cream, inactive text muted navy. Fix the current bug where inactive label renders dark on the navy thumb.
- **USD dropdown** — match reference (image-10): light-blue pill with chevron; open panel shows `$ USD` and `د.ع IQD` rows, active row navy with cream text. Currency symbol on the leading side, code on the trailing side, both aligned.

## 3. Header — remove center categories

- Delete the center category nav (Headphones / IEMs / DAC & AMPS / Deals pills) from the desktop header per reference (image-14).
- Header becomes exactly: **Edio logo pill (left)** — **spacer** — **EN|AR + USD + search + account + cart (right)**.
- Delete `CategoryProvider`, `CategoryView`, and the dummy category grid I added last turn (that flow lives elsewhere later).
- Restore `src/routes/index.tsx` to render just `<HeroCard />` in `<main>`.

## 4. Mobile

- **Header**: same layout as desktop reference — logo pill left, EN|AR + USD + cart right. Remove the hamburger + drawer (no categories to open). Search/account collapse into a single search icon on <640px to fit.
- **Hero card**: rebuild to match the earlier mobile reference — full-bleed hero image, overlaid eyebrow + headline top-start, `Shop now` + `Details` pill row bottom.
- **Remove "Curated by Edio"** — delete the "Essential bundles" teaser strip below the hero entirely (image-11/13 shown to confirm removal target).

## 5. Hide scrollbars globally

- Add a global utility in `src/styles.css` that hides scrollbars everywhere while keeping scroll behavior:

```css
html, body { scrollbar-width: none; -ms-overflow-style: none; }
*::-webkit-scrollbar { display: none; }
```

## Files touched

- `src/styles.css` — font-faces rewritten, scrollbar hide, RTL scoping helper.
- `src/routes/__root.tsx` — drop `CategoryProvider`, keep `<html dir="ltr">` always.
- `src/routes/index.tsx` — hero only.
- `src/components/site/Header.tsx` — strip center nav, tighten right cluster, mobile parity.
- `src/components/site/LangToggle.tsx` — remove `dir` mutation, fix active-label color.
- `src/components/site/CurrencyToggle.tsx` — restyle open panel to match image-10.
- `src/components/hero/HeroCard.tsx` — mobile hero rebuilt, teaser strip removed.
- `src/components/category/CategoryView.tsx`, `src/lib/category.tsx` — deleted.
- `src/assets/fonts/*` — IBM Plex / Switzer / Geist pointers deleted; Neoris pointers added.
- `package.json` — drop `@fontsource-variable/geist`.
- `mem://` — update index + typography memory to reflect Neoris-only stack and header composition.
