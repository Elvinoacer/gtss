import { getPublicProducts } from "@/lib/data/public-products";
import { PublicProductsClient } from "@/components/products/PublicProductsClient";
import { ProductHeader } from "@/components/products/ProductHeader";
import { CustomProjectBanner } from "@/components/products/CustomProjectBanner";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Product Directory",
  description:
    "Explore our suite of practical software solutions designed for local businesses, from hotel management to e-commerce platforms.",
  openGraph: {
    title: "GTSS Product Directory",
    description:
      "Explore our suite of practical software solutions designed for local businesses.",
  },
};

export default async function ProductsPage() {
  const products = await getPublicProducts();
  const categoryCount = new Set(products.map((product) => product.category)).size;
  const liveCount = products.filter(
    (product) => product.status?.toLowerCase() === "live",
  ).length;

  return (
    <div className="pb-24">
      <ProductHeader
        productCount={products.length}
        categoryCount={categoryCount}
        liveCount={liveCount}
      />

      <section className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PublicProductsClient products={products} />
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-4 sm:px-6 lg:px-8">
        <CustomProjectBanner />
      </section>
    </div>
  );
}
