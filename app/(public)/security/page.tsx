import Link from "next/link";
import { Shield, Wifi, Lock, Database, KeyRound, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Data Protection | GTSS",
  description:
    "How GTSS protects your data and systems. Offline-first security, local network deployment, data encryption, regular backups, and access control.",
};

const sections = [
  {
    icon: Shield,
    title: "Offline-First Security",
    description:
      "Data stays on your premises. Because our products are built to run without internet dependency, your sensitive business data never traverses public networks by default. Your information remains within your local infrastructure at all times.",
  },
  {
    icon: Wifi,
    title: "Local Network Deployment",
    description:
      "GTSS products are designed to operate entirely on your local network. This eliminates exposure to external threats that cloud-only solutions face. Your systems remain operational and secure even when internet connectivity is unavailable.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description:
      "All data — at rest and in transit — is encrypted using industry-standard protocols. Whether data is stored on your local server or syncing to the cloud when connectivity returns, it remains protected with AES-256 encryption.",
  },
  {
    icon: Database,
    title: "Regular Backups",
    description:
      "Automated backup schedules ensure your data is never lost. Backups are stored locally and can be configured for cloud redundancy. Point-in-time recovery is available for all GTSS products, so you can restore to any previous state.",
  },
  {
    icon: KeyRound,
    title: "Access Control",
    description:
      "Role-based access control (RBAC) is built into every GTSS product. Administrators can define granular permissions for each user role, ensuring team members only access the data and features relevant to their responsibilities.",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              Security
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text)] tracking-tight mb-6">
              Security &{" "}
              <span className="text-[var(--accent)]">Data Protection</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              How GTSS protects your data and systems.
            </p>
          </div>
        </div>
      </section>

      {/* Security Sections */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-all hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)]"
            >
              <div className="w-12 h-12 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] mb-5">
                <section.icon className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h2 className="text-lg font-semibold text-[var(--text)] mb-3">
                {section.title}
              </h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Note */}
      <section className="px-6 lg:px-20 py-16 border-t border-[var(--border)] bg-[var(--section-alt)]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-12 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] mx-auto mb-5">
            <Shield className="w-6 h-6 text-[var(--green)]" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text)] mb-4">
            Your data is your data.
          </h2>
          <p className="text-base text-[var(--text-muted)] leading-relaxed">
            GTSS will never access, sell, or share your business data. Our
            offline-first architecture ensures that your information stays within
            your control at all times. If you have questions about our security
            practices, we&apos;re happy to discuss them.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 text-center border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-[var(--text)] mb-4 tracking-tight">
            Have questions about our security practices?
          </h2>
          <p className="text-base lg:text-lg text-[var(--text-muted)] mb-10 max-w-xl mx-auto leading-relaxed">
            We&apos;re happy to discuss our security approach in detail and address any concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)]"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center text-sm font-semibold text-[var(--text)] bg-transparent px-8 py-3.5 rounded-lg border border-[var(--border)] no-underline transition-all hover:border-[var(--accent)]"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
