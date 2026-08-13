import Link from "next/link";
import { whatsappUrl } from "@/data/site";

export function SiteCTA({
  title,
  copy,
  primary = { href: "/contact", label: "Talk to us" },
  secondary,
}: {
  title: string;
  copy: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-[var(--ink-band)] py-16 text-[var(--footer-text)] lg:py-20">
      <div className="site-wrap grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 className="max-w-[18ch] font-[family-name:var(--font-display)] text-3xl leading-tight lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--footer-text-muted)] lg:text-base">
            {copy}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={primary.href} className="site-btn site-btn-primary">
            {primary.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="site-btn site-btn-ghost border-white/20 text-white hover:text-white">
              {secondary.label}
            </Link>
          ) : (
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="site-btn site-btn-whatsapp">
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
