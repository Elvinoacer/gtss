"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, site } from "@/data/site";

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
    <header className="fixed top-0 left-0 right-0 z-[500] border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md">
      <div className="site-wrap flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 no-underline">
          <Image
            src="/images/GTSS-logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-sm"
            priority
          />
          <span className="truncate text-[0.95rem] font-semibold tracking-tight text-[var(--text)]">
            <span className="sm:hidden">{site.shortName}</span>
            <span className="hidden sm:inline">{site.name}</span>
          </span>
          <span className="sr-only">Home</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-sm px-3 py-2 text-sm no-underline transition-colors ${
                  active
                    ? "font-semibold text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden text-xs text-[var(--text-muted)] md:inline">{site.location}</span>
          <ThemeToggle />
          <Link href="/login" className="site-btn site-btn-ghost hidden h-10 px-3 text-sm sm:inline-flex">
            Sign in
          </Link>
          <Link href="/contact" className="site-btn site-btn-primary hidden h-10 px-3.5 text-sm sm:inline-flex">
            Schedule a call
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--text)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-[var(--border)] bg-[var(--bg-surface)] px-5 py-5 lg:hidden"
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-2 py-3 text-base font-medium text-[var(--text)] no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="rounded-sm px-2 py-3 text-base text-[var(--text-muted)] no-underline">
            Sign in
          </Link>
          <Link href="/contact" className="site-btn site-btn-primary mt-2">
            Schedule a call
          </Link>
        </nav>
      </div>
    </header>
  );
}
