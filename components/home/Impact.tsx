import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { impact, stats } from "@/lib/content";

export function Impact() {
  return (
    <section className="sec dark">
      <div className="wrap">
        <Reveal className="head">
          <span className="eyebrow">{impact.eyebrow}</span>
          <h2>{impact.heading}</h2>
          <p className="lead">{impact.lead}</p>
        </Reveal>

        <Reveal className="band">
          {stats.map((s) => (
            <div className="cell" key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="enables">
          {impact.enables.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </Reveal>

        <div className="stake" style={{ marginTop: 52 }}>
          {impact.stakeholders.map((s) => (
            <Reveal key={s.title} className="stake-card">
              <h4>{s.title}</h4>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="footprint">
          <div className="n">{impact.footprintN}</div>
          <div className="l">
            <b style={{ color: "var(--green-800)" }}>{impact.footprintBold}</b> {impact.footprintRest}
          </div>
          <Button href="/about" variant="primary" className="ml-auto">
            Read more about us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
