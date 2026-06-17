import Image from "next/image";
import { mosaicTiles, type MosaicTile } from "@/lib/content";

// Word-tile fills. Each pairs a brand background with a dark-enough text colour
// to stay legible (one-off text colours kept literal — not reusable tokens).
const wordTone: Record<string, string> = {
  green: "bg-green text-[#062f1d]",
  lemon: "bg-lemon text-[#1f3b0b]",
  yellow: "bg-yellow text-[#5a4500]",
  cream: "bg-cream text-green-800",
};

// Each photo tile spans 1–2 of 3 columns, half-width on desktop, full on mobile.
const PHOTO_SIZES = "(max-width: 900px) 50vw, 30vw";

// Brand duotone wash kept over real photography per HANDOFF §8.
function Duotone() {
  return (
    <span
      className="pointer-events-none absolute inset-0 mix-blend-screen"
      style={{ background: "radial-gradient(120% 90% at 30% 20%, rgba(0,183,91,0.32), transparent 60%)" }}
    />
  );
}

function PhotoTile({ tile, span }: { tile: Extract<MosaicTile, { kind: "photo" }>; span: string }) {
  const base = `relative grid place-items-center overflow-hidden rounded bg-[linear-gradient(150deg,#004931,#003726)] text-center ${span}`;

  // Real image once supplied; priority because the mosaic is above the fold.
  if (tile.src) {
    return (
      <div className={base}>
        <Image src={tile.src} alt={tile.alt} fill sizes={PHOTO_SIZES} priority className="object-cover" />
        <Duotone />
      </div>
    );
  }

  // Duotone placeholder until approved photography lands.
  return (
    <div className={base}>
      <Duotone />
      <span className="z-[1] text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/55 opacity-80">
        {tile.label}
      </span>
    </div>
  );
}

export function Mosaic() {
  // Decorative while every photo slot is still a placeholder; once real images
  // with alt text are in, expose them to assistive tech.
  const hasPhotos = mosaicTiles.some((t) => t.kind === "photo" && t.src);

  return (
    <div
      aria-hidden={hasPhotos ? undefined : "true"}
      className="mx-auto grid aspect-[1/1.02] w-full max-w-[440px] auto-rows-fr grid-cols-3 gap-3 wide:max-w-none"
    >
      {mosaicTiles.map((tile, i) => {
        const span = tile.span ? "col-span-2" : "";
        if (tile.kind === "photo") return <PhotoTile key={i} tile={tile} span={span} />;
        return (
          <div
            key={i}
            className={`grid place-items-center rounded p-3.5 text-center font-display text-[clamp(0.95rem,1.5vw,1.3rem)] font-extrabold leading-[1.04] -tracking-[0.02em] ${wordTone[tile.tone]} ${span}`}
          >
            {tile.text}
          </div>
        );
      })}
    </div>
  );
}
