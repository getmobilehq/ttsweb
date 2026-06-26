import type { Metadata } from "next";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights, stories & updates",
  description: insights.hero.lead,
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <span className="eyebrow">{insights.hero.eyebrow}</span>
          <h1 style={{ marginTop: 16 }}>{insights.hero.heading}</h1>
          <p className="lead">{insights.hero.lead}</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <span className="scaffold">Scaffold · articles publish here</span>
          <div className="cards3" style={{ marginTop: 26 }}>
            {insights.posts.map((p) => (
              <article className="tile" key={p.title}>
                <div className="ph">Cover</div>
                <div className="body">
                  <div className="meta">{p.meta}</div>
                  <h3>{p.title}</h3>
                  <p>A short standfirst introduces the article and invites the reader to continue.</p>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter — UI only; wire to an email provider via an API route (HANDOFF_V2 §4). */}
          <div className="vm-card" style={{ marginTop: 40, maxWidth: 560 }}>
            <h3 style={{ fontSize: "1.3rem" }}>Stay informed</h3>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>
              Get programme updates and workforce insights in your inbox.
            </p>
            {/* No form submit until wired to a provider — avoids PII in query strings. */}
            <div className="signup">
              <input placeholder="you@email.com" aria-label="Email address" type="email" />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
            <p style={{ fontSize: ".8rem", color: "var(--muted)", marginTop: 12 }}>
              Not yet wired to an email provider — submissions don&apos;t send in this build.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
