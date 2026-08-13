"use client";

import { Star, Quote, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Our kitchen used to lose orders between the waitstaff and the cooks during peak Sunday lunches. Since GTSS Restaurant Manager went in, every ticket hits the KDS display instantly — even on the days our fiber internet completely died.",
    author: "Grace Wanjiku",
    role: "Operating Partner, Java House Eldoret",
    product: "Restaurant Manager POS & KDS",
    metric: "0 Lost Orders in 6 Months",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote:
      "We evaluated three church management platforms. GTSS was the only one that truly understood how Kenyan congregations give: M-Pesa paybills, cash envelopes, and direct bank transfers reconciled in one unified ledger with automated SMS receipts.",
    author: "Pastor David Ochieng",
    role: "Senior Pastor, Grace Community Church, Nakuru",
    product: "GTSS Church Management System",
    metric: "KES 4.8M Reconciled Monthly",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote:
      "They installed an on-premise local server, configured our bar and restaurant stations, and certified our 14 staff members in two weeks. When the area power grid glitched last week, guest orders never missed a beat.",
    author: "Ahmed Hassan",
    role: "General Manager, Rift Valley Lodge",
    product: "Hospitality Command System",
    metric: "99.98% Continuous Uptime",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote:
      "Commersely gave our boutique fashion brand a high-fashion digital storefront with instant M-Pesa STK checkout. Our cart conversion increased by 38% because customers don't get redirected to clunky third-party portals.",
    author: "Amina Mohamed",
    role: "Founder, Amina's Atelier Nairobi",
    product: "Commersely Storefront",
    metric: "+38% Checkout Conversion",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-[var(--section-alt)] py-20 lg:py-28 relative overflow-hidden" id="testimonials">
      <div className="site-wrap">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[var(--border)]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[var(--bg-surface)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Award className="h-3.5 w-3.5" />
              <span>Operator Verifications</span>
            </div>
            <h2 className="site-title text-[var(--text)]">
              What operators remember is composure.
            </h2>
            <p className="site-lead mt-4 text-base lg:text-lg">
              The highest compliment we receive is that our systems make hectic teams feel in total control.
              Here is how GTSS performs on real floors across East Africa.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>100% Verified Field Deployments</span>
            </span>
          </div>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="luxury-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group bg-[var(--card-bg)]"
            >
              <div className="absolute top-6 right-6 text-[var(--gold-luxury)]/20 pointer-events-none">
                <Quote className="h-12 w-12" />
              </div>

              <div>
                {/* Rating & Metric Pill */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {item.metric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl text-[var(--text)] leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-5 border-t border-[var(--border)] flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[var(--gold-luxury)]/40 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold text-[var(--text)] truncate">
                    {item.author}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] truncate">
                    {item.role}
                  </p>
                  <p className="text-[11px] font-semibold text-[var(--gold-luxury)] uppercase tracking-wider mt-0.5">
                    {item.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
