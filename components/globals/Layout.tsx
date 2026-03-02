import type { ReactNode } from "react";
import { Header } from "@/components/globals/Header";
import { Footer } from "@/components/globals/Footer";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
