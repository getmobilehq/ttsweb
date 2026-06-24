import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { explore } from "@/lib/content";

export function ExploreTrio() {
  return (
    <section className="sec cream">
      <div className="wrap">
        <Reveal className="head" style={{ marginBottom: 44 }}>
          <span className="eyebrow">{explore.eyebrow}</span>
          <h2>{explore.heading}</h2>
        </Reveal>
        <div className="explore">
          {explore.cards.map((card) => (
            <Reveal key={card.title} className="exp-card">
              <div className="ico">
                <Icon name={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <Link className="link-arrow" href={card.href}>
                {card.cta} <Icon name="arrow" size={18} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
