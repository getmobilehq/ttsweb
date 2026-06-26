# TTS Nigeria — V2 Multi-Page Site · Claude Code Build Handoff

**Owner:** Joseph Agunbiade (Pillar 2 Lead, Univelcity)
**Live v1:** https://ttsweb.netlify.app · **Repo:** https://github.com/getmobilehq/ttsweb
**This task:** Evolve the live single-page site into a **multi-page V2** with a new content model and a dual (applicant + partner) audience.

---

## 0. Inputs & precedence

| File | Role |
|------|------|
| `tts-nigeria-v2.jsx` | **Visual + content + IA source of truth.** Port verbatim. |
| `TTS_logo_TTS_Green.svg` | Official mark (reuse the cropped `TtsMark` component). |
| `HANDOFF_V2.md` (this file) | Production spec — architecture, routing, integrations, governance. |

**Precedence:** this spec governs architecture & integrations; the prototype governs layout, copy, and styling. The prototype uses client-side view-switching for the sandbox — **production uses real Next.js file routes** (§3). All v1 brand tokens, the contrast rule, and comms governance still apply (restated in §6–§7).

---

## 1. What changed from v1 (the delta)

1. **Applications are open.** New co-primary CTA **"Apply for free"** sits alongside "Partner with us" sitewide, plus a top **announcement ribbon**.
2. **Dual audience.** The site now serves *applicants (young women 18–35)* and *partners* equally.
3. **Five audience segments** — women, Nigerian BPOs, international BPOs, Nigerian government, international government — rendered as **stacked scroll sections** with alternating backgrounds, fronted by jump-to chips ("Who we serve").
4. **Multi-page.** Five routes: **Home, About, Stories, Programmes, Insights.**
5. **New content blocks:** Purpose / Vision / Mission; "The impact we're building" (stats + what-this-enables + four stakeholder benefit groups + 12+ states footprint); **Fraud-prevention band** ("TTS Nigeria is free. Always free.").
6. **Metrics updated:** `30,000` enabled · `25,000` connected · **`15%` combined disability & displacement** (replaces v1's split 10% PWD / 5% IDP) · **`12+` states**.
7. **Copy fix:** the source's final line read "TTTS" and varied tagline punctuation — corrected to **TTS** and standardised to `Inclusive opportunities · Local impact · Global relevance`.

---

## 2. Routes & content status

| Route | Status | Notes |
|-------|--------|-------|
| `/` (Home) | **Content-complete** | All V2 copy final in the prototype. |
| `/about` | Content-complete | Purpose/Vision/Mission + impact infrastructure. |
| `/stories` | **Scaffold** | Layout + filters ready; needs real stories (see §5 CMS). |
| `/programmes` | **Scaffold** | Course/state/cohort layout ready; needs real programme data. |
| `/insights` | **Scaffold** | Article grid + newsletter UI ready; needs CMS + email provider. |

Scaffold pages ship with placeholder cards clearly marked; do not invent real story/article content — wire them to data sources in a follow-up.

---

## 3. Architecture (Next.js App Router)

Convert the prototype's state-routing into real routes:

```
app/
  layout.tsx              // <html lang="en">, next/font, Nav, Footer, base metadata
  page.tsx                // Home
  about/page.tsx
  stories/page.tsx
  programmes/page.tsx
  insights/page.tsx
  globals.css             // tokens + base
  opengraph-image.tsx · icon.png · sitemap.ts · robots.ts
components/
  Nav.tsx ('use client')          // active-route highlight via usePathname; mobile menu
  Footer.tsx
  ui/{TtsMark,Icon,Button,Reveal}.tsx   // Reveal is 'use client' (IntersectionObserver)
  home/{Ribbon,Hero,AudienceSection,PVM,Impact,FraudBand,ExploreTrio,FinalCta}.tsx
lib/
  content.ts              // ALL copy + data arrays (audiences[], stakeholders[], stats[], courses[], states[])
  links.ts                // APPLY_URL, MAIL, FRAUD, social — single source for CTAs
```

- **Nav active state:** use `usePathname()`, not local state.
- **In-page jump chips** (Home "Who we serve") use anchor IDs + `scroll-margin-top`.
- **`AudienceSection`** is one props-driven component rendered five times (`{label,title,body,cta,href,tone,flip}`).
- **`Reveal`** wraps blocks; respects `prefers-reduced-motion`.

---

## 4. Integrations & links (`lib/links.ts`)

| Link | Value | Action needed |
|------|-------|---------------|
| `APPLY_URL` | **placeholder `#apply`** | **Confirm the real application-portal URL.** Put in env (`NEXT_PUBLIC_APPLY_URL`). This is the site's top conversion path — it must be live before launch. |
| `MAIL` | `mailto:partnership@ttsnigeria.org` | Partner / contact / collaborate CTAs. |
| `FRAUD` | **placeholder `mailto:report@ttsnigeria.org`** | **Confirm the real fraud-report channel** (dedicated inbox or form). |
| Newsletter (Insights) | UI only | Wire to email provider (e.g. Mailchimp/Resend) via an API route; no PII in query strings. |

No other backend in this pass. If the apply portal is an external service, link out; if it's to be hosted here, that's a separate scoped build with its own PII/consent review (tie to the programme's RoPA + candidate-consent framework).

---

## 5. Follow-on content systems (scope as Phase 2 unless prioritised)

- **CMS** (Sanity/Contentful) feeding Stories, Insights, and Programmes/cohorts so the comms team publishes without deploys. `lib/content.ts` is structured to migrate cleanly.
- **Programmes data:** real courses, participating states, and cohort dates/locations + open/closed status.
- **Newsletter** + analytics (consent-gated, privacy-first).

---

## 6. Brand system (unchanged — apply exactly)

Tokens: `--green-900 #003726 · --green-800 #004931 · --green #00B75B · --lemon #8FC14E · --yellow #FDC00D · --cream #FFF5CC · --ink #16241D · --muted #5B6B62 · --line #E7EDE9`. Display **Bricolage Grotesque**, body **Inter** (via `next/font`). Radii 14–26px, sentence case, **no left-bar accent stripes**, generous whitespace.

> **Contrast rule (non-negotiable):** brand green `#00B75B` fails WCAG AA for text on white. Use it only for CTA fills (dark text on top) and large display accents; route green *text* through `#004931`. On dark sections, accents are `--lemon` / `--yellow`.

**Fraud band** is a deliberate safeguarding element — keep its prominence (yellow-bordered card, shield icon, clear "always free" message). Do not bury it.

---

## 7. Comms governance (read before any public deploy)

- **Two-week pre-approval** before public launch. Use a **Netlify deploy preview** (not the production domain) for internal/comms review.
- The **Mastercard Foundation**, if ever referenced, appears in **body copy, never headlines**, and is **never abbreviated**. V2 copy does not name the funder — keep it that way unless comms instructs.
- Frame as a **consortium programme deliverable** (Tech4Dev prime + Univelcity and partners).
- Official `@ttsnigeria.org` addresses only.

---

## 8. Non-functional / Definition of Done

- [ ] Lighthouse ≥ **95** (Perf/A11y/BP/SEO) on mobile, all five routes.
- [ ] **WCAG 2.1 AA:** contrast rule enforced, visible focus, full keyboard nav (incl. mobile menu + jump chips), image `alt`, reduced-motion respected.
- [ ] Per-route `metadata` (title/description/canonical) + OG image; `sitemap.ts`, `robots.ts`; JSON-LD `Organization`.
- [ ] `next build` clean, ESLint passes, zero console errors, CLS ~0 (`next/font`, sized `next/image`).
- [ ] Responsive 360px → 1440px+; tested Chrome/Safari/Firefox.
- [ ] `APPLY_URL` and `FRAUD` resolved to real destinations (or explicitly stubbed with a tracked TODO if launching soft).
- [ ] Copy matches prototype verbatim; metrics are 30,000 / 25,000 / 15% / 12+.

---

## 8a. Photography asset manifest

Optimised WebP assets are provided in `/images/` (1600px long edge, q82, ~2MB total). Drop into `public/images/` and serve via `next/image` (explicit width/height, `priority` on the hero, lazy elsewhere, real `alt`).

| File | Slot | Alt (suggested) |
|------|------|------|
| `hero.webp` | Home hero | Young Nigerian women collaborating in a modern workplace |
| `women.webp` | "For women" segment | A young Nigerian woman smiling |
| `bpo-ng.webp` | "Nigerian BPOs" segment | Colleagues collaborating in a Nigerian office |
| `bpo-intl.webp` | "International BPOs" segment | A professional team in a bright modern office |
| `gov-ng.webp` | "Nigerian government" segment | A group of Nigerian women, including wheelchair users |
| `gov-intl.webp` | "International government" segment | A diverse group of professional women |
| `story-1/2/3.webp`, `partner.webp` | Stories grid | Per-story captions |

**Two flags before public launch:**

1. **Stock/illustrative vs. real.** This set is illustrative. It's fine for the hero and audience segments. The **Stories of impact** section, however, presents *named, real participants and employers* — using illustrative imagery there misrepresents real outcomes. Those slots must use **real, consent-cleared photography** of actual participants, governed by the programme's candidate-consent framework and safeguarding rules (no identifying a minor; consent on file before publication).
2. **Visible third-party text to crop/replace.** `bpo-ng.webp` (source 1) contains "Innovate Hub" wall/mug branding; `partner.webp` (source 8) shows a "Maria Nacola" nameplate; a couple have incidental on-screen UI text. Crop these out or swap before launch — they read as another organisation's branding.

Originals are the source of truth; regenerate at higher resolution if a slot needs it.

---

## 9. Deployment (Netlify — matches current setup)

```toml
# netlify.toml
[build]
  command = "next build"
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Workflow: branch `v2` off `getmobilehq/ttsweb` → build → open PR → **Netlify deploy preview** for internal + comms sign-off → merge to production only after approval. Set `NEXT_PUBLIC_APPLY_URL` and any provider keys in Netlify env vars.

---

## 10. Build sequence for Claude Code

1. Branch `v2`; add `next/font`, port tokens to `tailwind.config.ts` + `globals.css`.
2. Build `lib/links.ts` and `lib/content.ts` from the prototype.
3. Build `ui/` primitives (`TtsMark`, `Icon`, `Button`, `Reveal`) and shared `Nav` (usePathname) + `Footer`.
4. Build Home section components in order (Ribbon → Hero → 5× AudienceSection → PVM → Impact → FraudBand → ExploreTrio → FinalCta).
5. Build `/about` (full) and the three scaffold routes (`/stories`, `/programmes`, `/insights`).
6. Wire `next/image` against `/public/images/` placeholders; add metadata/OG/sitemap/robots/favicons.
7. Run the §8 checklist until green; update README.
8. Push; open PR; create Netlify preview for sign-off. **Do not auto-promote to production.**

---

*Build to the prototype; ship to this spec. Confirm `APPLY_URL` and the fraud-report channel before launch.*
