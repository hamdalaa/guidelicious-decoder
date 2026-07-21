## Goal

Replace the current TT Neoris Pro setup with the bilingual typography system from the uploaded Lovable Font Package. Arabic is the default (RTL). English is LTR. TT Neoris Pro and Saans are held for later swap-in when licensed.

Nothing new is built visually — this is a foundation change only.

## Font mapping (permanent tokens)

- `--font-en-main: "Switzer", sans-serif;` — placeholder for Saans
- `--font-ar-main: "IBM Plex Sans Arabic", sans-serif;` — placeholder for TT Neoris Pro
- `--font-technical: "IBM Plex Mono", monospace;` — SKUs, model numbers, measurements, specs, small technical labels only

Dominant weight is 500 (Medium). 400 for body. 600 only for stronger Arabic emphasis. No negative letter-spacing on Arabic; English display headings may use -0.01em to -0.03em.

## Steps

1. **Upload font files to CDN** via `lovable-assets` from `/mnt/user-uploads/Lovable_Font_Package.zip` (SAFE-TO-UPLOAD only):
   - Switzer-Variable.woff2, Switzer-VariableItalic.woff2
   - IBMPlexSansArabic-Regular / Medium / SemiBold .woff2
   - IBMPlexMono-Regular.ttf
   - Skip the trial folder (Saans, TT Neoris Pro Preview).

2. **Rewrite `@font-face` block in `src/styles.css`**:
   - Remove all TT Neoris Pro `@font-face` declarations.
   - Add Switzer variable (weight range 100–900, italic + upright) using CDN URLs.
   - Add IBM Plex Sans Arabic Regular/Medium/SemiBold.
   - Add IBM Plex Mono Regular.
   - All with `font-display: swap`.

3. **Update `@theme` tokens** in `src/styles.css`:
   - Replace `--font-sans` / `--font-display` with:
     - `--font-en-main: "Switzer", system-ui, sans-serif;`
     - `--font-ar-main: "IBM Plex Sans Arabic", system-ui, sans-serif;`
     - `--font-technical: "IBM Plex Mono", ui-monospace, monospace;`
   - Keep `--font-sans` as an alias that resolves per-lang (see step 4).

4. **Lang-driven default in `:root` / base layer**:
   - `html[lang="ar"] { direction: rtl; font-family: var(--font-ar-main); }`
   - `html[lang="en"] { direction: ltr; font-family: var(--font-en-main); }`
   - Body inherits. Add utility class `.font-technical` mapped to `--font-technical` for SKUs/specs.

5. **Root shell change** (`src/routes/__root.tsx`):
   - Change `<html lang="en">` → `<html lang="ar" dir="rtl">` (Arabic default per brand rule).

6. **Memory updates**:
   - Update `mem://design/edio-brand.md`: typography section now Switzer (EN placeholder for Saans) + IBM Plex Sans Arabic (AR placeholder for TT Neoris Pro) + IBM Plex Mono (technical only). Weight 500 dominant. No negative letter-spacing on Arabic.
   - Update `mem://reference/edio-assets.md`: replace TT Neoris Pro CDN URLs with new font URLs. Note TT Neoris Pro / Saans are pending license upload.
   - Update `mem://index.md` Core: default lang=ar, font tokens list.

7. **Verify**: build must pass; DevTools Network shows the woff2 files loading (not system fallback).

## Out of scope

- No new pages, components, or layout edits.
- Existing components (`EdioLogo`, `BuyNowButton`, `FeaturedProducts`, home placeholder) untouched except by inherited font-family.
- No swap to Saans/TT Neoris Pro until licensed files arrive — that will be a future one-line CDN URL swap with no layout impact.
