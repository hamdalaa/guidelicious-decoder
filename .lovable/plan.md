## Scope

Polish only `src/components/home/CategoryCards.tsx`. No other files, no route changes, no identity changes. Card titles and hrefs stay identical.

## Root causes of current issues

- Image column is a fixed 120px (108px mobile) — well below the 42–46% target. Combined with `max-width: 100px` on the `<img>`, the microphone renders tiny inside a narrow slot.
- Text column consumes ~1fr with only 20px inline padding, so on desktop the title sits close to the start edge (right side in RTL) and looks glued.
- Title uses `clamp(14px, 1.05vw, 17px)` — caps at 17px and drops to 14px on mobile, which reads visually weak.
- Hover animates `transform` on the whole card while a nested `<img>` also transforms — the compound motion plus the border/shadow ease creates the "messy" feel.

## Changes

Rewrite the `SCOPED_CSS` block and keep the JSX/CARDS array intact.

### Card grid + proportions
- Two-column internal grid `grid-template-columns: 44% 56%` (image | text).
- Fixed heights: `156px` desktop (≥1280px `164px`), `148px` tablet, `146px` mobile carousel card.
- Consistent inline padding `22px` desktop / `18px` mobile applied on the card, so both image wrapper and text wrapper breathe from the border.
- Same border (`1px solid rgba(135,203,246,0.45)`), radius `22px`, white surface — unchanged.

### Image area (42–46%)
- Image wrapper is a flex centering box with `padding-inline: 4px` (padding already on the card).
- `<img>` uses `object-fit: contain; object-position: center`, sized by `max-height: 100%; max-width: 100%` and `height: 100%; width: auto` so each product fills its slot confidently.
- Per-card size tuning via a modifier class so the microphone reads larger without cropping:
  - `.is-mic` (الميكروفونات / مايكات) → image `max-height: 88%` — bigger, "poured into" the slot.
  - `.is-headphones` → `max-height: 78%` — balanced given wide silhouette.
  - `.is-iem` → `max-height: 82%`.
- No absolute positioning, no background-image, no `object-fit: cover`.

### Text area (54–58%)
- Flex column centered vertically, `text-align: start`.
- Inline padding of `10px` inside the text cell (card already has 22px) → title clears the border by ~32px in RTL, fixing the "stuck to the right" feel.
- Title size `clamp(17px, 1.35vw, 20px)` desktop, `17px` mobile.
- `font-weight: 600`, `line-height: 1.3`, `letter-spacing: 0` (Arabic-safe).
- `-webkit-line-clamp: 2` retained for long titles; short ones stay single-line and vertically centered.

### Hover (desktop only, `@media (hover: hover)`)
- Card: `translateY(-2px)`, border → `rgba(9,10,50,0.22)`, shadow `0 6px 18px -14px rgba(9,10,50,0.25)`.
- Image: `scale(1.02)`.
- Single unified transition `200ms ease-out` on `transform, border-color, box-shadow`.
- Respect `prefers-reduced-motion`.

### Mobile carousel
- Slide width `85%`, gap `14px`, side padding `20px` with negative margin so first/last cards align to section edges.
- Snap: `scroll-snap-type: x mandatory`, `scroll-snap-align: start`.
- Hidden scrollbar retained.

### Cleanup
- Remove leftover banner/promo remnants: no `min-height`, no aspect ratios, no `object-fit: cover`, no absolute positioning tied to the card.
- Keep all styles inside the scoped `<style>` block; no global CSS additions.

## JSX touch (minimal)
- Add a `variant` field to each `CARDS` entry (`"mic" | "headphones" | "iem"`) and apply `is-mic` / `is-headphones` / `is-iem` to the `<img>` so per-product sizing works without new components.

## Verification

- Visual pass at 1920, 1440, 1024, 768, 430, 390, 375, 320 in Arabic RTL (default) and confirm LTR still balances.
- Confirm: no card taller than another, microphone visibly larger, title breathes from the RTL edge, hover is a calm 2px lift with soft shadow, mobile carousel shows ~85% of the current card + hint of next.
