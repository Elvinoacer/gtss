import { ArrowRight, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { landingNavbarLinks } from '@/data/landing';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass-strong rounded-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/images/GTSS-logo.png"
              alt="GTSS Logo"
              width={144}
              height={40}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

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

          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer text-white p-2.5 rounded-full hover:bg-white/10 transition-colors">
              <span className="sr-only">Toggle menu</span>
              <Menu className="w-6 h-6" />
            </summary>

            <div className="absolute right-0 top-full mt-3 w-[min(18rem,calc(100vw-2rem))]">
              <div className="glass-strong rounded-2xl p-4 space-y-1 shadow-2xl">
                {landingNavbarLinks.map((link) => (
                  <Link
                    key={link.label}
                    className="block text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-all"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 space-y-2 border-t border-white/10 mt-4">
                  <Link
                    href="/login"
                    className="block text-center text-base font-medium text-white/70 hover:text-white px-4 py-3 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary-glow flex items-center justify-center gap-2 text-base py-3 w-full"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
