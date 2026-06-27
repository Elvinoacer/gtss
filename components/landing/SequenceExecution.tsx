"use client";

import { CheckCircle2, ChevronRight, Cpu, Layers, Users, Clock } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Architecture Mapping",
    desc: "We analyze your operational friction points and map a custom software infrastructure tailored to your physical footprint.",
    icon: Layers,
    time: "Days 1–3",
  },
  {
    id: "02",
    title: "Core Deployment",
    desc: "Parallel synchronization of offline-first software and enterprise hardware. Zero-downtime integration with existing systems.",
    icon: Cpu,
    time: "Days 4–14",
  },
  {
    id: "03",
    title: "Local Training",
    desc: "Intensive on-site staff induction. We don't leave until every member of your team is confident operating the system.",
    icon: Users,
    time: "Days 15–18",
  },
  {
    id: "04",
    title: "Full Handover",
    desc: "Transition to perpetual support. Your system is now live and fully yours, backed by our ongoing maintenance and response team.",
    icon: CheckCircle2,
    time: "Day 21",
  },
];

export function SequenceExecution() {
  return (
    <section className="relative z-10 px-6 lg:px-20 py-16 lg:py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left column — sticky header */}
          <div className="lg:sticky lg:top-32 max-w-sm">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              How We Deliver
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--text)] leading-tight tracking-tight mb-6 lg:mb-8">
              From first call to live system in{" "}
              <span className="text-[var(--accent)]">three weeks.</span>
            </h2>
            <p className="text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Our deployment methodology is a structured sequence designed for reliability
              and zero operational leakage. Every step has a clear timeline and deliverable.
            </p>
          </div>

          {/* Right column — step cards */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className="group relative flex gap-6 lg:gap-10 p-6 lg:p-10 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] transition-all hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)]"
              >
                {/* Step number watermark */}
                <div className="absolute top-4 right-6 text-4xl lg:text-7xl font-bold text-[var(--accent)] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] group-hover:border-[var(--accent)] transition-colors">
                    <step.icon className="w-5 h-5 lg:w-8 lg:h-8 text-[var(--accent)]" />
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="hidden lg:block mx-auto w-[1px] h-8 lg:h-16 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-20 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="relative pt-1 lg:pt-2">
                  <h3 className="text-lg lg:text-2xl font-semibold tracking-tight text-[var(--text)] mb-3 flex items-center gap-3">
                    {step.title}
                    <ChevronRight className="w-4 h-4 text-[var(--accent)] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm lg:text-base text-[var(--text-muted)] leading-relaxed max-w-lg mb-3">
                    {step.desc}
                  </p>
                  {/* Time chip */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] bg-[var(--bg-surface-2)] px-3 py-1 rounded-full border border-[var(--card-border)]">
                    <Clock className="w-3 h-3" />
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
