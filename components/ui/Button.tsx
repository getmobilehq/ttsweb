import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "light";

const base =
  "inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-[11px] text-[0.92rem] font-semibold transition-[transform,background-color,box-shadow,border-color,color] duration-150 motion-reduce:transition-none";

// #062f1d is the dark text used on green/accent fills (prototype), kept literal
// because it is a one-off, not a reusable brand token.
const variants: Record<Variant, string> = {
  primary:
    "bg-green text-[#062f1d] hover:-translate-y-px hover:bg-green-600 hover:text-white motion-reduce:hover:translate-y-0",
  ghost:
    "border-line bg-transparent text-ink hover:border-green hover:text-green-600",
  light:
    "border-white/25 bg-white/10 text-white hover:bg-white/20",
};

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

// CTAs are links only (mailto:/tel:/anchors) — no form submit in v1 (HANDOFF §7).
export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
