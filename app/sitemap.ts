import { MetadataRoute } from "next";
import { getPublicProductRoutes } from "@/lib/data/public-products";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL 
    ? process.env.NEXT_PUBLIC_APP_URL 
    : process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "https://gtss.vercel.app";

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/accessibility",
    "/blog",
    "/careers",
    "/contact",
    "/cookies",
    "/demo",
    "/enterprise",
    "/faq",
    "/features",
    "/pricing",
    "/privacy",
    "/products",
    "/security",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Dynamic Product Routes
  const products = await getPublicProductRoutes();

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(product.updatedAt || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
