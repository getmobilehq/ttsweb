// Icon paths ported from the prototype. Multi-subpath strings are split on " M"
// and rendered as separate <path> elements (matching the prototype's renderer).
export const ICONS = {
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z M9.5 12l1.8 1.8L15 10",
  story: "M4 5h16v12H8l-4 3V5z M8 9h8 M8 13h5",
  compass: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M15.5 8.5l-2 5-5 2 2-5 5-2z",
  news: "M4 5h13v14H4z M17 8h3v9a2 2 0 0 1-2 2 M7 9h7 M7 13h7 M7 17h4",
  arrow: "M5 12h14 M13 6l6 6-6 6",
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const segments = ICONS[name].split(" M");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {segments.map((seg, i) => (
        <path key={i} d={(i ? "M" : "") + seg} />
      ))}
    </svg>
  );
}
