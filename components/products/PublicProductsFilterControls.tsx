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
    <section className="relative z-40 md:sticky md:top-24">
      <div className="public-panel public-card-outline rounded-[1.35rem] p-3 sm:rounded-[1.75rem] sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/38 sm:left-4 sm:h-5 sm:w-5" />
            <input
              type="search"
              placeholder="Search products, workflows, or use cases"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-[1rem] border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/20 sm:rounded-[1.25rem] sm:py-4 sm:pl-12 sm:text-base"
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-2.5 sm:rounded-[1.25rem] sm:px-4 sm:py-3 lg:min-w-[180px]">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.16em] text-white/35 sm:text-xs sm:tracking-[0.22em]">
                Visible
              </p>
              <p className="text-xs font-semibold text-white sm:text-sm">
                <span id="public-products-count">{totalProducts}</span>{" "}
                systems
              </p>
            </div>
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.95)]" />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-3 py-2 text-[0.72rem] font-semibold transition-colors sm:px-4 sm:py-2.5 sm:text-sm ${
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
