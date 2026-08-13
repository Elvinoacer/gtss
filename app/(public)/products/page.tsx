import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
  Building2,
  ExternalLink,
  Layers,
} from "lucide-react";
import { catalog, whatsappUrl } from "@/data/site";
import { SiteCTA } from "@/components/site/SiteCTA";

export const metadata: Metadata = {
  title: "Products & Systems",
  description:
    "Explore GTSS flagship software products: Restaurant Manager, Church Management, Commersely, JustInTime, Kampus, and Custom Enterprise Intranets.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[var(--hero-gradient)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--border)]">
        <div
          className="luxury-glow-radial -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--gold)] opacity-10"
          aria-hidden="true"
        />

        <div className="site-wrap relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="h-3.5 w-3.5" />
              <span>GTSS Product Catalog</span>
            </div>

            <h1 className="site-display text-[var(--text)]">
              Enterprise software systems engineered for{" "}
              <span className="italic text-gold-gradient font-normal">resilience</span> and{" "}
              <span className="font-normal underline decoration-[var(--gold-luxury)] decoration-1 underline-offset-4">
                growth
              </span>
              .
            </h1>

            <p className="site-lead mt-5 text-base lg:text-lg">
              Five flagship product systems running live across East Africa. Every system is built
              offline-first, integrates regional payment rails (M-Pesa, card & cash), and includes
              full on-site hardware setup and staff training.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-10 pt-6 border-t border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <p className="text-2xl font-bold text-[var(--text)]">50+</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Live Deployments</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">99.98%</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Floor Continuity SLA</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--gold-luxury)]">3 Weeks</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Average Rollout Window</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--text)]">&lt; 15 Mins</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Direct Engineer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase List */}
      <section className="site-wrap py-16 lg:py-24">
        <div className="space-y-12 lg:space-y-16">
          {catalog.map((product, index) => (
            <article
              key={product.id}
              className="luxury-card overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr] border border-[var(--border-bright)] group transition-all duration-300 hover:shadow-2xl"
            >
              {/* Product Info Left Column */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[var(--border)]">
                    <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                      0{index + 1} · {product.productId}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text)]">
                      {product.pricing}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--gold-luxury)]">
                      {product.audience}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)] mt-1 group-hover:text-[var(--gold-luxury)] transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-xs font-medium text-[var(--text-dim)] mt-0.5">
                      {product.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[var(--text-muted)] mt-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 pt-5 border-t border-[var(--border)]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--text)] mb-3">
                        Key Capabilities:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {product.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs font-medium text-[var(--text)]"
                          >
                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                              <Check className="h-2.5 w-2.5" />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-3">
                  <Link href={product.href} className="luxury-btn-gold text-xs">
                    <span>View {product.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>

                  <a
                    href={whatsappUrl(`Hi GTSS, I'd like to book a walkthrough for ${product.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-btn-outline text-xs"
                  >
                    <span>Request Live Walkthrough</span>
                  </a>
                </div>
              </div>

              {/* Product Visual Right Column */}
              <div className="relative min-h-[16rem] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-[var(--border)] bg-[var(--bg-surface-3)]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)]/80 via-transparent to-transparent lg:hidden" />
              </div>
            </article>
          ))}

          {/* Bespoke Enterprise Architecture Card */}
          <article className="luxury-card overflow-hidden p-8 sm:p-10 lg:p-12 border-2 border-dashed border-[var(--gold-border)] bg-[rgba(197,155,39,0.02)]">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                  GTS-CUSTOM-ENTERPRISE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)] mt-2">
                  Need a Bespoke Operational Architecture?
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-muted)] mt-3 leading-relaxed">
                  If your enterprise operates multi-branch supply chains, custom legacy ERP databases,
                  or unique on-site floor mechanics, our engineers build tailored offline-first intranet
                  solutions with dedicated on-site SLA.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-[var(--text)]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>Custom Edge Server Engineering</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-[var(--gold-luxury)]" />
                    <span>SAP & Business Central Connectors</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 text-blue-500" />
                    <span>Multi-Region Cloud Sync</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <Link href="/enterprise" className="luxury-btn-primary text-xs sm:text-sm w-full sm:w-auto text-center justify-center">
                  <span>Explore Enterprise Solutions</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="luxury-btn-outline text-xs sm:text-sm w-full sm:w-auto text-center justify-center">
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Global Call to Action */}
      <SiteCTA
        title="Ready to upgrade your business infrastructure?"
        copy="Tell us about your operations. We provide fixed pricing, equipment requirements, and a 21-day turnkey rollout."
        primary={{ href: "/contact", label: "Schedule Architecture Call" }}
        secondary={{ href: "/demo", label: "Book System Demo" }}
      />
    </div>
  );
}
