"use client";

import Link from "next/link";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

const faqs = [
  {
    question: "What is GTSS?",
    answer:
      "Great Thumbs Software Solutions (GTSS) is a software company based in Kenya that designs, builds, and manages practical software solutions for local businesses and communities across East Africa.",
  },
  {
    question: "What products does GTSS offer?",
    answer:
      "We offer five main products: Restaurant Manager (hospitality POS), E-commerce Platform (online storefront), Church Management System (congregation tools), Hotel Ordering System (guest services), and JustInTime (service marketplace). We also build custom enterprise solutions.",
  },
  {
    question: "Do your products work offline?",
    answer:
      "Yes. All GTSS products are built with offline-first architecture. They run on your local network without requiring internet connectivity for day-to-day operations. Data syncs automatically when connectivity returns.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We support M-Pesa, Airtel Money, bank transfers, and card payments. Local payment integration is built into every product.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Ready-to-deploy products can be live within 3 weeks from our first conversation. This includes architecture mapping, deployment, staff training, and full handover.",
  },
  {
    question: "Do you provide training?",
    answer:
      "Yes. Hands-on staff training is included with every deployment. We don't leave until every member of your team is confident operating the system.",
  },
  {
    question: "What pricing models are available?",
    answer:
      "We offer three pricing models: One-Time Payment (pay once, own forever), Subscription (monthly or yearly with cloud hosting included), and Platform Access (usage-based pricing for marketplace products).",
  },
  {
    question: "How do I contact support?",
    answer: <>You can reach us at <a href="mailto:info@gtss.co.ke" className="text-[var(--accent)] no-underline hover:underline">info@gtss.co.ke</a> or call <a href="tel:+254790670542" className="text-[var(--accent)] no-underline hover:underline">+254 790 670 542</a>. We respond to all inquiries within 24 hours.</>,
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              FAQ
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text)] tracking-tight mb-6">
              Frequently Asked{" "}
              <span className="text-[var(--accent)]">Questions</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              Find answers to common questions about GTSS, our products, and how
              we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden transition-all hover:border-[var(--card-hover-border)]"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer bg-transparent border-none"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0">
                    <HelpCircle
                      className="w-5 h-5 text-[var(--accent)]"
                    />
                  </div>
                  <span className="text-base font-semibold text-[var(--text)]">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--text-muted)] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-16 border-t border-[var(--border)] bg-[var(--section-alt)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[var(--text)] mb-4">
            Still have questions?
          </h2>
          <p className="text-base text-[var(--text-muted)] mb-8 leading-relaxed">
            We&apos;re here to help. Reach out and our team will get back to you
            within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)]"
          >
            <HelpCircle className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
