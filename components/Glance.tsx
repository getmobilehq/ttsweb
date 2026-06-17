import { Reveal } from "./ui/Reveal";
import { Section, SectionHead } from "./ui/Section";
import { glance } from "@/lib/content";

export function Glance() {
  return (
    <Section tone="cream">
      <SectionHead eyebrow={glance.eyebrow} heading={glance.heading} lead={glance.lead} />

      <div className="grid grid-cols-1 gap-5 wide:grid-cols-3">
        {glance.cards.map((card) => (
          <Reveal
            key={card.n}
            className={`rounded-lg border p-[30px] ${
              card.accent ? "border-transparent bg-green-800" : "border-line bg-white"
            }`}
          >
            <div
              className={`font-display text-[3rem] font-extrabold leading-[0.95] -tracking-[0.04em] ${
                card.accent ? "text-yellow" : "text-green-800"
              }`}
            >
              {card.n}
            </div>
            <div className={`mt-2 text-[0.98rem] ${card.accent ? "text-white/80" : "text-muted"}`}>
              {card.l}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 flex flex-wrap gap-3">
        {glance.parts.map((part) => (
          <div key={part.n} className="min-w-[180px] flex-1 rounded bg-cream px-[22px] py-5">
            <div className="font-display text-[1.7rem] font-extrabold text-green-800">{part.n}</div>
            <div className="mt-0.5 text-[0.9rem] text-muted">{part.l}</div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
