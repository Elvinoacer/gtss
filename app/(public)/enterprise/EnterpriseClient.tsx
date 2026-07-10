"use client";

import React from "react";
import { Users, Layers, ShieldCheck, Globe, Zap, BarChart, Settings, MoveRight } from "lucide-react";
import Link from "next/link";

const ENTERPRISE_CAPABILITIES = [
  {
    icon: Layers,
    title: "Infinite Scaling",
    description: "Architectures designed to grow from single-store operations to multi-national deployments without friction.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Governance",
    description: "Sovereign data hosting options, custom SLA agreements, and dedicated security audits for peace of mind.",
  },
  {
    icon: Users,
    title: "Strategic Support",
    description: "Priority access to our core engineering team and 24/7 technical oversight for mission-critical systems.",
  },
];

export function EnterpriseClient() {
  return (
    <div className="dark-canvas min-h-screen bg-[var(--black)] pt-32 pb-24 overflow-hidden">
      {/* Background Decorative HUD */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <header className="mb-24 relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="px-3 py-1 border border-[var(--gold-dim)] bg-[rgba(255,255,255,0.05)] text-[var(--gold)] font-mono-dm text-[10px] tracking-[0.3em] uppercase">
              SECTOR: ENTERPRISE_OPERATIONS
            </div>
            <div className="h-[1px] flex-1 bg-[var(--border)]"></div>
          </div>

          <h1 className="font-bebas text-6xl sm:text-8xl text-[var(--text)] mb-8 tracking-tighter leading-none uppercase">
            Sovereign <span className="text-[var(--gold)]">Enterprise</span>
          </h1>
          
          <p className="font-cormorant text-2xl sm:text-3xl text-[var(--text-muted)] italic max-w-3xl leading-relaxed">
            Tailored solutions for large-scale organizations requiring dedicated support, custom integrations, 
            and a level of technical sovereignty that generic SaaS cannot provide.
          </p>

          {/* Decorative vertical line */}
          <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-[var(--border)] opacity-20 hidden xl:block"></div>
        </header>

        {/* Capability Grid */}
        <section className="grid md:grid-cols-3 gap-12 mb-32">
          {ENTERPRISE_CAPABILITIES.map((cap, index) => (
            <div key={index} className="group flex flex-col">
              <div className="w-16 h-16 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center text-[var(--gold)] mb-8 group-hover:border-[var(--gold-dim)] transition-colors">
                <cap.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bebas text-3xl text-[var(--text)] mb-4 tracking-wide">
                {cap.title}
              </h3>
              <p className="font-cormorant text-xl text-[var(--text-muted)] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </section>

        {/* Operational Readiness Section */}
        <section className="relative border border-[var(--border)] bg-[rgba(3,5,8,0.7)] p-8 sm:p-16 overflow-hidden mb-32">
          {/* Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-10"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-[var(--border)] mb-8 font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] uppercase">
                <Settings className="w-3 h-3 animate-spin-slow" />
                SYSTEM_READINESS_CHECK
              </div>
              
              <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--text)] mb-8 tracking-wide leading-none uppercase">
                Built for <span className="text-[var(--gold)]">Command</span>
              </h2>
              
              <p className="font-cormorant text-xl sm:text-2xl text-[var(--text-muted)] italic leading-relaxed mb-12">
                We don't just sell software; we deploy operational infrastructure. Our enterprise team works 
                directly with your leadership to map technical deliverables to organizational goals.
              </p>

              <div className="space-y-6">
                {[
                  "Custom Workflow Orchestration",
                  "Private Cloud / On-Premise Deployment",
                  "Dedicated Success Engineering",
                  "Sovereign Data Ownership Models"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-[var(--text)]">
                    <Zap className="w-4 h-4 text-[var(--gold)]" />
                    <span className="font-rajdhani text-lg font-bold uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "SLA_GUARANTEE", value: "99.99%" },
                { label: "DEPLOYMENT_TIME", value: "WEEK_S04" },
                { label: "REDUNDANCY", value: "MULTI_ZONE" },
                { label: "DATA_EXPORT", value: "ANYTIME" },
              ].map((stat) => (
                <div key={stat.label} className="border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-6 flex flex-col gap-1">
                  <span className="font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-40">{stat.label}</span>
                  <span className="font-rajdhani text-xl font-bold text-[var(--text)]">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Corners */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--gold-dim)] opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--gold-dim)] opacity-40"></div>
        </section>

        {/* CTA Cluster */}
        <div className="flex flex-col items-center text-center">
          <p className="font-mono-dm text-[10px] tracking-[0.4em] text-[var(--gold-dim)] uppercase mb-8">
            Initiate Enterprise Consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="relative h-16 px-12 bg-[var(--gold)] text-[var(--black)] font-bebas text-2xl flex items-center gap-4 hover:bg-white transition-all cursor-none overflow-hidden group"
            >
              <span className="relative z-10 tracking-widest uppercase">Contact_Sales_Unit</span>
              <MoveRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
            </Link>
            
            <Link
              href="/products"
              className="relative h-16 px-12 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] text-[var(--text)] font-bebas text-2xl flex items-center gap-4 hover:border-[var(--gold)] transition-all cursor-none group"
            >
              <span className="tracking-widest uppercase opacity-70">Catalog_Overview</span>
              <BarChart className="w-5 h-5 text-[var(--gold-dim)]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
