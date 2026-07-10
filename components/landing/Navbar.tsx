"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[500] px-6 lg:px-12 h-[72px] flex items-center justify-between border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-3xl transition-all">
      {/* Brand */}
      <Link className="flex items-center gap-3 no-underline" href="/">
        <Image src="/images/GTSS-logo.png" alt="GTSS Logo" width={32} height={32} className="w-8 h-8 rounded" />
        <span className="font-semibold text-base tracking-tight text-[var(--text)] hidden sm:block">
          Great Thumbs Software Solutions
        </span>
        <span className="font-semibold text-base tracking-tight text-[var(--text)] sm:hidden">GTSS</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link
          href="/products"
          className="text-sm font-medium text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent)]"
        >
          Products
        </Link>
        <Link
          href="/pricing"
          className="text-sm font-medium text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent)]"
        >
          Pricing
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent)]"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent)]"
        >
          Contact
        </Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <span className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-surface-2)] px-3 py-1.5 rounded-full">
          Nairobi, Kenya
        </span>
        <ThemeToggle />
        <a
          href="tel:+254792156094"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent)] px-3 py-2"
        >
          <Phone className="w-3.5 h-3.5" />
          Call Us
        </a>
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center justify-center text-sm font-semibold text-white bg-[var(--accent)] px-5 py-2.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)]"
        >
          Schedule a Call
        </Link>
        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-9 h-9 flex items-center justify-center text-[var(--text)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[var(--bg-surface)] border-b border-[var(--border)] p-6 flex flex-col gap-4 lg:hidden z-[499]">
          <Link
            href="/products"
            className="text-base font-medium text-[var(--text)] no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/pricing"
            className="text-base font-medium text-[var(--text)] no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-base font-medium text-[var(--text)] no-underline"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium text-[var(--text)] no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:+254792156094"
            className="text-base font-medium text-[var(--text-muted)] no-underline flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <Phone className="w-4 h-4" /> Call Us
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[var(--accent)] px-5 py-2.5 rounded-lg no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Schedule a Call
          </Link>
        </div>
      )}
    </header>
  );
}
