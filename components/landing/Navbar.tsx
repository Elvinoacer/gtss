import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { landingNavbarLinks } from "@/data/landing";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto max-w-7xl">
        <div className="public-panel public-card-outline rounded-[1.75rem] px-4 py-3 sm:px-5 lg:px-7">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-3 overflow-hidden"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_12px_30px_rgba(0,0,0,0.32)]">
                <Image
                  src="/images/GTSS-logo.png"
                  alt="GTSS Logo"
                  width={140}
                  height={36}
                  priority
                  className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="hidden min-w-0 sm:block">
                <p className="truncate text-sm font-semibold text-white">
                  Great Thumbs Software Solutions
                </p>
                <p className="truncate text-xs text-white/55">
                  Enterprise systems for African operators
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-2 lg:flex">
              {landingNavbarLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/68 transition-colors hover:bg-white/6 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="public-button-primary px-5 py-3 text-sm"
              >
                Schedule a Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <details className="relative md:hidden">
              <summary className="list-none rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10">
                <span className="sr-only">Toggle menu</span>
                <Menu className="h-5 w-5" />
              </summary>

              <div className="absolute right-0 top-full mt-3 w-[min(21rem,calc(100vw-1.5rem))]">
                <div className="public-panel rounded-[1.5rem] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                  <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                    Navigate
                  </p>
                  <div className="space-y-1">
                    {landingNavbarLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="block rounded-2xl px-4 py-3 text-base font-medium text-white/75 transition-colors hover:bg-white/6 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    <Link
                      href="/login"
                      className="block rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white/75 transition-colors hover:bg-white/6 hover:text-white"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/contact"
                      className="public-button-primary flex w-full px-5 py-3 text-sm"
                    >
                      Schedule a Call
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </details>
          </div>

          <div className="mt-3 hidden items-center justify-between border-t border-white/8 pt-3 lg:flex">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/35">
              Built for hospitality, commerce, education, and field teams
            </p>
            <div className="flex items-center gap-2 text-xs text-white/55">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
              <span>Deployments running across East Africa</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
