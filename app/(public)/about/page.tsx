import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { SiteCTA } from "@/components/site/SiteCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Great Thumbs Software Solutions is a Nairobi-based company building practical systems for East African businesses.",
};

const principles = [
  {
    title: "Built for the floor, not the demo",
    copy: "A system that only works in a presentation is not a system. We design for busy lunch rushes, night audits, and the Tuesday when the fibre is down.",
  },
  {
    title: "Local realities are the spec",
    copy: "M-Pesa first. Offline by default. Training included. Software that assumes a Nairobi, Eldoret, or Kisumu workday — not a Silicon Valley one.",
  },
  {
    title: "Stay after launch",
    copy: "Deployment is the start. We train the people who will live in the product and remain a short call away when the first real weekend hits.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        kicker="About GTSS"
        title="A Nairobi software company that ships systems people can run."
        description="Great Thumbs Software Solutions designs, deploys, and supports practical software for hotels, restaurants, shops, churches, and service teams across East Africa."
      />

      <section className="border-y border-[var(--border)] bg-[var(--section-alt)]">
        <div className="site-wrap grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="site-kicker">Mission</p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-2xl leading-snug text-[var(--text)] lg:text-3xl">
              Affordable, practical software that solves the problems operators actually have.
            </p>
          </div>
          <div>
            <p className="site-kicker">Vision</p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-2xl leading-snug text-[var(--text)] lg:text-3xl">
              Become the team East African businesses call when the software has to hold up.
            </p>
          </div>
        </div>
      </section>

      <section className="site-wrap py-16 lg:py-24">
        <h2 className="site-title max-w-xl">How we decide what to build.</h2>
        <ol className="mt-10 grid list-none gap-8 p-0 lg:grid-cols-3">
          {principles.map((item, index) => (
            <li key={item.title} className="border-t border-[var(--border)] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--section-alt)]">
        <div className="site-wrap grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <p className="site-kicker">Founder</p>
            <h2 className="site-title mt-4">Elvin Omondi</h2>
            <p className="mt-2 text-sm font-medium text-[var(--accent)]">Founder & lead engineer</p>
          </div>
          <div>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Software engineer building systems for East African operators. GTSS exists because too much
              “enterprise” software assumes reliable internet, card-only payments, and a two-month training
              budget. We build the opposite: products a lodge, church, or restaurant can run next month.
            </p>
            <Link href="/contact" className="site-btn site-btn-ghost mt-6">
              Work with us
            </Link>
          </div>
        </div>
      </section>

      <SiteCTA
        title="If the current tools are getting in the way, let’s talk."
        copy="Ready product or custom build — we will tell you which path is honest."
      />
    </div>
  );
}
