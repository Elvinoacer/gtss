'use client';

import { Upload, X, Edit2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function BrandAssets() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-[#111218] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] border-b border-gray-100 dark:border-[#2e3245] pb-2">
        Brand Assets
      </h2>
      
      {/* Light Mode Logo Card */}
      <div className="flex flex-col sm:flex-row items-start bg-white dark:bg-[#1a1d2d] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-[#2e3245] gap-6">
        <div className="w-full sm:w-48 aspect-video bg-[#f8fafc] dark:bg-[#101322] rounded-lg border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center relative group overflow-hidden">
          <div className="bg-center bg-no-repeat bg-contain w-3/4 h-3/4 opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&h=50&fit=crop")' }}></div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Edit2 className="text-white w-5 h-5" />
          </div>
        </div>
        <div className="flex-1 w-full space-y-3">
          <div>
            <h3 className="text-[#111218] dark:text-white text-base font-bold">Light Mode Logo</h3>
            <p className="text-[#616889] dark:text-[#94a3b8] text-sm mt-1">
              Displayed on light backgrounds. <br/>
              Recommended size: 200x50px. SVG or PNG.
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#232738] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-[#111218] dark:text-white hover:bg-gray-50 dark:hover:bg-[#2a2e42] transition-colors">
              <Upload className="w-4 h-4" />
              Upload New
            </button>
            <button className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Dark Mode Logo Card */}
      <div className="flex flex-col sm:flex-row items-start bg-white dark:bg-[#1a1d2d] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-[#2e3245] gap-6">
        <div className="w-full sm:w-48 aspect-video bg-[#1e293b] rounded-lg border border-dashed border-gray-600 flex items-center justify-center relative group overflow-hidden">
          <div className="bg-center bg-no-repeat bg-contain w-3/4 h-3/4 opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&h=50&fit=crop")' }}></div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Edit2 className="text-white w-5 h-5" />
          </div>
        </div>
        <div className="flex-1 w-full space-y-3">
          <div>
            <h3 className="text-[#111218] dark:text-white text-base font-bold">Dark Mode Logo</h3>
            <p className="text-[#616889] dark:text-[#94a3b8] text-sm mt-1">
              Displayed on dark backgrounds. <br/>
              Recommended size: 200x50px. Transparent PNG recommended.
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#232738] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-[#111218] dark:text-white hover:bg-gray-50 dark:hover:bg-[#2a2e42] transition-colors">
              <Upload className="w-4 h-4" />
              Upload New
            </button>
            <button className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
