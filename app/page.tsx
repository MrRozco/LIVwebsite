import type { Metadata } from "next";
import { Hero } from "@/components/custom/Hero";
import { ServicesSection } from "@/components/custom/ServicesSection";
import { IntroductionSection } from "@/components/custom/IntroductionSection";
import { AssessmentSection } from "@/components/custom/AssessmentSection";
import { AboutSection } from "@/components/custom/AboutSection";
import { StatsSection } from "@/components/custom/StatsSection";
import { TeamSection } from "@/components/custom/TeamSection";
import { TestimonialsSection } from "@/components/custom/TestimonialsSection";
import { BlogSection } from "@/components/custom/BlogSection";
import { CTASection } from "@/components/custom/CTASection";
import { PricingSection } from "@/components/custom/PricingSection";
import { ContactSection } from "@/components/custom/ContactSection";
import {
  aboutBlock,
  blogPosts,
  blogHeader,
  contactHeader,
  contactInfo,
  ctaBlock,
  heroSlides,
  introductionBlock,
  assessmentBlock,
  pricingPlans,
  pricingHeader,
  services,
  servicesHeader,
  stats,
  team,
  teamHeader,
  testimonials,
  testimonialsHeader,
} from "@/app/data";
import { Layout } from "@/components/globals/Layout";

export const metadata: Metadata = {
  title: "Home",
  description: "Personalized nutrition and wellness coaching for a balanced life.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Living in Vibrance",
    description: "Personalized nutrition and wellness coaching for a balanced life.",
    url: "/",
    images: [
      {
        url: "/assets/images/LIV_Homepage.png",
        alt: "Living in Vibrance homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Living in Vibrance",
    description: "Personalized nutrition and wellness coaching for a balanced life.",
    images: ["/assets/images/LIV_Homepage.png"],
  },
};

export default function HomePage() {
  return (
    <Layout>
      <Hero slides={heroSlides} />
      <AboutSection content={aboutBlock} />
      <ServicesSection header={servicesHeader} items={services} />
      <IntroductionSection content={introductionBlock} />
      <AssessmentSection content={assessmentBlock} />
      <TestimonialsSection header={testimonialsHeader} items={testimonials} />
      <CTASection content={ctaBlock} />
    </Layout>
  );
}
