import Link from "next/link";
import { Code2, Plug, BadgeCheck, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions | GTSS",
  description:
    "Bespoke software for organizations that need more than an off-the-shelf product. Custom development, system integration, and white-label solutions.",
};

const capabilities = [
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Purpose-built software designed around your unique workflows, data models, and operational requirements. From internal tools to customer-facing platforms, we engineer systems that fit your business — not the other way around.",
    features: [
      "Tailored architecture & design",
      "Domain-specific data modeling",
      "Iterative development with client checkpoints",
      "Full documentation & knowledge transfer",
    ],
  },
  {
    icon: Plug,
    title: "System Integration",
    description:
      "Connect your existing tools, databases, and third-party services into a unified operating layer. GTSS builds the bridges so your systems talk to each other — reliably and in real time.",
    features: [
      "API design & orchestration",
      "Legacy system modernization",
      "Data migration & ETL pipelines",
      "Real-time sync & event streaming",
    ],
  },
  {
    icon: BadgeCheck,
    title: "White-Label Solutions",
    description:
      "Deploy GTSS products under your own brand. Fully customizable interfaces, branded communications, and independent hosting — your customers never see our name.",
    features: [
      "Custom branding & theming",
      "Independent hosting options",
      "Branded communications & reports",
      "Dedicated support & SLAs",
    ],
  },
];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.2em] uppercase font-semibold mb-4 flex items-center gap-3 text-[var(--accent)]">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              Enterprise
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 text-[var(--text)]">
              Enterprise{" "}
              <span className="text-[var(--accent)]">Solutions</span>
            </h1>
            <p className="text-base lg:text-lg leading-relaxed text-[var(--text-muted)]">
              Bespoke software for organizations that need more than an
              off-the-shelf product.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto space-y-8">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8 transition-all hover:shadow-[var(--card-hover-shadow)] hover:border-[var(--card-hover-border)]"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg border border-[var(--card-border)] flex items-center justify-center shrink-0 bg-[var(--bg-surface)] text-[var(--accent)]">
                      <cap.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl lg:text-2xl font-semibold text-[var(--text)]">
                      {cap.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {cap.description}
                  </p>
                </div>
                <div className="lg:w-80 shrink-0">
                  <ul className="space-y-3">
                    {cap.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-[var(--accent)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-16 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-[var(--text)]">
            Ready to build something remarkable?
          </h2>
          <p className="text-base mb-8 leading-relaxed text-[var(--text-muted)]">
            Tell us about your requirements. We&apos;ll design a solution that
            fits your organization — and your timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)] text-white bg-[var(--accent)]"
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
