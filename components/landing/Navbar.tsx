'use client';

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { landingNavbarLinks } from '@/data/landing';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass-strong rounded-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/images/GTSS-logo.png"
              alt="GTSS Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center gap-1 lg:gap-2 flex-1 px-8">
            {landingNavbarLinks.map((link) => (
              <Link
                key={link.label}
                className="text-sm font-medium text-white/70 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link 
              href="/login" 
              className="text-sm font-medium text-white/70 hover:text-white px-4 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary-glow flex items-center gap-2 text-sm py-2.5 px-5"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-6">
          <div className="glass-strong rounded-2xl p-4 space-y-1">
            {landingNavbarLinks.map((link) => (
              <Link
                key={link.label}
                className="block text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-all"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-white/10 mt-4">
              <Link 
                href="/login" 
                className="block text-center text-base font-medium text-white/70 hover:text-white px-4 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                href="/contact" 
                className="btn-primary-glow flex items-center justify-center gap-2 text-base py-3 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
