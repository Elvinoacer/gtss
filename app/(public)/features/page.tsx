import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { SiteCTA } from "@/components/site/SiteCTA";

export const metadata: Metadata = {
  title: "Why GTSS",
  description: "Offline-first software, local payments, and a three-week rollout for East African operators.",
};

const items = [
  {
    title: "Offline first",
    copy: "Orders, members, and stock keep moving on the local network. Sync happens when the line comes back.",
  },
  {
    title: "Local payments",
    copy: "M-Pesa, Airtel Money, cash, card, and bank — built in, not bolted on later.",
  },
  {
    title: "Trained on the floor",
    copy: "We do not hand over a login and leave. Staff practice a real day before we go.",
  },
  {
    title: "Three-week rollout",
    copy: "Map, install, train, hand over. You always know what this week is for.",
  },
];

export default function FeaturesPage() {
  return (
    <div>
      <PageHeader
        kicker="Why GTSS"
        title="The same four decisions in every product."
        description="Not a feature list. The constraints we refuse to ignore."
      />
      <section className="site-wrap grid gap-10 pb-16 md:grid-cols-2">
        {items.map((item, index) => (
          <article key={item.title} className="border-t border-[var(--border)] pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">0{index + 1}</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.copy}</p>
          </article>
        ))}
      </section>
      <SiteCTA title="See it in a product, not a paragraph." copy="Start with the system that matches the work." primary={{ href: "/products", label: "View products" }} />
    </div>
  );
}
