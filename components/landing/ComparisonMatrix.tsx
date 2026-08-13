"use client";

import { Check, X, Shield, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

const comparisons = [
  {
    feature: "24/7 Customer Care & AI Chatbot",
    generic: "Requires staff to answer repeat phone calls for medicine stock, opening hours & pricing.",
    genericOk: false,
    gtss: "Automated 24/7 AI assistant answers dosage, pricing & takes clinic bookings without staff calls.",
    gtssOk: true,
  },
  {
    feature: "Network Failover & Offline Speed",
    generic: "Freezes when fiber or Wi-Fi drops; orders lose sync, cashiers and dispensing halt.",
    genericOk: false,
    gtss: "100% Local Intranet Server; sub-millisecond table orders, dispensing & KDS with 0kb internet.",
    gtssOk: true,
  },
  {
    feature: "Native Payment Rails",
    generic: "Built for Stripe/USD; requires manual M-Pesa phone checking by cashiers.",
    genericOk: false,
    gtss: "Native M-Pesa STK Push, Airtel Money, cards & cash in one auto-reconciled ledger.",
    gtssOk: true,
  },
  {
    feature: "Inventory & FEFO Batch Expiry",
    generic: "Basic SKU counts without batch lots; expired drugs get discovered at till or wasted.",
    genericOk: false,
    gtss: "Full First-Expired-First-Out (FEFO) batch tracking with auto-expiry alerts and barcode intake.",
    gtssOk: true,
  },
  {
    feature: "Floor Onboarding & Staff Training",
    generic: "Generic self-serve video links; frontline staff left to figure it out.",
    genericOk: false,
    gtss: "On-site white-glove floor training; pharmacists, waiters, cooks & cashiers certified on live floor.",
    gtssOk: true,
  },
  {
    feature: "Pricing Transparency & Currency",
    generic: "Unpredictable USD billing with per-device, per-user, and per-feature markups.",
    genericOk: false,
    gtss: "Predictable KES pricing with One-Time permanent ownership or flat affordable monthly plans.",
    gtssOk: true,
  },
  {
    feature: "Dedicated Technical Support SLA",
    generic: "Offshore email support queues with 24–72 hr delay on busy weekends.",
    genericOk: false,
    gtss: "Direct WhatsApp & phone line to senior Kenyan software engineers (< 15 mins).",
    gtssOk: true,
  },
];

export function ComparisonMatrix() {
  return (
    <section className="bg-[var(--bg)] py-20 lg:py-28 relative overflow-hidden" id="comparison">
      <div className="site-wrap">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="h-3.5 w-3.5" />
            <span>Architectural Superiority</span>
          </div>
          <h2 className="site-title text-[var(--text)]">
            Engineered for African operations, not imported assumptions.
          </h2>
          <p className="site-lead mx-auto mt-4 text-base lg:text-lg">
            Imported cloud software assumes fiber optic stability, credit card dominance, and remote IT staff.
            GTSS is purpose-built for the reality on the ground.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--border-bright)] bg-[var(--card-bg)] shadow-xl">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.2fr] border-b border-[var(--border)] bg-[var(--bg-surface-2)]">
            <div className="p-4 sm:p-6 text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Operational Criteria
            </div>
            <div className="p-4 sm:p-6 text-xs font-bold uppercase tracking-wider text-red-500/80 border-t md:border-t-0 md:border-l border-[var(--border)]">
              Generic Cloud SaaS (Imported)
            </div>
            <div className="p-4 sm:p-6 text-xs font-bold uppercase tracking-wider text-[var(--gold-luxury)] border-t md:border-t-0 md:border-l border-[var(--border)] bg-[rgba(197,155,39,0.04)]">
              GTSS Enterprise Architecture
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[var(--border)]">
            {comparisons.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.2fr] transition-colors hover:bg-[var(--bg-surface-2)]/50"
              >
                {/* Feature Label */}
                <div className="p-4 sm:p-6 text-sm font-bold text-[var(--text)] flex items-center">
                  {row.feature}
                </div>

                {/* Generic SaaS Cell */}
                <div className="p-4 sm:p-6 text-xs sm:text-sm text-[var(--text-muted)] border-t md:border-t-0 md:border-l border-[var(--border)] flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <span>{row.generic}</span>
                </div>

                {/* GTSS Architecture Cell */}
                <div className="p-4 sm:p-6 text-xs sm:text-sm text-[var(--text)] font-medium border-t md:border-t-0 md:border-l border-[var(--border)] bg-[rgba(197,155,39,0.02)] flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-semibold">{row.gtss}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Banner */}
          <div className="p-6 bg-[var(--bg-surface-2)] border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[var(--text)] font-medium">
              <Sparkles className="h-4 w-4 text-[var(--gold-luxury)]" />
              <span>Have an existing legacy database? We migrate your data in 48 hours.</span>
            </div>

            <Link href="/contact" className="luxury-btn-primary text-xs shrink-0">
              <span>Schedule Architecture Review</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
