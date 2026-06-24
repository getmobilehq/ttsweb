// Single source for all CTA destinations (HANDOFF_V2 §4).
// APPLY_URL is the site's top conversion path — confirm the real portal URL and
// set NEXT_PUBLIC_APPLY_URL before launch. FRAUD must point at the real
// fraud-report channel (set NEXT_PUBLIC_FRAUD_URL).
export const APPLY_URL = process.env.NEXT_PUBLIC_APPLY_URL ?? "#apply";
export const FRAUD = process.env.NEXT_PUBLIC_FRAUD_URL ?? "mailto:report@ttsnigeria.org";

export const PARTNERSHIP_EMAIL = "partnership@ttsnigeria.org";
export const MAIL = `mailto:${PARTNERSHIP_EMAIL}`;

export const TAG = "Inclusive opportunities · Local impact · Global relevance";
