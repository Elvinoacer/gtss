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
    <div className="space-y-12">
      <PublicProductsFilterControls
        categories={categories}
        totalProducts={products.length}
      />

      <div
        id="public-products-empty"
        hidden
        className="relative border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-xl py-20 px-8 text-center"
      >
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-rose-500/50"></div>
        
        <div className="relative z-10">
          <p className="font-mono-dm text-[10px] tracking-[0.3em] text-rose-500 uppercase mb-4">
            ERROR: NO_MATCHES_FOUND
          </p>
          <h3 className="font-bebas text-4xl text-[var(--text)] mb-4 tracking-wide">
            SYSTEMS_NOT_RESOLVED
          </h3>
          <p className="font-cormorant text-xl text-[var(--text-muted)] max-w-xl mx-auto italic leading-relaxed">
            "No systems match the current filter parameters. Adjust your search query or protocol category to resolve available operational assets."
          </p>
        </div>
      </div>

      <div
        id="public-products-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[var(--border)]"
      >
        {products.map((product) => (
          <div
            key={product.id}
            data-product-card
            data-product-category={product.category}
            data-product-search={`${product.name} ${product.description || ""} ${product.tagline || ""}`.toLowerCase()}
            className="border-r border-b border-[var(--border)]"
          >
            <PublicProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
