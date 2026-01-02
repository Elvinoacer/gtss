'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link';

export function PricingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#1a1d2d] border-b border-[#f0f1f4] dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[#111218] dark:text-white">
          <div className="size-8 flex items-center justify-center text-[#1337ec]">
            <Layers className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight">GTSS</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <Link className="text-[#111218] dark:text-gray-300 hover:text-[#1337ec] text-sm font-medium transition-colors" href="#">Products</Link>
            <Link className="text-[#111218] dark:text-gray-300 hover:text-[#1337ec] text-sm font-medium transition-colors" href="#">Solutions</Link>
            <Link className="text-[#111218] dark:text-gray-300 hover:text-[#1337ec] text-sm font-medium transition-colors" href="#">Pricing</Link>
            <Link className="text-[#111218] dark:text-gray-300 hover:text-[#1337ec] text-sm font-medium transition-colors" href="#">Resources</Link>
          </nav>
        </div>
        <div className="flex gap-3">
          <button className="hidden sm:flex cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-[#f0f1f4] dark:bg-gray-800 text-[#111218] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-bold">
            Log In
          </button>
          <button className="cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-[#1337ec] text-white hover:bg-blue-700 transition-colors text-sm font-bold shadow-sm shadow-blue-500/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
