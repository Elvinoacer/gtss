'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function LivePreview() {
  return (
    <div className="sticky top-6 flex flex-col gap-4">
      <h2 className="text-[#111218] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
        Live Preview
      </h2>
      <div className="bg-gray-100 dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-[#2e3245] shadow-inner space-y-4">
        <p className="text-xs font-medium text-[#616889] uppercase tracking-wider text-center mb-2">Login Screen Preview</p>
        
        {/* Mock UI Card */}
        <div className="bg-white dark:bg-[#1a1d2d] rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-[#2e3245]">
          <div className="h-1 bg-[#1337ec] w-full"></div>
          <div className="p-6 flex flex-col items-center gap-4">
            {/* Logo Mock */}
            <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="w-full space-y-3 mt-2">
              <div className="space-y-1">
                <div className="h-3 w-16 bg-gray-100 dark:bg-gray-700 rounded"></div>
                <div className="h-9 w-full border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-[#232738]"></div>
              </div>
              <div className="space-y-1">
                <div className="h-3 w-16 bg-gray-100 dark:bg-gray-700 rounded"></div>
                <div className="h-9 w-full border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-[#232738]"></div>
              </div>
            </div>
            <button className="w-full h-9 bg-[#1337ec] text-white rounded-lg text-sm font-medium shadow-sm mt-2">
              Sign In
            </button>
            <div className="h-3 w-24 bg-gray-100 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        <p className="text-xs font-medium text-[#616889] uppercase tracking-wider text-center mt-6 mb-2">Component Examples</p>
        
        {/* Component Mockups */}
        <div className="bg-white dark:bg-[#1a1d2d] rounded-lg shadow-lg p-4 space-y-4 border border-gray-100 dark:border-[#2e3245]">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 size-8 bg-[#1337ec] rounded-full flex items-center justify-center text-white">
              <Check className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-20 bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
              <div className="h-2 w-32 bg-gray-100 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1337ec]/10 text-[#1337ec]">
              Active
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              Inactive
            </span>
          </div>
          <div className="p-3 bg-[#1337ec]/5 rounded-lg border border-[#1337ec]/20">
            <p className="text-xs text-[#1337ec] dark:text-blue-300">
              This is an info alert using the primary color.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
