import type { Metadata } from "next";
import { ContactSection } from "@/components/custom/ContactSection";
import { contactHeader, contactInfo } from "./data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with our wellness team.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Living in Vibrance",
    description: "Connect with our wellness team.",
    url: "/contact",
    images: [
      {
        url: "/assets/images/LIV_Homepage.png",
        alt: "Living in Vibrance homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Living in Vibrance",
    description: "Connect with our wellness team.",
    images: ["/assets/images/LIV_Homepage.png"],
  },
};

export default function ContactPage() {
  return <ContactSection header={contactHeader} info={contactInfo} />;
}
