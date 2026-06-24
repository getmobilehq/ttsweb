# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A marketing website for the **TTS Nigeria Initiative** (Technology Talent Services — connecting young Nigerian women to dignified digital work and growing Nigeria's outsourcing sector). It serves a **dual audience**: applicants (women 18–35) and partners (BPOs/governments).

**Current state: V2 — a five-route multi-page site** (Home, About, Stories, Programmes, Insights). V1 was a single-page partner site; V2 added open applications, the five audience segments, the fraud-prevention band, and updated metrics (30,000 / 25,000 / 15% / 12+). V2 was built on the `v2` branch.

Source inputs (the latest set governs):

- `tts-nigeria-v2.jsx` — the approved **V2** prototype (client-side view-switching sandbox). **Visual + content + IA source of truth.** Port verbatim. (`tts-nigeria-landing.jsx` is the older v1 prototype, superseded.)
- `HANDOFF_V2.md` — the governing **V2** production spec (routing, integrations, governance). **Read this first.** (`HANDOFF.md` is v1, superseded.)
- `TTS_logo_TTS_Green.svg` — the official brand mark.

**Precedence rule:** the spec governs architecture & integrations; the prototype governs layout, copy, and styling. The prototype uses client-side view-switching — **production uses real Next.js file routes.**

## Stack (as configured)

**Next.js 16** (App Router, static-first) · React 19 · TypeScript strict · Tailwind CSS v3 · `next/font` · `next/image` · Netlify deploy. **No database/auth.** Conversion actions are links only: `APPLY_URL` (apply portal) and `mailto:` (partner/contact/fraud) — the Insights newsletter is UI-only.

Notes that will surprise you:

- **Styling is mostly hand-written CSS, not Tailwind utilities.** The V2 prototype's stylesheet was ported verbatim into `app/globals.css` (brand tokens as `:root` vars, then component classes like `.hero`, `.aud`, `.band`, `.fraud-card`). Components emit those class names. Tailwind's preflight/utilities are still available and `tailwind.config.ts` still defines token utilities, but day-to-day you edit the ported CSS, not utility strings. Custom CSS in `globals.css` is never purged.
- **Fonts** are wired in `app/layout.tsx` via `next/font/google` (Bricolage Grotesque → `--font-display`, Inter → `--font-body`); `globals.css` maps `--disp`/`--body` to them. The prototype's Google Fonts `@import` is intentionally dropped.
- `AGENTS.md` (kept) warns Next 16 has breaking changes vs. older training data — read `node_modules/next/dist/docs/` before using unfamiliar APIs.
- Both prototype files (`tts-nigeria-*.jsx`) are ignored by ESLint — reference artifacts, not app code.

```bash
npm run dev      # local dev server
npm run build    # must pass clean (a Definition-of-Done criterion)
npm run lint     # ESLint must pass
```

## Architecture (HANDOFF_V2 §3)

Five file routes: `app/page.tsx` (Home), `app/about`, `app/stories`, `app/programmes`, `app/insights`. `app/layout.tsx` wraps every page with `Nav` + `Footer` and sets base metadata + Organization JSON-LD; each route exports its own `metadata`. Home sections live in `components/home/` (`Ribbon`, `Hero`, `AudienceSection`, `PVM`, `Impact`, `FraudBand`, `ExploreTrio`, `FinalCta`); primitives in `components/ui/` (`TtsMark`, `Icon`, `Button`, `Reveal`). Conventions:

- **`lib/content.ts`** is the single source for all copy/data (audiences, stats, stakeholders, courses, states, stories, posts, image paths). **`lib/links.ts`** is the single source for CTA destinations. Don't inline copy or URLs in components.
- **`AudienceSection`** is one props-driven block rendered five times from `audiences[]` (`{label, chip, title, body, cta, ctaHref, dark, flip, visual, img, imgAlt}`).
- **`'use client'`** is only `Nav` (active route via `usePathname`, mobile menu) and `Reveal` (IntersectionObserver scroll-reveal, respects `prefers-reduced-motion`). Everything else is a Server Component. Anything that should fade in must be wrapped in `<Reveal>` — a bare `className="reveal"` stays invisible (no JS toggles its `in` class).
- **Jump chips** ("Who we serve") are plain anchor links to section IDs; smooth scroll + `scroll-margin-top` are CSS-only.
- **`Button`** renders `next/link` for internal routes (`/...`) and `<a>` for `mailto:`/hash/external.
- **`TtsMark`** is ported verbatim — `viewBox` cropped to `412 412 256 256` so the roundel sits transparent on any background.

## Non-negotiable constraints

These are programme rules, not preferences — violating them blocks launch:

- **Contrast:** brand green `#00B75B` on white is ~2:1 and **fails WCAG AA for text.** Use it only for CTA button fills (with dark text `#062F1D`), large display accents, and decoration. For green text on light backgrounds use `--green-800` (`#004931`). On dark sections, body text is `rgba(255,255,255,.82)` with `--lemon`/`--yellow` accents.
- **Copy is final and verbatim.** Do not paraphrase, invent, or add marketing copy. Sentence case throughout (only eyebrow labels are uppercased). Metrics are exactly **30,000 / 25,000 / 15% / 12+** (the source's "TTTS" typo and varied tagline punctuation were corrected to **TTS** / `Inclusive opportunities · Local impact · Global relevance`).
- **`APPLY_URL` and `FRAUD` are placeholders** (`#apply`, `mailto:report@…`). The apply portal is the top conversion path and **must resolve to a real destination before launch** — set `NEXT_PUBLIC_APPLY_URL` / `NEXT_PUBLIC_FRAUD_URL` (see `lib/links.ts`).
- **Photography (HANDOFF_V2 §8a):** an *illustrative* set is in `public/images/` and is fine for the hero/audience segments. The **Stories** slots show *named real people* — they must use **real, consent-cleared participant photography** before launch (safeguarding rules apply). Also crop/replace visible third-party branding in `bpo-ng.webp` ("Innovate Hub") and `partner.webp` ("Maria Nacola" nameplate). Never use stock for Stories.
- **Fraud band is a safeguarding element** — keep its prominence (yellow-bordered card, shield, "always free"); do not bury it.
- **No public deploy without sign-off.** Two-week comms pre-approval before any public launch. Build on a branch → PR → **Netlify deploy preview** for review; do not auto-promote to production.
- If the funder is ever referenced: **Mastercard Foundation**, in body copy never a headline, never abbreviated to "MCF". v1 copy does not name it — keep it that way unless comms instructs otherwise.
- Frame the site as a **consortium programme** (Tech4Dev prime grantee, with Univelcity and partners), not a single-organisation initiative.

## Definition of Done (HANDOFF §10)

Lighthouse ≥ 95 on all four categories (mobile) · WCAG 2.1 AA (contrast rule, `:focus-visible`, full keyboard nav incl. mobile menu, image `alt`, `prefers-reduced-motion` respected) · CLS ~0 · clean `next build` and ESLint · renders 360px→1440px+ · all `mailto:`/`tel:` links correct · favicons/app icons generated from the roundel.

## Deployment (Netlify)

Hosted on **Netlify** at `https://ttsweb.netlify.app` (Netlify auto-detects Next.js and uses `@netlify/plugin-nextjs`). Notes:

- **This URL is public.** HANDOFF §13 requires two-week comms pre-approval before any public communications go live — treat the Netlify URL as internal-review-only and add Netlify access protection (password / Identity) if it must stay locked down until sign-off.
- Set `NEXT_PUBLIC_SITE_URL` in the Netlify site's environment to `https://ttsweb.netlify.app` (or the final domain). Otherwise canonical/OpenGraph URLs fall back to the `lib/site.ts` default (`https://www.ttsnigeria.org`), which won't match the live host.
- The OG image, favicon, and Apple icon are generated at build by `next/og` and prerender fine on Netlify's Next runtime.
- **V2 workflow (HANDOFF_V2 §9):** built on branch `v2` → PR → Netlify deploy preview for comms sign-off → merge to production only after approval. Set `NEXT_PUBLIC_APPLY_URL` / `NEXT_PUBLIC_FRAUD_URL` (and any newsletter provider keys) in Netlify env.

## Follow-on / out of scope (HANDOFF_V2 §5 — Phase 2)

CMS (Sanity/Contentful) feeding Stories, Insights, and Programmes/cohorts (`lib/content.ts` is structured to migrate cleanly) · real programme/cohort data · newsletter wired to an email provider (no PII in query strings) · analytics (consent-gated). The apply portal, if hosted here rather than linked out, is a separate scoped build with its own PII/consent review.
