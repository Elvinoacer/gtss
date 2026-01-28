import { getProducts } from "@/lib/actions/products";
import { DemoPageClient } from "@/components/demo/DemoPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Demos | GTSS",
  description: "Explore live demos and video walkthroughs of GTSS products. See our software solutions in action before you buy.",
};

export default async function DemoPage() {
  const response = await getProducts();
  
  // Filter products that have demo videos or are live/beta
  const products = response.success 
    ? (response.data || []).filter((p: any) => 
        p.demoVideoUrl || p.status === 'live' || p.status === 'beta'
      )
    : [];

  return <DemoPageClient products={products} />;
}
