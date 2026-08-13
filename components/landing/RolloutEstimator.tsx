"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  UtensilsCrossed,
  ShoppingBag,
  Church,
  GraduationCap,
  Building2,
  CheckCircle2,
  Clock,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  HeartPulse,
} from "lucide-react";
import { whatsappUrl } from "@/data/site";

const businessTypes = [
  { id: "healthcare", label: "Pharmacy & Healthcare", icon: HeartPulse, product: "PharmaCare OS (Flagship Storefront + AI Chatbot + FEFO Inventory)" },
  { id: "hospitality", label: "Hospitality & Dining", icon: UtensilsCrossed, product: "Restaurant Manager (POS + KDS + Intranet Server)" },
  { id: "retail", label: "Retail & Commerce", icon: ShoppingBag, product: "Commersely Enterprise Storefront & Stock Control" },
  { id: "church", label: "Faith & Ministry", icon: Church, product: "GTSS Church Management System (M-Pesa Multi-Ledger)" },
  { id: "platform", label: "Campus & Marketplace", icon: GraduationCap, product: "JustInTime or Kampus Social & Trade Engine" },
  { id: "enterprise", label: "Custom Multi-Branch", icon: Building2, product: "GTSS Bespoke Intranet & ERP Architecture" },
];

const branchScales = [
  { id: "single", label: "1 Location", time: "14 Days", hardware: "1 Local Edge Hub + Cloud Storefront" },
  { id: "multi", label: "2 – 5 Locations", time: "21 Days", hardware: "Distributed Local Edge Hubs + Central Cloud" },
  { id: "enterprise", label: "6+ Locations / Network", time: "30 Days", hardware: "Enterprise Intranet Mesh + Dedicated Cloud Sync" },
];

const bottlenecks = [
  { id: "expiry", label: "Expired medicine losses & lot confusion", impact: "Zero-waste FEFO automated lot tracking" },
  { id: "calls", label: "Endless phone calls for stock & pricing", impact: "24/7 AI chatbot & online medicine catalogue" },
  { id: "network", label: "Internet drops lose orders & stall till", impact: "100% Offline Intranet failover" },
  { id: "reconcile", label: "Manual M-Pesa / Cash reconciliation errors", impact: "Zero-discrepancy instant STK ledger tracking" },
  { id: "speed", label: "Manual prescription checks & slow refill pickup", impact: "Automated WhatsApp refill pings & fast queue" },
];

export function RolloutEstimator() {
  const [selectedType, setSelectedType] = useState(businessTypes[0]);
  const [selectedScale, setSelectedScale] = useState(branchScales[0]);
  const [selectedBottleneck, setSelectedBottleneck] = useState(bottlenecks[0]);

  const customBrief = `Hi GTSS, I ran the Rollout Estimator for:
- Sector: ${selectedType.label}
- Scale: ${selectedScale.label}
- Main Priority: ${selectedBottleneck.label}
I'd like to schedule an operational audit and discuss deployment timeline.`;

  return (
    <section className="bg-[var(--section-alt)] py-20 lg:py-28 relative overflow-hidden" id="estimator">
      <div className="site-wrap">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--bg-surface)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Operational Audit</span>
          </div>
          <h2 className="site-title text-[var(--text)]">
            Estimate your deployment scope and timeline.
          </h2>
          <p className="site-lead mx-auto mt-4 text-base lg:text-lg">
            Configure your operating model below to see the recommended GTSS architecture stack, hardware
            requirements, and guaranteed rollout window.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Step Selectors */}
          <div className="luxury-card p-6 sm:p-8 space-y-8 bg-[var(--card-bg)]">
            {/* Step 1: Industry */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--gold-luxury)] mb-3">
                01. Select Your Operating Category
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {businessTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-[var(--gold-luxury)] bg-[rgba(197,155,39,0.08)] shadow-sm text-[var(--text)]"
                          : "border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:border-[var(--border-bright)] hover:text-[var(--text)]"
                      }`}
                    >
                      <Icon className={`h-4 w-4 mb-2 ${isSelected ? "text-[var(--gold-luxury)]" : "text-[var(--text-dim)]"}`} />
                      <span className="text-xs font-bold leading-tight">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Branch Scale */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--gold-luxury)] mb-3">
                02. Operating Scale & Outlets
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {branchScales.map((scale) => {
                  const isSelected = selectedScale.id === scale.id;
                  return (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setSelectedScale(scale)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? "border-[var(--gold-luxury)] bg-[rgba(197,155,39,0.08)] text-[var(--text)]"
                          : "border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:border-[var(--border-bright)] hover:text-[var(--text)]"
                      }`}
                    >
                      <span className="block text-xs font-bold">{scale.label}</span>
                      <span className="block text-[10px] text-[var(--text-dim)] mt-0.5">{scale.time}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Priority Bottleneck */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--gold-luxury)] mb-3">
                03. Primary Operational Bottleneck to Eliminate
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {bottlenecks.map((b) => {
                  const isSelected = selectedBottleneck.id === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBottleneck(b)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-[var(--gold-luxury)] bg-[rgba(197,155,39,0.08)] text-[var(--text)]"
                          : "border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:border-[var(--border-bright)] hover:text-[var(--text)]"
                      }`}
                    >
                      <span className="block text-xs font-bold text-[var(--text)]">{b.label}</span>
                      <span className="block text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                        ↳ Fix: {b.impact}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="luxury-card p-6 sm:p-8 bg-[var(--bg-surface)] border-[var(--gold-luxury)]/40 shadow-xl relative overflow-hidden ring-1 ring-[var(--gold-luxury)]/20">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
              <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                RECOMMENDED DEPLOYMENT STACK
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="h-3 w-3" />
                <span>Ready to Scope</span>
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-[11px] uppercase font-semibold text-[var(--text-dim)]">
                  Primary Software Suite
                </p>
                <p className="text-base font-bold text-[var(--text)] mt-0.5">
                  {selectedType.product}
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase font-semibold text-[var(--text-dim)]">
                  Hardware & Intranet Layer
                </p>
                <p className="text-sm font-semibold text-[var(--text)] mt-0.5">
                  {selectedScale.hardware}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[var(--border)]">
                <div>
                  <p className="text-[11px] uppercase font-semibold text-[var(--text-dim)]">
                    Rollout Window
                  </p>
                  <p className="text-xl font-extrabold text-[var(--gold-luxury)] mt-0.5">
                    {selectedScale.time}
                  </p>
                  <p className="text-[10px] text-[var(--text-muted)]">From kickoff to floor live</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase font-semibold text-[var(--text-dim)]">
                    Floor Resilience
                  </p>
                  <p className="text-xl font-extrabold text-emerald-500 mt-0.5">
                    99.98% SLA
                  </p>
                  <p className="text-[10px] text-[var(--text-muted)]">Zero offline dropouts</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-xs text-[var(--text)]">
                <strong className="text-emerald-600 dark:text-emerald-400 font-semibold block mb-0.5">
                  Target Efficiency Impact:
                </strong>
                {selectedBottleneck.impact}
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="mt-8 pt-6 border-t border-[var(--border)] space-y-3">
              <a
                href={whatsappUrl(customBrief)}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-btn-gold w-full text-xs text-center justify-center font-bold"
              >
                <span>Book Rollout Audit via WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="luxury-btn-outline w-full text-xs text-center justify-center"
              >
                <span>Submit Detailed RFC / RFQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
