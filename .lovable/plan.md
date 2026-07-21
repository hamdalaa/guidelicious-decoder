# Hero rework + footer cleanup + Geist question

## 1. Hero — match the Luminous Labs UI exactly

### Desktop (image ref 2)
- One large rounded hero card that **is** the product image (edge-to-edge, no side panel).
- Copy overlays on top of the image on the left:
  - Small product label row: **"Edio"** in bold + **"Audio"** in muted grey, aligned like "Kini Wearable".
  - No headline in a separate white column — headline sits on the image itself in the top-left area.
- Product photo bleeds to all edges of the card; card has same big rounded corners as reference.
- Right side of card is pure image (no white content column).

### Mobile (phone mockup ref)
- Two stacked rounded panels inside the hero:
  1. **Top featured panel** (tall): product image fills, with an overlaid text block on the left ("Edio audio, guided for you" style headline + short line), and a small **"Shop now →"** pill button at the bottom-left, plus a small **"Details"** pill at the bottom-right — mirroring the mockup.
  2. **Bottom teaser strip**: a shorter rounded panel peeking below with a second image + one-line teaser ("Essential bundles" style), acting as a preview of the next section.
- Everything rounded, sits on the cream background, matches the Luminous Labs mobile card language.

### CTAs
- Keep primary **Explore** and secondary **Shop headphones** on desktop.
- On mobile: single **Shop now →** overlay pill inside the featured panel + **Details** ghost pill (like the mockup).

## 2. Footer cleanup
- Remove **"Baghdad, Iraq"** from the bottom bar.
- Remove the entire **"We accept · ZainCash · Cash on Delivery · KeyCard"** row.
- Bottom bar becomes just: `© {year} Edio` on the left, socials or nothing on the right.

## 3. Font question (need your call before I touch styles)

You linked Geist. Two ways to read that:

**A.** Replace Switzer with **Geist** as the English placeholder until Saans is licensed. (Geist is free/OFL, safe to bundle.)

**B.** Keep Switzer per the earlier locked spec, and Geist was just a reference you were looking at.

I need one word: **A** (use Geist) or **B** (keep Switzer). If A, I'll swap the `@font-face` to Geist Variable and repoint `--font-en-main` — no other typography changes.

## Files touched
- `src/components/hero/HeroCard.tsx` — full rewrite for desktop overlay + mobile stacked panels
- `src/components/site/Footer.tsx` — strip location + payments row
- `src/styles.css` + font asset (only if you pick **A**)

Answer the Geist question and I'll build.
