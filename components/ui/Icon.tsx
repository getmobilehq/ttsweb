import type { IconKey } from "@/lib/content";

// Pillar icon paths, ported from the prototype.
const PATHS: Record<IconKey, string> = {
  case: "M3 7h18M3 7l1 13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l1-13M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
  grad: "M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5",
  mega: "M3 11l14-5v12L3 13v-2zM7 12v6M17 6v0M21 9a3 3 0 0 1 0 6",
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
