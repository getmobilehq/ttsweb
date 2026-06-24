import { Ribbon } from "@/components/home/Ribbon";
import { Hero } from "@/components/home/Hero";
import { AudienceSection } from "@/components/home/AudienceSection";
import { PVM } from "@/components/home/PVM";
import { Impact } from "@/components/home/Impact";
import { FraudBand } from "@/components/home/FraudBand";
import { ExploreTrio } from "@/components/home/ExploreTrio";
import { FinalCta } from "@/components/home/FinalCta";
import { audiences, audienceIntro } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Ribbon />
      <Hero />

      {/* Audience zone: intro + jump chips, then the five stacked segments. */}
      <section className="sec tight" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="aud-intro">
            <div className="head">
              <span className="eyebrow">{audienceIntro.eyebrow}</span>
              <h2>{audienceIntro.heading}</h2>
            </div>
            <div className="chips">
              {audiences.map((a) => (
                <a key={a.id} className="chip" href={`#${a.id}`}>
                  {a.chip}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {audiences.map((a) => (
        <AudienceSection key={a.id} audience={a} />
      ))}

      <PVM />
      <Impact />
      <FraudBand />
      <ExploreTrio />
      <FinalCta />
    </>
  );
}
