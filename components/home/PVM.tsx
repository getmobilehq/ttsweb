import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { pvm } from "@/lib/content";

export function PVM() {
  return (
    <section className="sec cream">
      <div className="wrap">
        <span className="eyebrow">{pvm.eyebrow}</span>
        <p className="purpose" style={{ marginTop: 18 }}>
          {pvm.purposeBefore}
          <b>{pvm.purposeBold}</b>
          {pvm.purposeAfter}
        </p>
        <div className="vm">
          {pvm.cards.map((card) => (
            <Reveal key={card.eyebrow} className="vm-card">
              <span className="eyebrow">{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link className="link-arrow" href="/about">
            Learn more about us <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
