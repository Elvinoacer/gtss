import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { SiteCTA } from "@/components/site/SiteCTA";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "Custom development, integrations, and white-label deployments for organizations that need more than a ready product.",
};

const capabilities = [
  {
    title: "Custom development",
    copy: "Software shaped around your workflows, not a generic template. Checkpoints as we build, documentation when we hand over.",
    points: ["Architecture and design", "Domain-specific data models", "Iterative delivery", "Knowledge transfer"],
  },
  {
    title: "System integration",
    copy: "Connect the tools you already use so staff are not copying data between screens.",
    points: ["APIs and orchestration", "Legacy modernization", "Data migration", "Real-time sync"],
  },
  {
    title: "White-label",
    copy: "Ship a GTSS product under your brand, on your hosting, with your support line.",
    points: ["Your branding", "Independent hosting", "Branded reports", "Dedicated SLA"],
  },
];

export default function EnterprisePage() {
  return (
    <div>
      <PageHeader
        kicker="Enterprise"
        title="When a ready product is not enough, we build the missing layer."
        description="For organizations that need custom software, integrations, or a white-label stack — with the same offline-first discipline as our products."
      />
      <section className="site-wrap space-y-4 pb-16">
        {capabilities.map((item, index) => (
          <article key={item.title} className="grid gap-6 border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">0{index + 1}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.copy}</p>
            </div>
            <ul className="space-y-2 self-center p-0 text-sm text-[var(--text)]">
              {item.points.map((point) => (
                <li key={point} className="border-l-2 border-[var(--accent)] pl-3">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <SiteCTA
        title="Describe the constraint. We will say if we are the right team."
        copy="A short call is enough to know whether this is a product fit, a custom build, or a no."
      />
    </div>
  );
}
