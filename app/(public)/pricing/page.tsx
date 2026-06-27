"use client";

import Link from "next/link";
import {
  Check,
  Zap,
  CreditCard,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  WifiOff,
  Cloud,
  Layout,
} from "lucide-react";

const tiers = [
  {
    name: "One-Time Payment",
    subtitle: "Pay once, own forever",
    description: "For standalone systems that need to work without ongoing costs or internet dependency.",
    icon: WifiOff,
    color: "var(--accent)",
    highlighted: false,
    price: "From KES 150,000",
    priceUsd: "≈ USD 1,000",
    priceNote: "One-time payment",
    features: [
      "Offline-First Architecture",
      "Local Network Deployment",
      "Lifetime Core License",
      "1 Year Technical Support",
      "Manual Data Backups",
    ],
    cta: "Get Started",
    href: "/contact",
  },
  {
    name: "Subscription",
    subtitle: "Monthly or yearly",
    description: "For cloud-based solutions requiring ongoing updates, multi-branch sync, and priority support.",
    icon: Cloud,
    color: "var(--accent)",
    highlighted: true,
    price: "From KES 5,000/mo",
    priceUsd: "≈ USD 33/mo",
    priceNote: "KES 50,000/yr (≈ USD 330/yr)",
    features: [
      "Everything in One-Time",
      "Multi-Branch Networking",
      "Real-time Cloud Sync",
      "Priority 24/7 Support",
      "Automated Cloud Backups",
      "Custom Dashboard Access",
    ],
    cta: "Get Started",
    href: "/contact",
  },
  {
    name: "Platform Access",
    subtitle: "Usage-based",
    description: "For marketplace and community platforms. Scale your costs with your growth.",
    icon: Layout,
    color: "var(--gold)",
    highlighted: false,
    price: "From KES 500/transaction",
    priceUsd: "≈ USD 3.30/transaction",
    priceNote: "No setup fee",
    features: [
      "Pay-as-you-grow model",
      "Community Features",
      "Transaction-based Pricing",
      "Vendor Analytics",
      "Local Payment Integration",
    ],
    cta: "Get Started",
    href: "/contact",
  },
];

const paymentMethods = [
  {
    name: "M-Pesa",
    description: "Kenya's leading mobile money platform",
  },
  {
    name: "Airtel Money",
    description: "Widely used across East Africa",
  },
  {
    name: "Bank Transfer",
    description: "Direct bank-to-bank payments",
  },
  {
    name: "Card Payments",
    description: "Visa and Mastercard accepted",
  },
];

const faqs = [
  {
    question: "Can I switch between pricing models later?",
    answer:
      "Yes. If your business needs change, you can upgrade from a one-time license to a subscription, or move from subscription to platform access. We'll work with you to ensure a smooth transition without data loss or downtime.",
  },
  {
    question: "Are there any hidden fees or long-term contracts?",
    answer:
      "No. GTSS pricing is transparent. One-time payments give you lifetime ownership of the core product. Subscriptions are billed monthly or yearly with no lock-in — cancel anytime. Platform access is purely transaction-based with no upfront commitment.",
  },
  {
    question: "What happens after the first year of support on a one-time license?",
    answer:
      "After the included first year, you can optionally purchase an extended support plan. Your software continues to work without it — you just won't receive updates or priority assistance. Many businesses find the core system runs perfectly without ongoing support.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              Pricing
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text)] tracking-tight mb-6">
              Transparent pricing for{" "}
              <span className="text-[var(--accent)]">every business size.</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              No hidden fees, no vendor lock-in. Choose the model that fits your
              operations and budget — from a single one-time purchase to flexible
              pay-as-you-grow access.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl border p-6 lg:p-8 transition-all ${
                tier.highlighted
                  ? "border-[var(--accent)] border-2 bg-[var(--card-bg)] shadow-[var(--accent-glow)] scale-[1.02]"
                  : "border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)]"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[var(--accent)] px-4 py-1.5 rounded-full shadow-[var(--accent-glow)]">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)]"
                  style={{ color: tier.color }}
                >
                  <tier.icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[var(--text)]">
                    {tier.name}
                  </h2>
                  <span className="text-xs text-[var(--text-muted)]">{tier.subtitle}</span>
                </div>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[var(--border)]">
                <div className="text-2xl font-bold text-[var(--text)]">
                  {tier.price}
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  {tier.priceUsd}
                </div>
                <div className="text-xs text-[var(--accent)] mt-1 font-medium">
                  {tier.priceNote}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: tier.color }}
                    />
                    <span className="text-sm text-[var(--text)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`inline-flex items-center justify-center gap-2 w-full text-sm font-semibold px-6 py-3.5 rounded-lg no-underline transition-all ${
                  tier.highlighted
                    ? "text-white bg-[var(--accent)] hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)]"
                    : "text-[var(--text)] bg-transparent border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-[var(--section-alt)] border-t border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 inline-flex items-center gap-3">
              <CreditCard className="w-3.5 h-3.5" />
              Payment Methods
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text)] tracking-tight">
              Pay the way that works for you.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 text-center transition-all hover:border-[var(--card-hover-border)]"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] mx-auto mb-4" style={{ color: "var(--green)" }}>
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-[var(--text)] mb-1">
                  {method.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-20 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text)] tracking-tight">
              Common pricing questions.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] transition-all hover:border-[var(--card-hover-border)]"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 list-none">
                  <span className="text-sm lg:text-base font-semibold text-[var(--text)] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[var(--text-muted)] shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 -mt-2">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-[var(--section-alt)] border-t border-[var(--border)] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-[var(--text)] mb-4 tracking-tight">
            Need a custom pricing model?
          </h2>
          <p className="text-base text-[var(--text-muted)] mb-8 leading-relaxed">
            If your business has unique requirements, we can build a tailored plan
            that fits your budget and operational needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)]"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
