import { Reveal } from "./ui/Reveal";
import { Section, SectionHead } from "./ui/Section";
import { Icon } from "./ui/Icon";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <Section id="pillars">
      <SectionHead eyebrow={pillars.eyebrow} heading={pillars.heading} />

      <div className="grid grid-cols-1 gap-[22px] wide:grid-cols-3">
        {pillars.items.map((pillar) => (
          <Reveal
            key={pillar.title}
            className="rounded-lg border border-line bg-white p-[30px] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,73,49,0.1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-green">
              <Icon name={pillar.icon} className="h-6 w-6 text-[#062f1d]" />
            </div>
            <h3 className="text-[1.22rem]">{pillar.title}</h3>
            <span className="my-3 inline-block rounded-full bg-[#eafaf0] px-[11px] py-[5px] text-[0.8rem] font-semibold text-green-600">
              {pillar.goal}
            </span>
            <ul className="grid list-none gap-[9px] p-0">
              {pillar.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-[22px] text-[0.94rem] text-muted before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-lemon before:content-['']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
