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
    desc: "Critical floor operations, dispensing, order routing, KDS displays, and cashiers continue running without internet on local hardware.",
    icon: WifiOff,
  },
  {
    num: "02",
    title: "Native Regional Rails",
    desc: "Seamless Safaricom M-Pesa STK Push, Airtel Money, cards, and bank reconciliations integrated directly into unified ledgers.",
    icon: CreditCard,
  },
  {
    num: "03",
    title: "21-Day White-Glove Rollout",
    desc: "From initial workflow audit to on-site hardware installation, custom catalogue ingestion, and hands-on floor staff training.",
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
    <section className="relative overflow-hidden bg-[var(--hero-gradient)] pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Subtle ambient lighting depth */}
      <div
        className="luxury-glow-radial -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--gold)] opacity-10"
        aria-hidden="true"
      />
      <div
        className="luxury-glow-radial top-1/2 -right-40 w-[500px] h-[500px] bg-emerald-500 opacity-5"
        aria-hidden="true"
      />

      <div className="site-wrap relative z-10">
        {/* Top Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[var(--border)] text-xs">
          <div className="flex items-center gap-2.5">
            <span className="luxury-radar-dot" aria-hidden="true" />
            <span className="font-semibold uppercase tracking-[0.14em] text-[var(--gold-luxury)]">
              Enterprise Systems · Nairobi & East Africa
            </span>
          </div>

          <div className="flex items-center gap-3 text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>99.98% Continuity SLA</span>
            </span>
            <span className="hidden sm:inline text-[var(--border-bright)]">•</span>
            <span className="hidden sm:inline">Local Intranet + Cloud Hybrid</span>
          </div>
        </div>

        {/* Spacious, Centered Grand Editorial Headline */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Engineered for Composure Under Pressure</span>
          </div>

          <h1 className="site-display text-[var(--text)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] text-balance">
            Systems that make ambitious businesses look{" "}
            <span className="italic font-normal text-gold-gradient">expensive</span> and run with{" "}
            <span className="font-normal underline decoration-[var(--gold-luxury)] decoration-1 underline-offset-4">
              effortless composure
            </span>
            .
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed text-pretty">
            GTSS architects polished software systems for pharmacies, healthcare clinics, hotels, restaurants, retail,
            and institutions across East Africa. Uncompromising elegance in front of customers. Indestructible
            reliability when internet lines drop.
          </p>

          {/* Centered CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="/products" className="luxury-btn-gold text-xs sm:text-sm">
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link href="/demo" className="luxury-btn-outline text-xs sm:text-sm">
              <Zap className="h-4 w-4 text-[var(--gold-luxury)]" />
              <span>Book System Walkthrough</span>
            </Link>

            <a
              href={whatsappUrl("Hi GTSS, I'd like to schedule an operational audit for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="site-btn site-btn-whatsapp text-xs sm:text-sm"
            >
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>

          {/* Quick Micro-Assurances Ribbon */}
          <div className="mt-10 pt-6 border-t border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]">50+</p>
              <p className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Live Deployments</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
                0 ms
              </p>
              <p className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Floor Sync Drop</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--gold-luxury)]">
                3 Weeks
              </p>
              <p className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Audit to Live Floor</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]">
                99.98%
              </p>
              <p className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Continuity SLA</p>
            </div>
          </div>
        </div>

        {/* Centered Grand Interactive Showcase Console */}
        <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto">
          {/* Top subtle glow */}
          <div className="absolute -top-3 -right-3 -left-3 h-24 bg-gradient-to-b from-[var(--gold)]/10 to-transparent rounded-2xl blur-xl pointer-events-none" />

          <div className="relative rounded-2xl border border-[var(--border-bright)] bg-[var(--card-bg)] shadow-[var(--card-hover-shadow)] overflow-hidden">
            {/* Console Window Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[var(--border)] bg-[var(--bg-surface-2)]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                </div>
                <span className="ml-2 text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
                  GTSS Unified Architecture · {activeTab.latency}
                </span>
              </div>

              {/* Offline Simulation Switcher */}
              <button
                type="button"
                onClick={() => setIsOfflineSimulated(!isOfflineSimulated)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  isOfflineSimulated
                    ? "bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-300"
                    : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                }`}
                title="Click to test simulated internet outage failover"
              >
                {isOfflineSimulated ? (
                  <>
                    <WifiOff className="h-3.5 w-3.5 animate-pulse" />
                    <span>Simulated Cut: 100% Intranet Active</span>
                  </>
                ) : (
                  <>
                    <Wifi className="h-3.5 w-3.5" />
                    <span>Cloud + Intranet Synced</span>
                  </>
                )}
              </button>
            </div>

            {/* Console Product Switcher Tabs — Touch Scrollable on Mobile without clipping */}
            <div className="flex overflow-x-auto border-b border-[var(--border)] bg-[var(--bg-surface)] p-2 gap-1.5 scrollbar-none">
              {consoleTabs.map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
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
            <div className="p-5 sm:p-7 space-y-6">
              {/* Active Product Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-xl">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gold-luxury)]">
                    {activeTab.product.audience}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] mt-1">
                    {activeTab.product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1.5 leading-relaxed">
                    {activeTab.product.description}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text)] inline-block">
                    {activeTab.stat}
                  </span>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-mono flex items-center justify-end gap-1.5 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    {activeTab.badge}
                  </p>
                </div>
              </div>

              {/* Live Telemetry Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeTab.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-surface-2)]"
                  >
                    <p className="text-[10px] uppercase font-semibold text-[var(--text-muted)] tracking-wider">
                      {metric.label}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[var(--text)] mt-0.5 truncate font-mono">
                      {metric.val}
                    </p>
                  </div>
                ))}
              </div>

              {/* Product Live Preview Mockup Card */}
              <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-surface-3)]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={activeTab.product.image}
                    alt={activeTab.product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-transparent to-transparent" />
                </div>

                {/* Overlaid Interactive Trigger Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-[var(--card-bg)]/95 backdrop-blur-md border border-[var(--border)] shadow-lg">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={triggerMpesaTest}
                      disabled={isMpesaTesting || mpesaSent}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm disabled:opacity-80 cursor-pointer"
                    >
                      {isMpesaTesting ? (
                        <>
                          <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending STK Prompt...</span>
                        </>
                      ) : mpesaSent ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                          <span>KES 2,500 Confirmed!</span>
                        </>
                      ) : (
                        <>
                          <Smartphone className="h-3.5 w-3.5" />
                          <span>Test Live M-Pesa STK Prompt</span>
                        </>
                      )}
                    </button>
                  </div>

                  <Link
                    href={activeTab.product.href}
                    className="text-xs font-bold text-[var(--gold-luxury)] hover:underline flex items-center gap-1.5 self-end sm:self-center"
                  >
                    <span>View Full Specs</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-2">
                {activeTab.product.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-xs font-medium px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)]"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Console Footer */}
            <div className="px-5 sm:px-7 py-4 border-t border-[var(--border)] bg-[var(--bg-surface-2)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-[var(--text-muted)]">
                Commercial Package: <strong className="text-[var(--text)]">{activeTab.product.pricing}</strong>
              </span>
              <Link
                href={activeTab.product.href}
                className="font-bold text-[var(--accent)] hover:underline flex items-center gap-1.5"
              >
                <span>Launch & Deploy System</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Executive Proof Pillars */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto grid gap-6 sm:grid-cols-3">
          {proofPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="luxury-card p-6 sm:p-7 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                    {item.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-2)] flex items-center justify-center text-[var(--text)] group-hover:text-[var(--gold-luxury)] transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <h4 className="mt-4 text-base sm:text-lg font-bold tracking-tight text-[var(--text)]">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
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
