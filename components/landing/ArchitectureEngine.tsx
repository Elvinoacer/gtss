"use client";

import { useState } from "react";
import {
  Server,
  Wifi,
  WifiOff,
  Database,
  Cloud,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Cpu,
  Shield,
  Smartphone,
  Printer,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function ArchitectureEngine() {
  const [networkSevered, setNetworkSevered] = useState(false);

  return (
    <section className="bg-[var(--bg)] py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div
        className="luxury-glow-radial -top-20 -left-20 w-[500px] h-[500px] bg-[var(--gold)] opacity-10"
        aria-hidden="true"
      />

      <div className="site-wrap relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[var(--border)]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4">
              <Cpu className="h-3.5 w-3.5" />
              <span>Proprietary Resilience Architecture</span>
            </div>
            <h2 className="site-title text-[var(--text)]">
              The Offline-First Intranet Engine.
            </h2>
            <p className="site-lead mt-4 text-base lg:text-lg">
              Generic SaaS breaks when the internet cuts out. GTSS runs on a dedicated local intranet server
              on your premises—ensuring waiters, cooks, cashiers, and managers continue at full speed with zero lag.
            </p>
          </div>

          {/* Interactive Failure Simulation Toggle */}
          <div className="p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--card-bg)] shadow-md">
            <p className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Interactive Network Test</span>
              <span className="text-[10px] text-[var(--gold-luxury)] font-normal">Click to toggle</span>
            </p>
            <button
              type="button"
              onClick={() => setNetworkSevered(!networkSevered)}
              className={`w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer ${
                networkSevered
                  ? "bg-amber-500 text-white border border-amber-600 shadow-amber-500/20"
                  : "bg-emerald-600 text-white border border-emerald-700 shadow-emerald-600/20"
              }`}
            >
              {networkSevered ? (
                <>
                  <WifiOff className="h-4 w-4 animate-bounce" />
                  <span>INTERNET SEVERED (SIMULATED)</span>
                </>
              ) : (
                <>
                  <Wifi className="h-4 w-4" />
                  <span>INTERNET CONNECTED (NORMAL)</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-[var(--text-muted)] mt-2 text-center">
              {networkSevered
                ? "Notice how the floor stays 100% operational below."
                : "Toggle above to test how GTSS handles fiber cuts."}
            </p>
          </div>
        </div>

        {/* Dynamic Architectural Visualization Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Node 1: Frontline Floor Clients */}
          <div className="luxury-card p-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                  LAYER 01
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>0.4ms Local Mesh</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text)] mt-4">
                Frontline Floor Terminals
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                Waiter handhelds, customer table QR menus, Kitchen Display screens (KDS), and thermal printers.
              </p>

              {/* Status List */}
              <div className="mt-6 space-y-2.5">
                <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-2)] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 font-medium text-[var(--text)]">
                    <Smartphone className="h-3.5 w-3.5 text-[var(--gold-luxury)]" />
                    <span>Table QR Orders & POS</span>
                  </span>
                  <span className="font-bold text-emerald-500">Instant</span>
                </div>

                <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-2)] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 font-medium text-[var(--text)]">
                    <Printer className="h-3.5 w-3.5 text-[var(--gold-luxury)]" />
                    <span>Kitchen & Bar Tickets</span>
                  </span>
                  <span className="font-bold text-emerald-500">Zero Lag</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
              Communicates over local on-premise Wi-Fi router without pinging external satellites.
            </div>
          </div>

          {/* Node 2: The Core Edge Intranet Hub */}
          <div className="luxury-card p-6 relative overflow-hidden border-[var(--gold-luxury)]/40 bg-[var(--bg-surface)] shadow-lg flex flex-col justify-between ring-1 ring-[var(--gold-luxury)]/30">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                  LAYER 02 · CORE
                </span>
                <span
                  className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    networkSevered
                      ? "bg-amber-500/15 text-amber-500 border border-amber-500/30"
                      : "bg-emerald-500/15 text-emerald-500 border border-emerald-500/30"
                  }`}
                >
                  <Server className="h-3 w-3" />
                  <span>{networkSevered ? "Local Intranet Master" : "Edge Master Active"}</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text)] mt-4 flex items-center gap-2">
                <span>GTSS On-Premise Edge Hub</span>
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                Dedicated micro-server installed on site. Holds the authoritative local database, inventory counts, and order dispatch queues.
              </p>

              {/* Real-time State Card */}
              <div className="mt-6 p-4 rounded-xl border border-[var(--gold-border)] bg-[rgba(197,155,39,0.04)] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)]">Local Database:</span>
                  <span className="font-bold text-[var(--text)]">Postgres / SQLite Edge</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)]">Transaction State:</span>
                  <span className="font-bold text-emerald-500">100% Cryptographic Hold</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)]">Network Dependency:</span>
                  <span className="font-bold text-[var(--gold-luxury)]">0% (Self-Sustaining)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--gold-luxury)] font-medium flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              <span>Orders never freeze, even during blackout or line cut.</span>
            </div>
          </div>

          {/* Node 3: GTSS Central Cloud Bridge */}
          <div className="luxury-card p-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                  LAYER 03
                </span>
                <span
                  className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    networkSevered
                      ? "text-amber-500 bg-amber-500/10"
                      : "text-emerald-500 bg-emerald-500/10"
                  }`}
                >
                  {networkSevered ? (
                    <>
                      <AlertTriangle className="h-3 w-3" />
                      <span>Queued (Will Sync On Reconnect)</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-3 w-3" />
                      <span>Live Multi-Branch Sync</span>
                    </>
                  )}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text)] mt-4">
                Central Cloud & Multi-Branch Hub
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                Executive dashboards, branch comparison reports, automated off-site backups, and remote management.
              </p>

              {/* Status List */}
              <div className="mt-6 space-y-2.5">
                <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-2)] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 font-medium text-[var(--text)]">
                    <Cloud className="h-3.5 w-3.5 text-[var(--cyan)]" />
                    <span>Executive Cloud Access</span>
                  </span>
                  <span
                    className={`font-bold ${
                      networkSevered ? "text-amber-500" : "text-emerald-500"
                    }`}
                  >
                    {networkSevered ? "Queued" : "Active"}
                  </span>
                </div>

                <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-2)] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 font-medium text-[var(--text)]">
                    <Database className="h-3.5 w-3.5 text-[var(--gold-luxury)]" />
                    <span>Multi-Branch Consolidation</span>
                  </span>
                  <span className="font-bold text-emerald-500">Auto-Reconcile</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
              {networkSevered
                ? "Transactions accumulate securely in the local edge hub and sync to cloud within seconds once fiber returns."
                : "Automatic live sync of sales, tithes, inventory, and staff audit logs."}
            </div>
          </div>
        </div>

        {/* Key Engineering Pillars Footnote */}
        <div className="mt-12 p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface-2)] grid sm:grid-cols-3 gap-6 text-xs">
          <div>
            <p className="font-bold text-[var(--text)] flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Zero-Loss Guarantee</span>
            </p>
            <p className="text-[var(--text-muted)] mt-1 leading-relaxed">
              Every order, M-Pesa reference, and receipt is stamped on disk locally first before broadcast.
            </p>
          </div>

          <div>
            <p className="font-bold text-[var(--text)] flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>No Per-Terminal Licensing</span>
            </p>
            <p className="text-[var(--text-muted)] mt-1 leading-relaxed">
              Connect unlimited waiter tablets, kitchen monitors, and bar stations to the local intranet without extra fees.
            </p>
          </div>

          <div>
            <p className="font-bold text-[var(--text)] flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Full Data Sovereignty</span>
            </p>
            <p className="text-[var(--text-muted)] mt-1 leading-relaxed">
              Your customer records, sales totals, and ledgers remain your property on your private hardware.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
