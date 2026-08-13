"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { whatsappUrl } from "@/data/site";

const faqs = [
  {
    q: "How does GTSS continue running when our internet or fiber connection dies?",
    a: "Every GTSS installation includes a configured On-Premise Edge Intranet Hub. All waiter ordering tablets, kitchen display screens (KDS), bar stations, and thermal printers communicate over your local Wi-Fi intranet network without routing through external cloud servers. Floor operations never stop, even during total ISP blackouts.",
  },
  {
    q: "Do we need to buy expensive proprietary hardware from GTSS?",
    a: "No. Unlike foreign POS systems that force you to purchase locked $1,000+ proprietary tablets, GTSS is hardware-agnostic. You can use standard Android tablets, iPads, desktop PCs, laptops, and any standard 80mm ESC/POS USB or network thermal printers.",
  },
  {
    q: "How are M-Pesa STK Push and cash transactions reconciled?",
    a: "When online, GTSS sends instant STK push prompts to customer phones and automatically marks bills as paid upon Safaricom callback. During offline periods, cashiers can accept cash, cards, or standard M-Pesa confirmation codes, which are securely queued on the local edge server and auto-verified upon reconnection.",
  },
  {
    q: "Can you migrate our existing menu, inventory, or member data?",
    a: "Yes. During Phase 02 (Days 4–14) of our 21-day white-glove rollout, our engineering team handles full data ingestion—menus, recipe costings, customer profiles, member lists, and inventory catalogs—ensuring a seamless transition with zero manual re-entry.",
  },
  {
    q: "What is your emergency support SLA during high-volume rush hours?",
    a: "All active clients receive a dedicated WhatsApp direct line and telephone access to our senior engineering team based in Nairobi and Eldoret. Our target response SLA during active business hours is under 15 minutes.",
  },
  {
    q: "What pricing models are available?",
    a: "We believe in transparent, predictable African pricing in KES. We offer One-Time permanent ownership licenses for offline systems like Restaurant Manager, as well as affordable flat monthly subscriptions for cloud-backed platforms like Commersely and Church Management.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[var(--bg)] py-20 lg:py-28 relative" id="faq">
      <div className="site-wrap">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Executive FAQ</span>
          </div>
          <h2 className="site-title text-[var(--text)]">
            Frequently Asked Questions
          </h2>
          <p className="site-lead mx-auto mt-4 text-base lg:text-lg">
            Clear answers to common questions about deployment mechanics, hardware compatibility,
            offline reliability, and support.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-8 max-w-3xl mx-auto divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[var(--text)] group-hover:text-[var(--gold-luxury)] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[var(--border)] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[var(--gold-luxury)] text-black border-transparent" : "text-[var(--text-muted)]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Direct Contact Callout */}
        <div className="mt-12 text-center text-xs text-[var(--text-muted)]">
          <span>Have a custom technical inquiry? </span>
          <a
            href={whatsappUrl("Hi GTSS, I have a specific technical question about your software.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold-luxury)] font-bold hover:underline"
          >
            Chat directly with our lead architect on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
