import Link from "next/link";
import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { BentoGrid } from "@/components/landing/BentoGrid";
import { SequenceExecution } from "@/components/landing/SequenceExecution";
import { whatsappUrl } from "@/data/site";

const testimonials = [
  {
    quote:
      "Our kitchen used to lose orders between the waitstaff and the cooks. Since Restaurant Manager went in, every ticket hits the display — even on the days the internet dies.",
    name: "Grace Wanjiku",
    title: "Owner, Java House Eldoret",
    product: "Restaurant Manager",
  },
  {
    quote:
      "We looked at three church tools. GTSS was the only one that understood contributions the way a Kenyan church actually takes them: M-Pesa, cash, and bank, in one ledger.",
    name: "Pastor David Ochieng",
    title: "Grace Community Church, Nakuru",
    product: "Church Management",
  },
  {
    quote:
      "They set up a local server, trained the front desk, and were done in under three weeks. When hotel Wi-Fi went down last week, guests could still order.",
    name: "Ahmed Hassan",
    title: "Manager, Rift Valley Lodge",
    product: "Hotel Ordering",
  },
];

export default function LandingPage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <BentoGrid />
      <SequenceExecution />

      <section className="bg-[var(--bg)] py-20 lg:py-28">
        <div className="site-wrap">
          <div className="max-w-2xl">
            <p className="site-kicker">From the floor</p>
            <h2 className="site-title mt-4">What operators remember is composure, not features.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <blockquote className="border border-[var(--card-border)] bg-[var(--card-bg)] p-8 lg:p-10">
              <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-[var(--text)] lg:text-3xl">
                “{testimonials[0].quote}”
              </p>
              <footer className="mt-8 text-sm">
                <p className="font-semibold text-[var(--text)]">{testimonials[0].name}</p>
                <p className="text-[var(--text-muted)]">{testimonials[0].title}</p>
                <p className="mt-1 text-[var(--accent)]">{testimonials[0].product}</p>
              </footer>
            </blockquote>
            <div className="grid gap-6">
              {testimonials.slice(1).map((item) => (
                <blockquote key={item.name} className="border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
                  <p className="text-sm leading-relaxed text-[var(--text)]">“{item.quote}”</p>
                  <footer className="mt-5 text-sm">
                    <p className="font-semibold text-[var(--text)]">{item.name}</p>
                    <p className="text-[var(--text-muted)]">{item.title}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink-band)] py-20 text-[var(--footer-text)] lg:py-24">
        <div className="site-wrap grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#93c5fd]">Next conversation</p>
            <h2 className="mt-4 max-w-[16ch] font-[family-name:var(--font-display)] text-4xl leading-tight lg:text-5xl">
              If the current system is holding the business back, let’s map a better one.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--footer-text-muted)]">
              Tell us what you run — a restaurant, a lodge, a shop, a church — and we will tell you which product
              fits, what it costs, and how long the rollout takes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/products" className="site-btn site-btn-primary">
              View products
            </Link>
            <Link href="/contact" className="site-btn site-btn-ghost border-white/20 text-white hover:text-white">
              Contact us
            </Link>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="site-btn site-btn-whatsapp">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
