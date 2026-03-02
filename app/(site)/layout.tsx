import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Layout } from "@/components/globals/Layout";

export const metadata: Metadata = {
  title: "NutriCare Wellness",
};

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return <Layout>{children}</Layout>;
}
