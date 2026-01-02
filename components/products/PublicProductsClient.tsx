'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, LayoutGrid, List, X } from 'lucide-react';
import { PublicProductCard } from './PublicProductCard';

interface PublicProductsClientProps {
  products: any[];
}

export function PublicProductsClient({ products }: PublicProductsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  // Better approach with scroll listener for smoother toggle
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('scroll-marker');
      if (element) {
        const rect = element.getBoundingClientRect();
        // Show sticky header when the marker is above the viewport (scrolled past)
        // Adjust threshold as needed, e.g., rect.top < 64 (height of navbar)
        setShowStickyHeader(rect.top < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <div className="space-y-4 md:space-y-8">
      {/* Search & Filter Bar - Refined for Directory-First */}
      {/* Scroll Marker */}
      <div id="scroll-marker" className="h-px w-full" />

      {/* Initial Static Search Trigger */}
      <div className="py-4 px-4 md:px-6">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:border-blue-500/50 transition-all group"
        >
          <Search className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">
            Search and filter products...
          </span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {categories.length} Categories
            </span>
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
          </div>
        </button>

        {/* Expanded Static Filter */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-white dark:bg-[#0F172A] text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Header (Shows on Scroll) */}
      <AnimatePresence>
        {showStickyHeader && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-white/90 dark:bg-[#020617]/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/50 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                  />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide max-w-[50%] md:max-w-none">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-50 dark:bg-[#0F172A] text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Count */}
      <div className="flex items-center justify-between px-2">
        <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
          <span className="text-blue-600 dark:text-blue-400">{filteredProducts.length}</span> Solutions Found
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24 bg-white dark:bg-[#0F172A] rounded-[2.5rem] border border-dashed border-slate-200 dark:border-slate-800"
        >
          <div className="size-16 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No results found</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
            Try adjusting your search or category filters.
          </p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-6 text-blue-600 text-sm font-bold hover:underline"
          >
            Reset filters
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <PublicProductCard
                key={product.id}
                {...product}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
