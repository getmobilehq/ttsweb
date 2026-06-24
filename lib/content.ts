// Single source of truth for all V2 copy and data (HANDOFF_V2 §3/§5).
// Copy is verbatim from the approved prototype — do not paraphrase or invent.
// CMS-ready: Stories/Insights/Programmes data here is placeholder scaffolding
// until wired to a content source.
import { APPLY_URL, MAIL } from "./links";

// Photography lives in /public/images. Real, consent-cleared participant photos
// must replace the illustrative set in the Stories slots before launch
// (HANDOFF_V2 §8a).
export const IMAGES = {
  hero: "/images/hero.webp",
  women: "/images/women.webp",
  "bpo-ng": "/images/bpo-ng.webp",
  "bpo-intl": "/images/bpo-intl.webp",
  "gov-ng": "/images/gov-ng.webp",
  "gov-intl": "/images/gov-intl.webp",
  "story-1": "/images/story-1.webp",
  "story-2": "/images/story-2.webp",
  "story-3": "/images/story-3.webp",
  partner: "/images/partner.webp",
} as const;

export type Stat = { n: string; l: string };

// The four headline metrics, reused across Home hero, Impact band, and About.
export const stats: Stat[] = [
  { n: "30,000", l: "women enabled for global digital work" },
  { n: "25,000", l: "connected to structured employment" },
  { n: "15%", l: "from disability & displacement-affected communities" },
  { n: "12+", l: "states across Nigeria" },
];

export const hero = {
  eyebrow: "Technology Talent Services · Nigeria",
  headlineBefore: "Pathways to ",
  emphasis: "dignified digital work",
  headlineAfter: ", at global scale.",
  leads: [
    "TTS Nigeria connects women to employment opportunities, gives employers access to capable talent, and supports the growth of Nigeria's technology talent outsourcing sector.",
    "By bringing together employers, government, training partners, and communities, we help more women participate in the economy — while strengthening Nigeria's position as a destination for technology-enabled services.",
  ],
  imageAlt: "Young Nigerian women collaborating in a modern workplace",
};

export const ribbon = {
  bold: "Applications open.",
  rest: "We're now accepting applications from young Nigerian women.",
};

export type Visual = "v-photo" | "v-cream" | "v-lemon" | "v-yellow";

export type Audience = {
  id: string;
  label: string;
  chip: string;
  title: string;
  body: string;
  cta: string;
  ctaHref: string;
  dark?: boolean;
  flip?: boolean;
  visual: Visual;
  img: string;
  imgAlt: string;
  priority?: boolean;
};

export const audienceIntro = {
  eyebrow: "Who we serve",
  heading: "One ecosystem. Five ways in.",
};

export const audiences: Audience[] = [
  {
    id: "a-women",
    label: "For women",
    chip: "Women",
    visual: "v-photo",
    img: IMAGES.women,
    imgAlt: "A young Nigerian woman smiling",
    title: "Talent is everywhere. Opportunity should be too.",
    body: "Every day, young Nigerian women show up ready to build a better future. We help women aged 18–35 prepare for the roles employers are hiring for and connect them to real opportunities — whether you live in a town, are rebuilding after displacement, or navigating life with a disability.",
    cta: "Apply for free",
    ctaHref: APPLY_URL,
  },
  {
    id: "a-ng-bpo",
    label: "For Nigerian BPOs",
    chip: "Nigerian BPOs",
    visual: "v-cream",
    flip: true,
    img: IMAGES["bpo-ng"],
    imgAlt: "Colleagues collaborating in a Nigerian office",
    title: "The growth you want. The talent you need.",
    body: "The global tech outsourcing sector is full of opportunity. TTS Nigeria helps you seize it — opening pathways to new markets, connecting you to workforce-ready talent, and facilitating an enabling business environment.",
    cta: "Contact us today",
    ctaHref: MAIL,
  },
  {
    id: "a-int-bpo",
    label: "For international BPOs",
    chip: "International BPOs",
    visual: "v-photo",
    img: IMAGES["bpo-intl"],
    imgAlt: "A professional team in a bright modern office",
    title: "A new market. A trusted path forward.",
    body: "Nigeria is home to one of the world's largest emerging talent pools. We help international employers unlock it through trusted local partnerships, workforce-ready talent, and an ecosystem designed for long-term growth — whether you're exploring a new delivery location or scaling existing operations.",
    cta: "Partner with us",
    ctaHref: MAIL,
  },
  {
    id: "a-ng-gov",
    label: "For Nigerian government",
    chip: "Nigerian government",
    visual: "v-lemon",
    flip: true,
    img: IMAGES["gov-ng"],
    imgAlt: "A group of Nigerian women, including wheelchair users",
    title: "Strengthening Nigeria's competitiveness in the global outsourcing economy.",
    body: "As demand for technology-enabled services grows, Nigeria's opportunity lies in creating export-earning jobs at scale. We connect employers, operators, and government to unlock structured access to global digital work for young women — increasing foreign-exchange earnings and national competitiveness.",
    cta: "Collaborate with us",
    ctaHref: MAIL,
  },
  {
    id: "a-int-gov",
    label: "For international government",
    chip: "International government",
    visual: "v-photo",
    img: IMAGES["gov-intl"],
    imgAlt: "A diverse group of professional women",
    title: "Reliable delivery capacity in the global outsourcing economy.",
    body: "Global demand for outsourced services is accelerating, driving the need for diversified, resilient delivery markets. Nigeria is uniquely positioned through its scale, youthful talent, and expanding ecosystem — and we turn that national advantage into dependable global opportunity.",
    cta: "Collaborate with us",
    ctaHref: MAIL,
  },
];

export const pvm = {
  eyebrow: "Our purpose",
  purposeBefore:
    "To unlock growth for outsourcing operators — local and international — and create pathways to ",
  purposeBold: "dignified employment for young Nigerian women",
  purposeAfter:
    ", by strengthening the connections between talent, industry, government, and opportunity.",
  cards: [
    {
      eyebrow: "Our vision",
      title: "A global destination for talent services.",
      body: "To position Nigeria as a global destination for technology talent services and drive access to global opportunities for young Nigerian women.",
    },
    {
      eyebrow: "Our mission",
      title: "Growth through collaboration.",
      body: "To unlock growth pathways for outsourcing operators and young women through constructive ecosystem collaboration.",
    },
  ],
};

export const impact = {
  eyebrow: "The impact we're building",
  heading: "A coordinated system for digital work.",
  lead: "National and global infrastructure connecting talent, employers, governments, and outsourcing demand.",
  enables: [
    "Scalable access to global digital employment for Nigerian women",
    "Expanded outsourcing capacity for local and international operators",
    "Stronger alignment between workforce supply and global demand",
    "Increased export earnings from technology-enabled services",
    "Faster, more reliable access to delivery markets for global clients",
  ],
  stakeholders: [
    {
      title: "For participants",
      points: [
        "30,000 women enabled for participation in global digital work",
        "25,000 connected to structured employment across the outsourcing economy",
        "15% representation from disability and displacement-affected communities",
      ],
    },
    {
      title: "For BPOs — local & global",
      points: [
        "Reduced friction in sourcing qualified, work-ready talent across Nigeria",
        "Faster deployment into scalable operational teams",
        "Expanded access to talent across 12+ states",
      ],
    },
    {
      title: "For governments — local & global",
      points: [
        "Increased participation in export-earning digital services",
        "Improved alignment between workforce supply and global demand",
        "Stronger national competitiveness in the outsourcing economy",
      ],
    },
    {
      title: "For clients — local & global",
      points: [
        "Access to scalable, cost-efficient outsourcing capacity from Nigeria",
        "Reliable delivery channels for technology-enabled services",
        "Entry into a rapidly growing African digital services market",
      ],
    },
  ],
  footprintN: "12+",
  footprintBold: "states across Nigeria.",
  footprintRest: "Building distributed capacity for global digital work at scale.",
};

export const fraud = {
  heading: "TTS Nigeria is free. Always free.",
  bodyBefore:
    "We never charge for applications, assessments, training, programme participation, or placement support.",
  bodyBold: " If anyone requests payment on behalf of TTS Nigeria, it is fraudulent.",
  bodyAfter: " Please stay vigilant and report suspicious activity.",
};

export type IconKey = "story" | "compass" | "news";
export type ExploreCard = {
  icon: IconKey;
  title: string;
  body: string;
  cta: string;
  href: string;
};

export const explore = {
  eyebrow: "Explore TTS Nigeria",
  heading: "Real stories, real opportunities, real impact.",
  cards: [
    {
      icon: "story",
      title: "Stories of impact",
      body: "Meet the women, employers, and partners building a more inclusive workforce for Nigeria.",
      cta: "View stories",
      href: "/stories",
    },
    {
      icon: "compass",
      title: "Programmes, states & courses",
      body: "Explore available programmes, training pathways, participating states, and upcoming cohorts.",
      cta: "Explore opportunities",
      href: "/programmes",
    },
    {
      icon: "news",
      title: "Insights, stories & updates",
      body: "Programme updates, workforce insights, and industry developments shaping the future of work.",
      cta: "Read insights",
      href: "/insights",
    },
  ] satisfies ExploreCard[],
};

export const finalCta = {
  eyebrow: "Join the ecosystem",
  heading: "Unlocking opportunity at scale.",
  body: "We bring together the stakeholders shaping the future of technology talent services — women seeking pathways to work, operators looking to grow, governments advancing competitiveness, and partners expanding access to opportunity.",
};

// ---------- About ----------
export const about = {
  hero: {
    eyebrow: "About TTS Nigeria",
    heading: "Strengthening the connections between talent and opportunity.",
    lead: "A coordinated system linking women, employers, governments, and outsourcing demand into one pathway for dignified digital work.",
  },
  impactHeading: "What this enables.",
  // Shorter stat labels used on the About impact band.
  statsShort: [
    { n: "30,000", l: "women enabled" },
    { n: "25,000", l: "connected to employment" },
    { n: "15%", l: "disability & displacement" },
    { n: "12+", l: "states" },
  ] satisfies Stat[],
  finalHeading: "Ready to build with us?",
};

// ---------- Stories (scaffold) ----------
export type StoryCard = { meta: string; title: string; img: string };
export const stories = {
  hero: {
    eyebrow: "Stories of impact",
    heading: "Real stories. Real opportunities. Real impact.",
    lead: "Meet the women, employers, and partners helping build a more inclusive workforce for Nigeria.",
  },
  filters: ["All", "Women", "Employers", "Partners"],
  items: [
    { meta: "Participant", title: "From displacement to a global support team", img: IMAGES["story-2"] },
    { meta: "Participant", title: "Learning the skills employers were hiring for", img: IMAGES["story-1"] },
    { meta: "Employer", title: "Why we source work-ready talent through TTS", img: IMAGES.partner },
    { meta: "Partner", title: "Building inclusive hiring across 12+ states", img: IMAGES["gov-ng"] },
    { meta: "Participant", title: "Navigating a career while living with a disability", img: IMAGES["story-3"] },
    { meta: "Employer", title: "Scaling a delivery team, faster", img: IMAGES["bpo-intl"] },
  ] satisfies StoryCard[],
};

// ---------- Programmes (scaffold) ----------
export const programmes = {
  hero: {
    eyebrow: "Programmes, states & courses",
    heading: "Explore opportunities near you.",
    lead: "Available programmes, training pathways, participating states, and upcoming cohorts.",
  },
  courses: [
    { title: "Customer experience", body: "Voice and non-voice support for global clients" },
    { title: "Data & operations", body: "Data entry, annotation, and back-office processing" },
    { title: "Digital sales & retention", body: "Inbound and outbound commercial support" },
    { title: "Tech-enabled services", body: "IT-enabled support and emerging service lines" },
  ],
  states: ["Lagos", "FCT Abuja", "Kano", "Rivers", "Oyo", "Enugu", "Kaduna", "Borno", "Cross River", "Plateau", "Ogun", "Anambra"],
};

// ---------- Insights (scaffold) ----------
export const insights = {
  hero: {
    eyebrow: "Insights, stories & updates",
    heading: "The future of work in Nigeria.",
    lead: "Programme updates, workforce insights, participant stories, employer perspectives, and industry developments.",
  },
  posts: [
    { meta: "Workforce insight", title: "What global clients look for in delivery markets" },
    { meta: "Programme update", title: "Applications are open across 12+ states" },
    { meta: "Employer perspective", title: "Designing inclusive hiring that scales" },
  ],
};
