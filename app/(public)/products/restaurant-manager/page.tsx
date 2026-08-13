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
  Server,
  UtensilsCrossed,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SiteCTA } from "@/components/site/SiteCTA";
import { whatsappUrl } from "@/data/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Restaurant Manager — Offline POS & Intranet Solution",
  description:
    "Offline-first restaurant and hotel POS for East African hospitality. QR ordering, kitchen display, M-Pesa, and a local server that keeps the floor moving.",
};

const problems = [
  {
    icon: Zap,
    title: "Zero visibility during line cuts",
    desc: "Managers lose sight of occupancy and kitchen bottlenecks. The floor is flying blind.",
    solution: "Local Edge Hub keeps table maps and live orders running with 0.4ms intranet latency.",
  },
  {
    icon: UserX,
    title: "Paper tickets hide kitchen mistakes",
    desc: "Waiters and cooks drift apart during rushes. Missing tickets show up too late.",
    solution: "Real-time digital KDS displays with color-coded ticket timers and bar dispatch alerts.",
  },
  {
    icon: Receipt,
    title: "End-of-day till never balances",
    desc: "Manual M-Pesa phone checks, cash, and credit cards take hours to reconcile.",
    solution: "Instant M-Pesa STK callbacks and till reconciliations close books in 2 minutes.",
  },
  {
    icon: WifiOff,
    title: "Outages destroy table revenue",
    desc: "Guests walk out when the system freezes. Lost revenue never returns.",
    solution: "100% offline-first architecture handles power blips and fiber cuts seamlessly.",
  },
];

const steps = [
  {
    step: "01",
    icon: Wrench,
    title: "We install the local intranet server",
    desc: "On site, in a day. We configure your local mesh Wi-Fi and thermal printers without needing an internal IT team.",
  },
  {
    step: "02",
    icon: Clock,
    title: "Staff go live on day two",
    desc: "Waiters, kitchen staff, and cashiers are trained on their actual physical stations. We stay until they run a live shift.",
  },
  {
    step: "03",
    icon: Wifi,
    title: "Cloud syncs automatically",
    desc: "Executive reports, Business Central, and multi-branch ledgers catch up the instant internet returns.",
  },
];

const plans = [
  {
    name: "Core",
    price: "KES 50,000",
    period: "One-Time License",
    audience: "Cafés and single-floor restaurants",
    features: [
      "Local Edge Server included",
      "Instant Guest QR table ordering",
      "Kitchen Display System (KDS)",
      "Native M-Pesa STK Integration",
      "Daily CSV & ledger exports",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "KES 85,000",
    period: "One-Time License",
    audience: "Busy high-volume restaurants & boutique lodges",
    features: [
      "Everything in Core",
      "Multi-floor & multi-bar routing",
      "Waiter staff performance tracking",
      "Commission & shift reconciliation",
      "Live table occupancy map",
      "Unlimited waiter tablets & printers",
    ],
    highlight: true,
  },
  {
    name: "Nexus Enterprise",
    price: "KES 150,000+",
    period: "Tailored Multi-Branch",
    audience: "Large hotel chains & multi-outlet brands",
    features: [
      "Everything in Pro",
      "Multi-branch cloud consolidation",
      "ERP & SAP integration",
      "24/7 dedicated engineering SLA",
      "Custom loyalty & hotel PMS integration",
    ],
    highlight: false,
  },
];

export default function RestaurantManagerPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--hero-gradient)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--border)]">
        <div
          className="luxury-glow-radial -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-[var(--gold)] opacity-10"
          aria-hidden="true"
        />

        <div className="site-wrap relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-5">
              <UtensilsCrossed className="h-3.5 w-3.5" />
              <span>GTS-SAA-3104 · Hospitality Architecture</span>
            </div>

            <h1 className="site-display text-[var(--text)]">
              Your restaurant never stops — even when the{" "}
              <span className="italic text-gold-gradient font-normal">network</span> does.
            </h1>

            <p className="site-lead mt-5 text-base lg:text-lg">
              Instant Wi-Fi QR table ordering, real-time Kitchen Display Systems (KDS), and till control
              running on your dedicated local intranet. M-Pesa is natively integrated. Your team is certified
              on the live floor.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link href="/products/restaurant-manager/experience" className="luxury-btn-gold text-xs">
                <span>Walk the Service Flow Experience</span>
                <PlayCircle className="h-4 w-4" />
              </Link>

              <Link href="/demo" className="luxury-btn-outline text-xs">
                <span>Book Live Demonstration</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <a
                href={whatsappUrl("Hi GTSS, I'd like a demonstration of Restaurant Manager.")}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn site-btn-whatsapp text-xs"
              >
                <span>WhatsApp Concierge</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-6 border-t border-[var(--border)] grid grid-cols-3 gap-3">
              <div>
                <p className="text-xl lg:text-2xl font-bold text-[var(--text)]">0.4 ms</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Local Intranet Speed</p>
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Offline Reliability</p>
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-bold text-[var(--gold-luxury)]">2 Mins</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Daily Book Closing</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border-bright)] bg-[var(--bg-surface-3)] shadow-2xl">
              <Image
                src="/images/waiter_handheld_offline_pos_1777357237751.png"
                alt="Waiter using GTSS Restaurant Manager handheld on the floor"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Architecture Section */}
      <section className="site-wrap py-16 lg:py-24">
        <div className="max-w-2xl pb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
            THE HOSPITALITY BOTTLENECK
          </span>
          <h2 className="site-title text-[var(--text)] mt-2">
            A cloud outage should never close your kitchen.
          </h2>
          <p className="site-lead mt-3 text-base">
            When standard POS systems lose internet, staff revert to paper chits. Tickets vanish.
            Orders delay. The till does not balance at close. Here is how GTSS eliminates that completely:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="luxury-card p-6 sm:p-7 border border-[var(--border)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                    <span className="text-xs font-bold text-red-500 flex items-center gap-1.5">
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      SOLVED
                    </span>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4 p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-xs text-[var(--text)] font-medium flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3-Step Rollout Section */}
      <section className="border-y border-[var(--border)] bg-[var(--section-alt)] py-16 lg:py-24">
        <div className="site-wrap">
          <div className="max-w-2xl pb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
              WHITE-GLOVE ONBOARDING
            </span>
            <h2 className="site-title text-[var(--text)] mt-2">
              Live in three clear steps.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="luxury-card p-6 sm:p-7 border border-[var(--border)] bg-[var(--card-bg)] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[var(--gold-luxury)]">
                      {item.step}
                    </span>
                    <Icon className="h-6 w-6 text-[var(--gold-luxury)] mt-3 mb-2" />
                    <h3 className="text-lg font-bold text-[var(--text)]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operator Verification Spotlight */}
      <section className="site-wrap py-16 lg:py-20">
        <div className="luxury-card p-8 sm:p-12 border border-[var(--gold-border)] bg-[var(--card-bg)] shadow-xl relative overflow-hidden">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
            OPERATOR SPOTLIGHT · NAIROBI GRAND HOTEL
          </span>
          <blockquote className="mt-4 font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-[var(--text)] leading-relaxed italic">
            “Orders used to get lost every time the local fiber dropped during weekend rushes. With GTSS Restaurant
            Manager, the kitchen keeps firing tickets at full speed. We stopped losing revenue we didn&apos;t even know
            we were losing.”
          </blockquote>
          <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-[var(--text)]">James K.</p>
              <p className="text-xs text-[var(--text-muted)]">Director of Food & Beverage, Nairobi</p>
            </div>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">
              99.98% Service Uptime
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans Grid */}
      <section className="border-t border-[var(--border)] bg-[var(--section-alt)] py-16 lg:py-24" id="pricing">
        <div className="site-wrap">
          <div className="max-w-2xl pb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
              COMMERCIAL PACKAGES
            </span>
            <h2 className="site-title text-[var(--text)] mt-2">
              Plans that match the scale of your floor.
            </h2>
            <p className="site-lead mt-3 text-base">
              Predictable KES pricing with permanent One-Time ownership options. Upgrade anytime you add rooms or branches.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`luxury-card p-6 sm:p-8 flex flex-col justify-between relative bg-[var(--card-bg)] ${
                  plan.highlight
                    ? "border-[var(--gold-luxury)] ring-1 ring-[var(--gold-luxury)]/40 shadow-xl"
                    : "border-[var(--border)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-luxury)]">
                      {plan.name}
                    </span>
                    {plan.highlight && (
                      <span className="text-[10px] uppercase font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div className="mt-5">
                    <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--text)]">
                      {plan.price}
                    </p>
                    <p className="text-xs font-semibold text-[var(--gold-luxury)] mt-0.5">
                      {plan.period}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-2">
                      {plan.audience}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[var(--border)] space-y-2.5">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-[var(--text)] font-medium">
                        <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                  <a
                    href={whatsappUrl(`Hi GTSS, I'd like a quote for Restaurant Manager ${plan.name} plan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-xs text-center justify-center ${
                      plan.highlight ? "luxury-btn-gold" : "luxury-btn-primary"
                    }`}
                  >
                    <span>Request Scoping & Quote</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Call to Action */}
      <SiteCTA
        title="Ready to see Restaurant Manager in action?"
        copy="Walk through the guest, waiter, kitchen, and admin workflows — or book a live demo on your actual menu."
        primary={{ href: "/products/restaurant-manager/experience", label: "Walk Service Flow Experience" }}
        secondary={{ href: "/demo", label: "Book Live Demo" }}
      />
    </div>
  );
}
