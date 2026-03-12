import type { Metadata } from "next";
import { Merriweather, Rubik } from "next/font/google";
import "./globals.scss";
import "swiper/css";
import "swiper/css/effect-fade";

const headingFont = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Rubik({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Living in Vibrance",
    template: "%s | Living in Vibrance",
  },
  description: "Personalized functional wellness and sustainable lifestyle guidance.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Living in Vibrance",
    description: "Personalized functional wellness and sustainable lifestyle guidance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Living in Vibrance",
    description: "Personalized functional wellness and sustainable lifestyle guidance.",
  },
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
