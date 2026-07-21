# Project Memory — Edio

## Core
UI reference is LOCKED to the Luminous Labs screenshot (user-uploads://image.png). Copy layout/nav/hero-card/type literally. No personal design vision.
Edio brand: bilingual (EN default, AR toggle switches to RTL), navy/blue/cream palette, consultant tone (advice > selling).
Mobile-first is mandatory. Design and test at 375px first. Never AI-slop aesthetics (no purple gradients, generic blobs, stock 3D shapes, default shadcn look).
Typography tokens: `--font-en-main` Switzer (placeholder for Saans), `--font-ar-main` IBM Plex Sans Arabic (placeholder for TT Neoris Pro), `--font-technical` IBM Plex Mono (SKUs/specs only). Dominant weight 500. Never negative letter-spacing on Arabic. Font resolves via html[lang].
Always use the newest/best Lovable AI models (openai/gpt-5.6-sol, gpt-5.5, gpt-5.4). Never Gemini 2.5/3 or older.
Only semantic design tokens in components (no text-white, bg-[#...]). Tokens live in src/styles.css.
Iraq market: currency USD + IQD; payment methods COD, credit card, ZainCash. No Stripe.

## Memories
- [Edio brand system](mem://design/edio-brand) — palette, typography, tone, RTL rule, asset URLs
- [UI reference lock](mem://design/ui-reference) — Luminous Labs layout is the canonical composition
- [Header logo lockup](mem://design/components-logo) — always use `<EdioLogo />` pill lockup in header
- [Buy Now button](mem://design/components-buy-now) — two locked variants (featured/side), Arabic "اشتر الآن"
- [Asset catalog](mem://reference/edio-assets) — CDN URLs for fonts, logos, backgrounds, products, buttons
- [Nav & footer](mem://features/nav-and-footer) — locked nav labels and social URLs
