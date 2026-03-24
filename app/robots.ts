import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";

  if (!isProduction) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    host: "https://www.livinginvibrance.com",
    sitemap: "https://www.livinginvibrance.com/sitemap.xml",
  };
}
