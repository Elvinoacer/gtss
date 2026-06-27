import { FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GTSS",
  description:
    "Learn how Great Thumbs Software Solutions collects, uses, and protects your personal information.",
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
      <>To exercise any of these rights, contact us at <a href="mailto:info@gtss.co.ke" className="text-[var(--accent)] no-underline hover:underline">info@gtss.co.ke</a>. We will respond to your request within 30 days. If you are a GTSS product user, your local data remains under your full control at all times due to our offline-first architecture.</>,
    ] as ReactNode[],
  },
  {
    title: "5. Contact",
    paragraphs: [
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:",
      <>Email: <a href="mailto:info@gtss.co.ke" className="text-[var(--accent)] no-underline hover:underline">info@gtss.co.ke</a></>,
      <>Phone: <a href="tel:+254790670542" className="text-[var(--accent)] no-underline hover:underline">+254 790 670 542</a></>,
      "We will respond to all privacy-related inquiries within 48 hours.",
    ] as ReactNode[],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              Legal
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text)] tracking-tight mb-6">
              Privacy{" "}
              <span className="text-[var(--accent)]">Policy</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              Last updated: June 2026. This policy describes how Great
              Thumbs Software Solutions collects, uses, and protects your
              personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0">
                  <FileText className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <h2 className="text-lg font-semibold text-[var(--text)]">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-3 pl-11">
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm text-[var(--text-muted)] leading-relaxed"
                  >
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
