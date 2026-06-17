import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Tone = "default" | "cream" | "dark" | "deepest";

const toneClass: Record<Tone, string> = {
  default: "bg-white text-ink",
  cream: "bg-cream text-ink",
  dark: "bg-green-800 text-[#eaf3ee]",
  deepest: "bg-green-900 text-[#eaf3ee]",
};

// Constrained content column — the prototype `.wrap` (max 1180px, 24px gutters).
export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-content px-6 ${className}`}>{children}</div>;
}

// Full-bleed section band. `scroll-mt` clears the sticky nav for anchor jumps (§7).
export function Section({
  id,
  tone = "default",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-[84px] py-[86px] ${toneClass[tone]} ${className}`}>
      <Wrap>{children}</Wrap>
    </section>
  );
}

export type EyebrowTone = "green" | "lemon" | "yellow";

const eyebrowToneClass: Record<EyebrowTone, string> = {
  green: "text-green-600",
  lemon: "text-lemon",
  yellow: "text-yellow",
};

export function Eyebrow({ tone = "green", children }: { tone?: EyebrowTone; children: ReactNode }) {
  return (
    <span className={`text-[0.78rem] font-semibold uppercase tracking-eyebrow ${eyebrowToneClass[tone]}`}>
      {children}
    </span>
  );
}

// Eyebrow + heading + optional lead, wrapped in a Reveal (prototype `.head`).
export function SectionHead({
  eyebrow,
  eyebrowTone = "green",
  heading,
  lead,
  dark = false,
}: {
  eyebrow: string;
  eyebrowTone?: EyebrowTone;
  heading: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-11 max-w-read">
      <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold ${dark ? "text-white" : "text-ink"}`}
      >
        {heading}
      </h2>
      {lead ? (
        <p className={`mt-4 text-[1.06rem] ${dark ? "text-white/80" : "text-muted"}`}>{lead}</p>
      ) : null}
    </Reveal>
  );
}
