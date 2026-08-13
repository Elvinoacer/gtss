"use client";

import { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  FileSearch,
  Server,
  Users,
  Award,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const rolloutSteps = [
  {
    id: "01",
    phase: "Phase 01 · Days 1–3",
    title: "Operational Discovery & Floor Audit",
    icon: FileSearch,
    tagline: "Understanding how your team already moves",
    description:
      "We visit the floor or conduct a deep workflow audit. We identify exact choke points: where tickets get lost, where network dies, who touches the till, and which GTSS system architecture fits your exact volume.",
    deliverables: [
      "Physical floor & hardware map",
      "Staff role & permission matrix",
      "Network coverage & edge placement audit",
    ],
  },
  {
    id: "02",
    phase: "Phase 02 · Days 4–14",
    title: "Edge Hardware Setup & Tailored Ingestion",
    icon: Server,
    tagline: "Building your private local intranet server",
    description:
      "Our engineers configure the on-site local server, ingest your catalogs or menus, configure table maps and bar stations, and integrate native M-Pesa STK callbacks and thermal receipt printers.",
    deliverables: [
      "Local Edge Intranet Server configured",
      "Catalog, price matrix & recipe ingestion",
      "M-Pesa STK Push & till printer testing",
    ],
  },
  {
    id: "03",
    phase: "Phase 03 · Days 15–18",
    title: "Hands-On Staff Enablement & Floor Dry Runs",
    icon: Users,
    tagline: "Training where the work happens, not on slides",
    description:
      "We train your actual staff on their workstations. Waiters test handheld ordering, cooks practice with the KDS bump bar, cashiers balance mock shifts, and managers review daily closing reports.",
    deliverables: [
      "Frontline staff role certification",
      "Simulated rush hour floor dry run",
      "Offline failure drill & recovery verification",
    ],
  },
  {
    id: "04",
    phase: "Phase 04 · Day 21+",
    title: "Live Cutover & Dedicated Concierge Standby",
    icon: Award,
    tagline: "Your first busy weekend is fully protected",
    description:
      "The system goes live. A senior GTSS engineer remains on standby during your initial high-volume shifts to ensure flawless composure, fast order settlement, and instant answer to any staff question.",
    deliverables: [
      "Full live system handover & credentials",
      "24/7 dedicated engineering WhatsApp line",
      "Automated off-site cloud backups active",
    ],
  },
];

export function SequenceExecution() {
  const [activeStep, setActiveStep] = useState(rolloutSteps[0]);

  return (
    <section className="bg-[var(--bg)] py-20 lg:py-28 relative overflow-hidden" id="rollout">
      <div className="site-wrap">
        {/* Section Header */}
        <div className="max-w-3xl pb-12 border-b border-[var(--border)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="h-3.5 w-3.5" />
            <span>White-Glove Deployment Methodology</span>
          </div>
          <h2 className="site-title text-[var(--text)]">
            Twenty-one days. Four transparent milestones.
          </h2>
          <p className="site-lead mt-4 text-base lg:text-lg">
            No endless scoping meetings or surprise delays. You always know who is on site, what is being
            installed this week, and the exact definition of “done”.
          </p>
        </div>

        {/* 4-Step Interactive Horizontal / Vertical Timeline */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Phase Navigation List */}
          <div className="space-y-3">
            {rolloutSteps.map((step) => {
              const Icon = step.icon;
              const isSelected = activeStep.id === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step)}
                  className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? "luxury-card border-[var(--gold-luxury)] bg-[var(--bg-surface)] shadow-lg ring-1 ring-[var(--gold-luxury)]/30"
                      : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-muted)] hover:border-[var(--border-bright)] hover:bg-[var(--bg-surface-2)]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? "bg-[var(--gold-foil)] text-[#0b0f19] border-transparent font-bold"
                        : "bg-[var(--bg-surface-2)] text-[var(--text-muted)] border-[var(--border)]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-mono font-bold tracking-wider ${
                          isSelected ? "text-[var(--gold-luxury)]" : "text-[var(--text-dim)]"
                        }`}
                      >
                        {step.phase}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] uppercase font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          Active View
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-base sm:text-lg font-bold tracking-tight mt-1 ${
                        isSelected ? "text-[var(--text)]" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Phase Inspection Card */}
          <div className="luxury-card p-6 sm:p-8 bg-[var(--bg-surface)] border-[var(--border-bright)] shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
              <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                MILESTONE DETAILS · {activeStep.id} / 04
              </span>
              <span className="text-xs text-[var(--text-dim)] font-medium">
                {activeStep.phase}
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-bold tracking-tight text-[var(--text)]">
                {activeStep.title}
              </h3>
              <p className="text-xs font-semibold text-[var(--gold-luxury)] uppercase tracking-wider mt-1">
                {activeStep.tagline}
              </p>

              <p className="text-sm text-[var(--text-muted)] mt-4 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="mt-6 pt-5 border-t border-[var(--border)]">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--text)] mb-3">
                  Guaranteed Milestone Deliverables:
                </p>
                <ul className="space-y-2.5">
                  {activeStep.deliverables.map((deliv) => (
                    <li
                      key={deliv}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text)] font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Assurance Footnote */}
              <div className="mt-8 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-surface-2)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <ShieldCheck className="h-4 w-4 text-[var(--gold-luxury)]" />
                  <span>On-Site Engineer Attendance Included</span>
                </div>

                <Link
                  href="/contact"
                  className="font-bold text-[var(--accent)] hover:underline flex items-center gap-1"
                >
                  <span>Request Scoping</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
