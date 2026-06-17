import { mosaicTiles, type MosaicTile } from "@/lib/content";

// Word-tile fills. Each pairs a brand background with a dark-enough text colour
// to stay legible (one-off text colours kept literal — not reusable tokens).
const wordTone: Record<string, string> = {
  green: "bg-green text-[#062f1d]",
  lemon: "bg-lemon text-[#1f3b0b]",
  yellow: "bg-yellow text-[#5a4500]",
  cream: "bg-cream text-green-800",
};

function Tile({ tile }: { tile: MosaicTile }) {
  const span = tile.span ? "col-span-2" : "";

  if (tile.kind === "photo") {
    // Duotone-green placeholder until approved photography lands (HANDOFF §8).
    return (
      <div
        className={`relative grid place-items-center overflow-hidden rounded bg-[linear-gradient(150deg,#004931,#003726)] text-center ${span}`}
      >
        <span
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            background:
              "radial-gradient(120% 90% at 30% 20%, rgba(0,183,91,0.32), transparent 60%)",
          }}
        />
        <span className="z-[1] text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/55 opacity-80">
          {tile.label}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`grid place-items-center rounded p-3.5 text-center font-display text-[clamp(0.95rem,1.5vw,1.3rem)] font-extrabold leading-[1.04] -tracking-[0.02em] ${wordTone[tile.tone]} ${span}`}
    >
      {tile.text}
    </div>
  );
}

export function Mosaic() {
  return (
    <div
      aria-hidden="true"
      className="grid aspect-[1/1.02] auto-rows-fr grid-cols-3 gap-3 wide:max-w-none mx-auto max-w-[440px] w-full"
    >
      {mosaicTiles.map((tile, i) => (
        <Tile key={i} tile={tile} />
      ))}
    </div>
  );
}
