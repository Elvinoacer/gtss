'use client';

import { Layers, Twitter, Github } from 'lucide-react';
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
              <Twitter className="h-5 w-5" />
            </Link>
            <Link className="text-[#616889] dark:text-gray-500 hover:text-[#1337ec]" href="#">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
