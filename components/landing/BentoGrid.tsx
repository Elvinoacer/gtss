"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  UtensilsCrossed,
  Church,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Layers,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { catalog, whatsappUrl } from "@/data/site";

const filterCategories = [
  { id: "all", label: "All Systems" },
  { id: "healthcare", label: "Healthcare & Pharmacy (Flagship)" },
  { id: "hospitality", label: "Hospitality & Dining" },
  { id: "commerce", label: "Commerce & Retail" },
  { id: "institutions", label: "Faith & Institutions" },
  { id: "platforms", label: "Platforms & Campus" },
];

export function BentoGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = catalog.filter((product) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "healthcare") return product.id === "pharmacy-platform";
    if (activeCategory === "hospitality") return product.id === "restaurant-manager";
    if (activeCategory === "commerce") return product.id === "commersely";
    if (activeCategory === "institutions") return product.id === "church-management-system";
    if (activeCategory === "platforms") return product.id === "justintime" || product.id === "kampus";
    return true;
  });

  return (
    <section className="bg-[var(--bg)] py-20 lg:py-28 relative" id="products">
      <div className="site-wrap">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[var(--border)]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="h-3.5 w-3.5" />
              <span>Flagship Solutions Suite</span>
            </div>
            <h2 className="site-title text-[var(--text)]">
              Polished software architectures, ready for deployment.
            </h2>
            <p className="site-lead mt-4 text-base lg:text-lg">
              Each system is engineered for local operating conditions and proven in the field. Pick the
              stack that matches your business, and our engineers will deploy, customize, and train your staff.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex overflow-x-auto scrollbar-none flex-nowrap sm:flex-wrap gap-1.5 p-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-surface-2)] max-w-full">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`luxury-card overflow-hidden flex flex-col justify-between group relative ${
                product.id === "pharmacy-platform" ? "ring-2 ring-emerald-500/40 shadow-emerald-500/10" : ""
              }`}
            >
              {/* Top Card Image & Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-surface-3)]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-90" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-md bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--border)] text-[var(--gold-luxury)]">
                      {product.productId}
                    </span>
                    {product.id === "pharmacy-platform" && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-600 text-white shadow-sm flex items-center gap-1">
                        <Sparkles className="h-2.5 w-2.5" />
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--border)] text-[var(--text)]">
                    {product.pricing}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 lg:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-luxury)]">
                    {product.audience}
                  </p>
                  <h3 className="text-xl font-bold tracking-tight text-[var(--text)] mt-1.5 group-hover:text-[var(--gold-luxury)] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs font-medium text-[var(--text-dim)] mt-0.5">
                    {product.subtitle}
                  </p>

                  <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-5 pt-4 border-t border-[var(--border)] space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-[var(--text)]">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--text)] hover:text-[var(--gold-luxury)] transition-colors group-hover:translate-x-0.5"
                  >
                    <span>View System Details</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={whatsappUrl(`Hi GTSS, I'm interested in a live demo for ${product.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Bespoke Enterprise Card */}
          <div className="luxury-card overflow-hidden flex flex-col justify-between p-6 lg:p-7 border-dashed border-2 border-[var(--gold-border)] bg-[rgba(197,155,39,0.02)]">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-md bg-[var(--card-bg)] border border-[var(--border)] text-[var(--gold-luxury)]">
                  GTS-CUSTOM
                </span>
                <span className="text-[11px] font-semibold text-[var(--gold-luxury)]">
                  Tailored Scope
                </span>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-luxury)]">
                  Enterprise Architecture
                </p>
                <h3 className="text-xl font-bold tracking-tight text-[var(--text)] mt-1.5">
                  Custom Offline Intranets & ERPs
                </h3>
                <p className="text-xs font-medium text-[var(--text-dim)] mt-0.5">
                  Bespoke Software Engineering
                </p>

                <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                  Have unique operational workflows, distributed supply chains, or legacy databases? GTSS
                  designs, builds, and deploys proprietary systems tailored to your exact operational mechanics.
                </p>

                <div className="mt-5 pt-4 border-t border-[var(--border)] space-y-2 text-xs text-[var(--text)]">
                  <div className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span>Proprietary edge server configuration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span>ERP & SAP legacy connectors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span>Dedicated SLA & on-site engineers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border)]">
              <Link
                href="/enterprise"
                className="luxury-btn-primary w-full text-xs text-center"
              >
                <span>Discuss Enterprise Architecture</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
