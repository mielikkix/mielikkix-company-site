# CLAUDE.md — mielikkix-company-site

Place this file at the **root of the `mielikkix-company-site` repo**
(`github.com/orgs/mielikkix/mielikkix-company-site`).

## What this repo is

The public marketing/company website for Mielikkix — promotes the Chat Widget and all
10 Mielikkix Force agents in one place. This is a **separate repo from `mielikkix-ai`**,
with its own deploy pipeline and branding. It does not contain product code, the
dashboard, or agent logic — link out to `app.mielikkix.ai` for sign-up/login.

## Tech stack

- **Astro** (static-first, ships near-zero JS by default — right fit for a mostly-static
  marketing site with fast load times and clean SEO).
- **Tailwind CSS** for styling, configured with the brand tokens below as custom theme
  colors (not raw hex scattered through components).
- Static build output (`astro build` → `dist/`) — no server runtime required.
- Package manager: npm (match whatever `mielikkix-ai` uses, for consistency across repos).

## Brand: Palette 1 — "Forest & Aurora"

Deep, infinite forest tones with a neon AI pulse — bright accents read as data lighting
up in the dark. This is the confirmed direction; do not introduce other palette
options into this repo.

| Token | Hex | Tailwind name | Usage |
|---|---|---|---|
| Deep Forest | `#0F2A1F` | `deep-forest` | Primary background — main canvas, dark so accents pop |
| Aurora Neon | `#00E5A0` | `aurora-neon` | Primary accent — CTA buttons, hover states, data visualizations |
| Antler Gold | `#D4AF37` | `antler-gold` | Secondary accent — logo mark, badges, premium highlights |
| Mist White | `#E8F0EB` | `mist-white` | Text & icons — body copy on dark backgrounds |

Text-on-color pairing (contrast-checked in the source palette):
- On Deep Forest → Mist White text
- On Aurora Neon → `#06231A` (near-black forest) text
- On Antler Gold → `#2A2005` (near-black gold) text

Register all four as `theme.extend.colors` in `tailwind.config.mjs` — never hardcode
these hex values inline in a component once the config exists.

## Logo concept

A minimalist fox face (Mielikki's sacred animal), built from geometric polygons — one
ear glowing Aurora Neon, the other solid Antler Gold. Build as an inline SVG component
(`<Logo />`) so both ear colors stay theme-driven, not a flat raster export.

## Component conventions

- Primary button: solid Aurora Neon fill, `#06231A` text, subtle glow/scale on hover.
- Secondary button: transparent fill, Antler Gold 1px border, Antler Gold text.
- Body copy: Mist White on Deep Forest.
- Cards/panels: Deep Forest background, Antler Gold or subtle Mist White border.
- Reserve Aurora Neon for interactive/CTA moments — it should read as "this is
  clickable / this is live data," not as decoration. Don't use it for large fills or
  body text.

## Site structure

- `/` — Home: hero, Chat Widget + Force Agents overview, CTA to demo/pricing
- `/chat-widget` — product page for the live Chat Widget
- `/force-agents` — 10-agent grid, grouped exactly as the dashboard's "Meet the Crew":
  Front Desk & Support / Sales & Marketing / Growth & Retention
- `/pricing`
- `/company` — About, Careers, Contact (can be one page with anchored sections, or
  split into subpages if content grows — start as one page)
- Links out to `app.mielikkix.ai` for login/sign-up — **do not** replicate auth here

## Content rules

- Real copy has not been finalized yet. Where this CLAUDE.md or the build prompt
  doesn't supply exact copy, write clearly-marked placeholder content (e.g.
  `<!-- PLACEHOLDER: replace with final copy -->`) rather than inventing marketing
  claims, pricing numbers, or team bios that aren't confirmed.
- Never state specific pricing, customer counts, or guarantees that haven't been
  provided — placeholder these explicitly instead of guessing plausible-sounding numbers.

## Deployment

Deployed on the **same Hostinger VPS as `mielikkix-ai`** (`srv1876244.hstgr.cloud`),
but as a fully independent static site — never inside the same process/container as
the product apps:

- Build output (`dist/`) is served as static files via its own nginx server block
  (separate `server {}` entry, its own domain/root path), not proxied through the
  `mielikkix-ai` API or dashboard.
- No shared runtime, environment variables, or process with `apps/api` or
  `apps/dashboard` — a broken site deploy must never be able to affect the live
  Chat Widget or dashboard, and vice versa.
- CI (when added) builds this repo independently and only touches this site's nginx
  root / static directory.

## Verification before calling any change done

- `npm run build` completes with no errors.
- `npm run preview` (or dev server) renders all 5 routes without console errors.
- Every internal nav/footer link resolves; the login/sign-up link points to
  `app.mielikkix.ai`.
- Palette usage matches the token table above — no raw hex outside
  `tailwind.config.mjs`.
