import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL 
    ? process.env.NEXT_PUBLIC_APP_URL 
    : process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "https://gtss.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
