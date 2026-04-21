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
    <div className="space-y-8 md:space-y-10">
      <PublicProductsFilterControls
        categories={categories}
        totalProducts={products.length}
      />

      <div
        id="public-products-empty"
        hidden
        className="public-panel public-card-outline relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] px-6 py-20 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,215,154,0.16),transparent_36%)]" />
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
            No matches
          </p>
          <h3 className="mt-4 text-3xl font-semibold text-white">
            No systems match that filter yet.
          </h3>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/62 sm:text-base">
            Try a different category or search term. You can also reach out if
            you want GTSS to shape something more tailored around your workflow.
          </p>
        </div>
      </div>

      <div
        id="public-products-grid"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
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
