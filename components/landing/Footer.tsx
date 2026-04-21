import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { landingFooterLinks } from "@/data/landing";

const iconMap: Record<string, LucideIcon> = {
  Twitter,
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  return (
    <footer className="relative px-4 pb-10 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="public-panel public-card-outline overflow-hidden rounded-[2rem] p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <span className="public-kicker">Delivery-ready product teams</span>
              <div className="max-w-2xl space-y-4">
                <h2 className="public-section-title text-3xl text-white sm:text-4xl">
                  Software that feels tailored, stable, and worth the investment.
                </h2>
                <p className="max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                  GTSS designs and deploys systems that carry real operations:
                  hospitality floors, commercial workflows, internal reporting,
                  and customer-facing digital experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Image
                    src="/images/GTSS-logo.png"
                    alt="GTSS Logo"
                    width={150}
                    height={38}
                    className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold text-white">
                      Great Thumbs Software Solutions
                    </p>
                    <p className="text-xs text-white/50">
                      Nairobi rooted, deployment focused
                    </p>
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="public-button-primary px-5 py-3 text-sm"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Response", value: "< 24 hrs" },
                  { label: "Markets", value: "East Africa" },
                  { label: "Delivery", value: "Product + rollout" },
                ].map((item) => (
                  <div key={item.label} className="public-stat">
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/40">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                  Product
                </h3>
                <div className="space-y-3">
                  {landingFooterLinks.product.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-sm text-white/68 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                  Company
                </h3>
                <div className="space-y-3">
                  {landingFooterLinks.company.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-sm text-white/68 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                  Legal
                </h3>
                <div className="space-y-3">
                  {landingFooterLinks.legal.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-sm text-white/68 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              {landingFooterLinks.social.map((link) => {
                const Icon = iconMap[link.icon] || Twitter;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/68 transition-colors hover:border-white/20 hover:text-white"
                  >
                    <span className="sr-only">{link.label}</span>
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>

            <div className="space-y-1 text-sm text-white/48 md:text-right">
              <p>© {new Date().getFullYear()} Great Thumbs Software Solutions.</p>
              <p>Built in Africa for teams that need software to hold up under pressure.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
