'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link';

export function DemoFooter() {
  return (
    <footer className="w-full bg-white dark:bg-[#111218] border-t border-[#f0f1f4] dark:border-gray-800 py-10 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-[#111218] dark:text-white">
          <div className="size-6 text-[#1337ec]">
            <Layers className="w-6 h-6" />
          </div>
          <span className="font-bold">GTSS</span>
        </div>
        <div className="flex gap-8 text-sm text-[#616889] dark:text-gray-400">
          <Link className="hover:text-[#1337ec] transition-colors" href="#">Privacy Policy</Link>
          <Link className="hover:text-[#1337ec] transition-colors" href="#">Terms of Service</Link>
          <Link className="hover:text-[#1337ec] transition-colors" href="#">Contact Support</Link>
        </div>
        <p className="text-sm text-[#616889] dark:text-gray-500">
          © 2023 GTSS Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
