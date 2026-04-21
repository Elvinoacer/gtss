"use client";

import { Search } from "lucide-react";
import { useDeferredValue, useEffect, useState } from "react";

interface PublicProductsFilterControlsProps {
  categories: string[];
  totalProducts: number;
}

export function PublicProductsFilterControls({
  categories,
  totalProducts,
}: PublicProductsFilterControlsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const deferredQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-product-card]"),
    );

    const normalizedQuery = deferredQuery.trim().toLowerCase();
    let visibleCount = 0;

    for (const card of cards) {
      const category = card.dataset.productCategory || "";
      const searchBlob = card.dataset.productSearch || "";

      const matchesCategory =
        selectedCategory === "All" || category === selectedCategory;
      const matchesSearch =
        normalizedQuery.length === 0 || searchBlob.includes(normalizedQuery);
      const visible = matchesCategory && matchesSearch;

      card.hidden = !visible;
      if (visible) visibleCount += 1;
    }

    const countNode = document.getElementById("public-products-count");
    if (countNode) {
      countNode.textContent = String(visibleCount);
    }

    const grid = document.getElementById("public-products-grid");
    const empty = document.getElementById("public-products-empty");

    if (grid) grid.hidden = visibleCount === 0;
    if (empty) empty.hidden = visibleCount !== 0;
  }, [deferredQuery, selectedCategory]);

  return (
    <section className="relative z-40 md:sticky md:top-28">
      <div className="public-panel public-card-outline rounded-[1.75rem] p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/38" />
            <input
              type="search"
              placeholder="Search products, workflows, or use cases"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-[1.25rem] border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/20"
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3 lg:min-w-[180px]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                Visible
              </p>
              <p className="text-sm font-semibold text-white">
                <span id="public-products-count">{totalProducts}</span>{" "}
                systems
              </p>
            </div>
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.95)]" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[linear-gradient(135deg,#f3d79a,#8fd8ff)] text-slate-950"
                    : "border border-white/10 bg-white/[0.03] text-white/68 hover:border-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
