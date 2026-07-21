# Hero + Header + Footer refinement

Scope: only the pieces you listed. No new pages, no product data yet.

## 1. Hero section — full-bleed Luminous Labs style

- Remove the "Sound, guided." pill entirely.
- Turn the hero into one full-width rounded card (Luminous Labs composition): copy on the left, product photo on the right occupying the full right half of the card — image fills the panel edge-to-edge, no white gap, no drop-shadow float.
- Rebalance grid so the image reads as an integral panel (right column ~55% on desktop, background tinted panel behind it, image fitted with `object-cover` + subtle inner mask, not a clipped centered PNG).
- Keep headline "Find the sound that fits you." + subcopy.
- Replace the "How it works" secondary CTA with **"Shop headphones"** (useful, on-store). Primary CTA stays "Explore" → will point at the catalog once it exists.
- Mobile: image stacks under copy at full card width with matching rounded corners (no clipped look on phones either).

## 2. Language switcher animation

- Replace the current instant toggle with a sliding-thumb pill (EN | AR) — animated pill indicator glides between the two labels using a transform transition (spring-ish easing, ~250ms).
- On switch, animate the whole page: fade + short 8px slide on `<main>` when `dir` flips, and swap `font-family` via the `html[lang]` selector so Switzer ↔ IBM Plex Sans Arabic transition is smooth.
- Toggle visible on mobile too (currently hidden `sm:inline-flex`).

## 3. Font enforcement (Edio identity only)

- Ensure the site uses only Switzer (EN) and IBM Plex Sans Arabic (AR) — no Tailwind default sans fallback leaking in.
- Set `body { font-family: var(--font-en-main); }` and `html[lang="ar"] body { font-family: var(--font-ar-main); }` at the top of the cascade.
- Force headings/buttons/nav to inherit (remove any implicit `font-sans` from shadcn defaults on hero/header/footer components).
- Weight 500 dominant per brand rule; verify hero H1, nav, CTAs all render in Switzer 500.

## 4. Footer — full Edio identity

Three-column footer (stacks on mobile) inside a rounded cream/white panel:

- **Left:** Edio logo lockup + one-line brand tagline ("Sound, guided.") + socials row: Instagram, Telegram, TikTok, WhatsApp *(need handles — see question)*.
- **Middle:** Shop links — Headphones, IEMs, DAC & AMPS, Deals.
- **Right:** Support & legal — Privacy Policy, Terms of Service, Refund Policy, Returns, Warranty, Contact. Each links to a placeholder route (`/legal/privacy`, `/legal/terms`, `/legal/refunds`, `/legal/returns`, `/legal/warranty`, `/contact`) — pages themselves come later, but the links exist now.
- Bottom bar: © Edio {year} · Baghdad, Iraq · Payments accepted: ZainCash · Cash on Delivery · KeyCard (as small text/badges).

## 5. Responsiveness pass

- Header: pill nav collapses to hamburger < md (already does) — verify lang toggle also appears in mobile drawer with animation.
- Hero: single column < lg; image keeps rounded card corners on mobile, no overflow.
- Footer: 1 col mobile → 3 col md+.
- Use `grid-cols-[minmax(0,1fr)_auto]` + `min-w-0` + `truncate` patterns on all rows containing icons + text so nothing clips on 360px widths.

## Technical notes

- Files touched: `src/components/hero/HeroCard.tsx`, `src/components/site/Header.tsx`, `src/components/site/Footer.tsx`, `src/components/site/LangToggle.tsx`, `src/styles.css` (font enforcement + tiny page-transition keyframes).
- No new dependencies — animations via Tailwind + CSS transitions only.

## One thing I need from you before building

Social handles for the footer — you mentioned Telegram + Instagram earlier (`t.me/edio_iq`, `instagram.com/edio.iq`). Should I also add **TikTok** and **WhatsApp**, and if yes, what are the handles/numbers? If not, I'll keep just Telegram + Instagram.
