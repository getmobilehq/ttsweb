import { Reveal } from "./ui/Reveal";
import { Section, SectionHead } from "./ui/Section";
import { whyBpo } from "@/lib/content";

export function WhyBpo() {
  return (
    <Section tone="dark">
      <SectionHead eyebrow={whyBpo.eyebrow} eyebrowTone="lemon" heading={whyBpo.heading} dark />

      <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-white/[0.14] mid:grid-cols-2 wide:grid-cols-4">
        {whyBpo.stats.map((s) => (
          <div key={s.l} className="bg-green-800 px-[26px] py-[30px]">
            <div className="font-display text-[2.3rem] font-extrabold leading-none -tracking-[0.03em] text-yellow">
              {s.n}
            </div>
            <div className="mt-2.5 text-[0.9rem] leading-[1.4] text-white/80">{s.l}</div>
          </div>
        ))}
      </Reveal>

      <Reveal as="div">
        <p className="mt-[34px] max-w-read text-[1.02rem] text-white/80">{whyBpo.assets}</p>
        <div className="mt-[18px] flex flex-wrap gap-2.5">
          {whyBpo.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/20 bg-white/10 px-3.5 py-[7px] text-[0.82rem] font-semibold text-white"
            >
              {chip}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
