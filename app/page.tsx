import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhyBpo } from "@/components/WhyBpo";
import { Glance } from "@/components/Glance";
import { Pillars } from "@/components/Pillars";
import { SupportGrid } from "@/components/SupportGrid";
import { PartnerCta } from "@/components/PartnerCta";
import { Footer } from "@/components/Footer";
import { operators, government } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhyBpo />
        <Glance />
        <Pillars />
        <SupportGrid
          id="operators"
          variant="dark"
          eyebrow={operators.eyebrow}
          heading={operators.heading}
          items={operators.items}
        />
        <SupportGrid
          id="government"
          variant="light"
          eyebrow={government.eyebrow}
          heading={government.heading}
          items={government.items}
        />
        <PartnerCta />
      </main>
      <Footer />
    </>
  );
}
