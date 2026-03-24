import type { Metadata } from "next";
import { Merriweather, Rubik } from "next/font/google";
import "./globals.scss";
import "swiper/css";
import "swiper/css/effect-fade";

const siteUrl = "https://www.livinginvibrance.com";
const siteName = "Living in Vibrance";
const isProduction =
  process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";

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
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: "Personalized functional wellness and sustainable lifestyle guidance.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: "Personalized functional wellness and sustainable lifestyle guidance.",
    type: "website",
    url: "/",
    siteName,
    locale: "en_US",
    images: [
      {
        url: "/assets/images/LIV_Homepage.png",
        alt: "Living in Vibrance homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Personalized functional wellness and sustainable lifestyle guidance.",
    images: ["/assets/images/LIV_Homepage.png"],
  },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : {
        index: false,
        follow: false,
        nocache: true,
      },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    },
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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/livinginvibrance_logo_font.png`,
    email: "hello@livinginvibrance.com",
    telephone: "+1-301-675-6700",
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/assets/images/livinginvibrance_hero.png`,
    telephone: "+1-301-675-6700",
    email: "hello@livinginvibrance.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9701 Apollo Dr",
      addressLocality: "Largo",
      addressRegion: "MD",
      postalCode: "20774",
      addressCountry: "US",
    },
    areaServed: ["Maryland", "Washington, DC", "Virginia"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "en-US",
  };

  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
