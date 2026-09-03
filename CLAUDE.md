# CLAUDE.md — mielikkix-company-site

Place this file at the **root of the `mielikkix-company-site` repo**
(`github.com/orgs/mielikkix/mielikkix-company-site`).

## What this repo is

The public corporate/marketing website for **Mielikkix AS** — an AI-powered software
and SaaS company. This is a **separate repo from `mielikkix-ai`**, with its own deploy
pipeline and branding. It does not contain product code, the dashboard, or agent logic.

**Business positioning (confirmed by the user, supersedes any earlier
Chat-Widget-centric framing):** Mielikkix AS develops and provides AI-powered software
and SaaS solutions for businesses. Core business activities:

- Development and provision of AI-powered chatbot and SaaS solutions for businesses
- AI-powered customer service, sales and lead-generation solutions
- AI automation and multi-agent solutions for business processes
- Custom AI software development and AI integrations
- Website, API and other business system integrations

Official business activity description (use verbatim where a company description is
needed, e.g. About page): *"Development and provision of AI-powered software and SaaS
solutions for businesses, including AI chatbots, business automation, multi-agent AI
solutions, customer service and sales automation, custom AI software development and
AI integrations."*

There is a **separate, dedicated promotional site** for the Mielikkix AI agent
product line (an AI Chatbot, Voice Receptionist, and Booking Assistant as the core
ready-to-use agents, plus additional agents like Support Triage and Review &
Reputation, and fully custom agents built per business). **As of 2026-09, that
product dropped the earlier "Force Agents" branding and the 3-crew grouping —
don't reintroduce that naming.**

**Domain-separation rule (2026-09-01, explicit user request — supersedes the
prior "full AI-agent conversion site" note that used to live here; that
pendulum swung twice now, read this before re-expanding product content into
this repo again):** `mielikkix.no` and `mielikkix.ai` must feel like different
experiences of the same company, not near-duplicates:
  - **mielikkix.no** ("we help your business adopt AI") = company, business
    solutions, industries, AI consulting/implementation, custom AI,
    automation, integrations, security, trust, about, contact, free demo.
  - **mielikkix.ai** ("here is the product") = individual AI agents (Chatbot,
    Voice Receptionist, Booking Assistant, Support Triage, Review &
    Reputation, and the rest of the lineup), features, live demos, pricing,
    subscriptions, onboarding, login, dashboard.

  This repo (`mielikkix.no`) does **not** name individual agents, show
  agent-by-agent status badges (Available/Demo/Coming Soon), run a live-demos
  showcase, or show an agent-adoption progression (e.g. "Start with Chatbot,
  add Voice, add Booking…") anywhere — that content was tried on this repo
  and then deliberately pulled back out once it made the two sites feel
  redundant. Instead: a handful of high-level solution *categories*
  (Customer Experience / Sales & Lead Automation / Business Automation /
  Custom AI Solutions), industry/audience pages describing business outcomes
  only (no per-segment agent lists), and clearly-labeled bridge moments —
  "Explore Mielikkix AI →" / "Meet Mielikkix AI" — that hand the visitor off
  to `https://mielikkix.ai` for anything agent-, demo-, or pricing-specific.

  **Further trim (2026-09-01, same session, explicit user request):** the
  `/products` ("AI") and `/security` routes were removed entirely — nav is
  now just Solutions / Industries / About. There is no on-site bridge page
  for the AI product anymore; every "Explore Mielikkix AI" CTA (hero, AI
  Solutions panel, AI-in-Action panel, Meet Mielikkix AI panel) links
  straight to `https://mielikkix.ai`. Security content didn't disappear —
  it moved onto `/company#security` (the anchor there now holds the full
  GDPR/data-ownership/API-security/DPA/human-escalation pillar grid, not
  just a teaser), and the homepage's security teaser link now points to
  that anchor instead of a separate page. `ProductsContent.astro` and
  `SecurityContent.astro` are kept in the repo unused (not deleted) in case
  a dedicated page is wanted again later — don't wire them back into routes
  without the user asking. Components built for the fuller catalogue era
  (`AgentCard`, `DemoCard`, `WorkforceDiagram`, `HeroWorkforceVisual`,
  `HubDiagram`) are likewise kept unused rather than deleted.

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
| Aurora Neon | `#00E5A0` | `aurora-neon` | Primary accent — CTA buttons, hover states, gradients, data visualizations |
| Antler Gold | `#D4AF37` | `antler-gold` | Secondary accent — logo mark, badges, premium highlights |
| Mist White | `#E8F0EB` | `mist-white` | Text & icons — body copy on dark backgrounds |

Text-on-color pairing (contrast-checked in the source palette):
- On Deep Forest → Mist White text
- On Aurora Neon → `#06231A` (near-black forest) text
- On Antler Gold → `#2A2005` (near-black gold) text

**Visual direction history (read this before changing background/canvas choices):**
this site has gone through two design pivots based on external references the user
supplied — first toward an all-light canvas, then explicitly *back* to an all-dark
canvas after the user clarified they wanted the bold, dark, gradient-glow style of
[trendaisecurity.com](https://www.trendaisecurity.com), not the light one. **The
current, confirmed direction is an all-dark canvas** (Deep Forest body background,
Mist White default text) — the same direction the original palette brief called for.
Do not switch to a light body background again without the user explicitly asking for
it by name/reference, given how much rework the back-and-forth has already cost.

Distinctive elements borrowed from the TrendAI reference and adapted into these four
tokens (no fifth color introduced):
- Full-bleed hero (breaks out of the `max-w-6xl` container) with large blurred
  `<Glow>` orbs bleeding off the edges, and a gradient-text accent word in the
  headline (`bg-gradient-to-r from-aurora-neon to-antler-gold bg-clip-text
  text-transparent`).
- `<PillarStack>` — stacked, slightly-narrowing gradient bars (mirrors TrendAI's
  layered platform-capability bars). Currently unused on Home (replaced by the
  "AI Solutions" category-card panel per the domain-separation rule) but kept in
  the repo; fine to reuse elsewhere.
- A full-bleed diagonal gradient CTA band (`from-aurora-neon via-deep-forest
  to-antler-gold`) near the end of each page, mirroring TrendAI's testimonial-banner
  treatment — but without a fabricated quote (see Content rules).
- `<HubDiagram>` — radial hub-and-spoke diagram. Currently unused (the Products
  page/route no longer exists) but kept in the repo per the domain-separation
  rule — don't delete it.

Register all four tokens as `theme.extend.colors` in `tailwind.config.mjs` — never
hardcode these hex values inline in a component once the config exists.

## Logo concept

A minimalist fox face (Mielikki's sacred animal), built from geometric polygons — one
ear glowing Aurora Neon, the other solid Antler Gold. Build as an inline SVG component
(`<Logo />`) so both ear colors stay theme-driven, not a flat raster export.

## Component conventions

- Primary button: solid Aurora Neon fill, `#06231A` text, subtle glow/scale on hover.
- Secondary button: transparent fill, Antler Gold 1px border, Antler Gold text.
- Body copy: Mist White on Deep Forest.
- `<Panel>` (`src/components/Panel.astro`) is the shared section wrapper: rounded-3xl,
  bordered, tinted (`default` / `accent` / `gold`), Deep Forest-family background.
- `<Card>`: Deep Forest background, Antler Gold border, Mist White text — nests
  inside Panels for grids (value props, solution bullets, pricing-style tiers, etc.).
- `<IconBadge>` / `<Icon>`: small inline icon set, no external dependency. Icon badges
  use a **solid** Deep Forest background, not a gradient — a gradient toward a
  same-hued tint (e.g. an Aurora Neon icon over an Aurora Neon/25 corner) makes the
  icon blend in and disappear. Always verify new icon/badge combinations by looking at
  the rendered page (zoom in), not just by reading the class names.
- Reserve Aurora Neon for interactive/CTA moments and gradient accents — it should
  read as "this is clickable / this is live data," not as a large flat fill or body
  text color.

## Site structure

Nav is just **Solutions / Industries / About** (+ "Book a Free AI Demo" primary
CTA, "Log in" → `app.mielikkix.ai`) — no "AI" or "Security" nav items; see the
domain-separation rule above for why.

- `/` — Home, a long conversion-focused page (in order): hero (headline + "Book a
  Free AI Demo" / "Explore Mielikkix AI" CTAs, the latter linking straight to
  `https://mielikkix.ai`, no agent-naming visual), 4-item value strip, "Still
  doing this manually?" problem section (`<BeforeAfter>`), "AI Solutions for
  Your Business" (4 category cards + link to `/solutions` + bridge CTA to
  mielikkix.ai), "See What AI Could Do for Your Business" sales CTA panel,
  industries/audience-segment teaser (`<IndustryCard>`, one outcome sentence
  each, links to `/industries`), "How It Works" step flow (`<StepFlow
  direction="horizontal">`), integrations pill list, "Why Businesses Choose
  Mielikkix" value grid, security teaser (links to `/company#security`),
  "Start With the Business Problem. Scale From There." step flow (generic
  consulting steps, no agent names), "Meet Mielikkix AI" bridge panel (CTA to
  mielikkix.ai), closing gradient CTA band.
- `/solutions` — the 5 core business activities in detail, one panel each (icon +
  description + capability bullets)
- `/industries` — 3 audience-segment cards (`<IndustryCard>`) — Solo &
  Small-Team Service Providers, Multi-Location Franchise & Chain Operators,
  Growing SaaS & E-commerce Support Teams — one high-level business-outcome
  sentence each (no per-segment agent lists); no regulated-industry/compliance
  claims. Same 3 segments are mirrored in Home's industries teaser.
- `/company` — About (uses the official business activity description above),
  a full "Data & Security" section (`#security` anchor — the 5-pillar
  GDPR/data-ownership/API-security/DPA/human-escalation grid that used to live
  on a standalone `/security` page now lives here in full, not as a teaser),
  Careers, Contact/demo form (`#about`, `#security`, `#careers`, `#contact`).
- No dedicated `/pricing` page — the business model (custom dev + SaaS + integrations)
  doesn't fit fixed tiers, and no pricing has been confirmed. CTAs point to the
  demo form instead. Don't add fixed pricing tiers without the user supplying real
  numbers.
- No `/privacy` or `/terms` pages exist yet — no real legal copy has been supplied.
  Don't invent one; wire up the footer links once the user provides real content.
- Links out to `app.mielikkix.ai` for login/sign-up and demo CTAs, and to
  `https://mielikkix.ai` for anything product-specific — **do not** replicate
  auth or the product experience here.

## Internationalization (EN/NOR)

Not in the original brief, added per user request — the site is bilingual:

- Astro's built-in i18n routing: `defaultLocale: 'en'` at `/` (no prefix), `no`
  (Bokmål) at `/no/*`. Config lives in `astro.config.mjs`.
- All copy lives in one typed dictionary, `src/i18n/ui.ts` (`ui.en` / `ui.no`, same
  shape) — never hardcode English strings in a page or component. Helpers in
  `src/i18n/utils.ts`: `t(lang)`, `localizedPath(pathname, lang)`, `getRouteSlug`.
- Product/brand terms (individual agent names like "Voice Receptionist" or
  "Booking Assistant") stay in English in both locales; everything else (nav,
  headings, body copy, CTAs) is translated.
- Route files under `src/pages/*.astro` and `src/pages/no/*.astro` are thin wrappers
  that just pick `lang` and render a shared content component from
  `src/components/pages/` — that's where the actual markup lives, parametrized by
  `lang`. Add new pages the same way rather than duplicating markup per locale.

## Content rules

- Real copy has not been fully finalized. Where this CLAUDE.md doesn't supply exact
  copy, write clearly-marked placeholder content (e.g. a visible `PLACEHOLDER: ...`
  sentence, not an HTML comment — HTML comments inside a translated string render as
  literal visible text in Astro, they don't get hidden) rather than inventing
  marketing claims, pricing numbers, or team bios that aren't confirmed.
- Never state specific pricing, customer counts, testimonials, awards/analyst
  recognition, or guarantees that haven't been provided — a small/new company can't
  claim "trusted by" logos, industry awards, or customer quotes the way a reference
  site like TrendAI can. Translate that kind of section into honest content (e.g. a
  value-proposition grid) instead of skipping the *visual pattern*, but never invent
  the underlying claim.
- The business activities list and the official business activity description above
  ARE confirmed content — use them directly, they are not placeholders.

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
- `npx astro check` completes with no errors.
- `npm run preview` (or dev server) renders all 10 routes (5 pages × EN/NOR) without
  console errors.
- Every internal nav/footer link resolves; demo CTAs point to `/company#demo`;
  "Try Demo"/login CTAs point to `app.mielikkix.ai`.
- Palette usage matches the token table above — no raw hex outside
  `tailwind.config.mjs`.
- Visually check new icon/gradient combinations in the browser (zoom in on small
  elements) — gradient badges and glow overlays can silently wash out an icon's
  contrast even when the class names look correct.
