"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { whatsappUrl, telUrl } from "@/data/site";

export function CTA() {
  return (
    <section className="bg-[var(--bg)] py-20 lg:py-28 relative overflow-hidden" id="cta">
      <div className="site-wrap relative">
        {/* Luxury Obsidian / Velvet Banner Frame */}
        <div className="relative rounded-2xl lg:rounded-3xl border border-[var(--gold-border)] bg-gradient-to-br from-[#0b1220] via-[#070b14] to-[#04060b] p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden">
          {/* Subtle gold & sapphire background glow */}
          <div
            className="absolute top-0 right-0 w-[450px] h-[450px] bg-[var(--gold)]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next Move · Architecture Scoping</span>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                If the business is ready for software that looks{" "}
                <span className="italic text-gold-gradient font-normal">expensive</span> and runs with{" "}
                <span className="underline decoration-amber-400 decoration-1 underline-offset-4 font-normal">
                  total composure
                </span>
                , let us map it.
              </h2>

              <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Tell us what you operate — a pharmacy, clinic, restaurant, lodge, retail chain, church, or campus ecosystem.
                Our engineers will specify the exact architecture stack, hardware configuration, and rollout
                timeline in under 24 hours.
              </p>

              {/* Assurances */}
              <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>21-Day Turnkey Rollout</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>100% Offline Edge Server Guarantee</span>
                </span>
                <span className="text-slate-600">•</span>
                <span>On-Site Staff Training Included</span>
              </div>
            </div>

            {/* Action Card */}
            <div className="flex flex-col gap-3.5 sm:gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <Link
                href="/products"
                className="luxury-btn-gold w-full text-center justify-center text-sm font-bold shadow-lg"
              >
                <span>Explore All Product Systems</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-white/20 hover:border-amber-400 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all"
              >
                <span>Schedule Architecture Consultation</span>
              </Link>

              <a
                href={whatsappUrl("Hi GTSS, I'm ready to discuss a software rollout for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn site-btn-whatsapp w-full text-center justify-center text-sm"
              >
                <span>WhatsApp Senior Engineer Now</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center mt-2">
                Need urgent floor assistance? Call our direct office line:{" "}
                <a href={telUrl} className="text-white underline hover:text-amber-300">
                  +254 792 156 094
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
