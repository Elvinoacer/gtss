"use client";

import { CheckCircle2, ChevronRight, Cpu, Layers, Terminal, Users } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Architecture Mapping",
    desc: "We analyze your operational friction points and map a custom software infrastructure tailored to your physical footprint.",
    icon: Layers,
  },
  {
    id: "02",
    title: "Core Deployment",
    desc: "Parallel synchronization of offline-first software and enterprise hardware. Zero-downtime integration with existing systems.",
    icon: Cpu,
  },
  {
    id: "03",
    title: "Local Training",
    desc: "Intensive on-site staff induction. We don't leave until every member of your team is a certified system operator.",
    icon: Users,
  },
  {
    id: "04",
    title: "Full Handover",
    desc: "Transition to perpetual support. Your system is now part of the GTSS Sovereign Network, monitored 24/7.",
    icon: CheckCircle2,
  },
];

export function SequenceExecution() {
  return (
    <section className="sequence relative z-10 px-6 lg:px-20 py-24 bg-[var(--black)]">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:sticky lg:top-32 max-w-sm">
          <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-4 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
            SEQUENCE_EXECUTION
          </div>
          <h2 className="section-title font-bebas text-5xl lg:text-7xl text-[var(--text)] leading-none tracking-[0.02em] mb-8">
            FROM SCOPE TO <span className="text-[var(--gold)]">SOVEREIGNTY.</span>
          </h2>
          <p className="section-desc font-cormorant text-lg font-light text-[var(--text-muted)] mb-10">
            Our deployment methodology is a high-precision sequence designed for institutional stability and zero operational leakage.
          </p>
          <div className="terminal-box bg-[rgba(3,5,8,0.8)] border border-[var(--border)] p-5 rounded-sm font-mono-dm text-[11px] text-[var(--cyan)] leading-relaxed">
            <div className="flex items-center gap-2 mb-3 border-b border-[var(--border)] pb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>DEPLOYMENT_CLI</span>
            </div>
            <div className="space-y-1">
              <div>&gt; gtss init --project-id="ALPHA_1"</div>
              <div>&gt; mapping infrastructure... <span className="text-[var(--gold)]">DONE</span></div>
              <div>&gt; deploying core modules... <span className="text-[var(--gold)]">DONE</span></div>
              <div className="animate-pulse">&gt; awaiting staff verification_</div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-12">
          {steps.map((step, idx) => (
            <div key={step.id} className="step-card group relative flex gap-8 lg:gap-12 p-8 lg:p-12 border border-[var(--border)] bg-gradient-to-br from-[rgba(201,160,69,0.03)] to-transparent transition-all hover:border-[var(--gold-dim)]">
              <div className="step-num font-bebas text-6xl lg:text-8xl text-[var(--gold)] opacity-10 group-hover:opacity-20 transition-opacity absolute top-4 right-8">
                {step.id}
              </div>
              <div className="step-icon-box relative shrink-0">
                <div className="w-14 h-14 lg:w-20 lg:h-20 border border-[var(--border)] flex items-center justify-center bg-[var(--black)] group-hover:border-[var(--gold)] transition-colors">
                  <step.icon className="w-6 h-6 lg:w-10 lg:h-10 text-[var(--gold)]" />
                </div>
                {idx !== steps.length - 1 && (
                  <div className="absolute top-full left-1/2 w-[1px] h-12 lg:h-24 bg-gradient-to-b from-[var(--gold)] to-transparent opacity-30"></div>
                )}
              </div>
              <div className="step-content relative pt-2 lg:pt-4">
                <h3 className="step-title font-rajdhani text-2xl lg:text-3xl font-semibold tracking-tight text-[var(--text)] mb-4 uppercase flex items-center gap-4">
                  {step.title}
                  <ChevronRight className="w-5 h-5 text-[var(--gold-dim)] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="step-desc font-cormorant text-[17px] lg:text-[19px] font-light leading-relaxed text-[var(--text-muted)] max-w-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
