import { getPublicProducts } from "@/lib/data/public-products";
import { DemoPageClient } from "@/components/demo/DemoPageClient";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Product Demos | GTSS",
  description: "Explore live demos and video walkthroughs of GTSS products. See our software solutions in action before you buy.",
};

export default async function DemoPage() {
  const products = await getPublicProducts();
  
  // Filter products that have demo videos or are live/beta
  const demoProducts = products
    .filter((product) => product.demoVideoUrl || product.status === 'live' || product.status === 'beta')
    .map((product) => ({
      ...product,
      description: product.description || '',
    }));

  return <DemoPageClient products={demoProducts} />;
}
