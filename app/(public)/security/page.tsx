import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { SiteCTA } from "@/components/site/SiteCTA";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How GTSS protects business data: offline-first defaults, local deployment, encryption, backups, and role-based access.",
};

const sections = [
  {
    title: "Data stays on your network first",
    copy: "Most work never leaves the premises. Offline-first means the default path is your LAN, not a public cloud hop.",
  },
  {
    title: "Encryption in transit and at rest",
    copy: "AES-256 for stored data, TLS for anything that syncs when a connection is available.",
  },
  {
    title: "Roles, not shared passwords",
    copy: "Every product has role-based access. Staff see the screens they need. Admin work is separate.",
  },
  {
    title: "Backups you can restore",
    copy: "Local backups by default, cloud copies if you want them. Point-in-time restore is part of the design.",
  },
];

export default function SecurityPage() {
  return (
    <div>
      <PageHeader
        kicker="Security"
        title="Your data is yours. The architecture is built that way."
        description="We will not sell or share business data. Offline-first is a security choice as much as an uptime choice."
      />
      <section className="site-wrap grid gap-6 pb-16 md:grid-cols-2">
        {sections.map((item, index) => (
          <article key={item.title} className="border-t border-[var(--border)] pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">0{index + 1}</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.copy}</p>
          </article>
        ))}
      </section>
      <SiteCTA
        title="Want the technical detail?"
        copy="We will walk through hosting, keys, and access with your IT person."
        secondary={{ href: "/contact", label: "Ask a security question" }}
      />
    </div>
  );
}
