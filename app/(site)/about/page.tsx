import type { Metadata } from "next";
import { AboutSection } from "@/components/custom/AboutSection";
import { TestimonialsSection } from "@/components/custom/TestimonialsSection";
import { AssessmentSection } from "@/components/custom/AssessmentSection";
import { CTASection } from "@/components/custom/CTASection";
import { assessmentBlock, ctaBlock, testimonials, testimonialsHeader } from "@/app/data";
import { aboutBlock } from "./data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Living in Vibrance team and our functional wellness approach.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Living in Vibrance",
    description: "Meet the Living in Vibrance team and our functional wellness approach.",
    url: "/about",
    images: [
      {
        url: "/assets/images/LIV_Homepage.png",
        alt: "Living in Vibrance homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Living in Vibrance",
    description: "Meet the Living in Vibrance team and our functional wellness approach.",
    images: ["/assets/images/LIV_Homepage.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutSection content={aboutBlock} />
      <TestimonialsSection header={testimonialsHeader} items={testimonials} />

      <CTASection content={ctaBlock} />
    </>
  );
}
