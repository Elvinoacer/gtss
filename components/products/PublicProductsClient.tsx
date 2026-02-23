'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Hexagon, Component } from 'lucide-react';
import { PublicProductCard } from './PublicProductCard';

interface PublicProductsClientProps {
  products: any[];
}

export function PublicProductsClient({ products }: PublicProductsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('scroll-marker');
      if (element) {
        const rect = element.getBoundingClientRect();
        setShowStickyHeader(rect.top < -100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <div className="space-y-8 md:space-y-12">
      <div id="scroll-marker" className="h-px w-full" />

      {/* Main Search Command Center */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-40 max-w-4xl mx-auto"
      >
        <div className="relative group p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-blue-500/10 transition-colors hover:border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-4 p-2">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                placeholder="Search systems, modules, platforms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-500 font-medium text-lg outline-none"
              />
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10" />

            <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto px-2 pb-2 md:pb-0">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${isFilterOpen ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'}`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="size-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">{filteredProducts.length} <span className="hidden sm:inline">Active</span></span>
              </div>
            </div>
          </div>

          {/* Expandable Categories */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-white/5"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Component className="w-4 h-4 text-slate-400" />
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">System Categories</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`relative px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 overflow-hidden group ${
                          selectedCategory === category
                            ? 'text-white'
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {selectedCategory === category && (
                          <motion.div 
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-80"
                            style={{ borderRadius: 12 }}
                          />
                        )}
                        <span className="relative z-10">{category}</span>
                        <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-xl transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Sticky Glass Header */}
      <AnimatePresence>
        {showStickyHeader && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 z-[60] py-3 bg-[#0F172A]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
                <div className="relative w-full lg:w-auto lg:flex-1 max-w-md group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search systems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 focus:border-blue-500/50 rounded-xl focus:outline-none transition-all text-sm font-medium text-white placeholder:text-slate-500 focus:bg-white/10"
                  />
                </div>
                
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide w-full lg:w-auto lg:flex-1 pb-1 lg:pb-0">
                  {categories.slice(0, 5).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                          : 'bg-transparent text-slate-400 border border-transparent hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="shrink-0 hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                   <div className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                   <span className="text-[10px] font-black text-emerald-400 uppercase">{filteredProducts.length} Live</span>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid Or Empty State */}
      {filteredProducts.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative max-w-2xl mx-auto text-center py-24 bg-[#0F172A]/50 backdrop-blur-md rounded-[3rem] border border-white/5 overflow-hidden group"
        >
          {/* Radar scanning effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative size-20 mb-8">
              <div className="absolute inset-0 border-2 border-dashed border-slate-700 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 border-2 border-slate-800 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-500" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">System Not Found</h3>
            <p className="text-sm md:text-base text-slate-400 max-w-sm mx-auto mb-8 font-medium px-4">
              We couldn't detect any solutions matching your parameters.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Reset Parameters
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
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
