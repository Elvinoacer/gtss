# Making GTSS Make Sense
### Public Site Strategy / Five Ws Usability Plan

> A diagnosis and phased plan for fixing the public landing page so local SME owners can answer **Who, What, Where, When, and Why** within seconds of arrival — via a dual-theme architecture, plain-English copy, and a file-by-file change register.

**Prepared for:** Great Thumbs Software Solutions / Nairobi, Kenya  
**Scope:** Public Landing Page / Dual-Theme Rollout  
**Report Date:** June 2026

---

## Table of Contents

1. [Executive Summary](#chapter-1--executive-summary)
2. [The Five Ws Audit](#chapter-2--the-five-ws-audit)
   - 2.1 [Who — the weakest of the five](#21-who--the-weakest-of-the-five)
   - 2.2 [What — products hidden behind codenames](#22-what--products-hidden-behind-codenames)
   - 2.3 [Where — East Africa buried in metadata](#23-where--east-africa-buried-in-metadata)
   - 2.4 [When — timeline encoded as "03"](#24-when--timeline-encoded-as-03)
   - 2.5 [Why — hyperbole instead of proof](#25-why--hyperbole-instead-of-proof)
3. [Root Cause — Why the Sci-Fi Theme Hurts](#chapter-3--root-cause--why-the-sci-fi-theme-hurts)
   - 3.1 [Cognitive load — every label needs translation](#31-cognitive-load--every-label-needs-translation)
   - 3.2 [Trust gap — "Sovereign" reads as parody to a local buyer](#32-trust-gap--sovereign-reads-as-parody-to-a-local-buyer)
   - 3.3 [Accessibility — custom cursor, boot overlay, scanlines](#33-accessibility--custom-cursor-boot-overlay-scanlines)
4. [The Dual-Theme Strategy](#chapter-4--the-dual-theme-strategy)
   - 4.1 [Why dual-theme instead of full retheme](#41-why-dual-theme-instead-of-full-retheme)
   - 4.2 [Technical architecture](#42-technical-architecture)
   - 4.3 [Where each theme lives](#43-where-each-theme-lives)
5. [Landing Page Redesign — Section by Section](#chapter-5--landing-page-redesign--section-by-section)
   - 5.1 [Navbar](#51-navbar--componentslanding-navbartsx)
   - 5.2 [Hero](#52-hero--componentslanding-herotsx)
   - 5.3 [StatsBar](#53-statsbar--componentslanding-statsbartsx)
   - 5.4 [BentoGrid](#54-bentogrid--componentslanding-bentogridtsx)
   - 5.5 [SequenceExecution](#55-sequenceexecution--componentslanding-sequenceexecutiontsx)
   - 5.6 [Final CTA](#56-final-cta--appapagetsx-inline-section)
   - 5.7 [Footer](#57-footer--componentslanding-footertsx)
6. [Rewritten Copy Library](#chapter-6--rewritten-copy-library)
7. [Phased Rollout Plan](#chapter-7--phased-rollout-plan)
   - 7.1 [Phase 1 — Quick wins (1-2 days)](#71-phase-1--quick-wins-1-2-days)
   - 7.2 [Phase 2 — Theme & IA (~1 week)](#72-phase-2--theme--ia-1-week)
   - 7.3 [Phase 3 — Per-page rebuild (ongoing)](#73-phase-3--per-page-rebuild-ongoing)
8. [File-by-File Change Register](#chapter-8--file-by-file-change-register)
9. [Risks, Trade-offs & Open Questions](#chapter-9--risks-trade-offs--open-questions)
   - 9.1 [Risks](#91-risks)
   - 9.2 [Trade-offs](#92-trade-offs)
   - 9.3 [Open questions for the user](#93-open-questions-for-the-user)
10. [Next Steps & Success Metrics](#chapter-10--next-steps--success-metrics)
    - 10.1 [Success metrics](#101-success-metrics)
    - 10.2 [The one-paragraph recommendation](#102-the-one-paragraph-recommendation)

---

## Chapter 1 / Executive Summary

The public landing page of `gtss.vercel.app` is, by its own description, "premium" and "enterprise-grade." To a hotel owner in Nairobi, a retail chain manager in Mombasa, or a church administrator in Kisumu, it reads as something else entirely: a cybersecurity terminal for a classified government programme. The navigation bar brands the company as `GTSS_CORE` with a pulsing status pill reading "ALL SYSTEMS NOMINAL." The hero headline offers "OFFLINE-FIRST SOFTWARE FOR GROWTH" beneath the kicker "System Operational — V4.2 — Clearance: Sovereign." The primary call-to-action is labelled "Initialize Sequence." The footer closes with "Classified — Sovereign Tier — Clearance Required."

None of these phrases answer the five questions a first-time public visitor actually asks: **Who** is this company? **What** do they sell? **Where** do they operate? **When** can I get it? **Why** should I choose them? The company's own internal documents — `GTSS-COMPANY.md`, `THEME.md`, and `redesign.md` — already contain clear, plain-English answers to all five. The landing page simply does not surface them. The aesthetic is doing the talking, and the aesthetic is speaking the wrong language to the wrong audience.

This plan recommends a **dual-theme architecture**: a light, plain-English public theme as the default (navy text on cream, royal-blue CTAs, emerald success states — the palette already documented in `THEME.md`), with the existing dark/gold "premium" theme preserved as an opt-in toggle for the dashboard and the `/enterprise` route. The landing page is the priority scope. The fix is phased so that the highest-impact, lowest-risk changes ship in **Phase 1** (one to two days of copy and structural edits), the theme infrastructure lands in **Phase 2** (approximately one week), and the remaining public pages are rebuilt under the new system in **Phase 3**.

> **The four numbers that should be on the hero (and currently are not, in plain English):**  
> 50+ systems deployed across East Africa / 99.95% target service continuity / 3-week average rollout window / <24-hour response time.  
> These already exist in the codebase as `landingHero` data fields and in `redesign.md` — they are simply rendered as "50+ NODES," "99.95 PCT," "03 WEEKS," and "EA GRID."

---

## Chapter 2 / The Five Ws Audit

### 2.1 Who — the weakest of the five

A first-time visitor cannot tell who GTSS is. The navigation bar brands the company as `GTSS_CORE` (`components/landing/Navbar.tsx`, line 13) — a code name, not a company name. The footer repeats the same code name and adds a fictional legal entity: "GTSS CORE SYSTEMS LLC." (`Footer.tsx`, line 61). The real company name — **Great Thumbs Software Solutions** — appears only in the HTML `<title>` and OpenGraph metadata (`app/layout.tsx`), never in the visible body of the page.

There is no location. The footer says nothing about Nairobi or Kenya. The hero panel displays a HUD cell reading "Node: SECURE / Lat: <12ms / Up: 99.9%" (`Hero.tsx`, lines 55-68) — infrastructure telemetry that signals "datacenter in a foreign country," not "software team in my city." There is no founder, no team, no face. The strongest "Who" signal on the entire page is the pulsing green dot labelled "ALL SYSTEMS NOMINAL," which answers a question nobody asked.

**What the visitor should see:** the full company name — Great Thumbs Software Solutions — in the navbar and footer, a one-line identity statement ("Nairobi-based software company building practical systems for East African businesses"), and a visible location. The company's own `GTSS-COMPANY.md` already states all of this; the page just needs to render it.

### 2.2 What — products hidden behind codenames

The hero offers "PRACTICAL OFFLINE-FIRST SOFTWARE FOR GROWTH" (`Hero.tsx`, line 21) — a category, not a product. The bento grid that follows (`BentoGrid.tsx`) labels itself "PRODUCT_ECOSYSTEM_V5" and "SYSTEM ARCHITECTURE OF THE FUTURE," and lists products under codenames: "Ecclesia Cloud" (the Church Management System), "E-commerce Matrix" (the E-commerce Platform), "JustInTime," and "Restaurant Manager." Only the last name is self-explanatory. A hotel owner looking for an ordering system will not recognise that "Ecclesia Cloud" is for churches, or that "Matrix" is a storefront.

The product subtitles compound the problem: "Resilience Engine," "Offline First," "Commercial Experience" — abstract technical labels rather than the concrete benefit phrases that `GTSS-COMPANY.md` already provides ("QR-based ordering," "kitchen integration," "member database," "M-Pesa ready"). The visitor leaves the page knowing that GTSS sells "modules" and "architectures" without learning whether GTSS sells anything they would actually buy.

### 2.3 Where — East Africa buried in metadata

The StatsBar (`StatsBar.tsx`, line 7) displays "Operations Region: EA / GRID" — a two-letter code that could mean East Africa, Enterprise Architecture, or Electronic Arts. The word "Kenya" does not appear anywhere in the visible landing page. The word "Nairobi" does not appear either. The only geographic signal is buried in `app/layout.tsx` metadata (`keywords: ["Kenya", "Africa"]`) and in `redesign.md` ("Nairobi rooted, deployment focused") — neither of which a browser visitor sees.

For a local SME owner, geography is a trust signal. "Built in Nairobi, serving East Africa" is a stronger opener than "Offline-first software for growth." The current page hides its single most credible differentiator.

### 2.4 When — timeline encoded as "03"

The StatsBar shows "Avg Rollout Window: 03 / WEEKS" — a leading-zero number that reads as a software version, not a duration. The SequenceExecution section (`SequenceExecution.tsx`) lists four deployment steps ("Architecture Mapping," "Core Deployment," "Local Training," "Full Handover") with no time estimate against any of them. A fake terminal block at the bottom of that section animates `> gtss init --project-id="ALPHA_1"` — cosplay, not information.

The visitor cannot answer "when can I be up and running?" The `redesign.md` brief already specifies the answer: "3 weeks average rollout window" and "Response: <24 hrs." Both should be plain-English stats on the hero, not encoded as "03" and hidden in a footer link column.

### 2.5 Why — hyperbole instead of proof

The hero subhead (`Hero.tsx`, lines 25-29) reads: *"Impenetrable architectures engineered for local business resilience. Secure, track, and scale your operations with military-grade precision, even when the network fails."* The final CTA section (`app/page.tsx`, lines 28-38) reads: *"INITIALIZE_PARTNERSHIP / READY TO DOMINATE? / Secure your infrastructure with the most robust offline-first software ecosystem in the region."*

These are marketing adjectives, not reasons. The actual reasons to choose GTSS — all documented in `GTSS-COMPANY.md` — are concrete and falsifiable: offline-first architecture that keeps working when M-Pesa goes down, local payment integration (M-Pesa, Airtel Money, bank transfer, card), hands-on staff training included in deployment, one-time-payment ownership for the Hotel System, and a 3-week rollout. None of these appear on the landing page. The page promises "dominance" and delivers no proof.

### Five Ws — Current vs. Intended

| W | Current (visible on page) | Intended (already in source docs) |
|---|---|---|
| **Who** | `GTSS_CORE`, "GTSS Core Systems LLC," "ALL SYSTEMS NOMINAL," no location, no team | Great Thumbs Software Solutions, Nairobi, Kenya — full name in nav + footer, one-line identity, founder/team |
| **What** | "Practical offline-first software for growth"; products as codenames (Ecclesia Cloud, E-commerce Matrix) | Five named products with plain descriptions: Hotel Ordering, Restaurant Manager, E-commerce, Church Management, JustInTime |
| **Where** | "Operations Region: EA / GRID" — encoded, ambiguous | "Built in Nairobi, serving East Africa" — explicit, repeated in hero, stats, footer |
| **When** | "Avg Rollout Window: 03 / WEEKS"; animated terminal block; no response time | "3-week average rollout, <24-hour response, live in days not months" |
| **Why** | "Impenetrable architectures," "military-grade precision," "DOMINATE?" — adjectives | Offline-first for unreliable networks, M-Pesa/Airtel built in, hands-on training, one-time or subscription, 3-week rollout |

---

## Chapter 3 / Root Cause — Why the Sci-Fi Theme Hurts

The Five Ws gap is not a copywriting accident. It is the predictable output of a deliberate visual system that was designed for a different audience than the one the site now serves. Three reinforcing factors turn a stylish theme into a comprehension problem.

### 3.1 Cognitive load — every label needs translation

The site forces a translation step between every label and its meaning:

- "Initialize Sequence" means "Browse Products"
- "View Architecture" means "See the Restaurant Manager demo"
- "Intelligence" (in the navbar) means "About"
- "DEPLOY SYSTEM" means "Contact Us"
- "REQUEST SYSTEM ACCESS" means "Get in touch"

A returning enterprise buyer who already knows the brand may enjoy the theatre. A first-time hotel owner who has thirty seconds between customers does not. Each cryptic label is a small tax; cumulatively they read as "this is not for me."

The tax is heaviest on the conversion-critical paths. The only navigation CTA is "DEPLOY SYSTEM," which routes to `/contact`. There is no "Pricing" link, no "About" link (only "Intelligence"), and no "Sign In" link in the navbar — even though `redesign.md` explicitly specifies that the desktop nav should read "Products / About / Pricing / Contact" with "Sign In" and "Schedule a Call" on the right. **The current implementation deviates from the locked content spec.**

### 3.2 Trust gap — "Sovereign" reads as parody to a local buyer

The recurring use of "Sovereign," "Classified," "Clearance Required," "DOMINATE," and "military-grade precision" reads, to a Kenyan SME owner, as either a parody of American defense-contractor marketing or a privacy red flag. Neither interpretation builds trust. The footer line "Classified — Sovereign Tier — Clearance Required" (`Footer.tsx`, line 64), rendered in red with a glowing red dot, looks like a security warning — the kind of banner a browser shows when a certificate has expired. A visitor who does not read English fluently may simply leave.

The real trust signals — 50+ deployments, local payment integration, hands-on training, one-time ownership — are documented in `GTSS-COMPANY.md` and `redesign.md` but never rendered. The page trades credible, verifiable claims for theatrical ones.

### 3.3 Accessibility — custom cursor, boot overlay, scanlines

`app/layout.tsx` (lines 133-153) wraps the entire `<body>` — every public page and every dashboard page — in three decorative layers: `BootOverlay` (a boot-up animation that plays on every load), `CustomCursor` (a custom gold cursor ring that hides the native cursor via `cursor: none`), and `BackgroundCanvas` (an animated background canvas). The landing-page class also applies `landing-grain` and `landing-scanline` overlays globally.

These layers carry real costs:
- The custom cursor breaks on touch devices (no hover state) and confuses screen-reader users
- The boot overlay adds latency before any content is visible
- The animated canvas consumes CPU on low-end Android devices common in the target market
- The scanline and grain overlays reduce text contrast

None of these are accessibility issues a visitor can articulate — they simply feel like "the site is slow and weird," and the visitor leaves.

---

## Chapter 4 / The Dual-Theme Strategy

The recommendation is **not to delete** the dark/gold theme. It is to demote it. The public site should default to a light, plain-English theme that prioritises comprehension for first-time SME visitors. The existing dark/gold theme should be preserved as an opt-in "Premium view" toggle, available on the landing page and active by default on the `/enterprise` route and inside the dashboard. One codebase, two themes, sensible defaults.

### 4.1 Why dual-theme instead of full retheme

| Option | Description | Assessment |
|---|---|---|
| A — Keep dark, fix content | Leave the sci-fi aesthetic, fix only the copy | Leaves accessibility and cognitive-load problems intact |
| **B — Dual-theme (recommended)** | **Light default for public, dark for dashboard/enterprise** | **Largest comprehension payoff with bounded maintenance cost** |
| C — Full retheme | Discard dark/gold entirely | Loses the only visual asset the site has |

The dual-theme approach captures the clarity win for the audience that needs it most (first-time SME owners) while preserving the premium feel for the audience that values it (enterprise buyers, dashboard users).

### 4.2 Technical architecture

The implementation is straightforward because the codebase already has two parallel theme systems — they are just not wired to a toggle. `app/globals.css` defines a Tailwind v4 `@theme` block with a navy/royal-blue palette intended for the dashboard. `app/landing.css` defines a separate `:root` block with the dark/gold palette for the landing page.

The fix is a `ThemeProvider` that sets `data-theme` on the `<html>` element, plus a single new `app/theme.css` that scopes both palettes under attribute selectors. The provider reads the user's preference from `localStorage` (with a `prefers-color-scheme` fallback) and defaults to `light` for all `/(public)` routes and `dark` for `/dashboard/*` and `/enterprise`. A `ThemeToggle` component in the navbar lets any visitor switch.

#### Variable Mapping — dark vs. light theme

| CSS variable | Current (dark) — `app/landing.css` | New (light) — `app/theme.css [data-theme=light]` |
|---|---|---|
| `--black` | `#030508` (page bg) | `#F8FAFC` (cream bg) |
| `--gold` | `#C9A045` (accent) | `#2563EB` (royal blue CTA) |
| `--text` | `#EDE8DF` (light on dark) | `#0F172A` (navy on cream) |
| `--text-muted` | `#6b7080` | `#6B7280` |
| `--border` | `rgba(201,160,69,0.15)` | `rgba(15,23,42,0.10)` |
| `--green` | `#00FF9D` (neon) | `#10B981` (emerald) |
| `--cyan` | `#00D8F0` (neon) | `#0EA5E9` (sky) |
| body class | `landing-page` + grain + scanline (global) | removed from public; kept on `/enterprise` |

### 4.3 Where each theme lives

| Route | Default theme | Rationale |
|---|---|---|
| `app/(public)/` and all public pages | Light | First-time SME owners need clarity |
| `/dashboard/*` | Dark | Staff work all day; dense, technical interface |
| `/enterprise` | Dark | Premium feel is part of the value proposition |

The toggle is always available. This segmentation matches the audience split precisely.

---

## Chapter 5 / Landing Page Redesign — Section by Section

### 5.1 Navbar — `components/landing/Navbar.tsx`

**Current problems:** Three cryptic links ("Restaurant Manager," "All Products," "Intelligence"), single CTA "DEPLOY SYSTEM," brand mark reads "GTSS_CORE," status pill "ALL SYSTEMS NOMINAL."

**Changes:**
- Replace brand text `GTSS_CORE` → **Great Thumbs Software Solutions** (or GTSS with a subtitle on hover)
- Replace three cryptic nav links with the locked spec from `redesign.md`: **Products / Pricing / About / Contact**
- Replace "DEPLOY SYSTEM" with two right-aligned actions: **Sign In** (ghost button, `/login`) and **Schedule a Call** (primary button, `/contact`)
- Remove the "ALL SYSTEMS NOMINAL" status pill; replace with **"Nairobi, Kenya"** location chip
- Add the `ThemeToggle` component next to the CTAs

**Ready-to-paste copy:**
```
Brand: Great Thumbs Software Solutions
Links: Products · Pricing · About · Contact
Actions: Sign In (ghost) · Schedule a Call (primary, gold/navy)
Chip: Nairobi, Kenya
```

### 5.2 Hero — `components/landing/Hero.tsx`

**Current problems:** Kicker reads "System Operational — V4.2 — Clearance: Sovereign." Headline is "PRACTICAL / OFFLINE-FIRST / SOFTWARE FOR GROWTH." Body promises "impenetrable architectures" and "military-grade precision." Primary CTA is "Initialize Sequence." HUD panel shows infrastructure telemetry.

**Changes:**
- Drop kicker; replace with one-line identity: **"Nairobi-based software for East African businesses"**
- Rewrite headline to answer Who + What in one breath
- Rewrite body to lead with concrete benefits, not adjectives
- Rename CTAs: primary **"Explore Products"** (`/products`), secondary **"Request a Demo"** (`/contact`)
- Remove HUD cells; replace with three plain-English proof chips: **Offline-first · M-Pesa ready · Deployment included**
- Remove scan-line animation and `mix-blend-luminosity` filter on hero image

#### Hero Copy — Before and After

| Block | Before (current) | After (recommended) |
|---|---|---|
| Kicker | System Operational — V4.2 — Clearance: Sovereign | Nairobi-based software for East African businesses |
| Headline | PRACTICAL OFFLINE-FIRST SOFTWARE FOR GROWTH | Software that keeps your business running — even when the network doesn't. |
| Body | Impenetrable architectures engineered for local business resilience. Secure, track, and scale your operations with military-grade precision, even when the network fails. | GTSS builds practical software for hotels, restaurants, shops, and churches across East Africa. Our systems work offline, accept M-Pesa and Airtel Money out of the box, and come with hands-on staff training — so your team is productive on day one, not week three. |
| Primary CTA | Initialize Sequence → `/products` | Explore Products → `/products` |
| Secondary CTA | View Architecture → `/products/restaurant-manager/experience` | Request a Demo → `/contact` |
| Proof chips | HUD: Node SECURE / Lat <12ms / Up 99.9% | Offline-first · M-Pesa ready · Deployment included |

### 5.3 StatsBar — `components/landing/StatsBar.tsx`

The fix is purely textual — the layout can stay. Replace each label and unit with plain English.

| Stat | Current | Rewritten |
|---|---|---|
| Deployments | 50+ / NODES | 50+ / Systems Deployed |
| Uptime | 99.95 / PCT | 99.95% / Target Uptime |
| Rollout | 03 / WEEKS | 3 Weeks / Avg Rollout |
| Region | EA / GRID | East Africa / Operating Region |

### 5.4 BentoGrid — `components/landing/BentoGrid.tsx`

**Current problems:** Section header reads "PRODUCT_ECOSYSTEM_V5 / SYSTEM ARCHITECTURE OF THE FUTURE." Products listed under codenames. Card descriptions use abstract subtitles ("Resilience Engine").

**Changes:**
- Section tag: "PRODUCT_ECOSYSTEM_V5" → **"OUR PRODUCTS"**
- Section title: "SYSTEM ARCHITECTURE OF THE FUTURE" → **"Software for the way East Africa actually works."**
- Section description: replace "precision-engineered software modules designed to dominate local market complexities" → **"Ready-to-deploy systems for hospitality, retail, churches, and service teams. Each one works offline and accepts local payments."**
- Product names: render plain name in card title; codename as small subtitle if desired
  - Ecclesia Cloud → **Church Management System**
  - E-commerce Matrix → **E-commerce Platform**
  - Hotel Ordering System, Restaurant Manager, JustInTime (already plain)
- Card descriptions: replace abstract subtitles with concrete benefit from `GTSS-COMPANY.md`

### 5.5 SequenceExecution — `components/landing/SequenceExecution.tsx`

**Current problems:** "FROM SCOPE TO SOVEREIGNTY," fake `DEPLOYMENT_CLI` terminal block, no time estimates on steps.

**Changes:**
- Section tag: "SEQUENCE_EXECUTION" → **"HOW WE DELIVER"**
- Section title: "FROM SCOPE TO SOVEREIGNTY" → **"From first call to live system in three weeks."**
- Delete the fake `DEPLOYMENT_CLI` terminal block entirely
- Add time chips to each step:

| Step | Time |
|---|---|
| 01 Architecture Mapping | Days 1–3 |
| 02 Core Deployment | Days 4–14 |
| 03 Local Training | Days 15–18 |
| 04 Full Handover | Day 21 |

### 5.6 Final CTA — `app/page.tsx` (inline section)

**Current:** "INITIALIZE_PARTNERSHIP / READY TO DOMINATE? / Secure your infrastructure with the most robust offline-first software ecosystem in the region / REQUEST SYSTEM ACCESS"

**Ready-to-paste copy:**
```
Kicker: Next Step
Headline: "If your business is ready for software that actually fits, let's talk."
Body: "From a single workflow to a full operating stack, GTSS helps East African teams
       launch systems that work the first day and keep working."
Primary button: "View Our Products" → /products
Secondary button: "Contact Us" → /contact
```

### 5.7 Footer — `components/landing/Footer.tsx`

**Current problems:** Brand reads "GTSS_CORE." Bottom bar reads "GTSS CORE SYSTEMS LLC." Red banner: "Classified — Sovereign Tier — Clearance Required."

**Changes:**
- Brand name: "GTSS_CORE" → **"Great Thumbs Software Solutions"**
- Brand description: replace "world's most demanding local networks / Built for permanence" → **"Practical software for hotels, restaurants, shops, churches, and service teams across East Africa. Built in Nairobi."**
- Footer company line: "GTSS CORE SYSTEMS LLC." → **"Great Thumbs Software Solutions."**
- **Delete** the "Classified — Sovereign Tier — Clearance Required" red banner entirely
- Remove "ALL SYSTEMS NOMINAL" pill; replace with footer stats: **"Response: <24 hrs · Markets: East Africa · Delivery: Product + rollout"**
- Rename "Security" link column → **"Trust & Legal"**; add Pricing, FAQ, Accessibility links
- Fix "Careers" link (currently routes to `/contact`)

---

## Chapter 6 / Rewritten Copy Library

All answers are drawn directly from `GTSS-COMPANY.md` and `redesign.md` — no new claims invented.

| W | Question | Plain-English answer | Where to place it |
|---|---|---|---|
| **Who** | Who is GTSS? | Great Thumbs Software Solutions — a Nairobi-based software company building practical systems for East African businesses. | Navbar brand, hero kicker, footer brand block, `/about` hero |
| **What** | What does GTSS sell? | Five ready-to-deploy products: Hotel Ordering System, Restaurant Manager, E-commerce Platform, Church Management System, and JustInTime (service marketplace). Plus custom enterprise builds. | Hero body, BentoGrid cards, `/products` page |
| **Where** | Where does GTSS operate? | Built and headquartered in Nairobi, Kenya. Deployments across East Africa. On-site training included in the region. | Navbar chip, hero kicker, StatsBar region stat, footer |
| **When** | When can I go live? | 3-week average rollout from first call to full handover. <24-hour response on support requests. Ready-to-deploy products can be live in days, not months. | StatsBar, SequenceExecution step chips, `/pricing` |
| **Why** | Why choose GTSS? | Offline-first architecture that keeps working when the network drops. Local payment integration (M-Pesa, Airtel Money, bank, card) out of the box. Hands-on staff training included. One-time-payment ownership or subscription. Built by a local team that understands East African operating conditions. | Hero proof chips, Features section, `/enterprise` |

---

## Chapter 7 / Phased Rollout Plan

### 7.1 Phase 1 — Quick wins (1-2 days)

**Goal:** Answer the Five Ws in plain English on the landing page without touching the theme system.

- `components/landing/Navbar.tsx` — rename brand, replace 3 cryptic links, replace "DEPLOY SYSTEM" with Sign In + Schedule a Call, delete status pill
- `components/landing/Hero.tsx` — replace kicker, headline, body, CTAs, and proof chips; remove HUD cells
- `components/landing/StatsBar.tsx` — rewrite labels and units to plain English
- `components/landing/BentoGrid.tsx` — rewrite section header and description; ensure plain product names
- `components/landing/SequenceExecution.tsx` — rewrite section title, delete `DEPLOYMENT_CLI` block, add time chips
- `app/page.tsx` — rewrite final CTA section
- `components/landing/Footer.tsx` — rename brand, delete Classified/Sovereign banner, fix legal name, add footer stats
- `app/layout.tsx` — remove `BootOverlay`, `CustomCursor`, `BackgroundCanvas` from global body; remove `landing-grain` and `landing-scanline` classes

> **Phase 1 Exit Criterion:** A first-time visitor can answer Who, What, Where, When, and Why within 30 seconds, reading only the hero, stats bar, and footer. No "INITIALIZE," "SOVEREIGN," "CLASSIFIED," "DOMINATE," or "GTSS_CORE" strings remain on the public landing page. The custom cursor is gone.

### 7.2 Phase 2 — Theme & IA (~1 week)

**Goal:** Ship the dual-theme architecture and make the light theme the default for all public routes.

- **Create** `app/theme.css` — scope dark/gold palette under `[data-theme="dark"]` and navy/cream palette under `[data-theme="light"]`
- **Create** `components/providers/ThemeProvider.tsx` — reads `localStorage` + `prefers-color-scheme`, sets `data-theme` on `<html>`, defaults to light for `/(public)` and dark for `/dashboard` + `/enterprise`
- **Create** `components/landing/ThemeToggle.tsx` — accessible sun/moon toggle for the navbar
- **Edit** `app/(public)/layout.tsx` — wrap children in `<ThemeProvider>`
- **Edit** `app/layout.tsx` — remove global `landing-page` class from `<body>`
- **Refactor** `app/landing.css` and `app/globals.css` into unified `app/theme.css`
- **Re-skin** landing page components to use new CSS variables
- **Set** `/enterprise` to default dark via route-aware provider default

> **Phase 2 Exit Criterion:** Landing page renders light by default. Toggle works. Dashboard and `/enterprise` render dark by default. Both themes use the same component code. No FOUC on load.

### 7.3 Phase 3 — Per-page rebuild (ongoing)

**Goal:** Carry the Five-Ws audit and light theme across every remaining public page.

Priority order:
1. `/products` and `/products/[id]` — plain product names, proof chips, light theme
2. `/about` — render founder, team, Nairobi location, mission from `GTSS-COMPANY.md`
3. `/contact` — Nairobi address, phone, email, response SLA, plain form
4. `/pricing` — three pricing models (one-time, subscription, platform access), KES/USD dual currency
5. `/demo`, `/enterprise` — keep dark on `/enterprise`, light on `/demo`
6. `/faq`, `/security`, `/accessibility`, legal pages — light theme, plain English

> **Phase 3 Exit Criterion:** Every route under `app/(public)/` passes the Five-Ws audit. Light theme is the default everywhere except `/enterprise`. No cryptic strings ("SOVEREIGN," "CLASSIFIED," "INITIALIZE") remain anywhere in the public surface.

### Rollout Timeline at a Glance

| Phase | Scope | Effort | Risk | Exit criterion |
|---|---|---|---|---|
| **Phase 1** | Landing page copy + structural fixes | 1–2 days | Low (text edits only) | Five Ws answered in 30s |
| **Phase 2** | Dual-theme architecture + nav IA | ~1 week | Medium (CSS refactor) | Light theme default, toggle works, no FOUC |
| **Phase 3** | All remaining public pages | 2–4 weeks | Low (repeatable pattern) | All public routes pass Five-Ws audit |

---

## Chapter 8 / File-by-File Change Register

| File path | Phase | Change type | Description |
|---|---|---|---|
| `components/landing/Navbar.tsx` | 1 | Copy + structure | Rename brand; replace 3 cryptic links with Products/Pricing/About/Contact; add Sign In + Schedule a Call; remove status pill |
| `components/landing/Hero.tsx` | 1 | Copy + structure | Rewrite kicker/headline/body/CTAs; remove HUD cells and scan-line animation |
| `components/landing/StatsBar.tsx` | 1 | Copy | Rewrite labels and units to plain English (50+ Systems Deployed, etc.) |
| `components/landing/BentoGrid.tsx` | 1 | Copy | Rewrite section header/description; ensure plain product names on cards |
| `components/landing/SequenceExecution.tsx` | 1 | Copy + structure | Rewrite section title; delete `DEPLOYMENT_CLI` terminal block; add time chips to steps |
| `app/page.tsx` | 1 | Copy | Rewrite final CTA section (`INITIALIZE_PARTNERSHIP` → plain English) |
| `components/landing/Footer.tsx` | 1 | Copy + structure | Rename brand; delete Classified/Sovereign banner; fix legal name; add footer stats |
| `app/layout.tsx` | 1 | Structure | Remove `BootOverlay`, `CustomCursor`, `BackgroundCanvas` from global body; remove `landing-grain`/`landing-scanline` classes |
| `app/theme.css` | 2 | New file | Unified theme tokens scoped under `[data-theme=light]` and `[data-theme=dark]` |
| `components/providers/ThemeProvider.tsx` | 2 | New file | Route-aware theme provider; `localStorage` + `prefers-color-scheme`; sets `data-theme` on `<html>` |
| `components/landing/ThemeToggle.tsx` | 2 | New file | Accessible sun/moon toggle for the navbar |
| `app/(public)/layout.tsx` | 2 | Structure | Wrap children in `<ThemeProvider>` |
| `app/landing.css` | 2 | Refactor | Move `:root` dark vars under `[data-theme=dark]`; delete grain/scanline/cursor rules |
| `app/globals.css` | 2 | Refactor | Reconcile `@theme` block with new `theme.css`; remove duplicate tokens |
| `app/(public)/products/page.tsx` | 3 | Copy + theme | Apply plain product names, proof chips, light theme |
| `app/(public)/products/[id]/page.tsx` | 3 | Copy + theme | Audit product detail page for cryptic copy; apply light theme |
| `app/(public)/about/page.tsx` | 3 | Copy + theme | Render founder, team, Nairobi location, mission from `GTSS-COMPANY.md` |
| `app/(public)/contact/page.tsx` | 3 | Copy + theme | Show address, phone, email, response SLA, plain form |
| `app/(public)/pricing/page.tsx` | 3 | Copy + theme | Surface 3 pricing models + KES/USD dual currency |
| `app/(public)/enterprise/page.tsx` | 3 | Theme only | Keep dark theme as default (premium feel); audit copy |
| `app/(public)/faq/page.tsx` | 3 | Copy + theme | Light theme; plain English Q&A |
| `app/(public)/security/page.tsx` | 3 | Copy + theme | Light theme; replace Sovereign/Classified language |
| `app/(public)/privacy`, `terms`, `cookies` | 3 | Theme | Apply light theme; light copy review |

---

## Chapter 9 / Risks, Trade-offs & Open Questions

### 9.1 Risks

**Loss of premium feel.** The dark/gold theme is the site's most distinctive visual asset. Moving it to a toggle may feel to returning enterprise visitors like a downgrade.  
*Mitigation:* Keep dark theme as default on `/enterprise` and the dashboard. Make the toggle prominent. The light theme should feel equally premium — navy on cream with gold accents is a deliberate editorial choice, not a stripped-down default.

**SEO impact of rewriting hero copy.** The current hero may rank for a small set of head terms. Rewriting it changes the keyword surface.  
*Mitigation:* The new headline still contains "software" and the body still contains "offline," "M-Pesa," "East Africa," and vertical names. The metadata in `app/layout.tsx` (which already targets the right keywords) is unchanged. Net SEO impact should be neutral to positive, as the new copy is longer and more specific.

**Regression from removing global overlays.** `BootOverlay`, `CustomCursor`, and `BackgroundCanvas` are imported in `app/layout.tsx` and may be referenced by other pages.  
*Mitigation:* `grep` the codebase for each import before removing. If any dashboard page depends on them, move imports into `app/(public)/layout.tsx` or conditionally render based on route. The custom cursor in particular should be **deleted, not relocated** — it breaks touch devices and offers no benefit.

### 9.2 Trade-offs

**Dual-theme maintenance cost.** Two themes means two sets of values to keep in sync when a new component is added.  
*Acceptance:* The cost is bounded because the themes share the same component code — only CSS variables differ. A new component that uses `var(--text)` and `var(--bg)` automatically works in both themes.

**Theme navigation confusion.** A visitor who switches to dark and then navigates to `/products` may not understand why the page stayed light (if the provider resets per-route).  
*Acceptance:* The toggle should be sticky across the session once the user explicitly chooses, overriding the route default. Route defaults only apply when the user has not expressed a preference.

### 9.3 Open questions for the user

1. **Should `/enterprise` keep dark as the default?** Recommendation: yes — enterprise buyers expect polish; the dark theme delivers it.
2. **Should the dashboard also get the light theme option?** Recommendation: yes, as a toggle, but keep dark as the dashboard default. Staff work in the dashboard all day; dark reduces eye strain for long sessions.
3. **Is "GTSS_CORE" retired entirely, or kept as a sub-brand codename?** Recommendation: retire it from the public surface. If it has internal meaning, keep it in the dashboard and internal docs only.
4. **Should the Restaurant Manager "experience" page (`/products/restaurant-manager/experience`) keep its immersive dark treatment?** Recommendation: yes — it is a product showcase, not a top-of-funnel page. Link to it from the product detail page, not from the hero.

---

## Chapter 10 / Next Steps & Success Metrics

The recommended sequence:
1. Confirm the dual-theme direction and the answers to the four open questions in Chapter 9.3
2. Ship Phase 1 this week — two days of copy edits and one structural change to `app/layout.tsx`, with no theme infrastructure risk
3. Measure Phase 1 impact for one week using the metrics below
4. Begin Phase 2 once the metrics confirm the direction
5. Sequence Phase 3 page-by-page in the priority order in Chapter 7.3

### 10.1 Success Metrics

| Metric | Baseline (current) | Target (90 days post-Phase 1) | How to measure |
|---|---|---|---|
| Bounce rate on `/` | Unknown (set baseline in GA4) | Decrease of 15–25% | GA4 / Vercel Analytics |
| Avg time on landing page | Unknown (set baseline) | Increase of 30s+ | GA4 engagement time |
| Conversion: `/` → `/contact` form submit | Unknown (set baseline) | Increase of 20–40% | Lead form submissions / week |
| Leads per week | Current count from `/dashboard/leads` | Double | Leads table in dashboard |
| Qualitative comprehension | Not measured | 5/5 SME owners can state Who/What/Where/When/Why after 30s | 5-user walkthrough test |
| Cryptic-string count on public surface | ~15+ instances of SOVEREIGN/CLASSIFIED/INITIALIZE/DOMINATE | 0 | `grep` across `app/(public)/` + `components/landing/` |

### 10.2 The one-paragraph recommendation

Start Phase 1 tomorrow. It is the cheapest, safest change in the plan and it addresses the single most damaging problem on the site: public visitors cannot tell who GTSS is, what GTSS sells, where GTSS operates, when they can go live, or why they should choose GTSS — because the landing page is too busy performing "premium" to answer any of those questions in plain English. Fix the copy, kill the overlays, correct the legal name, and the page will already be dramatically more useful to the audience GTSS actually serves. The dual-theme architecture in Phase 2 then gives the company a sustainable way to serve both audiences — local SME owners and enterprise buyers — from one codebase, without forcing either to translate the other's vocabulary. **The dark theme stays. It just stops being the only option.**

---

*Strategy Report · June 2026 · Great Thumbs Software Solutions / Nairobi, Kenya*