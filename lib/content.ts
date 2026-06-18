export const SITE = {
  name: "Mark Deutschmann",
  descriptor: "MSF · Investment Management Certificate Program · Founder",
  email: "mark@ivesdeu.com",
  calUrl: "https://cal.com/markdeu",
  resumeHref: "/Deutschmann_Mark_Resume_2026.pdf",
  headshot: "/mark-headshot.png",
  linkedin: "https://linkedin.com/in/markdeutschmann",
  github: "https://github.com/markdeutschmann",
  location: "Milwaukee, Wisconsin",
  lat: 43.0389,
  lng: -87.9065,
};

export const BIO =
  "Finance graduate student and entrepreneur in Milwaukee. Through UWM's Investment Management Certificate Program, I help manage a real asset portfolio at the Lubar School of Business. I also co-founded IDM and Compass, a CRM for small professional services firms.";

export type ResearchRow = {
  ticker: string;
  company: string;
  thesis: string;
  rating: "SELL" | "BUY" | "HOLD" | null;
  date: string;
  pdfHref: string;
};

export const RESEARCH: ResearchRow[] = [
  {
    ticker: "FIX",
    company: "Comfort Systems USA",
    thesis:
      "~70% downside; HVAC premium unsupported by model.",
    rating: "SELL",
    date: "June 2025",
    pdfHref: "/research/comfort-systems-stock-pitch.pdf",
  },
  {
    ticker: "ABBV",
    company: "AbbVie",
    thesis: "Pending thesis",
    rating: null,
    date: "May 2025",
    pdfHref: "/research/abbv-report.pdf",
  },
  {
    ticker: "LULU",
    company: "lululemon",
    thesis: "Sell thesis",
    rating: "SELL",
    date: "May 2025",
    pdfHref: "/research/lululemon-research-report.pdf",
  },
];

export const ACTIVE_MODEL = {
  company: "AbbVie (ABBV)",
  description: "3-statement · DCF · EV/EBITDA comps · Monte Carlo",
  methods: ["3-Statement", "DCF", "EV/EBITDA Comps", "Monte Carlo"],
  link: "/models/ABBV_Model_June2026.xlsx",
};

export const METHODOLOGY = [
  "Bottom-up fundamental analysis",
  "DCF with scenario weighting",
  "Regression-based benchmarking",
  "Sell-side pitch format",
];

export type Venture = {
  name: string;
  description: string;
  href: string | null;
  image?: string;
};

export const VENTURES: Venture[] = [
  {
    name: "IDM",
    description:
      "Digital marketing and web development for small businesses",
    href: "https://ivesdeu.com",
    image: "/ventures/idm-logo.png",
  },
  {
    name: "Compass",
    description:
      "CRM and business OS for 1–10 person professional services firms",
    href: "https://compass.ivesdeu.com",
    image: "/ventures/compass-dashboard.png",
  },
];

export const NOW = {
  reading: {
    title: "Valuation",
    author: "McKinsey & Company",
  },
  listening: {
    title: "Spotify",
    href: "https://open.spotify.com",
  },
};

export const AWARDS = [
  "Student Organization Leader of the Year · 2026 UWM Student Excellence Awards",
  "Best Event of the Year · 2026 UWM Student Excellence Awards — AMA Regional Conference",
  "La Macchia New Venture Competition · Winner · $5,000 · March 2026",
  "Lubar 25 Scholarship · Top 25 students, Lubar College of Business · March 2025",
];
