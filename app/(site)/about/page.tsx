import type { Metadata } from "next";
import { AboutSection } from "@/components/custom/AboutSection";
import { StatsSection } from "@/components/custom/StatsSection";
import { TeamSection } from "@/components/custom/TeamSection";
import { TestimonialsSection } from "@/components/custom/TestimonialsSection";
import { AssessmentSection } from "@/components/custom/AssessmentSection";
import { CTASection } from "@/components/custom/CTASection";
import { assessmentBlock, ctaBlock } from "@/app/data";
import { aboutBlock, stats, team, teamHeader, testimonials, testimonialsHeader } from "./data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the NutriCare wellness team and our nutrition approach.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection content={aboutBlock} />
      <AssessmentSection content={assessmentBlock} />
      <CTASection content={ctaBlock} />
    </>
  );
}
