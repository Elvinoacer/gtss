'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link';

export function DemoHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#111218] border-b border-[#f0f1f4] dark:border-gray-800">
      <div className="px-4 md:px-10 py-3 max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 text-[#111218] dark:text-white">
          <div className="size-8 text-[#1337ec]">
            <Layers className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">GTSS</h2>
        </div>
        <div className="hidden md:flex items-center gap-9">
          <Link className="text-[#111218] dark:text-gray-200 text-sm font-medium hover:text-[#1337ec] transition-colors" href="#">Features</Link>
          <Link className="text-[#111218] dark:text-gray-200 text-sm font-medium hover:text-[#1337ec] transition-colors" href="#">Pricing</Link>
          <Link className="text-[#111218] dark:text-gray-200 text-sm font-medium hover:text-[#1337ec] transition-colors" href="#">Resources</Link>
        </div>
        <div className="flex gap-2">
          <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#f0f1f4] dark:bg-gray-800 text-[#111218] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <span className="truncate">Log In</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#1337ec] text-white text-sm font-bold hover:bg-blue-700 transition-colors">
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
}
