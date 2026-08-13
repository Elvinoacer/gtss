"use client";

import { Building2, UtensilsCrossed, ShoppingCart, Church, GraduationCap, Truck, ShieldCheck, Activity } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Live Deployments",
    sub: "Nairobi · Eldoret · Nakuru · Mombasa · Kampala",
  },
  {
    value: "99.98%",
    label: "Floor Continuity",
    sub: "Survives grid & fiber drops with zero order loss",
  },
  {
    value: "3 Weeks",
    label: "Average Rollout Window",
    sub: "From scoping audit to trained team on live floor",
  },
  {
    value: "< 15 Mins",
    label: "Dedicated Support SLA",
    sub: "Direct WhatsApp line with senior engineering team",
  },
];

const sectors = [
  { name: "Luxury Lodges & Hotels", icon: Building2 },
  { name: "Fine Dining & Busy Kitchens", icon: UtensilsCrossed },
  { name: "Retail & Multi-Branch Chains", icon: ShoppingCart },
  { name: "Faith & Ministry Ledgers", icon: Church },
  { name: "Higher Education Campuses", icon: GraduationCap },
  { name: "Distribution & Field Teams", icon: Truck },
];

export function StatsBar() {
  return (
    <section
      aria-label="Company continuity and deployment metrics"
      className="border-y border-[var(--border)] bg-[var(--section-alt)] relative overflow-hidden py-12 lg:py-16"
    >
      <div className="site-wrap">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative pl-4 lg:pl-6 border-l-2 border-[var(--gold-luxury)]/40 hover:border-[var(--gold-luxury)] transition-colors"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--text)]">
                  {stat.value}
                </span>
                {i === 1 && (
                  <span className="inline-flex items-center text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded ml-1">
                    VERIFIED
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm sm:text-base font-bold text-[var(--text)]">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)] leading-relaxed">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Operating Sector Logos / Badges Strip */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-[var(--gold-luxury)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Trusted Operating Sectors
              </span>
            </div>
            <span className="text-xs text-[var(--text-dim)]">
              Engineered specifically for high-friction African operating realities
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {sectors.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.name}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text)] text-xs font-medium transition-all hover:border-[var(--gold-border)] hover:bg-[var(--bg-surface-2)]"
                >
                  <Icon className="h-3.5 w-3.5 text-[var(--gold-luxury)] shrink-0" />
                  <span className="truncate">{sec.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
