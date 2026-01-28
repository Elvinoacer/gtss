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
      <div className="py-2 md:py-4">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-5 py-3 md:py-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-xl md:rounded-2xl shadow-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all group text-left"
        >
          <div className="flex items-center justify-center size-8 md:size-10 rounded-lg md:rounded-xl bg-slate-50 dark:bg-slate-900 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
            <Search className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-white transition-colors" />
          </div>
          
          <div className="flex-1 min-w-0">
            <span className="text-sm md:text-base font-bold text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors block truncate">
              Search and filter products...
            </span>
          </div>

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
               <span className="text-xs font-black text-slate-600 dark:text-slate-400 uppercase tracking-tight">
                  {categories.length - 1} Categories
               </span>
            </div>
            <div className="p-1.5 md:p-2 rounded-lg bg-slate-50 dark:bg-slate-900 group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors">
              <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
            </div>
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
              <div className="pt-4 md:pt-6 space-y-4 md:space-y-6">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search for solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 md:pl-12 pr-4 md:pr-6 py-3 md:py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-sm md:text-base text-slate-900 dark:text-white"
                  />
                </div>
                
                <div className="space-y-2 md:space-y-3">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-1">Filter by Category</h4>
                   <div className="flex flex-wrap gap-2">
                     {categories.map((category) => (
                       <button
                         key={category}
                         onClick={() => setSelectedCategory(category)}
                         className={`px-4 py-2 md:px-5 md:py-2.5 rounded-lg md:rounded-xl text-xs font-bold transition-all border ${
                           selectedCategory === category
                             ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                             : 'bg-white dark:bg-[#0F172A] text-slate-500 border-slate-200 dark:border-slate-800 hover:border-blue-500/30 hover:text-slate-900 dark:hover:text-white'
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
      </div>

      {/* Sticky Header (Shows on Scroll) */}
      <AnimatePresence>
        {showStickyHeader && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-[60] py-3 md:py-4 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/5 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center gap-4 md:gap-6">
                <div className="relative flex-1 group">
                  <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 md:pl-11 pr-4 py-2 md:py-2.5 bg-slate-100 dark:bg-slate-900 border-transparent focus:bg-white dark:focus:bg-slate-950 border focus:border-blue-500 rounded-lg md:rounded-xl focus:outline-none transition-all text-xs md:text-sm font-bold"
                  />
                </div>
                
                <div className="hidden lg:flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
                  {categories.slice(0, 6).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                        selectedCategory === category
                          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent'
                          : 'bg-transparent text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="shrink-0 flex items-center gap-2 px-2 md:px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100/50 dark:border-blue-500/20">
                   <div className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
                   <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase">{filteredProducts.length} <span className="hidden sm:inline">Live</span></span>
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
