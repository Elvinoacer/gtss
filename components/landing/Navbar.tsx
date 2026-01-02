'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { landingNavbarLinks } from '@/data/landing';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-[#111521]/95 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/images/GTSS-logo.png"
              alt="GTSS Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {landingNavbarLinks.map((link) => (
              <Link
                key={link.label}
                className="text-sm font-medium hover:text-[#3f65e4] transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#111317] dark:text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111521]">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {landingNavbarLinks.map((link) => (
              <Link
                key={link.label}
                className="block text-base font-medium hover:text-[#3f65e4] transition-colors py-2"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
