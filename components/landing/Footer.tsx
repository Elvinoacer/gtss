"use client";

import Link from "next/link";
import Image from "next/image";
import { catalog, mailUrl, site, telUrl, whatsappUrl } from "@/data/site";
import { ShieldCheck, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

const solutions = [
  { href: "/products/pharmacy", label: "PharmaCare OS (Flagship)" },
  { href: "/products/restaurant-manager", label: "Hospitality & Restaurant POS" },
  { href: "/products/cmkwpx6t3000004i89mcou9z5", label: "Church & Ministry Ledgers" },
  { href: "/products/cmkwvzp9n000004ieieyhqcde", label: "Commersely E-Commerce" },
  { href: "/products/cmkwy2mpv000004laf6le04kd", label: "JustInTime Service Platform" },
  { href: "/products/cmkxqm2ag000004kz7vhkvpza", label: "Kampus Social & Student Ecosystem" },
  { href: "/enterprise", label: "Bespoke Enterprise Intranets" },
];

const company = [
  { href: "/about", label: "About GTSS" },
  { href: "/contact", label: "Contact & Consultations" },
  { href: "/demo", label: "Request Live Walkthrough" },
  { href: "/pricing", label: "Commercial Pricing Models" },
  { href: "/enterprise", label: "Enterprise Engagements" },
];

const trust = [
  { href: "/security", label: "Security & Data Sovereignty" },
  { href: "/faq", label: "Architecture FAQ" },
  { href: "/accessibility", label: "Accessibility Standards" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] border-t border-[var(--footer-border)] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-[var(--gold)]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="site-wrap py-16 lg:py-20 relative z-10">
        <div className="grid gap-12 pb-14 border-b border-[var(--footer-border)] lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand & Mission */}
          <div className="max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md overflow-hidden border border-[var(--gold-luxury)]/40 shrink-0">
                <Image
                  src="/images/GTSS-logo.png"
                  alt="GTSS Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-base font-bold text-white tracking-tight">{site.name}</p>
                <p className="text-[10px] text-[var(--footer-text-muted)] uppercase tracking-wider">
                  Parent Software Entity
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[var(--footer-text-muted)]">
              GTSS designs, builds, and deploys practical, scalable software architectures that empower
              African businesses, institutions, and communities through technology.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[var(--footer-text-muted)]">
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[var(--gold-luxury)]" />
                <a href={telUrl} className="text-white hover:underline">
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[var(--gold-luxury)]" />
                <a href={mailUrl} className="text-white hover:underline">
                  {site.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[var(--gold-luxury)] shrink-0 mt-0.5" />
                <span>Nairobi HQ · Eldoret Delivery Hub, Kenya</span>
              </p>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold-luxury)]">
              Flagship Systems
            </p>
            <ul className="flex flex-col gap-2.5 p-0 list-none text-xs">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[var(--footer-text-muted)] hover:text-white no-underline transition-colors flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold-luxury)]">
              Organization
            </p>
            <ul className="flex flex-col gap-2.5 p-0 list-none text-xs">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[var(--footer-text-muted)] hover:text-white no-underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  WhatsApp Direct Line →
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Governance Column */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold-luxury)]">
              Governance & Trust
            </p>
            <ul className="flex flex-col gap-2.5 p-0 list-none text-xs">
              {trust.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[var(--footer-text-muted)] hover:text-white no-underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--footer-text-muted)]">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-4 w-4 text-[var(--gold-luxury)]" />
            <span>Built in Africa for teams that demand absolute composure under pressure.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
