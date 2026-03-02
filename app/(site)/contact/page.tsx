import type { Metadata } from "next";
import { ContactSection } from "@/components/custom/ContactSection";
import { contactHeader, contactInfo } from "./data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with our wellness team.",
};

export default function ContactPage() {
  return <ContactSection header={contactHeader} info={contactInfo} />;
}
