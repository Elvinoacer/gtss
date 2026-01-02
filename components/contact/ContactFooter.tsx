'use client';

import { Layers, Globe, MessageSquare, Rss } from 'lucide-react';
import Link from 'next/link';

export function ContactFooter() {
  return (
    <footer className="bg-white dark:bg-[#1a1d2d] border-t border-[#f0f1f4] dark:border-gray-800 py-12 px-4 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[#111218] dark:text-white">
            <div className="size-6 text-[#1337ec]">
              <Layers className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg">GTSS Product</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="text-sm text-gray-500 hover:text-[#1337ec] transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="text-sm text-gray-500 hover:text-[#1337ec] transition-colors" href="/terms">Terms of Service</Link>
            <Link className="text-sm text-gray-500 hover:text-[#1337ec] transition-colors" href="/cookies">Cookie Settings</Link>
            <Link className="text-sm text-gray-500 hover:text-[#1337ec] transition-colors" href="/accessibility">Accessibility</Link>
          </div>
          <div className="flex gap-4">
            <Link className="text-gray-400 hover:text-[#1337ec] transition-colors" href="https://gtss.co.ke" target="_blank">
              <Globe className="w-5 h-5" />
            </Link>
            <Link className="text-gray-400 hover:text-[#1337ec] transition-colors" href="/contact">
              <MessageSquare className="w-5 h-5" />
            </Link>
            <Link className="text-gray-400 hover:text-[#1337ec] transition-colors" href="/blog">
              <Rss className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} GTSS Product Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
