import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SiteCTA } from "@/components/site/SiteCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One-time licenses, subscriptions, and usage-based pricing for GTSS products. KES and USD. No hidden fees.",
};

const tiers = [
  {
    name: "One-time license",
    price: "From KES 150,000",
    note: "≈ USD 1,000 · pay once",
    best: "Hotels and custom systems you want to own",
    features: [
      "Runs on your local network",
      "Lifetime core license",
      "One year of support",
      "Staff training included",
    ],
    highlight: false,
  },
  {
    name: "Subscription",
    price: "From KES 5,000 / month",
    note: "≈ USD 33 / month · or KES 50,000 / year",
    best: "Restaurants, shops, and churches that want updates hosted for them",
    features: [
      "Everything in a one-time license",
      "Cloud hosting and backups",
      "Multi-branch sync",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Platform access",
    price: "From KES 500 / transaction",
    note: "≈ USD 3.30 · no setup fee",
    best: "Marketplaces that want cost to follow volume",
    features: [
      "Pay only when money moves",
      "Vendor tools and ratings",
      "Local payment rails",
      "Usage analytics",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "Can I change model later?",
    a: "Yes. A one-time license can move to a subscription if you need multi-branch sync. We migrate data with you.",
  },
  {
    q: "Are there lock-in contracts?",
    a: "No. Subscriptions cancel at the end of the billed month or year. One-time licenses keep working after support ends.",
  },
  {
    q: "What happens after the first year of a one-time license?",
    a: "The software stays yours. Extended support is optional. Many sites run the core system without it.",
  },
];

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        kicker="Pricing"
        title="Three ways to pay. None of them hide the number."
        description="Choose ownership, a hosted subscription, or usage. We quote in Kenyan shillings and show the dollar equivalent."
      />

      <section className="site-wrap grid gap-4 pb-16 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`flex flex-col border bg-[var(--card-bg)] p-6 lg:p-8 ${
              tier.highlight ? "border-[var(--accent)]" : "border-[var(--card-border)]"
            }`}
          >
            {tier.highlight ? (
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Most teams pick this</p>
            ) : (
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-dim)]">Model</p>
            )}
            <h2 className="mt-3 text-2xl font-semibold text-[var(--text)]">{tier.name}</h2>
            <p className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--text)]">{tier.price}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{tier.note}</p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">{tier.best}</p>
            <ul className="mt-6 flex-1 space-y-2.5 p-0">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-[var(--text)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`site-btn mt-8 ${tier.highlight ? "site-btn-primary" : "site-btn-ghost"}`}
            >
              Get a quote
            </Link>
          </article>
        ))}
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--section-alt)]">
        <div className="site-wrap py-14">
          <h2 className="site-title">You can pay how your customers already pay.</h2>
          <ul className="mt-8 grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-4">
            {["M-Pesa", "Airtel Money", "Bank transfer", "Visa / Mastercard"].map((method) => (
              <li key={method} className="border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-5 text-sm font-semibold text-[var(--text)]">
                {method}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-wrap py-16">
        <h2 className="site-title">Pricing questions</h2>
        <div className="mt-8 max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border border-[var(--card-border)] bg-[var(--card-bg)]">
              <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-[var(--text)]">
                {faq.q}
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--text-muted)]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteCTA
        title="Need a number for a specific site?"
        copy="Tell us the product and how many locations. We send a written quote."
      />
    </div>
  );
}
