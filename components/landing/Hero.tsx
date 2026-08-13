"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Wifi,
  WifiOff,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Smartphone,
  CreditCard,
  HeartPulse,
  UtensilsCrossed,
  Church,
  ShoppingBag,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { catalog, whatsappUrl } from "@/data/site";

const consoleTabs = [
  {
    id: "pharmacy-platform",
    label: "Pharmacy & Clinic Command",
    shortLabel: "PharmaCare OS (Flagship)",
    icon: HeartPulse,
    product: catalog[0],
    stat: "KES 214,800 Today",
    badge: "24/7 AI & M-Pesa Live",
    latency: "0.2s Realtime",
    metrics: [
      { label: "OTC & Refill Orders", val: "68 Completed" },
      { label: "AI Health Queries", val: "142 Answered" },
      { label: "FEFO Stock Lots", val: "0 Expired / 100% OK" },
    ],
  },
  {
    id: "restaurant-manager",
    label: "Hospitality Command",
    shortLabel: "Restaurant POS",
    icon: UtensilsCrossed,
    product: catalog[1],
    stat: "KES 148,500 Today",
    badge: "Offline Server Active",
    latency: "0.4ms Intranet",
    metrics: [
      { label: "Floor Tables", val: "24 / 28 Occupied" },
      { label: "Avg Ticket Time", val: "6.2 mins" },
      { label: "Offline Buffer", val: "100% Synced" },
    ],
  },
  {
    id: "church-management",
    label: "Congregation Treasury",
    shortLabel: "Church System",
    icon: Church,
    product: catalog[2],
    stat: "KES 420,000 Tithes",
    badge: "M-Pesa Multi-Ledger",
    latency: "Real-time STK",
    metrics: [
      { label: "Active Members", val: "1,420 Verified" },
      { label: "Collections", val: "M-Pesa + Bank + Cash" },
      { label: "SMS Broadcasts", val: "Automated" },
    ],
  },
  {
    id: "commersely",
    label: "Commerce Storefront",
    shortLabel: "E-Commerce",
    icon: ShoppingBag,
    product: catalog[3],
    stat: "KES 89,200 GMV",
    badge: "Next.js 15 Fast",
    latency: "0.2s TTFB",
    metrics: [
      { label: "Checkout Rate", val: "4.8% Conv." },
      { label: "Dispatch Queue", val: "38 Dispatched" },
      { label: "Inventory Sync", val: "Multi-Warehouse" },
    ],
  },
  {
    id: "justintime",
    label: "Gig Marketplace",
    shortLabel: "JustInTime",
    icon: Briefcase,
    product: catalog[4],
    stat: "34 Jobs Matched",
    badge: "Hyperlocal Escrow",
    latency: "< 3min Match",
    metrics: [
      { label: "Verified Pros", val: "520 Onboarded" },
      { label: "Client Rating", val: "4.92 / 5.0" },
      { label: "Settlement", val: "Instant M-Pesa" },
    ],
  },
  {
    id: "kampus",
    label: "Campus Ecosystem",
    shortLabel: "Kampus Social",
    icon: GraduationCap,
    product: catalog[5],
    stat: "12,400 Students",
    badge: "Campus Feeds Live",
    latency: "P2P Intranet",
    metrics: [
      { label: "Classifieds", val: "180 Active Listings" },
      { label: "Event Passes", val: "QR Access Control" },
      { label: "Trust Score", val: "Student ID Auth" },
    ],
  },
];

const proofPillars = [
  {
    num: "01",
    title: "True Offline Intranet Server",
    desc: "Critical floor operations, order routing, KDS displays, and cashiers continue running without internet on local hardware.",
    icon: WifiOff,
  },
  {
    num: "02",
    title: "Native Regional Rails",
    desc: "Seamless M-Pesa STK Push, Airtel Money, cards, and bank reconciliations integrated directly into unified ledgers.",
    icon: CreditCard,
  },
  {
    num: "03",
    title: "21-Day White-Glove Rollout",
    desc: "From initial workflow audit to on-site hardware installation, custom configuration, and hands-on floor staff training.",
    icon: ShieldCheck,
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(consoleTabs[0]);
  const [isOfflineSimulated, setIsOfflineSimulated] = useState(false);
  const [isMpesaTesting, setIsMpesaTesting] = useState(false);
  const [mpesaSent, setMpesaSent] = useState(false);

  const triggerMpesaTest = () => {
    setIsMpesaTesting(true);
    setTimeout(() => {
      setIsMpesaTesting(false);
      setMpesaSent(true);
      setTimeout(() => setMpesaSent(false), 3500);
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden bg-[var(--hero-gradient)] pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Subtle luxury ambient depth */}
      <div
        className="luxury-glow-radial -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[var(--gold)]"
        aria-hidden="true"
      />
      <div
        className="luxury-glow-radial top-1/3 -right-40 w-[500px] h-[500px] bg-[var(--cyan)] opacity-10"
        aria-hidden="true"
      />

      <div className="site-wrap relative z-10">
        {/* Top Kicker & Continuity Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-2.5">
            <span className="luxury-radar-dot" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-luxury)]">
              Enterprise Systems · Nairobi & East Africa
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>99.98% Continuity SLA</span>
            </span>
            <span className="text-[var(--border-bright)]">•</span>
            <span>Local Intranet + Cloud Hybrid</span>
          </div>
        </div>

        {/* Hero Main Presentation */}
        <div className="mt-10 lg:mt-14 grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-medium tracking-wide mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Engineered for Composure Under Pressure</span>
            </div>

            <h1 className="site-display text-[var(--text)]">
              Systems that make ambitious businesses look{" "}
              <span className="italic font-normal text-gold-gradient">expensive</span> and run with{" "}
              <span className="font-normal underline decoration-[var(--gold-luxury)] decoration-1 underline-offset-4">
                effortless composure
              </span>
              .
            </h1>

            <p className="site-lead mt-6 text-base lg:text-lg">
              GTSS architects polished software systems for pharmacies, healthcare clinics, hotels, restaurants, retail,
              and institutions across East Africa. Uncompromising elegance in front of customers. Indestructible
              reliability when internet lines drop.
            </p>

            {/* CTA Group */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link href="/products" className="luxury-btn-gold">
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link href="/demo" className="luxury-btn-outline">
                <Zap className="h-4 w-4 text-[var(--gold-luxury)]" />
                <span>Book System Walkthrough</span>
              </Link>

              <a
                href={whatsappUrl("Hi GTSS, I'd like to schedule an operational audit for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn site-btn-whatsapp text-sm"
              >
                <span>Direct WhatsApp Concierge</span>
              </a>
            </div>

            {/* Quick Micro-Assurances */}
            <div className="mt-8 pt-6 border-t border-[var(--border)] grid grid-cols-3 gap-3 text-left">
              <div>
                <p className="text-xl lg:text-2xl font-bold tracking-tight text-[var(--text)]">50+</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Live Deployments</p>
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-bold tracking-tight text-[var(--text)]">0 ms</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Floor Sync Drop</p>
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-bold tracking-tight text-[var(--text)]">3 Weeks</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Audit to Live Floor</p>
              </div>
            </div>
          </div>

          {/* Interactive Hero Console: GTSS Unified OS Preview */}
          <div className="relative">
            {/* Top decorative gradient edge */}
            <div className="absolute -top-3 -right-3 -left-3 h-24 bg-gradient-to-b from-[var(--gold)]/10 to-transparent rounded-2xl blur-xl pointer-events-none" />

            <div className="relative rounded-xl border border-[var(--border-bright)] bg-[var(--card-bg)] shadow-[var(--card-hover-shadow)] overflow-hidden">
              {/* Console Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-surface-2)]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
                    GTSS Enterprise Engine v4.8 · {activeTab.latency}
                  </span>
                </div>

                {/* Offline Simulation Switcher */}
                <button
                  type="button"
                  onClick={() => setIsOfflineSimulated(!isOfflineSimulated)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    isOfflineSimulated
                      ? "bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-300"
                      : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                  }`}
                  title="Click to test simulated internet outage failover"
                >
                  {isOfflineSimulated ? (
                    <>
                      <WifiOff className="h-3 w-3 animate-pulse" />
                      <span>Simulated Cut: 100% Intranet Active</span>
                    </>
                  ) : (
                    <>
                      <Wifi className="h-3 w-3" />
                      <span>Cloud + Intranet Synced</span>
                    </>
                  )}
                </button>
              </div>

              {/* Console Product Switcher Tabs */}
              <div className="flex overflow-x-auto border-b border-[var(--border)] bg-[var(--bg-surface)] p-1.5 gap-1 scrollbar-none">
                {consoleTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isSelected = activeTab.id === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                        isSelected
                          ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-sm"
                          : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-2)]"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{tab.shortLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Console Screen View */}
              <div className="p-5 lg:p-6 space-y-5">
                {/* Active Product Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gold-luxury)]">
                      {activeTab.product.audience}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-[var(--text)] mt-0.5">
                      {activeTab.product.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-1 max-w-sm">
                      {activeTab.product.description}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text)] inline-block">
                      {activeTab.stat}
                    </span>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-mono flex items-center justify-end gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      {activeTab.badge}
                    </p>
                  </div>
                </div>

                {/* Live Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2.5">
                  {activeTab.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-2)]"
                    >
                      <p className="text-[10px] uppercase font-semibold text-[var(--text-muted)]">
                        {metric.label}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-[var(--text)] mt-0.5 truncate">
                        {metric.val}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Product Live Preview Mockup Card */}
                <div className="relative rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-surface-3)]">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={activeTab.product.image}
                      alt={activeTab.product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-transparent to-transparent" />
                  </div>

                  {/* Overlaid Interactive Trigger Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2 rounded-lg bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--border)] shadow-lg">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={triggerMpesaTest}
                        disabled={isMpesaTesting || mpesaSent}
                        className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-80 cursor-pointer"
                      >
                        {isMpesaTesting ? (
                          <>
                            <span className="w-2.5 h-2.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending STK...</span>
                          </>
                        ) : mpesaSent ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                            <span>KES 2,500 Confirmed!</span>
                          </>
                        ) : (
                          <>
                            <Smartphone className="h-3.5 w-3.5" />
                            <span>Test Live M-Pesa STK</span>
                          </>
                        )}
                      </button>
                    </div>

                    <Link
                      href={activeTab.product.href}
                      className="text-xs font-semibold text-[var(--gold-luxury)] hover:underline flex items-center gap-1"
                    >
                      <span>Full Specs</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>

                {/* Feature Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {activeTab.product.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[11px] font-medium px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)]"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Console Footer */}
              <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--bg-surface-2)] flex items-center justify-between text-xs">
                <span className="text-[var(--text-muted)]">
                  Pricing: <strong className="text-[var(--text)]">{activeTab.product.pricing}</strong>
                </span>
                <Link
                  href={activeTab.product.href}
                  className="font-semibold text-[var(--accent)] hover:underline flex items-center gap-1"
                >
                  <span>Launch System</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Executive Proof Pillars */}
        <div className="mt-16 lg:mt-24 grid gap-6 sm:grid-cols-3">
          {proofPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="luxury-card p-6 lg:p-7 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                    {item.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-2)] flex items-center justify-center text-[var(--text)] group-hover:text-[var(--gold-luxury)] transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <h4 className="mt-4 text-lg font-bold tracking-tight text-[var(--text)]">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
