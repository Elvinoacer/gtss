'use client';

import { useDeferredValue, useMemo, useState } from 'react';
import { Component, Search, SlidersHorizontal } from 'lucide-react';

import { PublicProductCard } from './PublicProductCard';

interface PublicProductsClientProps {
  products: any[];
}

export function PublicProductsClient({ products }: PublicProductsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const categories = useMemo(() => {
    const allCategories = new Set(products.map((product) => product.category));
    return ['All', ...Array.from(allCategories)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = deferredSearchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description?.toLowerCase().includes(normalizedQuery) ||
        product.tagline?.toLowerCase().includes(normalizedQuery);
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [deferredSearchQuery, products, selectedCategory]);

  return (
    <div className="space-y-8 md:space-y-12">
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
                    ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                  {filteredProducts.length} <span className="hidden sm:inline">Active</span>
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
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
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

      {filteredProducts.length === 0 ? (
        <div className="relative max-w-2xl mx-auto text-center py-24 bg-[#0F172A]/50 backdrop-blur-md rounded-[3rem] border border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] opacity-50" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative size-20 mb-8">
              <div className="absolute inset-0 border-2 border-dashed border-slate-700 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 border-2 border-slate-800 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-500" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">
              System Not Found
            </h3>
            <p className="text-sm md:text-base text-slate-400 max-w-sm mx-auto mb-8 font-medium px-4">
              We couldn&apos;t detect any solutions matching your parameters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-bold transition-colors"
            >
              Reset Parameters
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {filteredProducts.map((product, index) => (
            <PublicProductCard
              key={product.id}
              {...product}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
