## Understood from the uploads

**Edio.zip → Header logo scheme** (Slide 100 = icon on light-lavender field, Slide 101 = list-row lockup):
- The header brand mark is a **lockup**: rounded-square blue-gradient icon (the "O" mark) placed next to the **"Edio" wordmark**, sitting on a subtle **light-blue pill/bar** background — exactly the row style in Slide 101.
- Icon: `edio-icon-blue.svg` (blue gradient tile). Wordmark: `edio-wordmark-navy.svg`. Pill background: light-blue (`--edio-sky` @ low opacity, matches the pale strip in Slide 101).

**Edio_1.zip + Slide_16_9_-_99 → Featured Products (best-seller) block**:
- Three product cards, white, generously rounded, arranged in a row on a **light-blue gradient page band** (matches slide bg).
- **Middle card is the featured/best-seller**: card interior fill is a soft blue radial gradient (Rectangle 141), card itself sits slightly elevated, larger visual weight. Side cards have plain white interiors.
- **Buy Now button ("اشتر الآن")** — two exact variants, no invention:
  - **Featured (middle) button** → glossy blue-gradient pill (Rectangle 147), light-cyan Arabic text. Sits attached to the bottom of the featured card.
  - **Side buttons** → flat light-sky pill (Rectangles 143/145), navy Arabic text.
- RTL layout throughout. Text is always "اشتر الآن".

The archives contain the pre-rendered Arabic wordmark PNGs and the button pill backgrounds — they're reference/source. For crisp rendering we render the button as HTML: pill background from the PNG (or a matching CSS gradient) + live Arabic text in TT Neoris Pro, so it stays sharp and clickable.

## Step 2 — Header logo lockup

1. Register assets via `lovable-assets` from `/mnt/user-uploads/Edio.zip` extraction:
   - `edio-icon-blue.svg`, `edio-wordmark-navy.svg`, `edio-wordmark-white.svg`.
2. Build `src/components/EdioLogo.tsx`:
   - Props: `variant: "navy" | "white"`, `size?: "sm" | "md"`.
   - Renders: `<span class="pill">` wrapping `<img icon>` + `<img wordmark>` horizontally, gap ~12px, pill uses `bg-edio-sky/40` with rounded-full padding matching Slide 101 proportions.
   - Icon fixed height (28px sm / 36px md); wordmark scales to match.
   - RTL-safe: use logical padding, keep icon-then-wordmark order (Edio uses LTR wordmark inside RTL page — same as Slide 101).
3. No header component built yet (that's a future page step) — just export the component + add a memory note so any header we build later uses it.

## Step 3 — Featured Products section

1. Register assets from `Edio_1.zip`:
   - `product-featured.png` (Rectangle 140 — center headphone), `product-left.png` (Rectangle 144), `product-right.png` (Rectangle 146).
   - `card-featured-bg.png` (Rectangle 141 — blue radial glow card interior).
   - `btn-featured-bg.png` (Rectangle 147 — glossy blue pill), `btn-side-bg.png` (Rectangle 143 — flat sky pill).
   - Note: Rectangle 145 is a duplicate of 143; 146 duplicate variant of 144 — dedupe on upload.
2. Build reusable pieces in `src/components/products/`:
   - **`BuyNowButton.tsx`** — Locked to the two variants. Props: `variant: "featured" | "side"`, `href?`, `onClick?`. Renders `<button>` with pill background (`background-image: url(btn-*-bg.png)` sized `100% 100%`), Arabic label "اشتر الآن" in TT Neoris Pro DemiBold, text color: light-sky (`--edio-sky`) for featured, navy (`--edio-navy`) for side. Fixed heights matching source (featured taller/glossier, side flatter). No hover invention beyond a subtle scale/opacity — memory-noted.
   - **`ProductCard.tsx`** — Props: `image`, `variant: "featured" | "standard"`. White rounded-2xl card, `aspect-square` image slot. Featured variant swaps interior to the blue-glow background (`card-featured-bg.png`) and gets a slightly larger min-height / stronger shadow.
   - **`FeaturedProducts.tsx`** — Section wrapper. Light-blue gradient band background matching Slide 99, container with `dir="rtl"`, 3-column grid on desktop (`grid-cols-3`, middle card gets `md:-my-6` lift), stacks on mobile. Card order in DOM: side-left, featured-middle, side-right; BuyNowButton renders directly under each card.
3. **Do not** wire this into the home page yet — user wants Step 2 & 3 as building blocks. Leave `/` untouched with the placeholder.
4. Update memory:
   - `mem://design/components-logo` — header logo is always the pill lockup component; never render the wordmark alone in header.
   - `mem://design/components-buy-now` — Buy Now button has exactly two variants (featured/side), Arabic label locked to "اشتر الآن", pill backgrounds come from provided PNGs.
   - `mem://reference/edio-assets` — append new product/card/button CDN URLs.

## Technical notes

- Assets go to CDN via `lovable-assets create --file /mnt/user-uploads/... --filename <name>` → pointer JSON at `src/assets/<subdir>/*.asset.json`. Import pointer, use `.url`.
- Button pill backgrounds render via `background-image` + `background-size: 100% 100%` so the glossy gradient scales to any button width while Arabic text stays live/selectable.
- All new components use only semantic tokens (`bg-edio-sky`, `text-edio-navy`, etc.) already defined in `src/styles.css`.
- No route changes, no data layer, no build/config changes.

## Out of scope (explicit)

- Not building the actual header bar, nav, hero, or home page composition in this step.
- Not inventing hover states, section titles, product names, prices, or additional cards — none were provided.
- Not touching `src/routes/index.tsx`.
