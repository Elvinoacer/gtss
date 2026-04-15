"use client";

import { Component, Search, SlidersHorizontal } from "lucide-react";
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
    <section className="relative z-40 max-w-4xl mx-auto md:sticky md:top-24">
      <div className="relative group p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
        <div className="flex flex-col md:flex-row items-center gap-4 p-2">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="search"
              placeholder="Search systems, modules, platforms..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-500 font-medium text-lg outline-none"
            />
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto px-2 pb-2 md:pb-0">
            <button
              type="button"
              onClick={() => setIsFilterOpen((current) => !current)}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-colors ${
                isFilterOpen
                  ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                <span id="public-products-count">{totalProducts}</span>{" "}
                <span className="hidden sm:inline">Active</span>
              </span>
            </div>
          </div>
        </div>

        {isFilterOpen && (
          <div className="overflow-hidden border-t border-white/5">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Component className="w-4 h-4 text-slate-400" />
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  System Categories
                </h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const isActive = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                          : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
