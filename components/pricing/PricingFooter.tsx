'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link';

export function PricingFooter() {
  return (
    <footer className="bg-white dark:bg-[#1a1d2d] border-t border-[#f0f1f4] dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-[#111218] dark:text-white">
              <div className="size-6 text-[#1337ec]">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold">GTSS</span>
            </div>
            <p className="text-sm text-[#616889] dark:text-gray-400 max-w-xs">
              Empowering businesses with scalable, secure, and modern software solutions.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[#111218] dark:text-white uppercase tracking-wider">Product</h4>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Features</Link>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Security</Link>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Enterprise</Link>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Changelog</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[#111218] dark:text-white uppercase tracking-wider">Company</h4>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">About Us</Link>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Careers</Link>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Legal</Link>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[#111218] dark:text-white uppercase tracking-wider">Support</h4>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Help Center</Link>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">API Documentation</Link>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Community</Link>
            <Link className="text-sm text-[#616889] dark:text-gray-400 hover:text-[#1337ec] transition-colors" href="#">Status</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#f0f1f4] dark:border-gray-800 pt-8">
          <p className="text-xs text-[#616889] dark:text-gray-500">
            © 2024 GTSS Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link className="text-[#616889] dark:text-gray-500 hover:text-[#1337ec]" href="#">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link className="text-[#616889] dark:text-gray-500 hover:text-[#1337ec]" href="#">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
