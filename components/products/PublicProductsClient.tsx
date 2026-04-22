import type { PublicProductListItem } from "@/lib/data/public-products";

import { PublicProductCard } from "./PublicProductCard";
import { PublicProductsFilterControls } from "./PublicProductsFilterControls";

interface PublicProductsClientProps {
  products: PublicProductListItem[];
}

export function PublicProductsClient({ products }: PublicProductsClientProps) {
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="space-y-6 md:space-y-10">
      <PublicProductsFilterControls
        categories={categories}
        totalProducts={products.length}
      />

      <div
        id="public-products-empty"
        hidden
        className="public-panel public-card-outline relative mx-auto max-w-2xl overflow-hidden rounded-[1.5rem] px-4 py-14 text-center sm:rounded-[2rem] sm:px-6 sm:py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,215,154,0.16),transparent_36%)]" />
        <div className="relative z-10">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/40 sm:text-xs sm:tracking-[0.24em]">
            No matches
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white sm:mt-4 sm:text-3xl">
            No systems match that filter yet.
          </h3>
          <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-white/62 sm:mt-4 sm:text-base sm:leading-7">
            Try a different category or search term. You can also reach out if
            you want GTSS to shape something more tailored around your workflow.
          </p>
        </div>
      </div>

      <div
        id="public-products-grid"
        className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3"
      >
        {products.map((product) => (
          <div
            key={product.id}
            data-product-card
            data-product-category={product.category}
            data-product-search={`${product.name} ${product.description || ""} ${product.tagline || ""}`.toLowerCase()}
          >
            <PublicProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
