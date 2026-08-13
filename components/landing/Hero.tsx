import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/data/site";

const proofs = [
  { title: "Works offline", copy: "Orders and records continue on the local network." },
  { title: "Pays the Kenyan way", copy: "M-Pesa, Airtel Money, cash, card, and bank." },
  { title: "Live in three weeks", copy: "Setup, training, and handover included." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--hero-gradient)]">
      <div className="site-wrap grid items-end gap-12 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-24">
        <div className="reveal">
          <p className="site-kicker">Nairobi · East Africa</p>
          <h1 className="site-display mt-5 max-w-[14ch]">
            Software that keeps the floor moving when the network does not.
          </h1>
          <p className="site-lead mt-6">
            GTSS builds systems for hotels, restaurants, shops, and churches. They look calm in front of
            customers, stay usable for staff, and keep working through the power cuts and dropped connections
            that are part of real operations here.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/products" className="site-btn site-btn-primary">
              See the products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/demo" className="site-btn site-btn-ghost">
              Book a walkthrough
            </Link>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="site-btn site-btn-whatsapp">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative">
          <figure className="overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)]">
            <Image
              src="/images/gtss_hero.png"
              alt="GTSS operations dashboard used by a hospitality team"
              width={1400}
              height={1050}
              priority
              className="h-auto w-full object-cover"
            />
          </figure>
          <p className="absolute -bottom-4 left-4 right-4 border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-sm text-[var(--text)] shadow-[var(--card-hover-shadow)] sm:left-auto sm:right-[-0.75rem] sm:w-64">
            <span className="block text-xs font-semibold uppercase tracking-[0.06em] text-[var(--accent)]">
              3-week rollout
            </span>
            From first call to a trained team on a live system.
          </p>
        </div>
      </div>

      <ol className="site-wrap mt-6 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
        {proofs.map((item, index) => (
          <li key={item.title} className="bg-[var(--stat-bg)] p-5 lg:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
              0{index + 1}
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--text)]">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">{item.copy}</p>
          </li>
        ))}
      </ol>
      <div className="h-12 lg:h-16" />
    </section>
  );
}
