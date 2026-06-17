// Single source of truth for all site copy and data (HANDOFF.md §5/§6).
// Copy is final and verbatim from the approved prototype — do not paraphrase,
// invent, or add marketing copy. Structured this way so a future CMS swap is a
// one-file change.

export const PARTNERSHIP_EMAIL = "partnership@ttsnigeria.org";
export const PARTNERSHIP_MAILTO = `mailto:${PARTNERSHIP_EMAIL}`;
export const PROJECT_DELIVERY_MAILTO = "mailto:projectdelivery@ttsnigeria.org";

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "#opportunity", label: "The opportunity" },
  { href: "#operators", label: "For operators" },
  { href: "#government", label: "For government" },
  { href: "#pillars", label: "Pillars" },
];

export type Stat = { n: string; l: string };

export const hero = {
  eyebrow: "Technology Talent Services · Nigeria",
  // `emphasis` is rendered in accent green inline within the headline.
  headlineBefore: "Industry-ready BPO talent, sourced for ",
  emphasis: "inclusion and impact",
  headlineAfter: ".",
  lead: "TTS Nigeria connects marginalised young women to dignified work in the BPO sector — and connects operators and governments to a quality, inclusive talent pipeline built around real hiring demand.",
  stats: [
    { n: "30,000", l: "young women skilled to BPO-ready standards" },
    { n: "25,000", l: "placed in formal, contractual BPO jobs" },
    { n: "18 mo", l: "programme duration" },
  ] satisfies Stat[],
};

export type MosaicTile =
  | { kind: "photo"; label: string; span?: boolean }
  | { kind: "word"; text: string; tone: "green" | "lemon" | "yellow" | "cream"; span?: boolean };

export const mosaicTiles: MosaicTile[] = [
  { kind: "word", text: "Inclusive opportunities", tone: "green", span: true },
  { kind: "photo", label: "Photo" },
  { kind: "photo", label: "Photo" },
  { kind: "word", text: "Local impact", tone: "yellow" },
  { kind: "word", text: "Global relevance", tone: "cream" },
  { kind: "photo", label: "Brand photography", span: true },
  { kind: "word", text: "Dignified work", tone: "lemon" },
];

export type ProblemCard = { big: string; title: string; body: string };

export const problem = {
  eyebrow: "The problem we solve",
  heading: "A talent gap on one side, an opportunity gap on the other.",
  lead: "Nigeria has Africa's largest, youngest population and a fast-growing BPO sector — but the two are not yet connected at scale. TTS Nigeria closes that gap.",
  cards: [
    {
      big: "53.4%",
      title: "Young women, locked out",
      body: "Youth unemployment sits at 53.4%, and young women face it at nearly 1.7× the rate of men — compounded for persons with disabilities and internally displaced persons through gender bias, geography, and unequal digital access.",
    },
    {
      big: "5",
      title: "Operators, underserved",
      body: "Nigeria's BPO sector faces limited access to industry-ready talent, infrastructure gaps, trust concerns that weaken client confidence, and thin policy incentives. We address all five through structured support.",
    },
  ] satisfies ProblemCard[],
};

export const whyBpo = {
  eyebrow: "Why BPOs · why now",
  heading: "A global industry actively looking for new, scalable talent markets.",
  stats: [
    { n: "70%", l: "of Fortune 500 companies already outsource key business functions" },
    { n: "60%+", l: "of BPO providers now integrate AI and automation into delivery" },
    { n: "⅓+", l: "of global BPO activity is customer care — multilingual demand rising" },
    { n: "#1", l: "Africa's largest population, ready to compete for the work" },
  ] satisfies Stat[],
  assets:
    "As traditional hubs face rising labour costs and talent shortages, Nigeria is positioned to compete — backed by expanding digital infrastructure and political will.",
  chips: ["National Outsourcing Strategy", "EIBIC Programme", "iSTEP Programme"],
};

export type GlanceCard = { n: string; l: string; accent?: boolean };

export const glance = {
  eyebrow: "The programme at a glance",
  heading: "Impact sourcing, measured by employment — not completion.",
  lead: "An ethical talent supply chain delivering living wages, defined contracts, and structured career pathways.",
  cards: [
    { n: "30,000", l: "young women trained across high-demand BPO tracks" },
    { n: "25,000", l: "placed in formal, contractual BPO employment", accent: true },
    { n: "18,000", l: "trained in year one · 3,000 placed" },
  ] satisfies GlanceCard[],
  parts: [
    { n: "100%", l: "young women, age 18–35" },
    { n: "10%", l: "persons with disabilities" },
    { n: "5%", l: "internally displaced persons" },
  ] satisfies Stat[],
};

export type IconKey = "case" | "grad" | "mega";
export type Pillar = { icon: IconKey; title: string; goal: string; points: string[] };

export const pillars = {
  eyebrow: "Three project pillars",
  heading: "Demand, skills, and the enabling environment — built together.",
  items: [
    {
      icon: "case",
      title: "Transitioning youth to work",
      goal: "25,000 women matched",
      points: [
        "Partner with operators to anchor the programme in real hiring demand",
        "Map operator-defined roles and the skills required to fill them",
        "Match qualified women by role, competency, and location",
        "Convene operators and buyers to grow demand for impact-sourced talent",
      ],
    },
    {
      icon: "grad",
      title: "Technology talent development",
      goal: "30,000 women skilled",
      points: [
        "Translate operator requirements into curriculum and assessments",
        "Build candidate profiles and pathways matched to competency needs",
        "Deliver job-relevant training through endorsed providers and BPO academies",
      ],
    },
    {
      icon: "mega",
      title: "Policy and ecosystem advocacy",
      goal: "Infrastructure unlocked",
      points: [
        "Co-create policy frameworks that incentivise BPO sector growth",
        "Unlock and link infrastructure to impact-sourcing terms",
        "Build capacity for regulators and operators to drive inclusion",
      ],
    },
  ] satisfies Pillar[],
};

export type SupportItem = { ix: string; title: string; body: string };

export const operators = {
  eyebrow: "For BPO operators",
  heading: "Five touchpoints that cut the cost and complexity of building an inclusive workforce.",
  items: [
    { ix: "01", title: "Talent pipeline", body: "Candidates identified, assessed, and trained against your specified requirements — you receive job-ready participants." },
    { ix: "02", title: "Curriculum alignment", body: "We translate your role requirements into curricula delivered by endorsed providers. What is taught maps to what is hired." },
    { ix: "03", title: "Placement and matching", body: "Our team pairs certified participants by specialisation, competency, and location — reducing sourcing time and cost." },
    { ix: "04", title: "Inclusion infrastructure", body: "Access infrastructure and policy incentives tied to inclusive hiring, making peri-urban and underserved sourcing viable." },
    { ix: "05", title: "Post-placement tracking", body: "Verified retention and performance data — and a partner that stands behind its placements." },
  ] satisfies SupportItem[],
};

export const government = {
  eyebrow: "For regulators and public sector",
  heading: "Turning state-level ambition into measurable employment outcomes.",
  items: [
    { ix: "01", title: "BPO-enabling policy", body: "Technical support to co-develop frameworks that signal readiness to private investors." },
    { ix: "02", title: "Institutional capacity", body: "Stakeholder mapping, readiness diagnostics, and targeted training for state coordination teams." },
    { ix: "03", title: "Partnership convening", body: "Operator and investor convenings alongside government to secure capacity and stimulate investment." },
    { ix: "04", title: "Youth employability", body: "Connecting BPOs with talent so young people progress from skilling into verified, dignified jobs." },
    { ix: "05", title: "Compliance and safeguards", body: "Ready-made toolkits aligning operations with state growth, inclusion goals, and international best practice." },
  ] satisfies SupportItem[],
};

export type Contact = {
  role: string;
  name: string;
  email?: string;
  tel?: { display: string; href: string };
};

export const partner = {
  eyebrow: "How you come in",
  heading: "Let's translate digital economy ambition into jobs.",
  lead: "We partner with government, BPO operators, private-sector leaders, development organisations, training institutions, and infrastructure providers to strengthen BPO readiness and expand youth employment.",
  contacts: [
    {
      role: "Government lead",
      name: "Janet Olisa",
      // Email spellings are taken from the official brief — preserve exactly.
      email: "Janet.Olisa@ttsnigeria.org",
      tel: { display: "+234 816 567 7400", href: "+2348165677400" },
    },
    {
      role: "Partnership lead",
      name: "Kenneth Etiake",
      // Display name reads "Etiake" but the official address is "Etiaka" — keep both verbatim.
      email: "Kenneth.Etiaka@ttsnigeria.org",
      tel: { display: "+234 803 696 4338", href: "+2348036964338" },
    },
    {
      role: "Partnership team",
      name: "General enquiries",
      email: PARTNERSHIP_EMAIL,
    },
  ] satisfies Contact[],
};

export const footer = {
  tag: "TTS Nigeria Initiative",
  tagline: "Inclusive opportunities · Local impact · Global relevance",
  consortium:
    "A consortium programme advancing inclusive, impact-sourced BPO employment in Nigeria.",
};
