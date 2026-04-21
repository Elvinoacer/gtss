import { getPublicProducts } from "@/lib/data/public-products";
import { PublicProductsClient } from "@/components/products/PublicProductsClient";
import { ProductHeader } from "@/components/products/ProductHeader";
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

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="public-panel-strong public-card-outline relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 lg:p-14">
          <div className="absolute -left-8 top-10 h-36 w-36 rounded-full bg-[#8fd8ff]/16 blur-3xl" />
          <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-[#f3d79a]/16 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <span className="public-kicker">Custom scope available</span>
            <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
              Need GTSS to shape something more specific to your operation?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">
              We can start from an existing GTSS product, extend the workflow,
              and package the delivery so it still feels cohesive, premium, and
              ready for rollout.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="public-button-primary px-6 py-4 text-base"
              >
                Start a Project
              </a>
              <a
                href="/about"
                className="public-button-secondary px-6 py-4 text-base"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
