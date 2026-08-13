"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, site, whatsappUrl } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[500] border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md transition-colors">
      <div className="site-wrap flex h-[4.75rem] items-center justify-between gap-4">
        {/* Brand & Crest */}
        <Link href="/" className="flex min-w-0 items-center gap-3 no-underline group">
          <div className="relative w-8 h-8 rounded-md overflow-hidden border border-[var(--gold-luxury)]/40 shadow-sm shrink-0">
            <Image
              src="/images/GTSS-logo.png"
              alt="GTSS Crest"
              width={32}
              height={32}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="min-w-0">
            <span className="block truncate text-sm font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--gold-luxury)] transition-colors">
              <span className="sm:hidden">{site.shortName}</span>
              <span className="hidden sm:inline">{site.name}</span>
            </span>
            <span className="hidden md:block text-[10px] text-[var(--text-dim)] uppercase tracking-wider">
              Enterprise Systems · East Africa
            </span>
          </div>
          <span className="sr-only">Home</span>
        </Link>

        {/* Primary Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide no-underline transition-all ${
                  active
                    ? "text-[var(--text)] font-bold bg-[var(--bg-surface-2)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-2)]/60"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions & Status */}
        <div className="flex items-center gap-2.5">
          {/* Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="luxury-radar-dot" />
            <span>50+ Systems Live</span>
          </div>

          <ThemeToggle />

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="/contact"
            className="luxury-btn-primary hidden h-9 px-4 text-xs font-semibold sm:inline-flex"
          >
            <span>Schedule Call</span>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text)] lg:hidden hover:bg-[var(--bg-surface-2)] transition-colors"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id={menuId}
        hidden={!open}
        className="border-t border-[var(--border)] bg-[var(--bg-surface)] px-5 py-6 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200"
      >
        <nav className="flex flex-col gap-1.5" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--text)] no-underline hover:bg-[var(--bg-surface-2)]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-2 mt-2">
            <Link
              href="/login"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--text-muted)] no-underline hover:bg-[var(--bg-surface-2)]"
            >
              Sign in to Portal
            </Link>
            <Link href="/contact" className="luxury-btn-gold text-xs text-center justify-center">
              <span>Schedule VIP Audit</span>
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="site-btn site-btn-whatsapp text-xs text-center justify-center"
            >
              <span>WhatsApp Direct Line</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
