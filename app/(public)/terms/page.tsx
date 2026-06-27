import { Scale } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | GTSS",
  description:
    "Terms of Service for Great Thumbs Software Solutions. By using our products and services, you agree to these terms.",
};

import type { ReactNode } from "react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using any GTSS product or service, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our products or services.",
      "These terms apply to all users, including businesses, organizations, and individuals who access or use GTSS products. We reserve the right to update these terms at any time, and continued use of our services constitutes acceptance of any changes.",
    ] as ReactNode[],
  },
  {
    title: "2. Use of Services",
    paragraphs: [
      "You may use GTSS products only for lawful business purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree not to: reverse engineer, decompile, or disassemble any GTSS product; use our services to violate any applicable local, national, or international law; attempt to gain unauthorized access to any part of our systems; or resell, sublicense, or redistribute our products without explicit written permission.",
    ] as ReactNode[],
  },
  {
    title: "3. Intellectual Property",
    paragraphs: [
      "All GTSS products, including software, documentation, branding, and associated materials, are the intellectual property of Great Thumbs Software Solutions. This includes all source code, designs, trademarks, and trade secrets.",
      "For one-time payment products, you receive a perpetual license to use the software. For subscription products, you receive a license to use the software for the duration of your active subscription. In neither case does ownership of the intellectual property transfer to you. White-label agreements may include additional rights as specified in separate contracts.",
    ] as ReactNode[],
  },
  {
    title: "4. Limitation of Liability",
    paragraphs: [
      "GTSS provides software on an \"as is\" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.",
      "In no event shall GTSS, its directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our products or services. Our total liability shall not exceed the amount you paid for the specific product or service giving rise to the claim.",
    ] as ReactNode[],
  },
  {
    title: "5. Governing Law",
    paragraphs: [
      "These terms shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from or relating to these terms shall be resolved in the courts of Nairobi, Kenya.",
      "Both parties agree to attempt to resolve any disputes through good-faith negotiation before initiating legal proceedings. Nothing in these terms shall deprive you of any mandatory consumer protections under Kenyan law.",
    ] as ReactNode[],
  },
  {
    title: "6. Contact",
    paragraphs: [
      "If you have questions about these Terms of Service, please contact us:",
      <>Email: <a href="mailto:info@gtss.co.ke" className="text-[var(--accent)] no-underline hover:underline">info@gtss.co.ke</a></>,
      <>Phone: <a href="tel:+254790670542" className="text-[var(--accent)] no-underline hover:underline">+254 790 670 542</a></>,
      "We recommend reviewing these terms periodically to stay informed of any updates.",
    ] as ReactNode[],
  },
];

export default function TermsPage() {
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
              Terms of{" "}
              <span className="text-[var(--accent)]">Service</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              Last updated: June 2026. By using GTSS products and services,
              you agree to these terms.
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
                  <Scale className="w-4 h-4 text-[var(--accent)]" />
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
