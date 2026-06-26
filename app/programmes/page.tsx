import type { Metadata } from "next";
import { APPLY_URL } from "@/lib/links";
import { programmes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programmes, states & courses",
  description: programmes.hero.lead,
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <span className="eyebrow">{programmes.hero.eyebrow}</span>
          <h1 style={{ marginTop: 16 }}>{programmes.hero.heading}</h1>
          <p className="lead">{programmes.hero.lead}</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <span className="scaffold">Scaffold · cohorts and courses populate here</span>
          <h2 style={{ fontSize: "1.5rem", margin: "26px 0 18px" }}>Training pathways</h2>
          <div className="cards2">
            {programmes.courses.map((c) => (
              <div className="tile" key={c.title}>
                <div className="body">
                  <div className="meta">Course</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 style={{ fontSize: "1.5rem", margin: "48px 0 8px" }}>Participating states</h2>
          <p style={{ color: "var(--muted)" }}>Building distributed capacity across 12+ states.</p>
          <div className="states">
            {programmes.states.map((s) => (
              <span className="state" key={s}>
                {s}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <a className="btn btn-primary" href={APPLY_URL}>
              Apply for free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
