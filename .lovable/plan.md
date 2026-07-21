# Edio — Foundation Plan (Locked to Luminous Labs UI)

## Locked references (non-negotiable)
- **UI/UX reference:** `user-uploads://image.png` (Luminous Labs). Every layout, spacing, nav pattern, hero frame, rounded-corner card, type hierarchy, and interaction we build must copy this literally. No personal vision, no "improvements".
- **Hero image swap:** replace the red Kini wearable hero with `user-uploads://image-2.png` (Edio audio gear on blue podiums). Everything else in the hero frame stays structurally identical to Luminous Labs.
- **Brand system:** the Edio guidelines site (already analyzed) — Arabic-first RTL, navy/blue/white palette, TT Neoris Pro typography, aurora textures, consultant tone.
- **Models:** always use the newest/best Lovable models (e.g. `openai/gpt-5.6-sol`, `openai/gpt-5.5`, `openai/gpt-5.4`). Never Gemini 2.5/3 or older. Locked.

## Layout contract inherited from Luminous Labs
```text
┌───────────────────────────────────────────────────────────┐
│  [logo]      Technology  Company  Commercial  Blog  (Shop)│   ← cream top bar, pill CTA
│                                              EN⌄   Cart 🛍│
├───────────────────────────────────────────────────────────┤
│  ╭─────────────────────────────────────────────────────╮ │
│  │  BigTitle   subLabel                                │ │
│  │                                                     │ │   ← rounded hero card
│  │              [ HERO IMAGE = Edio image-2 ]          │ │
│  │                                                     │ │
│  ╰─────────────────────────────────────────────────────╯ │
└───────────────────────────────────────────────────────────┘
```
- Cream page bg, rounded hero container, oversized display headline + small sublabel, pill-shaped primary CTA, minimalist top nav with lang + cart on the right.
- Direction will flip to RTL for Arabic-first, but the visual composition mirrors the reference.

## Step 1 — Asset intake (this step's only build work)
Unpack and register everything so it's ready in memory before any UI work:
1. **Fonts** — extract TT Neoris Pro Trial family; upload the weights we'll actually use (Regular, Medium, DemiBold, Bold + italics) via `lovable-assets`; wire `@font-face` in `src/styles.css`; expose `--font-display` / `--font-body` tokens.
2. **Logos** — upload primary wordmark, icon mark, and RTL/LTR lockups (SVG preferred) as Lovable Assets; catalog pointers under `src/assets/logos/`.
3. **Backgrounds** — upload aurora / gradient textures as assets; catalog under `src/assets/backgrounds/`.
4. **Icons** — upload the icon set as assets; catalog under `src/assets/icons/`.
5. **Hero image** — upload `image-2.png` as `src/assets/hero-edio.png.asset.json` for use in Step 2.
6. **Design tokens** — add Edio palette (navy, blue, white, cream neutrals) + typography tokens to `src/styles.css` as semantic tokens (`--background`, `--foreground`, `--primary`, `--accent`, etc.). No hardcoded colors in components.
7. **Memory** — write `mem://design/edio-brand.md` (palette, fonts, tone, RTL rule) and `mem://design/ui-reference.md` (Luminous Labs layout is the locked reference) and update `mem://index.md` Core rules.

No page rendering yet — index route stays as-is until Step 2.

## Step 2 — Home hero (next order, after you confirm Step 1)
Rebuild `src/routes/index.tsx` as a literal port of the Luminous Labs hero:
- Cream background, top nav (logo left / links center / lang+cart right), pill "Shop" CTA.
- Rounded hero card containing Edio hero image (`image-2`), oversized display title + small sublabel in TT Neoris.
- RTL layout, Arabic copy from the Edio brief.
- Unique `head()` metadata (title, description, og:title, og:description, og:image = hero URL, twitter:card).

## Step 3+ — Later sections (only when you say so)
Additional pages/sections will each arrive with their own Luminous Labs-style reference from you; I copy them literally, swap in Edio content/imagery, keep RTL and brand tokens.

## Guardrails I'm locking in
- Never deviate from an uploaded UI reference.
- Never invent layout, hero shapes, nav patterns, or components not present in the reference.
- Only semantic design tokens in components — no `text-white`, `bg-[#...]`, etc.
- Always latest Lovable models when AI is involved.
- Arabic-first RTL by default.

## Confirm to proceed
Reply "go" and I'll execute **Step 1 only** (asset intake + tokens + memory). Home page stays untouched until you approve Step 2.
