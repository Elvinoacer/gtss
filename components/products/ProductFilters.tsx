'use client';

import { motion } from 'framer-motion';
import { Search, ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';

interface ProductFiltersProps {
  onSearch?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
  onStatusChange?: (status: string) => void;
}

export function ProductFilters({
  onSearch,
  onCategoryChange,
  onStatusChange,
}: ProductFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#1e293b] p-4 shadow-sm border border-gray-200 dark:border-gray-700 md:flex-row md:items-center md:justify-between"
    >
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          className="block w-full rounded-lg border-none bg-slate-50 dark:bg-slate-900/50 py-2.5 pl-10 pr-3 text-sm text-slate-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0bda62]/50 focus:outline-none"
          placeholder="Search by product name, ID, or tag..."
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            onSearch?.(e.target.value);
          }}
        />
      </div>

      {/* Filters & Actions */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Filter Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
          <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-gray-300 hover:border-[#0bda62] px-3 transition-colors dark:bg-transparent dark:border-gray-600 dark:hover:border-[#0bda62]">
            <span className="text-slate-900 dark:text-gray-200 text-sm font-medium">
              Category: All
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#0bda62]" />
          </button>
          <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-gray-300 hover:border-[#0bda62] px-3 transition-colors dark:bg-transparent dark:border-gray-600 dark:hover:border-[#0bda62]">
            <span className="text-slate-900 dark:text-gray-200 text-sm font-medium">
              Status: Active
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#0bda62]" />
          </button>
        </div>

        <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 hidden md:block mx-1"></div>

        {/* Add Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-10 items-center gap-2 rounded-lg bg-[#0bda62] px-4 text-sm font-bold text-white hover:bg-[#0bc256] transition-colors shadow-sm shadow-[#0bda62]/20"
        >
          <Plus className="w-5 h-5" />
          <span className="truncate">Add Product</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
