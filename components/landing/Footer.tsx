import Link from "next/link";
import Image from "next/image";
import { catalog, mailUrl, site, telUrl, whatsappUrl } from "@/data/site";

const company = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/demo", label: "Request a demo" },
  { href: "/enterprise", label: "Enterprise" },
];

const trust = [
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/faq", label: "FAQ" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="site-wrap py-16 lg:py-20">
        <div className="grid gap-12 border-b border-[var(--footer-border)] pb-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image src="/images/GTSS-logo.png" alt="" width={32} height={32} className="h-8 w-8 rounded-sm" />
              <p className="text-base font-semibold">{site.name}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--footer-text-muted)]">
              Software for hotels, restaurants, shops, churches, and service teams. Built in Nairobi, deployed across
              East Africa.
            </p>
            <p className="mt-6 text-sm">
              <a href={telUrl} className="text-[var(--footer-text)] no-underline hover:underline">
                {site.phoneDisplay}
              </a>
              <span className="mx-2 text-[var(--footer-text-muted)]">·</span>
              <a href={mailUrl} className="text-[var(--footer-text)] no-underline hover:underline">
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-xs text-[var(--footer-text-muted)]">
              Replies {site.responseSla.toLowerCase()} · {site.addressLines.join(", ")}
            </p>
          </div>

          <FooterCol title="Products">
            {catalog.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="text-sm text-[var(--footer-text-muted)] no-underline hover:text-[var(--footer-text)]">
                  {item.title}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[var(--footer-text-muted)] no-underline hover:text-[var(--footer-text)]">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--footer-text-muted)] no-underline hover:text-[var(--footer-text)]"
              >
                WhatsApp
              </a>
            </li>
          </FooterCol>

          <FooterCol title="Trust">
            {trust.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[var(--footer-text-muted)] no-underline hover:text-[var(--footer-text)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-[var(--footer-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            {site.location} · {site.region}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--footer-text)]">{title}</p>
      <ul className="flex list-none flex-col gap-2.5 p-0">{children}</ul>
    </div>
  );
}
