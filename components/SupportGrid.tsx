import { Reveal } from "./ui/Reveal";
import { Section, SectionHead } from "./ui/Section";
import type { SupportItem } from "@/lib/content";

// One component, two instances (operators / government). The 01–05 index labels
// are visual eyebrows, NOT an ordered sequence (HANDOFF §5).
export function SupportGrid({
  id,
  variant,
  eyebrow,
  heading,
  items,
}: {
  id: string;
  variant: "dark" | "light";
  eyebrow: string;
  heading: string;
  items: SupportItem[];
}) {
  const dark = variant === "dark";

  return (
    <Section id={id} tone={dark ? "dark" : "cream"}>
      <SectionHead
        eyebrow={eyebrow}
        eyebrowTone={dark ? "lemon" : "green"}
        heading={heading}
        dark={dark}
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {items.map((item) => (
          <Reveal
            key={item.ix}
            className={`rounded-lg p-[26px] ${
              dark ? "border border-white/[0.14] bg-white/[0.06]" : "border border-line bg-white"
            }`}
          >
            <div
              className={`font-display text-[0.85rem] font-bold tracking-[0.04em] ${
                dark ? "text-yellow" : "text-green-600"
              }`}
            >
              {item.ix}
            </div>
            <h4 className={`mb-2 mt-2.5 text-[1.05rem] ${dark ? "text-white" : ""}`}>{item.title}</h4>
            <p className={`text-[0.92rem] ${dark ? "text-white/80" : "text-muted"}`}>{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
