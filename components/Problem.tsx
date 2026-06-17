import { Reveal } from "./ui/Reveal";
import { Section, SectionHead } from "./ui/Section";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <Section id="opportunity">
      <SectionHead eyebrow={problem.eyebrow} heading={problem.heading} lead={problem.lead} />
      <div className="grid grid-cols-1 gap-6 wide:grid-cols-2">
        {problem.cards.map((card) => (
          <Reveal key={card.title} className="rounded-lg border border-line bg-white p-8">
            <div className="font-display text-[2.6rem] font-extrabold leading-none -tracking-[0.03em] text-green-600">
              {card.big}
            </div>
            <h3 className="mb-3 mt-1.5 text-[1.2rem]">{card.title}</h3>
            <p className="text-[0.97rem] text-muted">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
