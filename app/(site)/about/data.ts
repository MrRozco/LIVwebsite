import type { AboutBlock, CTABlock, SectionHeader, Stat, TeamMember, Testimonial } from "@/types";

export const aboutBlock: AboutBlock = {
  eyebrow: "Our Story",
  title: "About Evangeline Obi – Functional Medicine Practitioner at Living in Vibrance",
  description:
    "Frustrated by watching patients struggle with uncontrolled hypertension, diabetes, obesity, and cardiometabolic syndrome despite multiple medications, I transitioned into functional medicine to address the true root causes rather than symptoms alone. Conventional approaches often overlook interconnected factors such as insulin resistance, chronic inflammation, gut dysfunction, and hormonal imbalances—issues I personally experienced when conventional care failed to resolve my own weight challenges until I investigated thyroid function and cortisol levels through functional testing.\n\nThis journey deepened when I discovered the profound role of gut health in driving conditions like diabetes, hypertension, and obesity. Collaborating with forward-thinking teams and applying these principles to myself and my family yielded remarkable improvements. Now, with over 15 years of clinical experience building trusting relationships through attentive listening and education, I empower patients to prevent and manage chronic disease effectively.\n\nI am committed to helping individuals in Maryland, Washington DC, and Virginia reclaim their health through personalized functional medicine testing, targeted supplements, lifestyle optimization, and sustainable strategies that promote healing from the inside out. The greatest reward lies not in financial gain, but in witnessing patients—and my own family—achieve lasting vitality and freedom from the medication cycle.",
  image: "/assets/images/Dr_obi.jpg",
  ctaLabel: "Contact the Team",
  ctaHref: "/contact",
  imagePosition: "left",
};

export const teamHeader: SectionHeader = {
  eyebrow: "Our Team",
  title: "Experienced nutrition professionals",
  description: "Certified specialists guiding you at every step.",
};

export const stats: Stat[] = [
  { label: "Clients Coached", value: "1,250+" },
  { label: "Programs Delivered", value: "85" },
  { label: "Nutrition Experts", value: "12" },
  { label: "Wellness Awards", value: "18" },
];

export const team: TeamMember[] = [
  {
    name: "Avery Morgan",
    role: "Lead Dietitian",
    image: "/assets/images/team-01.svg",
  },
  {
    name: "Jordan Lee",
    role: "Wellness Coach",
    image: "/assets/images/team-02.svg",
  },
  {
    name: "Riley Chen",
    role: "Nutrition Analyst",
    image: "/assets/images/team-03.svg",
  },
  {
    name: "Sage Patel",
    role: "Lifestyle Strategist",
    image: "/assets/images/team-04.svg",
  },
];

export const testimonialsHeader: SectionHeader = {
  eyebrow: "Testimonials",
  title: "Real stories from our clients",
  description: "Results that build confidence and lasting habits.",
};

export const testimonials: Testimonial[] = [
  {
    name: "Alana R.",
    role: "Client",
    quote:
      "The assessment process made everything feel manageable. I finally understood what was driving my fatigue and had a clear, practical plan that fit my schedule.",
    image: "/assets/images/testimonial-01.svg",
  },
  {
    name: "Devin S.",
    role: "Client",
    quote:
      "I appreciated the thoroughness without the overwhelm. Each step built on the last, and I felt supported the entire way through.",
    image: "/assets/images/testimonial-02.svg",
  },
  {
    name: "Marisol T.",
    role: "Client",
    quote:
      "The recommendations were realistic and actionable. Within weeks I had more energy, better sleep, and a calmer relationship with food.",
    image: "/assets/images/testimonial-03.svg",
  },
];

export const ctaBlock: CTABlock = {
  eyebrow: "Start With Clarity",
  title: "Know exactly what your body needs next",
  description:
    "Take the guided assessment and get a clinician-reviewed plan that aligns with your real life and goals.",
  bullets: [
    "Private, secure intake",
    "Personalized action plan",
    "Support from a dedicated care team",
  ],
  primaryCtaLabel: "Start Assessment",
  primaryCtaHref: "/assessment",
  secondaryCtaLabel: "Book a Consultation",
  secondaryCtaHref: "/contact",
  reassurance: "No pressure. Cancel anytime.",
  highlightLabel: "Trusted by",
  highlightValue: "1,250+ clients",
};
