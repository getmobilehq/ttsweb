import type { Metadata } from "next";
import { APPLY_URL, BPO_REGISTER } from "@/lib/links";
import { about, pvm, impact } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: about.hero.lead,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <span className="eyebrow">{about.hero.eyebrow}</span>
          <h1 style={{ marginTop: 16 }}>{about.hero.heading}</h1>
          <p className="lead">{about.hero.lead}</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <span className="eyebrow">{pvm.eyebrow}</span>
          <p className="purpose" style={{ marginTop: 18 }}>
            {pvm.purposeBefore}
            <b>{pvm.purposeBold}</b>
            {pvm.purposeAfter}
          </p>
          <div className="vm">
            {pvm.cards.map((card) => (
              <div className="vm-card" key={card.eyebrow}>
                <span className="eyebrow">{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec dark" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">The impact we&apos;re building</span>
            <h2>{about.impactHeading}</h2>
          </div>
          <div className="band">
            {about.statsShort.map((s) => (
              <div className="cell" key={s.l}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="enables">
            {impact.enables.map((e) => (
              <div key={e}>{e}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec fin" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">
          <h2 style={{ color: "var(--green-800)" }}>{about.finalHeading}</h2>
          <div className="hero-cta">
            <a className="btn btn-primary" href={APPLY_URL}>
              Apply for free
            </a>
            <a className="btn btn-ghost" href={BPO_REGISTER}>
              Become a BPO partner
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
