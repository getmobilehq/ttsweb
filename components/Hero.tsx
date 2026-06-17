import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Section";
import { Mosaic } from "./Mosaic";
import { hero, PARTNERSHIP_MAILTO } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-[radial-gradient(900px_420px_at_88%_-8%,rgba(143,193,78,0.18),transparent_60%),linear-gradient(180deg,#fbfdf9,#ffffff)] pb-[84px] pt-[76px]"
    >
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 wide:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.4rem,5.2vw,4rem)] font-extrabold">
            {hero.headlineBefore}
            <em className="not-italic text-green-600">{hero.emphasis}</em>
            {hero.headlineAfter}
          </h1>
          <p className="my-[22px] max-w-[520px] text-[1.18rem] text-muted">{hero.lead}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={PARTNERSHIP_MAILTO}>Partner with us →</Button>
            <Button href="#operators" variant="ghost">
              How we help
            </Button>
          </div>
          <div className="mt-[38px] flex flex-wrap gap-x-[34px] gap-y-6">
            {hero.stats.map((s) => (
              <div key={s.n}>
                <div className="font-display text-[1.85rem] font-extrabold -tracking-[0.03em] text-green-800">
                  {s.n}
                </div>
                <div className="max-w-[120px] text-[0.82rem] leading-[1.35] text-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Mosaic />
        </Reveal>
      </div>
    </section>
  );
}
