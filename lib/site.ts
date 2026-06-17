// Canonical site origin. The public domain is not confirmed for v1 (deploy is a
// private Vercel preview pending comms sign-off — HANDOFF §13), so this is
// overridable via env and defaults to the programme's known domain. Update
// before public launch.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.ttsnigeria.org";

export const SITE_NAME = "Technology Talent Services Nigeria Initiative";
