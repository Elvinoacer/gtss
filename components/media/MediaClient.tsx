'use client';

import { MediaCard } from '@/components/media';
import { Search, ChevronDown, Grid3x3, List, Plus, FolderOpen, CloudCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getMediaAssets } from '@/lib/actions/media';
import { useState } from 'react';

interface MediaClientProps {
  initialAssets: any[];
  stats: any;
}

export function MediaClient({ initialAssets, stats }: MediaClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: assets = initialAssets } = useQuery({
    queryKey: ['media-assets'],
    queryFn: async () => {
      const response = await getMediaAssets();
      return response.success ? response.data : initialAssets;
    },
    initialData: initialAssets,
  });

  const filteredAssets = assets.filter((asset: any) => 
    asset.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
      {/* Breadcrumbs & Heading */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm">
          <a href="/dashboard" className="text-gray-500 hover:text-[#2563eb] transition-colors">
            Home
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-slate-900 dark:text-white font-medium">
            Media Library
          </span>
        </div>
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              Media Library
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Manage, organize, and distribute your digital assets.
            </p>
          </div>
          {/* Stats Chips */}
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-3">
              <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded text-[#2563eb]">
                <FolderOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                  Total Assets
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white leading-none">
                  {stats.totalAssets}
                </p>
              </div>
            </div>
            <div className="px-4 py-2 bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-3">
              <div className="p-1.5 bg-purple-50 dark:bg-purple-900/30 rounded text-purple-600 dark:text-purple-400">
                <CloudCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                  Storage Used
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white leading-none">
                  {stats.storageUsed}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="p-4 bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3 min-w-[280px]">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              className="w-full h-10 pl-10 pr-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb]"
              placeholder="Filter assets by name..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
          {/* Filter Dropdowns */}
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span>File Type</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span>Product</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button className="p-1.5 rounded-md bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm">
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button className="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <List className="w-5 h-5" />
            </button>
          </div>
          {/* Upload Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            <span className="text-sm font-bold">Upload New</span>
          </motion.button>
        </div>
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAssets.map((asset: any, index: number) => (
          <MediaCard key={asset.id} {...asset} index={index} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center pt-8 pb-12">
        <nav className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-[#2563eb] text-white text-sm font-bold">
            1
          </button>
          <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800">
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </div>
  );
}
