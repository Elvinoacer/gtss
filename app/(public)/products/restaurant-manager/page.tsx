import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  WifiOff,
  Smartphone,
  BarChart3,
  Receipt,
  UserX,
  Clock,
  Wrench,
  Wifi,
  Check,
  PlayCircle,
} from "lucide-react";
import { SiteCTA } from "@/components/site/SiteCTA";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Restaurant Manager",
  description:
    "Offline-first restaurant and hotel POS for East African hospitality. QR ordering, kitchen display, M-Pesa, and a local server that keeps the floor moving.",
};

const problems = [
  { icon: Zap, title: "No visibility when the line drops", desc: "Managers cannot see occupancy or revenue. The floor is flying blind." },
  { icon: UserX, title: "Paper tickets hide mistakes", desc: "Kitchen and till drift apart. Discrepancies show up too late." },
  { icon: Receipt, title: "End-of-day never matches", desc: "M-Pesa, cash, and the till take hours to reconcile." },
  { icon: WifiOff, title: "Orders vanish in outages", desc: "Guests walk out. That revenue does not come back." },
  { icon: BarChart3, title: "No data to decide", desc: "What is selling, who is performing, where money leaks — you are guessing." },
];

const steps = [
  { step: "01", icon: Wrench, title: "We install the local server", desc: "On site, in a day. You do not need an IT team." },
  { step: "02", icon: Clock, title: "Staff go live on day two", desc: "Waiters, kitchen, and admin are trained. We stay until they can run a shift." },
  { step: "03", icon: Wifi, title: "The cloud syncs when it can", desc: "ERP and reports catch up automatically. The floor never waited." },
];

const benefits = [
  { icon: Smartphone, text: "Guests order in about a minute — scan, no app, no login." },
  { icon: ShieldCheck, text: "Every ticket is tracked and timestamped. No paper, no missing orders." },
  { icon: Receipt, text: "M-Pesa reconciliation is automatic. Close the books in minutes." },
  { icon: WifiOff, text: "The kitchen still gets tickets when the internet does not." },
];

const plans = [
  {
    name: "Core",
    price: "$40",
    audience: "Cafés and small restaurants",
    features: ["Local server included", "Guest QR ordering", "Kitchen display", "M-Pesa", "Daily CSV exports"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$100",
    audience: "Busy restaurants and boutique hotels",
    features: ["Everything in Core", "Multi-floor", "Staff tracking", "Commission reconciliation", "Live occupancy", "Unlimited tables"],
    highlight: true,
  },
  {
    name: "Nexus",
    price: "$250+",
    audience: "Large hotels and chains",
    features: ["Everything in Pro", "Multi-branch", "ERP / Business Central", "Priority SLA", "Custom integrations"],
    highlight: false,
  },
];

export default function RestaurantManagerPage() {
  return (
    <div>
      <section className="site-wrap grid items-end gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="site-kicker">Restaurant Manager</p>
          <h1 className="site-display mt-4">Your restaurant never stops — even when the network does.</h1>
          <p className="site-lead mt-5">
            QR ordering, kitchen display, and till control that run on your local network. M-Pesa is built in. Staff
            are trained on the floor.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/products/restaurant-manager/experience" className="site-btn site-btn-primary">
              Walk the service flow
              <PlayCircle className="h-4 w-4" />
            </Link>
            <Link href="/demo" className="site-btn site-btn-ghost">
              Book a live demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-[var(--card-border)]">
          <Image
            src="/images/waiter_handheld_offline_pos_1777357237751.png"
            alt="Waiter using a GTSS handheld on the floor"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--section-alt)]">
        <div className="site-wrap grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden border border-[var(--card-border)]">
            <Image
              src="/images/stressed_kitchen_system_failure_1777357211810.png"
              alt="A kitchen under pressure when the system is down"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="site-kicker">The problem</p>
            <h2 className="site-title mt-4">A cloud outage should not close the kitchen.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              When a typical POS loses the internet, staff go back to paper. Tickets get lost. Guests wait. The till
              does not match M-Pesa at close.
            </p>
            <ul className="mt-8 space-y-4 p-0">
              {problems.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <div>
                    <p className="font-semibold text-[var(--text)]">{item.title}</p>
                    <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="site-wrap py-16 lg:py-20">
        <p className="site-kicker">How it is built</p>
        <h2 className="site-title mt-4 max-w-xl">Local first. Cloud when the line is back.</h2>
        <p className="site-lead mt-5">
          A server on your premises runs orders, payments, and kitchen alerts. When internet returns, data syncs to
          the cloud and your ERP. You are not waiting on Safaricom to serve the next table.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
            <h3 className="text-lg font-semibold">The floor stays up</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Service continues if the ISP fails completely.</p>
          </div>
          <div className="border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
            <h3 className="text-lg font-semibold">Books still close</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">M-Pesa and Business Central catch up automatically.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--section-alt)]">
        <div className="site-wrap py-16">
          <p className="site-kicker">From a Nairobi hotel</p>
          <blockquote className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-2xl leading-snug text-[var(--text)] lg:text-3xl">
            “Orders used to get lost every time the internet dropped. With GTSS, the kitchen keeps running. We stopped
            losing revenue we did not even know we were losing.”
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-[var(--text)]">James K.</p>
          <p className="text-sm text-[var(--text-muted)]">Nairobi Grand Hotel · Pilot customer</p>
        </div>
      </section>

      <section className="site-wrap py-16 lg:py-20">
        <p className="site-kicker">Rollout</p>
        <h2 className="site-title mt-4">Live in three steps.</h2>
        <ol className="mt-10 grid list-none gap-8 p-0 sm:grid-cols-3">
          {steps.map((item) => (
            <li key={item.step} className="border-t border-[var(--border)] pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                {item.step} · <item.icon className="mb-0.5 inline h-3.5 w-3.5" />
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--section-alt)]">
        <div className="site-wrap grid items-center gap-12 py-16 lg:grid-cols-2">
          <div>
            <p className="site-kicker">On the floor</p>
            <h2 className="site-title mt-4">Calm for guests. Clear for staff.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              Guests scan a QR code and order from their phone. Waiters get alerts where they are. Kitchen stays on
              the next ticket.
            </p>
            <ul className="mt-8 space-y-3 p-0">
              {benefits.map((item) => (
                <li key={item.text} className="flex gap-3 text-sm text-[var(--text)]">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square overflow-hidden border border-[var(--card-border)]">
            <Image
              src="/images/guest_qr_scan_menu_1777357267301.png"
              alt="Guest scanning a table QR code to open the menu"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="site-wrap py-16 lg:py-20">
        <p className="site-kicker">Pricing</p>
        <h2 className="site-title mt-4">Plans that match the size of the floor.</h2>
        <p className="site-lead mt-4">Quoted in USD. We can invoice in KES. Upgrade when you add rooms or branches.</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col border bg-[var(--card-bg)] p-6 ${
                plan.highlight ? "border-[var(--accent)]" : "border-[var(--card-border)]"
              }`}
            >
              {plan.highlight ? (
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Most teams pick this</p>
              ) : (
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-dim)]">Plan</p>
              )}
              <h3 className="mt-2 text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 font-[family-name:var(--font-display)] text-3xl">
                {plan.price}
                <span className="text-base text-[var(--text-muted)]"> / month</span>
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{plan.audience}</p>
              <ul className="mt-6 flex-1 space-y-2 p-0 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`site-btn mt-8 ${plan.highlight ? "site-btn-primary" : "site-btn-ghost"}`}>
                Get a quote
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteCTA
        title="See the product in a real service flow."
        copy="Walk through guest, waiter, kitchen, and admin — or book a live demo on your own menu."
        primary={{ href: "/products/restaurant-manager/experience", label: "Open the tour" }}
        secondary={{ href: "/demo", label: "Book a demo" }}
      />
    </div>
  );
}
