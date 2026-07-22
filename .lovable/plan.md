## Hero — image only, no text

Rebuild `src/components/hero/HeroCard.tsx` so the hero card contains only the product image, matching the Luminous Labs reference (full-bleed image inside a single rounded card, no headline, eyebrow, tagline, or CTA buttons).

### Changes
- `src/components/hero/HeroCard.tsx`
  - Remove eyebrow, headline, tagline, and both CTA buttons on desktop and mobile.
  - Keep one rounded card (`rounded-[40px]` desktop / `rounded-[28px]` mobile) with `bg-edio-sky/25`.
  - Desktop/tablet: full-bleed `edio-hero.png` covering the whole card, min-height ~560px (desktop) / 460px (tablet), `object-cover object-center`.
  - Mobile: same card with image filling an `aspect-[4/3]` (or similar) box, no stacked text section above it.
  - Keep `useI18n` import only if still needed for alt text; otherwise remove. Alt stays empty (decorative) as today.
  - No changes to i18n dictionary, header, footer, or category strip.

### Out of scope
- No new sections, no copy changes elsewhere, no font/RTL/header work.
