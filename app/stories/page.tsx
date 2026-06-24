import type { Metadata } from "next";
import Image from "next/image";
import { stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stories of impact",
  description: stories.hero.lead,
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <span className="eyebrow">{stories.hero.eyebrow}</span>
          <h1 style={{ marginTop: 16 }}>{stories.hero.heading}</h1>
          <p className="lead">{stories.hero.lead}</p>
          <div className="chips" style={{ marginTop: 24 }}>
            {stories.filters.map((f) => (
              <span className="chip" key={f}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <span className="scaffold">Scaffold · stories load here once published</span>
          <div className="cards3" style={{ marginTop: 26 }}>
            {stories.items.map((item) => (
              <article className="tile" key={item.title}>
                <div className="ph">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 360px"
                  />
                </div>
                <div className="body">
                  <div className="meta">{item.meta}</div>
                  <h3>{item.title}</h3>
                  <p>A short excerpt of the story will appear here, drawing the reader into the full piece.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
