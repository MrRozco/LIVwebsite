import type {
  AboutBlock,
  BlogPost,
  ContactInfo,
  HeroSlide,
  IntroductionBlock,
  AssessmentBlock,
  CTABlock,
  PricingPlan,
  SectionHeader,
  Service,
  Stat,
  TeamMember,
  Testimonial,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Root-Cause Functional Wellness",
    title: "Transforming Lives Beyond Weight and Disease",
    highlight: ["Transforming", "Weight", "Disease"],
    description:
      "Tired of medications that multiply? Blood pressure, blood sugar, weight—all spiraling together. You're not lazy. You're not failing. Your body is screaming for a different approach.",
    imageAlt: "Illustration of guided movement and wellness",
    image: "/assets/images/livinginvibrance_hero.png",
  },
  {
    eyebrow: "End the Endless Cycle",
    title: "Break Free from the Medication Merry-Go-Round",
    highlight: ["Break", "Free", "Medication"],
    description:
      "Stop the pattern of endless prescriptions, side effects, and diminishing hope. Embrace a personalized, root-cause approach that restores balance and helps you thrive again—available across Maryland, Washington DC, and Virginia.",
    imageAlt: "Illustration representing energy and weight management",
    image: "/assets/images/livinginvibrace_hero_2.png",
  },
];

export const aboutBlock: AboutBlock = {
  eyebrow: "Your Current Reality",
  title: "The Medication Merry-Go-Round",
  description:
    "You know the pattern all too well: one pill for blood pressure, another for blood sugar, perhaps one for cholesterol and a diuretic on top. Each new prescription arrives with side effects that demand yet another medication. The cycle continues indefinitely—your wallet empties, your pill organizer overflows, and your hope steadily fades.",
  highlights: [
    "Escalating medications that treat symptoms but rarely address underlying causes",
    "Mounting side effects that require additional drugs to manage",
    "Financial burden from ongoing prescriptions and doctor visits",
    "Growing fatigue and diminished quality of life as the cycle persists",
    "Increasing sense of hopelessness despite your best efforts",
  ],
  image: "/assets/images/Medication Merry-Go-Round.jpg",
  ctaLabel: "Book a Consultation",
  ctaHref: "/contact",
  imagePosition: "right",
};

export const servicesHeader: SectionHeader = {
  eyebrow: "Addressing the Root Causes",
  title: "The Living in Vibrance Solution",
  description:
    "Functional wellness goes beyond symptom management. By identifying and resolving the underlying drivers of your challenges—such as chronic inflammation, insulin resistance, and hormonal imbalance—we restore your body's natural ability to heal. This personalized, sustainable approach empowers you to reduce medication reliance, regain energy, and thrive once again, with support tailored for individuals in Maryland, Washington DC, and Virginia.",
};

export const services: Service[] = [
  {
    title: "Nutrition Reset",
    description:
      "Real, nutrient-dense foods that actively reduce inflammation and stabilize insulin—no restrictive diets or deprivation. Focus on healing choices that support metabolic balance and long-term vitality.",
    image: "/assets/images/Nutrition_reset.png",
    imageAlt: "Nutrition reset plate with balanced whole foods",
    href: "/assessment",
    ctaLabel: "Explore Your Nutrition Plan",
  },
  {
    title: "Strategic Movement",
    description:
      "Intelligent, body-friendly movement designed to enhance insulin sensitivity, improve circulation, and build resilience—without punishing workouts or joint stress. Tailored to your current capacity for sustainable progress.",
    image: "/assets/images/woman_Exercising.jpg",
    imageAlt: "Illustration of guided movement and wellness",
    href: "/assessment",
    ctaLabel: "Explore Your Movement Plan",
  },
  {
    title: "Sleep & Stress Management",
    description:
      "Prioritize deep, restorative sleep and effective stress reduction to allow your body to heal overnight. Techniques to lower cortisol, regulate hormones, and break the cycle of exhaustion that perpetuates chronic conditions.",
    image: "/assets/images/serene_woman.png",
    imageAlt: "Illustration representing sleep and stress balance",
    href: "/assessment",
    ctaLabel: "Start Reclaiming Restful Balance",
  },
];

export const introductionBlock: IntroductionBlock = {
  title: "Meet Dr. Evangeline Obi",
  description:
    "Are you navigating challenges related to overweight, hypertension, or cardiovascular disease and feeling overwhelmed? Dr. Obi empowers individuals to achieve clarity in their health journey, emotional resilience during lifestyle changes, and personal agency amid impactful concerns. Supporting those with courage, openness, and determination, she screens for and manages conditions related to weight, hypertension, and diabetes—freeing time, money, and energy for emotional, financial, and spiritual well-being.",
  ctaLabel: "Learn More About Dr. Obi",
  ctaHref: "/contact",
  image: "/assets/images/Dr_obi.jpg",
  imageAlt: "Portrait of Dr. Evangeline Obi",
};
export const assessmentBlock: AssessmentBlock = {
  eyebrow: "Personalized Screening",
  title: "Start your comprehensive health assessment",
  description:
    "Complete our quick, confidential self-assessment to uncover key patterns in your symptoms and lifestyle factors related to weight challenges, hypertension, blood sugar instability, and related concerns. In minutes, receive personalized insights to guide your next steps—no commitment required.",
  bullets: [
    "Identify key patterns in inflammation, insulin response, gut health, and stress impact.",
    "Receive a customized summary highlighting what may be holding you back.",
    "Gain clarity to prepare for your empowerment call.",
  ],
  primaryCtaLabel: "Go to Assessment",
  primaryCtaHref: "/assessment",
  secondaryCtaLabel: "Take the Quick Survey",
};

export const ctaBlock: CTABlock = {
  eyebrow: "Limited Client Openings",
  title: "Get a personalized chronic care plan in under 10 minutes",
  description:
    "Fast, evidence-based intake that helps Dr. Obi tailor your care and identify immediate next steps for sustainable progress.",
  bullets: [
    "No guesswork—clear next steps within 48 hours",
    "Clinician-led review for hypertension, weight, and diabetes risk",
    "Action plan built around your lifestyle and schedule",
  ],
  primaryCtaLabel: "Start Assessment",
  primaryCtaHref: "/assessment",
  secondaryCtaLabel: "Book a Consultation",
  secondaryCtaHref: "/contact",
  reassurance: "No commitment. Your information stays private and secure.",
  highlightLabel: "Average completion time",
  highlightValue: "7 minutes",
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
    name: "Mia Carter",
    role: "Client",
    quote:
      "The plan felt custom-made for my life. I finally have energy and structure without feeling restricted.",
    image: "/assets/images/testimonial-01.svg",
  },
  {
    name: "Devon Brooks",
    role: "Fitness Enthusiast",
    quote: "The coaching gave me clarity on what to eat and when. Recovery has been incredible.",
    image: "/assets/images/testimonial-02.svg",
  },
  {
    name: "Harper Nguyen",
    role: "Busy Professional",
    quote:
      "Simple, realistic, and supportive. The guidance fits my work schedule and keeps me on track.",
    image: "/assets/images/testimonial-03.svg",
  },
];

export const pricingHeader: SectionHeader = {
  eyebrow: "Pricing",
  title: "Plans tailored to your pace",
  description: "Choose the level of support that fits your lifestyle.",
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Reset",
    price: "$120",
    description: "Perfect for a focused nutrition tune-up.",
    features: [
      "Initial assessment",
      "Personal meal roadmap",
      "One follow-up session",
      "Email support",
    ],
  },
  {
    name: "Momentum",
    price: "$260",
    description: "Ongoing guidance for measurable progress.",
    features: [
      "Everything in Starter",
      "Three coaching sessions",
      "Lifestyle habit tracker",
      "Weekly check-ins",
    ],
  },
  {
    name: "Total Wellness",
    price: "$420",
    description: "Comprehensive support for long-term change.",
    features: [
      "All Momentum perks",
      "Customized recipe pack",
      "Performance fueling",
      "Priority messaging",
    ],
  },
];

export const blogHeader: SectionHeader = {
  eyebrow: "Insights",
  title: "Tips, recipes, and wellness guidance",
  description: "Practical reads to keep your nutrition journey on track.",
};

export const blogPosts: BlogPost[] = [
  {
    title: "5 Habits to Reset Your Morning Nutrition",
    date: "Feb 10, 2026",
    category: "Wellness",
    image: "/assets/images/blog-01.svg",
    excerpt: "Start the day with hydration, balanced protein, and a clear plan for steady energy.",
    href: "/assessment",
  },
  {
    title: "Building a Meal Plan That Actually Sticks",
    date: "Jan 28, 2026",
    category: "Nutrition",
    image: "/assets/images/blog-02.svg",
    excerpt: "Create a flexible weekly structure with easy swaps and prep-friendly recipes.",
    href: "/assessment",
  },
  {
    title: "Smart Snack Ideas for Busy Weeks",
    date: "Jan 15, 2026",
    category: "Lifestyle",
    image: "/assets/images/blog-03.svg",
    excerpt: "Portable snacks can still be balanced. Build a rotation you actually enjoy.",
    href: "/assessment",
  },
];

export const contactHeader: SectionHeader = {
  eyebrow: "Contact",
  title: "Let’s design your wellness plan",
  description: "Share your goals and we’ll reply with availability within one business day.",
};

export const contactInfo: ContactInfo = {
  title: "Let’s design your wellness plan",
  description: "Share your goals and we’ll reply with availability within one business day.",
  studio: "42 Wellness Avenue, Portland",
  email: "hello@nutricare.com",
  phone: "+1 (555) 840-2398",
  hours: "Mon–Fri, 8am–6pm",
};
