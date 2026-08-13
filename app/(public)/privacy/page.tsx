import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Learn how Great Thumbs Software Solutions collects, uses, and protects your personal information.",
};

import type { ReactNode } from "react";

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We collect information that you provide directly to us when you request a demo, contact our team, subscribe to our services, or interact with our products. This may include your name, email address, phone number, company name, and any other details you choose to share.",
      "When you use our products, we may automatically collect operational data such as system performance metrics, error logs, and usage patterns. This data is used solely to improve product reliability and performance. We do not collect personal data from your end customers through our products.",
    ] as ReactNode[],
  },
  {
    title: "2. How We Use Information",
    paragraphs: [
      "We use the information we collect to provide, maintain, and improve our products and services. This includes responding to your inquiries, processing demo requests, delivering product updates, and providing technical support.",
      "We may use aggregated, non-personally identifiable data to analyze trends, measure the effectiveness of our services, and improve user experience. We will never sell your personal information to third parties under any circumstances.",
    ] as ReactNode[],
  },
  {
    title: "3. Data Security",
    paragraphs: [
      "GTSS takes data security seriously. All our products use AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our offline-first architecture means your business data stays on your local network by default, reducing exposure to external threats.",
      "We implement role-based access controls, regular security audits, and automated backup systems. Access to customer data is strictly limited to authorized GTSS personnel who require it for service delivery, and all access is logged and monitored.",
    ] as ReactNode[],
  },
  {
    title: "4. Your Rights",
    paragraphs: [
      "You have the right to access, correct, or delete your personal information at any time. You may also request a copy of the data we hold about you, or ask us to restrict how we process your information.",
      <>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:info@gtss.software" className="text-[var(--accent)] no-underline hover:underline">
          info@gtss.software
        </a>
        . We will respond to your request within 30 days. If you are a GTSS product user, your local data remains under
        your full control at all times due to our offline-first architecture.
      </>,
    ] as ReactNode[],
  },
  {
    title: "5. Contact",
    paragraphs: [
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:",
      <>
        Email:{" "}
        <a href="mailto:info@gtss.software" className="text-[var(--accent)] no-underline hover:underline">
          info@gtss.software
        </a>
      </>,
      <>
        Phone:{" "}
        <a href="tel:+254792156094" className="text-[var(--accent)] no-underline hover:underline">
          +254 792 156 094
        </a>
      </>,
      "We will respond to all privacy-related inquiries within 48 hours.",
    ] as ReactNode[],
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <header className="site-wrap pt-14 pb-10 lg:pt-20">
        <p className="site-kicker">Legal</p>
        <h1 className="site-display mt-4">Privacy policy</h1>
        <p className="site-lead mt-5">
          Last updated: June 2026. How Great Thumbs Software Solutions collects, uses, and protects personal information.
        </p>
      </header>

      <section className="site-wrap pb-20">
        <div className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">{section.title}</h2>
              <div className="space-y-3 pl-11">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
