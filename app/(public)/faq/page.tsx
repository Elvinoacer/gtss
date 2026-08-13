import type { Metadata } from "next";
import type { ReactNode } from "react";
import { mailUrl, site, telUrl } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { SiteCTA } from "@/components/site/SiteCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about GTSS products, offline use, payments, rollout time, and support.",
};

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Who is GTSS?",
    a: "Great Thumbs Software Solutions is a software company based in Kenya. We build and deploy practical systems for businesses and institutions across East Africa.",
  },
  {
    q: "What do you sell?",
    a: "Restaurant Manager, Hotel Ordering, an e-commerce platform, a church management system, JustInTime for service businesses, and custom builds when none of those fit.",
  },
  {
    q: "Do the products work without internet?",
    a: "Yes. Day-to-day work runs on your local network. When the connection returns, data syncs. That is the default, not an add-on.",
  },
  {
    q: "Which payments are built in?",
    a: "M-Pesa, Airtel Money, bank transfer, and cards. Local rails are part of every product.",
  },
  {
    q: "How long until we are live?",
    a: "About three weeks from the first conversation: mapping, install, staff training, and handover.",
  },
  {
    q: "Is training included?",
    a: "Yes. We train the people who will use the system on the floor. We do not leave until they can run a normal day.",
  },
  {
    q: "How do you charge?",
    a: "One-time ownership, monthly or yearly subscription, or usage-based platform access. See the pricing page for starting figures.",
  },
  {
    q: "How do I reach you?",
    a: (
      <>
        Email{" "}
        <a href={mailUrl} className="text-[var(--accent)] underline-offset-2 hover:underline">
          {site.email}
        </a>{" "}
        or call{" "}
        <a href={telUrl} className="text-[var(--accent)] underline-offset-2 hover:underline">
          {site.phoneDisplay}
        </a>
        . We reply within 24 hours.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <div>
      <PageHeader
        kicker="FAQ"
        title="Short answers to the questions operators ask first."
        description="If yours is not here, send it. We reply within a day."
      />
      <section className="site-wrap max-w-3xl pb-16">
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="border border-[var(--card-border)] bg-[var(--card-bg)]">
              <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold text-[var(--text)]">
                {faq.q}
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-[var(--text-muted)]">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>
      <SiteCTA title="Still deciding?" copy="A 30-minute walkthrough is usually faster than another page of reading." />
    </div>
  );
}
