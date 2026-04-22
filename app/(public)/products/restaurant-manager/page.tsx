import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Building2,
  Check,
  ChefHat,
  Clock3,
  CreditCard,
  FileText,
  LayoutDashboard,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WifiOff,
  X,
  type LucideIcon,
} from "lucide-react";

import { RestaurantManagerLeadForm } from "./RestaurantManagerLeadForm";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "GTSS Restaurant Manager - Offline-First Hotel & POS System",
  description:
    "Offline-first restaurant and hotel operations platform for African hospitality with M-Pesa and Business Central integrations.",
};

const painPoints: Array<{
  copy: string;
  icon: LucideIcon;
  title: string;
}> = [
  {
    icon: WifiOff,
    title: "Internet drops and service quality collapses",
    copy: "Cloud-only tools fail exactly when a full dining room needs them most. GTSS keeps the operation moving on the local network.",
  },
  {
    icon: FileText,
    title: "Manual ordering creates expensive confusion",
    copy: "Lost tickets, misheard items, and inconsistent bills quietly damage both revenue and guest trust.",
  },
  {
    icon: Clock3,
    title: "No one has live visibility on the floor",
    copy: "Managers, kitchen teams, and waiters all react slower when there is no shared system showing what is happening right now.",
  },
  {
    icon: CreditCard,
    title: "M-Pesa reconciliation becomes an end-of-day tax",
    copy: "Matching till reports to payment statements wastes time and makes financial hygiene harder than it should be.",
  },
];

const solutionPillars: Array<{
  copy: string;
  icon: LucideIcon;
  title: string;
}> = [
  {
    icon: Server,
    title: "Offline-first local server core",
    copy: "Guest ordering, kitchen display, waiter alerts, and admin dashboards continue running even with a dead ISP connection.",
  },
  {
    icon: Smartphone,
    title: "Guest experiences without app downloads",
    copy: "Connect to WiFi, open the menu instantly, place orders, track progress, and request help from the same phone session.",
  },
  {
    icon: ShieldCheck,
    title: "Payment and audit confidence",
    copy: "Cash, card, and M-Pesa flows are structured to reduce reconciliation pain and increase accountability.",
  },
  {
    icon: Building2,
    title: "Business Central aware architecture",
    copy: "When internet is available, GTSS can queue and sync finalized records into downstream ERP flows without double-counting.",
  },
];

const roleCards: Array<{
  copy: string;
  icon: LucideIcon;
  label: string;
  points: string[];
  title: string;
}> = [
  {
    label: "Guest Experience",
    title: "Order in seconds and track every step",
    copy: "The guest flow feels like a native app while staying fully web-based and local-network friendly.",
    icon: Smartphone,
    points: [
      "Categorized menu with fast search and rich item presentation",
      "Live order tracking from pending to delivered",
      "One-tap M-Pesa payment from the guest's own phone",
      "Issue reporting without calling a waiter across the room",
    ],
  },
  {
    label: "Kitchen Display System",
    title: "No noise, just the next ticket",
    copy: "Kitchen teams get a priority-led work surface that reduces mental overhead and keeps aging orders visible.",
    icon: ChefHat,
    points: [
      "Dynamic queue prioritization by urgency and wait time",
      "Color-coded timers to spotlight delayed tables",
      "Single-action completion flow to update the floor instantly",
      "Cleaner signal for the team during peak service",
    ],
  },
  {
    label: "Waiter Dashboard",
    title: "Alerts arrive where the work happens",
    copy: "Waiters receive clearer assignments, faster issue handling, and less guesswork about which table needs attention next.",
    icon: BellRing,
    points: [
      "Auto-assignment support for balanced staff workload",
      "Instant table issue pings and service requests",
      "Bill handling with mixed payment methods",
      "Better accountability across the whole shift",
    ],
  },
  {
    label: "Admin / GM Hub",
    title: "Run the floor from one command surface",
    copy: "Managers see occupancy, order flow, staff activity, and performance signals without stitching tools together manually.",
    icon: LayoutDashboard,
    points: [
      "Live occupancy and active service visibility",
      "Revenue and throughput reporting",
      "Audit trail for sensitive operational actions",
      "Broadcast capabilities for campaigns or urgent updates",
    ],
  },
];

const integrations: Array<{
  copy: string;
  icon: LucideIcon;
  tag: string;
  title: string;
}> = [
  {
    icon: CreditCard,
    title: "Safaricom Daraja M-Pesa",
    tag: "Payments",
    copy: "Trigger STK push directly from the guest flow and log confirmation cleanly back into the operating ledger.",
  },
  {
    icon: Building2,
    title: "Microsoft Business Central",
    tag: "ERP Sync",
    copy: "Queue finalized records locally and push them into your ERP posture when connectivity allows.",
  },
  {
    icon: Server,
    title: "Local Infrastructure First",
    tag: "Reliability",
    copy: "GTSS is designed to stay useful on your own hardware so the restaurant does not become hostage to a fragile network.",
  },
  {
    icon: Sparkles,
    title: "Real-Time Role Updates",
    tag: "Coordination",
    copy: "Guests, waiters, kitchen, and admin views stay aligned so status changes propagate with less operational friction.",
  },
];

const pricingPlans = [
  {
    name: "GTSS Core",
    price: "$40",
    note: "/ month",
    description:
      "For cafes, food trucks, and smaller restaurants that need reliable offline ordering.",
    featured: false,
    features: [
      { label: "Offline captive portal ordering", included: true },
      { label: "Basic kitchen display", included: true },
      { label: "Zero-login guest tracking up to 10 tables", included: true },
      { label: "Daily CSV exports", included: true },
      { label: "M-Pesa API integration", included: false },
      { label: "Business Central ERP sync", included: false },
    ],
  },
  {
    name: "GTSS Pro",
    price: "$100",
    note: "/ month",
    description:
      "For busy restaurants and boutique hotels that need automated payments, staff accountability, and live control.",
    featured: true,
    features: [
      { label: "Everything in Core", included: true },
      { label: "Full M-Pesa Daraja STK Push integration", included: true },
      { label: "Waiter auto-assignment support", included: true },
      { label: "Live occupancy and service visibility", included: true },
      { label: "Mass notifications and alerts", included: true },
      { label: "Unlimited tables", included: true },
    ],
  },
  {
    name: "GTSS Nexus",
    price: "$250+",
    note: "/ month",
    description:
      "For larger hotels and chains that need ERP compliance, additional modules, and deeper rollout support.",
    featured: false,
    features: [
      { label: "Everything in Pro", included: true },
      { label: "Microsoft Business Central sync", included: true },
      { label: "Retail / boutique / spa modules", included: true },
      { label: "Automated PDF revenue reports", included: true },
      { label: "Priority support and custom scripts", included: true },
      { label: "Multi-site deployment", included: true },
    ],
  },
];

const testimonials = [
  {
    author: "James Karanja",
    role: "GM, Boutique Hotel — Nairobi",
    quote:
      "We used to lose orders every time connectivity failed. Since GTSS, the floor feels calmer and our turnaround is meaningfully faster.",
  },
  {
    author: "Amina Odhiambo",
    role: "Owner, Mid-Scale Restaurant — Mombasa",
    quote:
      "The M-Pesa integration alone changed the economics. Reconciliation is cleaner and my accountant finally gets structured records.",
  },
  {
    author: "David Mutua",
    role: "F&B Director, Hotel Chain — Kisumu",
    quote:
      "Guests love the experience, staff love the clarity, and management finally has a live view of the operation instead of guesswork.",
  },
];

const rolloutFlow: Array<{
  copy: string;
  icon: LucideIcon;
  points: string[];
  step: string;
  title: string;
}> = [
  {
    step: "Step 01",
    icon: FileText,
    title: "Operational audit and stack mapping",
    copy: "We map your floor bottlenecks and define the right GTSS deployment posture before rollout starts.",
    points: ["Workflow audit", "Module matching", "Scope alignment"],
  },
  {
    step: "Step 02",
    icon: Server,
    title: "Configuration, deployment, and training",
    copy: "Infrastructure setup, user flows, and staff onboarding are handled together so day one feels stable.",
    points: [
      "Local infrastructure setup",
      "Role workflow tailoring",
      "Staff enablement",
    ],
  },
  {
    step: "Step 03",
    icon: Sparkles,
    title: "Post-launch optimization",
    copy: "GTSS stays close with support and iteration so performance and clarity improve over time.",
    points: ["Support cadence", "Performance tuning", "Roadmap iteration"],
  },
];

const confidenceSignals: Array<{
  copy: string;
  icon: LucideIcon;
  label: string;
}> = [
  {
    icon: ShieldCheck,
    label: "Audit confidence",
    copy: "Track sensitive actions and payment events with clearer accountability.",
  },
  {
    icon: Clock3,
    label: "Faster decisions",
    copy: "Live occupancy and order visibility improve manager response time.",
  },
  {
    icon: Building2,
    label: "Rollout discipline",
    copy: "Deployment, training, and support are scoped as one operating motion.",
  },
];

const sectionLinks = [
  { id: "overview", label: "Overview" },
  { id: "workflow", label: "Rollout" },
  { id: "roles", label: "Roles" },
  { id: "integrations", label: "Integrations" },
  { id: "pricing", label: "Pricing" },
  { id: "demo-form", label: "Book Demo" },
];

export default function RestaurantManagerPage() {
  return (
    <>
      <div
        className="resmg-page relative px-3 pb-24 pt-8 sm:px-6 lg:px-8 lg:pt-10"
        data-resmg-root
      >
        <div className="resmg-halo resmg-halo-a" aria-hidden="true" />
        <div className="resmg-halo resmg-halo-b" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl space-y-20 sm:space-y-24">
          <div className="sticky top-21 z-30 -mb-5">
            <div className="public-panel rounded-2xl px-3 py-3 sm:px-4">
              <p className="public-surface-label">Quick Navigation</p>
              <div className="resmg-scroll-nav mt-2.5">
                {sectionLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="resmg-nav-link text-xs font-semibold uppercase tracking-[0.2em] text-white/74"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <section
            id="overview"
            className="grid gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:items-center"
          >
            <div className="max-w-3xl">
              <span className="public-kicker">Restaurant Manager</span>
              <h1 className="public-section-title mt-6 text-[2.45rem] text-white sm:text-6xl lg:text-[4.25rem]">
                Your restaurant never stops.
                <span className="resmg-title-accent block">
                  Even when the internet does.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                GTSS Restaurant Manager is an offline-first operations system
                for African hospitality teams. Guests order from their phones,
                kitchen teams stay focused, waiters get the right alerts, and
                payments can flow through M-Pesa without forcing the business to
                depend on a stable ISP all day.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                {[
                  "Offline-first by design",
                  "M-Pesa ready",
                  "Business Central aware",
                ].map((item) => (
                  <span key={item} className="public-chip text-xs sm:text-sm">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#demo-form"
                  className="public-button-primary px-6 py-4 text-base"
                >
                  Book a Live Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link
                  href="/products/restaurant-manager/experience"
                  className="public-button-secondary px-6 py-4 text-base"
                >
                  Explore Full Experience
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Guest login time", value: "0s" },
                  { label: "Uptime posture", value: "Offline or online" },
                  { label: "Core staff roles", value: "4 roles" },
                ].map((item) => (
                  <div key={item.label} className="public-stat">
                    <p className="text-xl font-semibold text-white sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="public-panel mt-6 rounded-[1.45rem] p-4 sm:p-5">
                <p className="public-surface-label">Operating lanes</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="resmg-lane rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#8fd8ff]">
                      Lane 01
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Hospitality Command
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/60">
                      Offline ordering, KDS, waiter workflows, and M-Pesa
                      settlement.
                    </p>
                  </div>
                  <div className="resmg-lane rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#f3d79a]">
                      Lane 02
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Commercial Experience
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/60">
                      Customer journeys, storefronts, internal tooling, and
                      reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="public-panel-strong public-card-outline resmg-shine relative overflow-hidden rounded-4xl p-4 sm:p-6">
              <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#05080b]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/40">
                  <span>Live service board</span>
                  <span className="inline-flex items-center gap-2 text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Synchronized
                  </span>
                </div>

                <div className="space-y-4 p-4 sm:p-5">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/3 p-4">
                    <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/40">
                      <span>Kitchen queue</span>
                      <span className="text-emerald-300">Healthy flow</span>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        "Table 04 • Preparing • 07:12",
                        "Table 09 • Ready for delivery • 11:48",
                        "Table 12 • Payment confirmed • M-Pesa",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-white/10 bg-[#0a1117] px-3.5 py-2.5 text-sm text-white/74"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        icon: CreditCard,
                        title: "M-Pesa confirmed",
                        copy: "Guest paid from table",
                      },
                      {
                        icon: BellRing,
                        title: "Waiter alert sent",
                        copy: "Table 09 dispatch ready",
                      },
                      {
                        icon: LayoutDashboard,
                        title: "Occupancy live",
                        copy: "Admin sees every table",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Audit trail",
                        copy: "Actions traced clearly",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/3 p-3"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <item.icon className="h-4.5 w-4.5 text-[#8fd8ff]" />
                        </div>
                        <p className="mt-2.5 text-sm font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-white/58">
                          {item.copy}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="workflow"
            className="public-panel public-card-outline rounded-4xl p-5 sm:p-8 lg:p-10"
          >
            <div className="max-w-3xl">
              <span className="public-kicker">How GTSS lands</span>
              <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
                Rollout built for speed, clarity, and calm operations.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">
                Deployment is not an afterthought. GTSS combines product
                leverage with implementation discipline so your live day feels
                intentional, not improvised.
              </p>
            </div>

            <div className="resmg-mobile-flow mt-8">
              {rolloutFlow.map((item) => (
                <article
                  key={item.step}
                  className="resmg-flow-card rounded-[1.45rem] border border-white/10 bg-white/3 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#8fd8ff]">
                        {item.step}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <item.icon className="h-5 w-5 text-[#f3d79a]" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/64">
                    {item.copy}
                  </p>
                  <div className="mt-5 space-y-2.5">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8fd8ff]" />
                        <p className="text-sm leading-7 text-white/68">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="public-kicker">The real problem</span>
              <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
                Hospitality operations lose money when software adds friction.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                Missed orders, manual reconciliation, weak visibility, and
                brittle connectivity all compound into slower service and lower
                confidence.
              </p>

              <div className="mt-8 grid gap-4">
                {painPoints.map((item) => (
                  <article
                    key={item.title}
                    className="public-panel rounded-[1.55rem] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <item.icon className="h-5 w-5 text-[#f3d79a]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/62 sm:text-base">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="public-panel-strong public-card-outline rounded-4xl p-5 sm:p-7">
              <span className="public-kicker">The GTSS response</span>
              <h3 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
                One system for guest flow, kitchen execution, and management
                control.
              </h3>
              <p className="mt-4 text-base leading-8 text-white/64">
                The objective is cleaner service and stronger accountability,
                not just one more dashboard.
              </p>

              <div className="mt-8 grid gap-4">
                {solutionPillars.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.35rem] border border-white/10 bg-white/3 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <item.icon className="h-4.5 w-4.5 text-[#8fd8ff]" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white sm:text-lg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-white/62">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="roles">
            <div className="max-w-3xl">
              <span className="public-kicker">Role-based experience</span>
              <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
                Built for every person in the building.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">
                Every interface is shaped around the work that role needs to do
                now, not around generic menu structures.
              </p>
              <Link
                href="/products/restaurant-manager/experience"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d79a] transition-colors hover:text-white"
              >
                See Full Experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="resmg-mobile-carousel resmg-mobile-carousel-2 mt-10">
              {roleCards.map((item) => (
                <article
                  key={item.title}
                  className="resmg-mobile-card public-panel public-card-outline rounded-[1.75rem] p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <item.icon className="h-5 w-5 text-[#f3d79a]" />
                  </div>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8fd8ff]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/62 sm:text-base">
                    {item.copy}
                  </p>

                  <div className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                          <Check className="h-3.5 w-3.5 text-[#f3d79a]" />
                        </div>
                        <p className="text-sm leading-7 text-white/66">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="integrations">
            <div className="max-w-3xl">
              <span className="public-kicker">Integrations and confidence</span>
              <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
                Enterprise-aware architecture grounded in local realities.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">
                The platform is designed to keep service quality high during
                pressure, while still supporting structured finance and upstream
                systems.
              </p>
            </div>

            <div className="resmg-mobile-carousel resmg-mobile-carousel-4 mt-10">
              {integrations.map((item) => (
                <article
                  key={item.title}
                  className="resmg-mobile-card public-panel public-card-outline rounded-[1.6rem] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <item.icon className="h-5 w-5 text-[#8fd8ff]" />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/38">
                    {item.tag}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {confidenceSignals.map((item) => (
                <article
                  key={item.label}
                  className="public-panel rounded-[1.35rem] border border-white/10 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <item.icon className="h-4.5 w-4.5 text-[#f3d79a]" />
                  </div>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/82">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/62">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="pricing">
            <div className="max-w-3xl">
              <span className="public-kicker">Transparent pricing</span>
              <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
                Choose the level of control your operation actually needs.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">
                Monthly subscription covers the platform. Implementation,
                training, and rollout support are scoped separately with clear
                deliverables.
              </p>
            </div>

            <div className="resmg-pricing-carousel mt-10">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`resmg-pricing-card rounded-[1.9rem] p-px ${
                    plan.featured
                      ? "bg-[linear-gradient(135deg,rgba(243,215,154,0.95),rgba(143,216,255,0.9))]"
                      : "bg-white/10"
                  }`}
                >
                  <div
                    className={`h-full rounded-[1.85rem] p-6 sm:p-7 ${
                      plan.featured
                        ? "bg-[linear-gradient(180deg,rgba(16,20,26,0.98),rgba(8,11,16,0.94))]"
                        : "bg-[linear-gradient(180deg,rgba(14,18,24,0.92),rgba(7,10,15,0.84))]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
                          plan.featured
                            ? "bg-[#f3d79a] text-slate-950"
                            : "border border-white/10 bg-white/4 text-white/70"
                        }`}
                      >
                        {plan.featured ? "Most Popular" : plan.name}
                      </span>
                      {plan.featured ? (
                        <BadgeCheck className="h-5 w-5 text-[#f3d79a]" />
                      ) : null}
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">
                      {plan.description}
                    </p>

                    <div className="mt-6">
                      <p className="text-4xl font-semibold text-white">
                        {plan.price}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/40">
                        {plan.note}
                      </p>
                    </div>

                    <div className="mt-8 space-y-3">
                      {plan.features.map((feature) => (
                        <div
                          key={feature.label}
                          className="flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-white/3 px-4 py-3"
                        >
                          <div className="mt-0.5 flex h-5 w-5 items-center justify-center">
                            {feature.included ? (
                              <Check className="h-4 w-4 text-emerald-300" />
                            ) : (
                              <X className="h-4 w-4 text-white/35" />
                            )}
                          </div>
                          <span
                            className={`text-sm leading-7 ${
                              feature.included
                                ? "text-white/72"
                                : "text-white/35"
                            }`}
                          >
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#demo-form"
                      className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-sm font-semibold transition-colors ${
                        plan.featured
                          ? "bg-[linear-gradient(135deg,#f3d79a,#8fd8ff)] text-slate-950"
                          : "border border-white/10 bg-white/4 text-white hover:border-white/20"
                      }`}
                    >
                      {plan.featured ? "Book a Demo" : "Talk to GTSS"}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="public-panel mt-6 rounded-[1.55rem] p-6">
              <p className="text-sm leading-7 text-white/64">
                <strong className="text-white">
                  One-time implementation fee applies to all plans.
                </strong>{" "}
                Standard rollout usually includes deployment, local router
                configuration, staff training, and a 30-day offline pilot option
                where required.
              </p>
            </div>
          </section>

          <section>
            <div className="max-w-3xl">
              <span className="public-kicker">From the floor</span>
              <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
                What operators tend to say after month one.
              </h2>
            </div>

            <div className="resmg-mobile-carousel resmg-mobile-carousel-3 mt-10">
              {testimonials.map((item) => (
                <article
                  key={item.author}
                  className="resmg-mobile-card public-panel public-card-outline rounded-[1.7rem] p-6 sm:p-7"
                >
                  <div className="flex items-center gap-1 text-[#FFD700]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={`${item.author}-${index}`}>★</span>
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-8 text-white/68">
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-semibold text-white">{item.author}</p>
                    <p className="mt-1 text-sm text-white/50">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="public-panel-strong public-card-outline rounded-4xl p-5 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="max-w-2xl">
                <span className="public-kicker">Ready to stop the leaks?</span>
                <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
                  Get GTSS running in your restaurant this month.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">
                  Fill out the form and we&apos;ll set up a live demo or a
                  30-day offline pilot so you can see exactly how GTSS
                  Restaurant Manager behaves in a real hospitality environment.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Live demo walkthrough",
                    "Deployment guidance",
                    "Pilot options for your site",
                    "Response within 24 hours",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-white/10 bg-white/3 px-4 py-4 text-sm text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <RestaurantManagerLeadForm />
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .resmg-page {
          isolation: isolate;
        }

        .resmg-halo {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
          filter: blur(58px);
          opacity: 0.5;
          z-index: 0;
        }

        .resmg-halo-a {
          width: 300px;
          height: 300px;
          top: 80px;
          left: -60px;
          background: radial-gradient(
            circle,
            rgba(243, 215, 154, 0.44),
            rgba(243, 215, 154, 0)
          );
        }

        .resmg-halo-b {
          width: 360px;
          height: 360px;
          right: -90px;
          top: 480px;
          background: radial-gradient(
            circle,
            rgba(143, 216, 255, 0.34),
            rgba(143, 216, 255, 0)
          );
        }

        .resmg-scroll-nav,
        .resmg-mobile-carousel,
        .resmg-pricing-carousel,
        .resmg-mobile-flow {
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }

        .resmg-scroll-nav::-webkit-scrollbar,
        .resmg-mobile-carousel::-webkit-scrollbar,
        .resmg-pricing-carousel::-webkit-scrollbar,
        .resmg-mobile-flow::-webkit-scrollbar {
          display: none;
        }

        .resmg-scroll-nav {
          gap: 0.6rem;
          padding-bottom: 0.2rem;
        }

        .resmg-nav-link {
          white-space: nowrap;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.6rem 0.88rem;
          transition:
            border-color 0.25s ease,
            background-color 0.25s ease,
            color 0.25s ease;
        }

        .resmg-nav-link:hover {
          border-color: rgba(243, 215, 154, 0.5);
          background: rgba(243, 215, 154, 0.1);
          color: rgba(255, 255, 255, 0.96);
        }

        .resmg-title-accent {
          margin-top: 0.4rem;
          background: linear-gradient(
            135deg,
            rgba(243, 215, 154, 0.98),
            rgba(143, 216, 255, 0.96)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .resmg-lane {
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 20px 60px -46px rgba(0, 0, 0, 0.95);
        }

        .resmg-shine::after {
          content: "";
          position: absolute;
          top: -35%;
          left: -38%;
          width: 62%;
          height: 220%;
          transform: rotate(20deg);
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.07),
            rgba(255, 255, 255, 0)
          );
          pointer-events: none;
          animation: resmgShine 8s linear infinite;
        }

        .resmg-mobile-carousel,
        .resmg-pricing-carousel,
        .resmg-mobile-flow {
          gap: 1rem;
          padding-bottom: 0.35rem;
        }

        .resmg-mobile-card,
        .resmg-flow-card {
          min-width: 86%;
          scroll-snap-align: start;
        }

        .resmg-pricing-card {
          min-width: 92%;
          scroll-snap-align: start;
        }

        @keyframes resmgShine {
          0% {
            left: -38%;
          }
          100% {
            left: 138%;
          }
        }

        @media (min-width: 640px) {
          .resmg-halo-a {
            width: 400px;
            height: 400px;
          }

          .resmg-halo-b {
            width: 480px;
            height: 480px;
          }

          .resmg-mobile-card,
          .resmg-flow-card {
            min-width: 66%;
          }

          .resmg-pricing-card {
            min-width: 62%;
          }
        }

        @media (min-width: 768px) {
          .resmg-mobile-carousel,
          .resmg-pricing-carousel,
          .resmg-mobile-flow {
            display: grid;
            overflow: visible;
            scroll-snap-type: none;
          }

          .resmg-mobile-carousel-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .resmg-mobile-carousel-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .resmg-mobile-carousel-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .resmg-mobile-flow {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .resmg-pricing-carousel {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .resmg-mobile-card,
          .resmg-flow-card,
          .resmg-pricing-card {
            min-width: 0;
          }
        }

        @media (min-width: 1100px) {
          .resmg-pricing-carousel {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .resmg-mobile-carousel-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .resmg-mobile-carousel-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .resmg-shine::after {
            animation: none;
          }

          .resmg-nav-link {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
