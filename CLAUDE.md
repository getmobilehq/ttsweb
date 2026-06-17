# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A partner-facing marketing/landing website for the **TTS Nigeria Initiative** (Technology Talent Services — placing marginalised young women into BPO jobs). The Next.js app is **scaffolded** (stack configured, fonts and brand tokens wired, clean build); the section components have **not** been built yet — `app/page.tsx` is a placeholder. Three source inputs drive the build:

- `tts-nigeria-landing.jsx` — the approved single-file React prototype. **Visual + content source of truth.** Port layout, copy, structure, and styling from here verbatim; do not redesign.
- `TTS_logo_TTS_Green.svg` — the official brand mark (full-colour roundel on a white plate).
- `HANDOFF.md` — the production spec: stack, tokens, component map, requirements, and acceptance criteria. **Read this first** before doing any build work — it is the governing document and far more detailed than this file.

**Precedence rule:** `HANDOFF.md` governs architecture; the prototype governs look and copy. Where they disagree on a pixel, follow the prototype. Where the prototype made a sandbox compromise (e.g. raw CSS variables, a `<style>` tag, Google Fonts CDN `@import`), the spec's production approach wins.

## Stack (as configured)

**Next.js 16** (App Router, static-first; `create-next-app` installed 16, which satisfies HANDOFF's "14+") · React 19 · TypeScript strict · **Tailwind CSS v3** · `next/font` · `next/image` · Vercel deploy. **No database, auth, or API routes in v1.** The only conversion action is `mailto:`/`tel:` links — no form backend.

Setup notes that differ from a vanilla scaffold:

- **Tailwind is v3, not v4.** `create-next-app@latest` ships Tailwind v4 (CSS-based config), but HANDOFF §2/§3 mandate v3 with a `tailwind.config.ts` token theme. So the app was scaffolded with `--no-tailwind` and Tailwind v3 + `postcss.config.mjs` were added manually. Do not "upgrade" to v4 — it would break the token-theme approach. Tailwind v3 compiles correctly under Turbopack here.
- **Brand tokens** live in `tailwind.config.ts` `theme.extend` (colors `green`/`green-600/800/900`, `lemon`, `yellow`, `cream`, `ink`, `muted`, `line`; `font-display`/`font-body`; radii `sm/DEFAULT/lg` = 14/18/24px; `max-w-content`/`max-w-read`). The same values also exist as CSS variables in `app/globals.css` for rgba alpha compositing on dark sections.
- **Fonts** are wired in `app/layout.tsx` via `next/font/google` (Bricolage Grotesque → `--font-display`, Inter → `--font-body`), replacing the scaffold's Geist.
- `AGENTS.md` (kept) is a `create-next-app` note warning that Next 16 has breaking changes vs. older training data — read `node_modules/next/dist/docs/` before using unfamiliar APIs.
- The prototype `tts-nigeria-landing.jsx` is ignored by ESLint (it's a reference artifact, not app code).

```bash
npm run dev      # local dev server
npm run build    # must pass clean (a Definition-of-Done criterion)
npm run lint     # ESLint must pass
```

## Intended architecture (HANDOFF §5)

Single-scroll page assembled in `app/page.tsx` from section components in `components/`, with primitives in `components/ui/` (`TtsMark`, `Icon`, `Button`, `Reveal`). Key conventions:

- **`lib/content.ts` is the single source for all copy and data.** Extract every string and data array from the prototype into typed exports. This keeps a future CMS swap to one file. Do not inline copy into components.
- **`SupportGrid.tsx`** is one component with two instances (operators / government), props-driven (`items`, `variant: 'dark' | 'light'`). The `01`–`05` index labels are visual eyebrows, **not** an ordered sequence.
- **`Reveal.tsx`** and **`Nav.tsx`** are the `'use client'` components (IntersectionObserver scroll-reveal; mobile menu toggle + scroll state). Everything else is a Server Component.
- **`TtsMark`** is ported verbatim from the prototype: the SVG `viewBox` is cropped to `412 412 256 256` to strip the logo's white background plate so the roundel sits transparent on light and dark.

The prototype packs all CSS into one template string and uses CSS variables under a `.tts` root — in production these tokens move into the Tailwind theme + `globals.css` layers.

## Non-negotiable constraints

These are programme rules, not preferences — violating them blocks launch:

- **Contrast:** brand green `#00B75B` on white is ~2:1 and **fails WCAG AA for text.** Use it only for CTA button fills (with dark text `#062F1D`), large display accents, and decoration. For green text on light backgrounds use `--green-800` (`#004931`). On dark sections, body text is `rgba(255,255,255,.82)` with `--lemon`/`--yellow` accents.
- **Copy is final and verbatim.** Do not paraphrase, invent, or add marketing copy. Sentence case throughout (only the small eyebrow labels are uppercased). Preserve the email `Kenneth.Etiaka@ttsnigeria.org` exactly even though the display name reads "Etiake".
- **Photography:** use only TTS-supplied images (none yet — keep the styled duotone-green placeholder tiles so the layout never breaks). Never source stock or third-party images.
- **No public deploy without sign-off.** Two-week comms pre-approval is required before any public production domain. A private Vercel preview URL for internal review is fine.
- If the funder is ever referenced: **Mastercard Foundation**, in body copy never a headline, never abbreviated to "MCF". v1 copy does not name it — keep it that way unless comms instructs otherwise.
- Frame the site as a **consortium programme** (Tech4Dev prime grantee, with Univelcity and partners), not a single-organisation initiative.

## Definition of Done (HANDOFF §10)

Lighthouse ≥ 95 on all four categories (mobile) · WCAG 2.1 AA (contrast rule, `:focus-visible`, full keyboard nav incl. mobile menu, image `alt`, `prefers-reduced-motion` respected) · CLS ~0 · clean `next build` and ESLint · renders 360px→1440px+ · all `mailto:`/`tel:` links correct · favicons/app icons generated from the roundel.

## Deployment (Netlify)

Hosted on **Netlify** at `https://ttsweb.netlify.app` (Netlify auto-detects Next.js and uses `@netlify/plugin-nextjs`). Notes:

- **This URL is public.** HANDOFF §13 requires two-week comms pre-approval before any public communications go live — treat the Netlify URL as internal-review-only and add Netlify access protection (password / Identity) if it must stay locked down until sign-off.
- Set `NEXT_PUBLIC_SITE_URL` in the Netlify site's environment to `https://ttsweb.netlify.app` (or the final domain). Otherwise canonical/OpenGraph URLs fall back to the `lib/site.ts` default (`https://www.ttsnigeria.org`), which won't match the live host.
- The OG image, favicon, and Apple icon are generated at build by `next/og` and prerender fine on Netlify's Next runtime.

## Out of scope for v1 (HANDOFF §12 — do not build now)

Participant "Join/Apply" path · partnership inquiry form + email backend · CMS · news/insights section · analytics + consent banner · multi-language.
