"use client";

import React, { useState } from "react";
import { Check, Shield, Zap, Globe, Cpu, CreditCard, Terminal, HelpCircle, MoveRight } from "lucide-react";
import Link from "next/link";

const PRICING_PROTOCOLS = [
  {
    id: "UNIT_SINGLE",
    name: "Sovereign Unit",
    price: "Custom",
    description: "Single-store or dedicated instance installation. Perfect for localized business control.",
    features: [
      "Offline-First Architecture",
      "Local Network Deployment",
      "Lifetime Core License",
      "1 Year Technical Support",
      "Manual Data Backups",
    ],
    highlight: false,
    cta: "Request_Valuation",
    model: "ONE_TIME_PAYMENT",
  },
  {
    id: "PLATFORM_ACCESS",
    name: "Enterprise Node",
    price: "Subscription",
    description: "Multi-branch scaling with centralized cloud governance and real-time synchronization.",
    features: [
      "Everything in Sovereign Unit",
      "Multi-Branch Networking",
      "Real-time Cloud Sync",
      "Priority 24/7 Support",
      "Automated Cloud Backups",
      "Custom Dashboard Access",
    ],
    highlight: true,
    cta: "Initialize_Subscription",
    model: "RECURRING_ACCESS",
  },
  {
    id: "CUSTOM_PROTOCOL",
    name: "Sovereign Custom",
    price: "Enterprise",
    description: "Full white-label solutions and custom feature development for unique operations.",
    features: [
      "Everything in Enterprise Node",
      "White-label Branding",
      "Custom Feature Engineering",
      "On-Premise Infrastructure",
      "Dedicated Technical Lead",
      "Source Code Access (Optional)",
    ],
    highlight: false,
    cta: "Consult_Engineering",
    model: "STRATEGIC_PARTNERSHIP",
  },
];

const FAQS = [
  {
    q: "How does the Offline-First model work?",
    a: "Our systems run on local local servers (LAN). You don't need internet for day-to-day operations. Data syncs to the cloud only when connection is available.",
  },
  {
    q: "Can I move from One-time to Subscription?",
    a: "Yes. You can upgrade your Sovereign Unit to an Enterprise Node at any time to enable multi-branch features and real-time syncing.",
  },
  {
    q: "Is technical support included?",
    a: "All protocols include a base period of technical support. Enterprise and Custom protocols feature dedicated high-priority support channels.",
  },
];

export function PricingClient() {
  return (
    <div className="min-h-screen bg-[var(--black)] pt-32 pb-24 overflow-hidden">
      {/* Background HUD Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <header className="mb-24 text-center">
          <div className="inline-flex items-center gap-3 px-3 py-1 border border-[var(--gold-dim)] bg-[rgba(255,255,255,0.05)] mb-8">
            <Terminal className="w-3 h-3 text-[var(--gold)]" />
            <span className="font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold-dim)] uppercase">
              VALUATION_PROTOCOL_v2.1
            </span>
          </div>

          <h1 className="font-bebas text-6xl sm:text-8xl text-[var(--text)] mb-8 tracking-tighter leading-none uppercase">
            Fair <span className="text-[var(--gold)]">Monetization</span>
          </h1>
          
          <p className="font-cormorant text-2xl sm:text-3xl text-[var(--text-muted)] italic max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for technical sovereignty. No hidden fees, no vendor lock-in, 
            just powerful software deployed for your specific scale.
          </p>
        </header>

        {/* Pricing Cards */}
        <section className="grid lg:grid-cols-3 gap-8 mb-32">
          {PRICING_PROTOCOLS.map((protocol) => (
            <div 
              key={protocol.id} 
              className={`relative border ${protocol.highlight ? 'border-[var(--gold)] shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-[var(--border)]'} bg-[rgba(3,5,8,0.7)] p-8 flex flex-col group overflow-hidden`}
            >
              {/* Highlight Ribbon */}
              {protocol.highlight && (
                <div className="absolute top-4 right-4 flex items-center gap-2 font-mono-dm text-[8px] text-[var(--gold)] tracking-widest uppercase">
                  <Zap className="w-3 h-3 fill-[var(--gold)]" />
                  RECOMMENDED_NODE
                </div>
              )}

              <div className="mb-8">
                <span className="font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-50 block mb-2">
                  ID: {protocol.id}
                </span>
                <h3 className="font-bebas text-4xl text-[var(--text)] mb-4 tracking-wide uppercase">
                  {protocol.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-bebas text-5xl text-[var(--gold)]">{protocol.price}</span>
                </div>
                <p className="font-cormorant text-lg text-[var(--text-muted)] leading-relaxed italic h-16">
                  {protocol.description}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-12">
                <div className="font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] uppercase border-b border-[var(--border)] pb-2 mb-4">
                  CAPABILITY_SET
                </div>
                {protocol.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[var(--gold)] mt-1 flex-shrink-0" />
                    <span className="font-rajdhani text-base font-bold text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors uppercase tracking-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] uppercase mb-4 opacity-40">
                  MODEL: {protocol.model}
                </div>
                <Link
                  href="/contact"
                  className={`relative w-full h-14 flex items-center justify-center gap-3 font-bebas text-xl uppercase tracking-widest transition-all overflow-hidden ${
                    protocol.highlight 
                      ? 'bg-[var(--gold)] text-[var(--black)] hover:bg-white' 
                      : 'border border-[var(--border)] text-[var(--text)] hover:border-[var(--gold)]'
                  }`}
                >
                  <span className="relative z-10">{protocol.cta}</span>
                  <MoveRight className="relative z-10 w-5 h-5" />
                  {protocol.highlight && (
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                  )}
                </Link>
              </div>

              {/* Decorative Scanline */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-[0.05]"></div>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto border-t border-[var(--border)] pt-24">
          <div className="flex items-center gap-4 mb-16">
            <HelpCircle className="w-6 h-6 text-[var(--gold)]" />
            <h2 className="font-bebas text-4xl text-[var(--text)] tracking-wide uppercase">
              Operational Queries (FAQ)
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--border)] opacity-30"></div>
          </div>

          <div className="grid gap-8">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-8 group">
                <h4 className="font-rajdhani text-xl font-bold text-[var(--text)] mb-4 uppercase tracking-tight group-hover:text-[var(--gold)] transition-colors">
                  {faq.q}
                </h4>
                <p className="font-cormorant text-lg text-[var(--text-muted)] leading-relaxed italic">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-32 text-center p-12 border border-[var(--border)] bg-[rgba(3,5,8,0.7)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(var(--gold) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>
          
          <h2 className="font-bebas text-4xl sm:text-5xl text-[var(--text)] mb-6 tracking-wide uppercase relative z-10">
            Need a custom <span className="text-[var(--gold)]">Monetization</span> model?
          </h2>
          <p className="font-cormorant text-xl text-[var(--text-muted)] mb-12 max-w-2xl mx-auto relative z-10">
            We understand that enterprise operations often require unique financial structures. 
            Contact our engineering unit to discuss fixed-fee, performance-based, or site-license models.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-16 px-12 bg-white text-[var(--black)] font-bebas text-2xl items-center gap-4 hover:bg-[var(--gold)] transition-all relative z-10"
          >
            Initiate_Consultation
            <MoveRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
