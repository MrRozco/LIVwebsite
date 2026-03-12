export type NavItem = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
  children?: NavItem[];
};

export type HeroSlide = {
  eyebrow: string;
  title: string;
  highlight: [string, string, string];
  description: string;
  image: string;
  imageAlt: string;
};

export type AboutBlock = {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
  image: string;
  ctaLabel: string;
  ctaHref: string;
  imagePosition?: "left" | "right";
};

export type IntroductionBlock = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

export type AssessmentBlock = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
};

export type CTABlock = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  reassurance: string;
  highlightLabel: string;
  highlightValue: string;
};

export type AssessmentItem = {
  slug: string;
  title: string;
  summary: string;
  ctaLabel: string;
  modalIntro: string;
  category?: string;
  placeholderText?: string;
  form?: {
    mode?: "scale" | "fields";
    intro?: string;
    responseOptions: string[];
    personalInfo: {
      firstNameLabel: string;
      lastNameLabel: string;
      emailLabel?: string;
      phoneLabel?: string;
      ageLabel: string;
      genderLabel: string;
      genderOptions: string[];
    };
    sections: {
      title: string;
      description?: string;
      questions: string[];
    }[];
    fieldSections?: {
      title: string;
      description?: string;
      layout?: "grid" | "stacked";
      fields: {
        name: string;
        label: string;
        type: "text" | "number" | "date" | "tel" | "textarea" | "select";
        placeholder?: string;
        options?: string[];
        fullWidth?: boolean;
      }[];
    }[];
  };
};

export type AssessmentsPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  steps: {
    title: string;
    description: string;
  }[];
  assessments: AssessmentItem[];
};

export type SectionHeader = {
  eyebrow: string;
  title: string;
  description: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Service = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export type BlogPost = {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  href: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  tag: string;
};

export type Product = {
  name: string;
  price: string;
  image: string;
  href: string;
};

export type ContactInfo = {
  title: string;
  description: string;
  studio: string;
  email: string;
  phone: string;
  hours: string;
};
