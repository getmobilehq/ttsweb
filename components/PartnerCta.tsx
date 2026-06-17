import { Reveal } from "./ui/Reveal";
import { Section, Eyebrow } from "./ui/Section";
import { Button } from "./ui/Button";
import { partner, PARTNERSHIP_MAILTO, PROJECT_DELIVERY_MAILTO } from "@/lib/content";

export function PartnerCta() {
  return (
    <Section id="partner" tone="deepest">
      <div className="grid grid-cols-1 items-center gap-12 wide:grid-cols-2">
        <Reveal>
          <Eyebrow tone="yellow">{partner.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-[clamp(2rem,4vw,2.9rem)] text-white">{partner.heading}</h2>
          <p className="mt-[18px] text-[1.08rem] text-white/80">{partner.lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={PARTNERSHIP_MAILTO}>Start a partnership conversation</Button>
            <Button href={PROJECT_DELIVERY_MAILTO} variant="light">
              Project delivery team
            </Button>
          </div>
        </Reveal>

        <Reveal className="grid gap-3.5">
          {partner.contacts.map((c) => (
            <div
              key={c.name}
              className="rounded border border-white/[0.16] bg-white/[0.08] px-5 py-[18px]"
            >
              <div className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-yellow">
                {c.role}
              </div>
              <div className="mt-[3px] font-display text-[1.12rem] font-bold text-white">
                {c.name}
              </div>
              <div className="mt-2 flex flex-wrap gap-x-[18px] gap-y-1.5 text-[0.9rem] text-white/80">
                {c.email ? (
                  <a href={`mailto:${c.email}`} className="hover:text-yellow">
                    {c.email}
                  </a>
                ) : null}
                {c.tel ? (
                  <a href={`tel:${c.tel.href}`} className="hover:text-yellow">
                    {c.tel.display}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
