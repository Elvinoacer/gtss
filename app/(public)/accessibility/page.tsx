import { Accessibility, Target, RefreshCw, Mail } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "GTSS is committed to making our software accessible to all users. Learn about our accessibility standards and ongoing improvements.",
};

const sections = [
  {
    icon: Accessibility,
    title: "Our Commitment",
    content: [
      "Great Thumbs Software Solutions is committed to ensuring that our software products are accessible to all users, regardless of ability or disability. We believe that technology should be an equalizer, not a barrier.",
      "We design and develop our products with accessibility as a core principle, not an afterthought. From initial wireframes to final deployment, every GTSS product undergoes accessibility review to ensure it meets the needs of diverse users across East Africa.",
    ],
  },
  {
    icon: Target,
    title: "Standards",
    content: [
      "GTSS products are developed in alignment with the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. We follow these standards to ensure our interfaces are perceivable, operable, understandable, and robust for all users.",
      "Our development process includes keyboard navigation testing, screen reader compatibility checks, color contrast verification, and semantic HTML structure validation. We test across multiple devices and assistive technologies commonly used in our markets.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Improvements",
    content: [
      "Accessibility is not a one-time checklist — it is an ongoing commitment. We continuously gather feedback from users with diverse needs and incorporate their insights into product updates.",
      "Each product release includes accessibility improvements based on user testing, industry best practices, and evolving standards. We maintain an accessibility roadmap for every GTSS product and publish updates on our progress.",
    ],
  },
  {
    icon: Mail,
    title: "Contact for Accessibility Issues",
    content: [
      "If you encounter any accessibility barriers while using GTSS products, we want to know. Your feedback directly informs our development priorities and helps us build better software for everyone.",
      <>
        Reach us at{" "}
        <a href="mailto:info@gtss.software" className="text-[var(--accent)] no-underline hover:underline">
          info@gtss.software
        </a>{" "}
        or call{" "}
        <a href="tel:+254792156094" className="text-[var(--accent)] no-underline hover:underline">
          +254 792 156 094
        </a>
        . Please include the product name, the specific issue you encountered, and the assistive technology you are
        using. We aim to respond within 48 hours and resolve issues in our next release cycle.
      </>,
    ] as ReactNode[],
  },
];

export default function AccessibilityPage() {
  return (
    <div>
      <header className="site-wrap pt-14 pb-10 lg:pt-20">
        <p className="site-kicker">Accessibility</p>
        <h1 className="site-display mt-4">Accessibility statement</h1>
        <p className="site-lead mt-5">GTSS is committed to making our software usable by everyone.</p>
      </header>

      <section className="site-wrap pb-20">
        <div className="max-w-3xl space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0">
                  <section.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h2 className="text-xl font-semibold text-[var(--text)]">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.content.map((paragraph, i) => (
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
