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
      countNode.textContent = String(visibleCount).padStart(2, '0');
    }

    const grid = document.getElementById("public-products-grid");
    const empty = document.getElementById("public-products-empty");

    if (grid) grid.hidden = visibleCount === 0;
    if (empty) empty.hidden = visibleCount !== 0;
  }, [deferredQuery, selectedCategory]);

  return (
    <section className="relative z-40 md:sticky md:top-24">
      <div className="relative border border-[var(--border)] bg-[rgba(3,5,8,0.7)] backdrop-blur-xl p-5 lg:p-6">
        {/* HUD Border Accents */}
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-[var(--gold)]"></div>
        <div className="absolute top-0 left-0 w-[1px] h-4 bg-[var(--gold)]"></div>
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--gold-dim)] transition-colors group-focus-within:text-[var(--gold)]" />
            <input
              type="search"
              placeholder="SEARCH_CATALOG: WORKFLOWS / USE_CASES / SYSTEMS"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--border)] py-4 pl-12 pr-6 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--text-dim)] focus:border-[var(--gold)] font-mono-dm uppercase tracking-wider cursor-none"
            />
          </div>

          <div className="flex items-center justify-between gap-6 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-6 py-3 min-w-[200px]">
            <div>
              <p className="font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-50 mb-1">
                SYSTEMS_RESOLVED
              </p>
              <p className="font-rajdhani text-lg font-bold text-[var(--text)] tracking-tight">
                <span id="public-products-count">{String(totalProducts).padStart(2, '0')}</span> ACTIVE_NODES
              </p>
            </div>
            <div className="h-2 w-2 bg-[var(--gold)] shadow-[var(--glow-gold)] animate-pulse" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`font-mono-dm text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 transition-all cursor-none border ${
                  isActive
                    ? "bg-[var(--gold)] text-[var(--black)] border-[var(--gold)]"
                    : "bg-transparent text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--gold-dim)] hover:text-[var(--text)]"
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
