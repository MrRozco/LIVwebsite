import type { Metadata } from "next";
import { AssessmentsSection } from "@/components/custom/AssessmentsSection";
import { CTASection } from "@/components/custom/CTASection";
import { ctaBlock } from "@/app/data";
import { assessmentsContent } from "./data";

export const metadata: Metadata = {
  title: "Assessments",
  description: "Complete your health assessments to personalize your care plan.",
  alternates: {
    canonical: "/assessment",
  },
  openGraph: {
    title: "Assessment | Living in Vibrance",
    description: "Complete your health assessments to personalize your care plan.",
    url: "/assessment",
    images: [
      {
        url: "/assets/images/LIV_Homepage.png",
        alt: "Living in Vibrance homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assessment | Living in Vibrance",
    description: "Complete your health assessments to personalize your care plan.",
    images: ["/assets/images/LIV_Homepage.png"],
  },
};

export default function AssessmentPage() {
  return (
    <>
      <AssessmentsSection content={assessmentsContent} />
      <CTASection content={ctaBlock} />
    </>
  );
}
