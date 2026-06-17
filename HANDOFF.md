# TTS Nigeria — Landing Site · Claude Code Build Handoff

**Owner:** Joseph Agunbiade (Pillar 2 Lead, Univelcity) · **Status:** Approved prototype → production build
**Deliverable:** A production, deployable marketing/partnership website for the Technology Talent Services (TTS) Nigeria Initiative.

---

## 0. How to use this handoff

You are taking a fully-designed, content-complete React prototype to production. Three inputs ship with this document:

| File | Role |
|------|------|
| `tts-nigeria-landing.jsx` | **Visual + content source of truth.** Port layout, copy, structure, and styling from here verbatim. Do not redesign. |
| `TTS_logo_TTS_Green.svg` | Official brand mark (full-colour roundel). |
| `HANDOFF.md` (this file) | The production spec: stack, tokens, components, requirements, acceptance criteria. |

Rule of precedence: **this spec governs architecture; the prototype governs look and copy.** Where they disagree on a pixel, follow the prototype. Where the prototype made a sandbox compromise (e.g. raw CSS variables instead of a Tailwind theme), this spec's production approach wins.

---

## 1. Objective & audience

A single-page, fast, accessible site whose job is to **convert ecosystem stakeholders into qualified partnership conversations** while telling the impact story (marginalised young women into dignified BPO work).

**Primary audiences (v1, partner-facing only):** BPO operators · state governments / regulators · ecosystem partners (development orgs, training institutions, infrastructure providers).
**Out of scope for v1:** a participant "Join / Apply" path for women applicants (see §12).

**Single conversion action:** email the partnership team. v1 uses `mailto:`/`tel:` only — **no form backend, no live submissions.**

---

## 2. Tech stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | **Next.js 14+ (App Router)** | Static-first; this is effectively a static marketing page. |
| Language | **TypeScript** (strict) | |
| Styling | **Tailwind CSS v3** + CSS variables for brand tokens | Map tokens into `tailwind.config.ts` theme — do **not** rely on raw arbitrary values. |
| Fonts | **`next/font`** (Bricolage Grotesque + Inter) | Self-host via `next/font/google`; eliminates layout shift, no external CDN at runtime. |
| Images | **`next/image`** | For all photography slots. |
| Icons | Inline SVG components | Already defined in the prototype (`Icon`, `TtsMark`). |
| Deploy | **Vercel** | Static export acceptable; SSG. |
| Tooling | ESLint + Prettier + `@next/eslint-plugin` | |
| Analytics | **Plausible** or GA4 (consent-gated) | Optional, behind a cookie/consent gate — privacy-first. |

No database, no auth, no API routes in v1.

---

## 3. Brand design system (authoritative tokens)

Source: TTS Nigeria design system. Apply exactly.

### Colour

```
--green-900: #003726   /* deepest surface, footer */
--green-800: #004931   /* dark sections, body text on light */
--green:     #00B75B   /* primary CTA fill / accent ONLY — see contrast rule */
--green-600: #009A4C   /* hover */
--lemon:     #8FC14E   /* highlight accent */
--yellow:    #FDC00D   /* highlight accent (stat numbers on dark) */
--cream:     #FFF5CC   /* soft section background */
--ink:       #16241D   /* default body text */
--muted:     #5B6B62   /* secondary text */
--line:      #E4EBE6   /* hairline borders */
--white:     #FFFFFF
```

> **Accessibility contrast rule (non-negotiable):** `#00B75B` on white is ~2:1 and **fails WCAG AA for text.** Never use brand green for body or small text on light backgrounds. Use it only for: CTA button fills (with dark text `#062F1D` on top), large display accents, and decoration. Use `--green-800` for any green text on light. On dark green sections, body text is `rgba(255,255,255,.82)` and accents are `--lemon` / `--yellow`.

### Type

- **Display:** Bricolage Grotesque — weights 600/700/800, tracking `-0.03em` at display sizes.
- **Body:** Inter — 400/500/600, line-height 1.65, reading width max 660px.
- **Case:** sentence case everywhere (headings included). No ALL-CAPS except the small eyebrow labels (`letter-spacing: .14em`).

### Shape & space

- Border radius: **14–20px** (`--r-sm:14`, `--r:18`, `--r-lg:24`). Pick from this set; nothing sharper, nothing pill except buttons/chips (999px).
- 8pt spacing grid.
- Max content width **1180px**.
- **No left-bar accent stripes on cards** (brand rule). Cards use hairline borders or solid fills only.
- Shadows minimal — used only on hover lifts.

### Logo

- `TTS_logo_TTS_Green.svg` is the full-colour mark with a **white background plate**. In the prototype the plate is stripped and the viewBox cropped to `412 412 256 256` so the roundel sits transparent on light and dark — **reuse the `TtsMark` component as-is.**
- Generate favicon + PWA icons (`app/icon.png`, `apple-icon.png`, `favicon.ico`) from the roundel.
- **Asset gap to flag to brand team:** there is no horizontal lockup (mark + wordmark) and no monochrome variant. The prototype sets the wordmark in Bricolage Grotesque next to the mark as an interim lockup. Request the official lockup SVG before public launch.

---

## 4. Information architecture (single scroll)

Port these sections in order. Each maps to a component (§5). Anchor IDs in brackets.

1. **Nav** — sticky, blur-on-scroll, logo lockup + 4 anchor links + "Partner with us" CTA. Mobile hamburger.
2. **Hero** `[#top]` — eyebrow, headline ("Industry-ready BPO talent, sourced for *inclusion and impact*"), lead, dual CTA, three headline stats (30,000 / 25,000 / 18mo), and the **portrait-mosaic signature** (photo slots + tagline tiles).
3. **Problem / opportunity** `[#opportunity]` — two cards: 53.4% (young women locked out) and the 5-fold operator gap.
4. **Why BPOs · why now** `[#]` (dark) — 4-cell stat band (70% / 60%+ / ⅓+ / #1) + assets paragraph + policy chips (NOS, EIBIC, iSTEP).
5. **Programme at a glance** `[#]` (cream) — 3 metric cards (30,000 / 25,000 / 18,000·3,000) + participant split (100% / 10% / 5%).
6. **Three pillars** `[#pillars]` — Transitioning Youth to Work · Technology Talent Development · Policy & Ecosystem Advocacy.
7. **For BPO operators** `[#operators]` (dark) — 5 touchpoints grid.
8. **For regulators & public sector** `[#government]` (cream) — 5 touchpoints grid.
9. **Partner CTA + contacts** `[#partner]` (deepest green) — invitation, CTAs, three contact cards (Janet Olisa, Kenneth Etiake, partnership team).
10. **Footer** — logo lockup, tagline, consortium line.

---

## 5. Component breakdown

```
app/
  layout.tsx            // <html lang="en">, next/font, global metadata
  page.tsx              // assembles all sections in order
  globals.css           // token CSS vars + base resets (Tailwind layers)
  icon.png / apple-icon.png / opengraph-image.tsx
  sitemap.ts / robots.ts
components/
  Nav.tsx               // 'use client' (mobile toggle + scroll state)
  Hero.tsx
  Mosaic.tsx            // hero portrait mosaic; photo slots via next/image
  Problem.tsx
  WhyBpo.tsx
  Glance.tsx
  Pillars.tsx
  SupportGrid.tsx       // reused by operators + government (props-driven)
  PartnerCta.tsx
  Footer.tsx
components/ui/
  Reveal.tsx            // 'use client' IntersectionObserver scroll-reveal wrapper
  TtsMark.tsx           // official logo (port verbatim from prototype)
  Icon.tsx              // pillar icons
  Button.tsx            // primary / ghost / light variants
lib/
  content.ts            // ALL copy + data arrays (single source, CMS-ready)
```

**`lib/content.ts`** — extract every string and data array from the prototype into typed exports (`hero`, `problemCards`, `whyStats`, `glanceCards`, `pillars`, `operatorSupport`, `governmentSupport`, `contacts`). This makes a future CMS swap a one-file change.

**`Reveal.tsx`** — wrap each section's content; respects `prefers-reduced-motion` (render visible immediately when reduced). Smooth-scroll anchor nav lives in `Nav`.

**`SupportGrid.tsx`** — one component, two instances. Props: `items: {ix, title, body}[]`, `variant: 'dark' | 'light'`. Note the index labels (01–05) are visual eyebrows, not a sequence — keep them but don't imply ordered steps.

---

## 6. Content

All v1 copy is final in the prototype — **port verbatim into `lib/content.ts`.** Do not paraphrase, invent, or add marketing copy. Sentence case throughout. Active voice. Contacts:

- **Janet Olisa** — Government lead — `Janet.Olisa@ttsnigeria.org` · `+234 816 567 7400`
- **Kenneth Etiake** — Partnership lead — `Kenneth.Etiaka@ttsnigeria.org` · `+234 803 696 4338`
- **Partnership team** — `partnership@ttsnigeria.org`
- **Project delivery** — `projectdelivery@ttsnigeria.org`

(Email spellings are taken from the official brief; preserve `Kenneth.Etiaka` exactly even though the display name is "Etiake".)

---

## 7. Functional requirements

- **Responsive:** fluid down to 360px. Breakpoints at 900px (stack hero/grids) and 560px (single-column stat band) per prototype.
- **Sticky nav** with translucent blur; collapses to hamburger < 900px.
- **Smooth-scroll** anchor navigation with `scroll-margin-top: 84px` so headings clear the sticky nav.
- **Scroll-reveal** fade/translate on each block via IntersectionObserver.
- **CTAs:** `mailto:` and `tel:` only. No form, no fetch, no submit handlers in v1.
- **Hover micro-interactions:** button lift, pillar-card lift. Nothing heavier.
- **`prefers-reduced-motion`:** disable all transitions/reveals.

---

## 8. Photography (slots → real images)

The hero mosaic and section imagery use **intentional duotone-green placeholder tiles** in the prototype. In production:

1. Replace with **approved TTS photography** of programme participants, supplied by the comms team, placed in `/public/images/`.
2. Serve via `next/image` with explicit `width`/`height` (or `fill` + aspect-ratio wrappers), `priority` on the hero, lazy elsewhere, descriptive `alt`.
3. Keep the duotone-green overlay treatment as the brand wash if desired, or ship clean photos — confirm with comms.
4. Do **not** source stock photos or third-party images. Use only assets provided by the programme.

Until real images land, keep the styled placeholder tiles so the layout never looks broken.

---

## 9. SEO & metadata

- `metadata` export in `layout.tsx` + per-route: title, description, canonical.
- **OpenGraph + Twitter card** via `app/opengraph-image.tsx` (generate a branded OG image: roundel + tagline on deep green).
- `sitemap.ts`, `robots.ts`.
- Semantic HTML: one `<h1>` (hero), logical heading order, `<nav>`, `<main>`, `<footer>` landmarks.
- JSON-LD `Organization` schema (name: Technology Talent Services Nigeria Initiative; sameAs: official channels when confirmed).

---

## 10. Non-functional / acceptance criteria (Definition of Done)

- [ ] Lighthouse ≥ **95** Performance / Accessibility / Best Practices / SEO on mobile.
- [ ] **WCAG 2.1 AA**: contrast rule (§3) enforced; visible `:focus-visible`; full keyboard navigation incl. mobile menu; `alt` on all images; reduced-motion respected.
- [ ] Zero layout shift (CLS ~0) — `next/font`, sized images.
- [ ] No console errors/warnings; `next build` clean; ESLint passes.
- [ ] Renders correctly 360px → 1440px+; tested Chrome, Safari, Firefox.
- [ ] All `mailto:`/`tel:` links correct and clickable.
- [ ] Logo renders crisp on light (nav) and dark (footer); favicon/app icons generated.
- [ ] Copy matches prototype verbatim; no placeholder lorem in production build.
- [ ] Repo has README with setup/run/deploy steps.

---

## 11. Project setup

```bash
npx create-next-app@latest tts-nigeria-site --typescript --tailwind --app --eslint --src-dir=false
cd tts-nigeria-site
# add next/font config, port tokens to tailwind.config.ts + globals.css
# port components from tts-nigeria-landing.jsx
npm run dev      # verify
npm run build    # must pass clean
npm run lint
```

Deploy: connect repo to Vercel, framework auto-detected, no env vars in v1.

---

## 12. Out of scope (Phase 2 backlog — do not build now)

1. **Participant "Join / Apply" path** — a second route/audience for women applying to the programme (forms, eligibility, multi-step).
2. **Partnership inquiry form + backend** — API route + transactional email (Resend/Postmark), spam protection, no PII in URLs. Replaces the `mailto:` CTA when ready.
3. **CMS** (e.g. Sanity/Contentful) so comms edits copy + swaps photos without a deploy. `lib/content.ts` is structured to make this a clean migration.
4. **News/insights** section (research & shared learning from Pillar 2 MEL).
5. **Analytics + consent banner** if not done in v1.
6. **Multi-language** (if required for state/government audiences).

---

## 13. Brand & comms governance (read before any public deploy)

These are programme constraints, not preferences:

- **Two-week pre-approval** is required before *any* public communications go live. Do **not** deploy to a public production domain without sign-off; a private Vercel preview URL for internal review is fine.
- If the funder is ever referenced, the **Mastercard Foundation** appears in **body copy, never in a headline**, and is **never abbreviated to "MCF."** v1 copy does not name the funder — keep it that way unless comms instructs otherwise.
- Frame the site as a **consortium programme deliverable** (Tech4Dev as prime grantee, with Univelcity and partners), **not** a single-organisation initiative. The footer line already reflects this.
- Use the official `@ttsnigeria.org` addresses only.

---

## 14. Suggested build sequence for Claude Code

1. Scaffold Next.js + TS + Tailwind; wire `next/font` (Bricolage Grotesque, Inter).
2. Port brand tokens → `tailwind.config.ts` theme + `globals.css` CSS variables.
3. Build `lib/content.ts` from the prototype's data/copy.
4. Build `ui/` primitives: `TtsMark`, `Icon`, `Button`, `Reveal`.
5. Build sections top-to-bottom (`Nav` → `Footer`), each consuming `content.ts`.
6. Wire photography via `next/image` against placeholder assets in `/public/images/`.
7. Add metadata, OG image, sitemap, robots, favicons.
8. Run the Definition-of-Done checklist (§10); fix until green.
9. Write README; push; create Vercel **preview** (not public) for internal sign-off.

---

*End of handoff. Build to the prototype; ship to this spec.*
