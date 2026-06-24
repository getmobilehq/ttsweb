import Image from "next/image";
import { Reveal } from "../ui/Reveal";
import type { Audience } from "@/lib/content";

// One props-driven block, rendered once per audience segment (HANDOFF_V2 §3).
export function AudienceSection({ audience }: { audience: Audience }) {
  const { id, label, title, body, cta, ctaHref, dark, flip, visual, img, imgAlt } = audience;

  return (
    <section id={id} className={`aud ${dark ? "dark" : ""}`}>
      <div className="wrap">
        <div className={`aud-grid ${flip ? "flip" : ""}`}>
          <Reveal>
            <span className="tag-aud">{label}</span>
            <h3>{title}</h3>
            <p>{body}</p>
            <a className={`btn ${dark ? "btn-primary" : "btn-dark"}`} href={ctaHref}>
              {cta}
            </a>
          </Reveal>
          <Reveal className={`aud-visual ${visual}`}>
            <Image src={img} alt={imgAlt} fill sizes="(max-width: 900px) 100vw, 52vw" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
