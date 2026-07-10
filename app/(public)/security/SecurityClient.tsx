"use client";

import React from "react";
import { Shield, Lock, Server, Cpu, Globe, Zap, CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";

const SECURITY_PROTOCOLS = [
  {
    id: "DATA_01",
    icon: Shield,
    title: "Data Sovereignty",
    description: "End-to-end encryption for all data in transit and at rest. We utilize AES-256 standards with sovereign key management.",
    status: "ENCRYPTED",
  },
  {
    id: "ACCESS_02",
    icon: Lock,
    title: "Access Control HUD",
    description: "Granular permission controls and role-based access management (RBAC). Multi-factor authentication is mandatory for all administrative nodes.",
    status: "SECURED",
  },
  {
    id: "INFRA_03",
    icon: Server,
    title: "Resilient Infrastructure",
    description: "Hosted on redundant cloud clusters with automatic failover. 99.9% uptime is not a goal; it is the baseline requirement.",
    status: "ACTIVE",
  },
];

const TECHNICAL_SPECIFICATIONS = [
  { label: "ENCRYPTION_STANDARD", value: "AES-256-GCM" },
  { label: "AUTH_PROTOCOL", value: "OIDC_SAML_2.0" },
  { label: "NETWORK_ISOLATION", value: "VPC_PEERING" },
  { label: "DATA_LOCALITY", value: "AFRICA_REGIONAL" },
];

export function SecurityClient() {
  return (
    <div className="dark-canvas min-h-screen bg-[var(--black)] pt-32 pb-24 overflow-hidden">
      {/* Background Decorative HUD */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <header className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="px-3 py-1 border border-[var(--gold-dim)] bg-[rgba(255,255,255,0.05)] text-[var(--gold)] font-mono-dm text-[10px] tracking-[0.3em] uppercase">
              SECURITY_PROTOCOL_v4.0
            </div>
            <div className="h-[1px] flex-1 bg-[var(--border)]"></div>
            <div className="flex items-center gap-2 font-mono-dm text-[10px] text-[var(--gold-dim)]">
              <span className="w-2 h-2 bg-emerald-500 animate-pulse"></span>
              SHIELD_STATUS: ACTIVE
            </div>
          </div>

          <h1 className="font-bebas text-6xl sm:text-8xl text-[var(--text)] mb-8 tracking-tighter leading-none uppercase">
            Security & <span className="text-[var(--gold)]">Sovereignty</span>
          </h1>
          
          <p className="font-cormorant text-2xl sm:text-3xl text-[var(--text-muted)] italic max-w-3xl leading-relaxed">
            GTSS is built on the principle of technical sovereignty. We provide practical software solutions 
            where data integrity and operational security are non-negotiable.
          </p>
        </header>

        {/* Security Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-32">
          {SECURITY_PROTOCOLS.map((protocol) => (
            <div key={protocol.id} className="group relative border border-[var(--border)] bg-[rgba(3,5,8,0.7)] p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--gold)] opacity-30 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-8 flex items-center justify-between">
                <div className="w-12 h-12 border border-[var(--border)] bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--gold)]">
                  <protocol.icon className="w-6 h-6" />
                </div>
                <span className="font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] opacity-40 uppercase">
                  NODE_{protocol.id}
                </span>
              </div>

              <h3 className="font-bebas text-3xl text-[var(--text)] mb-4 tracking-wide group-hover:text-[var(--gold)] transition-colors">
                {protocol.title}
              </h3>
              
              <p className="font-cormorant text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                {protocol.description}
              </p>

              <div className="flex items-center gap-2 font-mono-dm text-[10px] text-[var(--gold-dim)]">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                STATUS: {protocol.status}
              </div>
            </div>
          ))}
        </section>

        {/* Technical Specification Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center border-t border-[var(--border)] pt-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Terminal className="w-5 h-5 text-[var(--gold)]" />
              <h2 className="font-bebas text-4xl text-[var(--text)] tracking-wide uppercase">
                Technical Architecture Readout
              </h2>
            </div>
            
            <p className="font-cormorant text-xl text-[var(--text-muted)] mb-12 leading-relaxed">
              Our infrastructure is designed for extreme isolation and resilience. By leveraging regional Africa-based 
              data locality and redundant VPC architectures, we ensure that your software remains an asset, not a liability.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {TECHNICAL_SPECIFICATIONS.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1">
                  <span className="font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-40">{spec.label}</span>
                  <span className="font-rajdhani text-lg font-bold text-[var(--text)]">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative border border-[var(--border)] bg-[rgba(3,5,8,0.7)] p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center font-bebas text-xl text-[var(--gold)]">01</div>
                <div>
                  <h4 className="font-rajdhani text-lg font-bold text-[var(--text)] uppercase tracking-tight">Offline Capability</h4>
                  <p className="font-mono-dm text-[9px] text-[var(--text-muted)] uppercase tracking-wider">RESILIENT_MODE_ACTIVE</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center font-bebas text-xl text-[var(--gold)]">02</div>
                <div>
                  <h4 className="font-rajdhani text-lg font-bold text-[var(--text)] uppercase tracking-tight">VPC Isolation</h4>
                  <p className="font-mono-dm text-[9px] text-[var(--text-muted)] uppercase tracking-wider">ZERO_TRUST_VERIFIED</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center font-bebas text-xl text-[var(--gold)]">03</div>
                <div>
                  <h4 className="font-rajdhani text-lg font-bold text-[var(--text)] uppercase tracking-tight">Sovereign Keys</h4>
                  <p className="font-mono-dm text-[9px] text-[var(--text-muted)] uppercase tracking-wider">ENCRYPTION_COMPLETE</p>
                </div>
              </div>
            </div>

            {/* Decorative Corner HUD */}
            <div className="absolute top-0 right-0 p-4">
              <div className="w-16 h-16 border-t border-r border-[var(--gold-dim)] opacity-20"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 text-center">
          <p className="font-mono-dm text-[10px] tracking-[0.4em] text-[var(--gold-dim)] uppercase mb-8">
            Ready to secure your operations?
          </p>
          <Link
            href="/contact"
            className="inline-flex h-16 px-12 bg-[var(--gold)] text-[var(--black)] font-bebas text-2xl items-center gap-4 hover:bg-white transition-all cursor-none overflow-hidden group"
          >
            <span className="relative z-10 tracking-widest uppercase">Contact_Security_Team</span>
            <Shield className="w-5 h-5" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
          </Link>
        </section>
      </div>
    </div>
  );
}
