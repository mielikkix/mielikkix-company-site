# Claude Code prompt — build mielikkix-company-site

Paste everything below into Claude Code, run from an **empty, fresh `mielikkix-company-site`
repo** (create the repo on `github.com/orgs/mielikkix/` first if it doesn't exist yet;
this prompt assumes you're working locally inside it).

---

Build the Mielikkix public marketing site in this repo from scratch. This is a brand-new,
empty repo — you have freedom to scaffold it cleanly, but still work on a feature branch
(e.g. `build/initial-site`) rather than committing straight to `main`, and stop for my
confirmation before pushing or deploying anything.

## Read this first

A `CLAUDE.md` file with the full brand spec, tech stack, site structure, and content
rules for this repo should already be at the repo root — **read it in full before
writing any code** and follow it exactly (palette tokens, component conventions,
deployment target). If it's not present, ask me for it rather than inventing your own
brand direction.

## Tech stack

- **Astro**, with **Tailwind CSS** integrated via `astro add tailwind`.
- Static output mode (Astro's default) — no server runtime.
- npm as the package manager.

## Steps

1. **Scaffold the project** with `npm create astro@latest` (minimal/empty template,
   TypeScript strict-ish is fine, no need for a starter theme), then `astro add
   tailwind`.

2. **Register the brand palette** in `tailwind.config.mjs` under `theme.extend.colors`
   using the exact token names and hex values from `CLAUDE.md`
   (`deep-forest`, `aurora-neon`, `antler-gold`, `mist-white`). Do not hardcode hex
   values in components after this — always reference the Tailwind color names.

3. **Build a shared layout** (`src/layouts/BaseLayout.astro`):
   - `<Nav />` component: logo (see step 4) + links to all 5 routes + a "Get Started"
     button linking to `https://app.mielikkix.ai`
   - `<Footer />` component: company info, secondary nav, same login/sign-up link
   - Global page shell: Deep Forest background, Mist White text, sets up meta tags
     (title/description per page via props), viewport, favicon placeholder.

4. **Build the `<Logo />` component** as inline SVG: a minimalist fox face built from
   geometric polygons, one ear filled `aurora-neon`, the other `antler-gold`, per the
   logo concept in `CLAUDE.md`. If a polished vector concept is too ambiguous to build
   well from a text description alone, ship a clean geometric placeholder mark in the
   correct two-tone colorway and flag it clearly as a placeholder for a designer pass —
   don't spend excessive time perfecting logo art in this step.

5. **Build shared components** matching the conventions in `CLAUDE.md`:
   - `<ButtonPrimary />` — solid Aurora Neon fill, `#06231A` text, hover state
   - `<ButtonSecondary />` — transparent fill, 1px Antler Gold border, Antler Gold text
   - `<Card />` — Deep Forest background, Antler Gold or Mist White border, used for
     agent grid tiles and feature blocks

6. **Build the 5 pages**, using `BaseLayout`:
   - `/` (`index.astro`) — hero (headline + subhead + primary/secondary CTA), a Chat
     Widget summary block, a Force Agents overview block (link to `/force-agents`),
     closing CTA to `/pricing`
   - `/chat-widget` — product page: what it does, key capabilities, CTA to get started
   - `/force-agents` — grid of all 10 agents using `<Card />`, grouped into three
     sections with headers exactly matching the dashboard's "Meet the Crew" grouping:
     **Front Desk & Support**, **Sales & Marketing**, **Growth & Retention**
     (Voice Receptionist, Booking Assistant, Support Triage → Front Desk & Support;
     Review & Reputation, Social Media Agent, Email Marketing, SEO Copywriter → Sales
     & Marketing; Feedback & Survey, Loyalty & Re-engagement, Quote & Invoice → Growth
     & Retention)
   - `/pricing` — pricing tiers as placeholder structure only (individual agent /
     3-agent bundle / Full Crew, matching the entitlement model) — **do not invent
     dollar amounts**; use clearly marked `PLACEHOLDER` price text
   - `/company` — About, Careers, Contact as anchored sections on one page; placeholder
     copy clearly marked, no invented team bios or fake testimonials

7. **Write placeholder copy, not filler marketing claims.** Headlines and structure are
   fine to draft; anywhere you'd need a real customer count, pricing number, testimonial,
   or unverified claim, use an explicit `<!-- PLACEHOLDER: ... -->` comment or visibly
   marked placeholder text instead of making something up.

8. **Responsiveness + basic accessibility**: mobile-first layout for all 5 pages,
   semantic heading hierarchy, alt text on every image/icon, visible focus states on
   interactive elements (don't rely on color alone against the dark background).

9. **SEO/meta basics**: per-page `<title>` and meta description via layout props,
   Open Graph tags, a simple favicon (can reuse a simplified version of the logo mark).

10. **Verify before declaring done:**
    - `npm run build` completes with zero errors.
    - `npm run preview` and click through all 5 routes — confirm every nav/footer link
      resolves and the "Get Started" / login links point to `app.mielikkix.ai`.
    - Confirm no raw brand hex values exist outside `tailwind.config.mjs` (grep for the
      four hex codes across `src/`).
    - List every placeholder you left (copy, pricing, logo art) so I know exactly
      what still needs real content before launch.

11. **Do not deploy.** This site will be served from the same Hostinger VPS as
    `mielikkix-ai` but as a fully separate static site (own nginx server block, own
    root directory — never sharing a process with the product apps). Stop after
    verification, summarize the build, and wait for me to confirm before we touch
    nginx config, DNS, or push to `main`.

If anything about the brand spec, site structure, or agent grouping is ambiguous once
you've read `CLAUDE.md`, stop and ask rather than guessing.
