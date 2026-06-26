import Image from "next/image";
import { Reveal } from "../ui/Reveal";
import { APPLY_URL, BPO_REGISTER } from "@/lib/links";
import { hero, stats, IMAGES } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 style={{ marginTop: 18 }}>
              {hero.headlineBefore}
              <em>{hero.emphasis}</em>
              {hero.headlineAfter}
            </h1>
            {hero.leads.map((lead, i) => (
              <p className="lead" key={i}>
                {lead}
              </p>
            ))}
            <div className="hero-cta">
              <a className="btn btn-primary" href={APPLY_URL}>
                Apply for free
              </a>
              <a className="btn btn-ghost" href={BPO_REGISTER}>
                Become a BPO partner
              </a>
            </div>
          </div>
          <Reveal className="hero-photo">
            <Image
              src={IMAGES.hero}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </Reveal>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
