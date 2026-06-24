import { APPLY_URL, MAIL } from "@/lib/links";
import { finalCta } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="sec dark fin">
      <div className="wrap">
        <span className="eyebrow">{finalCta.eyebrow}</span>
        <h2 style={{ marginTop: 14 }}>{finalCta.heading}</h2>
        <p>{finalCta.body}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={APPLY_URL}>
            Apply for free
          </a>
          <a className="btn btn-light" href={MAIL}>
            Become a partner
          </a>
        </div>
      </div>
    </section>
  );
}
