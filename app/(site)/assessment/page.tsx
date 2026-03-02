import type { Metadata } from "next";
import { AssessmentsSection } from "@/components/custom/AssessmentsSection";
import { CTASection } from "@/components/custom/CTASection";
import { ctaBlock } from "@/app/data";
import { assessmentsContent } from "./data";

export const metadata: Metadata = {
  title: "Assessments",
  description: "Complete your health assessments to personalize your care plan.",
};

export default function AssessmentPage() {
  return (
    <>
      <AssessmentsSection content={assessmentsContent} />
      <CTASection content={ctaBlock} />
    </>
  );
}
