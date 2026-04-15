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
    <div className="space-y-8 md:space-y-12">
      <PublicProductsFilterControls
        categories={categories}
        totalProducts={products.length}
      />

      <div
        id="public-products-empty"
        hidden
        className="relative max-w-2xl mx-auto text-center py-24 bg-[#0F172A]/50 backdrop-blur-md rounded-[3rem] border border-white/5 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] opacity-50" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative size-20 mb-8">
            <div className="absolute inset-0 border-2 border-dashed border-slate-700 rounded-full" />
            <div className="absolute inset-2 border-2 border-slate-800 rounded-full" />
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">
            System Not Found
          </h3>
          <p className="text-sm md:text-base text-slate-400 max-w-sm mx-auto mb-8 font-medium px-4">
            We couldn&apos;t detect any solutions matching your parameters.
          </p>
        </div>
      </div>

      <div
        id="public-products-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto"
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
