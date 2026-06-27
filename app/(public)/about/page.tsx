import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Globe2,
  Rocket,
  Package,
  Handshake,
  Award,
  ArrowRight,
  Server,
  MapPin,
  WifiOff,
  GraduationCap,
  User,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About GTSS",
  description:
    "Nairobi-based software company building practical systems for East African businesses. Learn about our mission, vision, and what drives us.",
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Product quality that signals trust",
    description:
      "Every system we ship carries our name and reputation. We build software that looks professional, runs reliably, and earns the confidence of the businesses that depend on it. Quality is not a feature we add later — it is the foundation.",
    color: "var(--accent)",
  },
  {
    icon: Globe2,
    title: "Local realities built into the model",
    description:
      "We design for spotty internet, M-Pesa workflows, and staff who may be using software for the first time. Our products work the way East African businesses actually operate — not how a textbook says they should.",
    color: "var(--green)",
  },
  {
    icon: Rocket,
    title: "Delivery that survives contact with the real world",
    description:
      "A system that only works in a demo is not a system. GTSS builds for the field: offline-capable, easy to adopt, and backed by hands-on training so your team can use it from day one. We deliver results, not promises.",
    color: "var(--gold)",
  },
];

const capabilities = [
  {
    icon: Package,
    title: "Operational products",
    description:
      "We don't just build prototypes — we ship complete, working software. Each GTSS product is a fully operational system tested in real deployments, from hotel ordering to church management. When you choose GTSS, you get a product that is already running in the field.",
    color: "var(--accent)",
  },
  {
    icon: Handshake,
    title: "Deployment partnership",
    description:
      "We stay with you beyond delivery. GTSS provides on-site setup, staff training, and ongoing support to make sure the system actually works in your environment. We treat deployment as a partnership, not a hand-off.",
    color: "var(--green)",
  },
  {
    icon: Award,
    title: "Premium presentation",
    description:
      "Professional polish that earns stakeholder trust. Our software looks as good as it performs — clean interfaces, thoughtful design, and a level of finish that signals quality to everyone from front-desk staff to board members.",
    color: "var(--gold)",
  },
];

const stats = [
  {
    icon: Server,
    value: "50+",
    label: "Systems Deployed",
  },
  {
    icon: MapPin,
    value: "East Africa",
    label: "Region",
  },
  {
    icon: WifiOff,
    value: "Offline-First",
    label: "Default",
  },
  {
    icon: GraduationCap,
    value: "Hands-On",
    label: "Training",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              About GTSS
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text)] tracking-tight mb-6">
              Nairobi-based software company building practical systems for{" "}
              <span className="text-[var(--accent)]">East African businesses.</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              Great Thumbs Software Solutions designs, builds, manages, and distributes
              practical software solutions that empower local businesses, institutions,
              and communities through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8">
            <div className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] mb-5" style={{ color: "var(--accent)" }}>
              <Globe2 className="w-5 h-5" />
            </div>
            <h2 className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-3">
              Our Mission
            </h2>
            <p className="text-base lg:text-lg text-[var(--text)] leading-relaxed font-medium">
              To empower African businesses and institutions with affordable, practical,
              and reliable software solutions that solve real-world problems.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8">
            <div className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] mb-5" style={{ color: "var(--green)" }}>
              <Rocket className="w-5 h-5" />
            </div>
            <h2 className="text-xs tracking-[0.2em] text-[var(--green)] uppercase font-semibold mb-3">
              Our Vision
            </h2>
            <p className="text-base lg:text-lg text-[var(--text)] leading-relaxed font-medium">
              To become Africa&apos;s most trusted software builder and a hub for practical
              business systems and community-first platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-[var(--section-alt)] border-t border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              What We Stand For
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-[var(--text)] tracking-tight">
              Three principles that guide every product we build.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8 transition-all hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)]"
              >
                <div
                  className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] mb-5"
                  style={{ color: principle.color }}
                >
                  <principle.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 lg:px-20 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              What Sets Us Apart
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-[var(--text)] tracking-tight">
              Three capabilities that define our work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8 transition-all hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)]"
              >
                <div
                  className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] mb-5"
                  style={{ color: cap.color }}
                >
                  <cap.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-[var(--section-alt)] border-t border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8 text-center transition-all hover:border-[var(--card-hover-border)]"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] mx-auto mb-4" style={{ color: "var(--accent)" }}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-[var(--text)] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              The Team
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-[var(--text)] tracking-tight">
              The people building GTSS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8 transition-all hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)]">
              <div className="w-14 h-14 rounded-full border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] mb-5">
                <User className="w-7 h-7 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-1">
                Elvin Omondi
              </h3>
              <p className="text-sm text-[var(--accent)] font-medium mb-4">
                Founder & Lead Engineer
              </p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                Software engineer with deep experience building practical systems for East African businesses. Founded GTSS to bridge the gap between enterprise-grade software and the realities of operating in Kenya, Uganda, and Tanzania.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] no-underline hover:text-[var(--accent)] transition-colors"
                >
                  Portfolio <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] no-underline hover:text-[var(--accent)] transition-colors"
                >
                  LinkedIn <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-6 inline-flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--accent)]" />
            Next Step
            <div className="w-8 h-[1px] bg-[var(--accent)]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6 tracking-tight">
            Let&apos;s build something <span className="text-[var(--accent)]">together.</span>
          </h2>
          <p className="text-base lg:text-lg text-[var(--text-muted)] mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you need a ready-made system or something custom-built, we&apos;re
            ready to help your business move forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)]"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
