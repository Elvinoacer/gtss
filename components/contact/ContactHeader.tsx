'use client';

import { Layers, Menu } from 'lucide-react';
import Link from 'next/link';

export function ContactHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#1a1d2d] border-b border-[#f0f1f4] dark:border-gray-800">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1280px]">
        <div className="flex items-center gap-4 text-[#111218] dark:text-white">
          <div className="size-8 text-[#1337ec] flex items-center justify-center">
            <Layers className="w-8 h-8" />
          </div>
          <h2 className="text-[#111218] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            GTSS Product
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-9">
          <Link className="text-[#111218] dark:text-gray-200 text-sm font-medium hover:text-[#1337ec] transition-colors" href="#">Solutions</Link>
          <Link className="text-[#111218] dark:text-gray-200 text-sm font-medium hover:text-[#1337ec] transition-colors" href="#">Pricing</Link>
          <Link className="text-[#111218] dark:text-gray-200 text-sm font-medium hover:text-[#1337ec] transition-colors" href="#">Resources</Link>
          <Link className="text-[#1337ec] dark:text-[#1337ec] text-sm font-medium" href="#">Contact</Link>
        </div>
        <button className="hidden md:flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[#1337ec] hover:bg-blue-700 text-white text-sm font-bold transition-colors shadow-sm">
          <span>Log In</span>
        </button>
        <button className="md:hidden text-[#111218] dark:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
