import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  WifiOff,
  Server,
  Smartphone,
  FileWarning,
  BarChart3,
  Receipt,
  UserX,
  Clock,
  Wrench,
  Wifi,
  Quote,
  Check,
  PlayCircle,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "GTSS Restaurant Manager - Offline-First Hotel & POS System",
  description:
    "Offline-first restaurant and hotel operations platform for African hospitality with M-Pesa and Business Central integrations.",
};

export default function RestaurantManagerPage() {
  return (
    <div className="resmg-page relative px-3 pb-32 pt-8 sm:px-6 lg:px-8 lg:pt-10 bg-[var(--black)] text-[var(--text)]">
      <div className="resmg-halo resmg-halo-a" aria-hidden="true" />
      <div className="resmg-halo resmg-halo-b" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-32">
        
        {/* Hero Section: The Narrative Start */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <span className="public-kicker">The GTSS Story</span>
            <h1 className="public-section-title mt-6 text-5xl text-white sm:text-7xl lg:text-8xl">
              YOUR RESTAURANT <br />
              <span className="resmg-title-accent">NEVER STOPS.</span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-white/70 sm:text-xl">
              Even when the internet does. GTSS Restaurant Manager is built for the realities of local hospitality — where connectivity is a luxury, but service is non-negotiable.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/products/restaurant-manager/experience" className="public-button-primary px-8 py-5 text-lg w-full sm:w-auto text-center">
                EXPLORE THE EXPERIENCE
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image 
              src="/images/waiter_handheld_offline_pos_1777357237751.png" 
              alt="Waiter using GTSS Handheld" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/60 to-transparent"></div>
          </div>
        </section>

        {/* Section 01: The Chaos (The Problem) */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 relative aspect-video overflow-hidden rounded-3xl border border-white/10 opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity">
            <Image 
              src="/images/stressed_kitchen_system_failure_1777357211810.png" 
              alt="System Failure Chaos" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="flex flex-col items-center gap-4 text-red-400">
                <WifiOff className="h-12 w-12" />
                <span className="font-mono text-sm tracking-widest">CONNECTION_LOST</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 max-w-xl lg:pl-12">
            <h2 className="public-section-title text-4xl text-white sm:text-5xl">
              THE SILENT REVENUE KILLER.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              When the cloud goes down, your operation shouldn&apos;t. Traditional POS systems leave staff blind and guests frustrated during outages. Manual tickets lead to errors, lost revenue, and damaged trust.
            </p>
            <div className="mt-8 grid gap-5">
              {[
                { icon: Zap, title: "Loss of Visibility", desc: "Managers can't track occupancy or revenue in real-time during drops. You're flying blind." },
                { icon: UserX, title: "Staff Errors & Theft", desc: "Paper tickets are untraceable. Discrepancies between the kitchen and the till go unnoticed until it's too late." },
                { icon: Receipt, title: "Reconciliation Chaos", desc: "M-Pesa vs cash vs till never match at end of day. Hours lost chasing numbers that should reconcile themselves." },
                { icon: WifiOff, title: "Lost Orders During Outages", desc: "Guests who walked out because their order got lost when the internet dropped. Revenue you'll never recover." },
                { icon: BarChart3, title: "No Data to Decide", desc: "What's selling? Who's performing? Where are you bleeding money? Without data, you're guessing." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <item.icon className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/products/restaurant-manager/experience" className="public-button-secondary px-8 py-4 text-base border-white/10 hover:bg-white/5 inline-flex">
                <PlayCircle className="h-5 w-5 mr-2 text-[var(--gold)]" />
                SEE HOW WE FIX THIS
              </Link>
            </div>
          </div>
        </section>

        {/* Section 02: The Local Core (The Solution) */}
        <section className="bg-white/3 border border-white/5 rounded-[3rem] p-8 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Server className="h-64 w-64" />
          </div>
          <div className="max-w-3xl relative z-10">
            <span className="public-kicker">The Architecture</span>
            <h2 className="public-section-title mt-6 text-4xl text-white sm:text-6xl">
              LOCAL FIRST, <br />
              <span className="resmg-title-accent">CLOUD SECOND.</span>
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-white/70">
              Your restaurant runs on its own engine — so you&apos;re never at the mercy of your ISP, your cloud provider, or a Safaricom outage. We deploy a dedicated local server on your premises. All orders, payments, and kitchen alerts run instantly on your local network. When internet returns, everything syncs automatically to the cloud and your ERP.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
                <h4 className="text-xl font-bold text-white mb-2">100% Uptime</h4>
                <p className="text-sm text-white/50">Service continues uninterrupted even if your ISP fails completely.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
                <h4 className="text-xl font-bold text-white mb-2">Instant Sync</h4>
                <p className="text-sm text-white/50">Seamless M-Pesa reconciliation and Business Central integration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="p-8 lg:p-12 rounded-[2rem] border border-white/8 bg-white/[0.02]">
              <Quote className="mx-auto h-10 w-10 text-[var(--gold)] opacity-40 mb-6" />
              <blockquote className="text-xl sm:text-2xl leading-relaxed text-white/85 italic">
                &ldquo;Orders used to get lost every time the internet dropped. With GTSS, the kitchen keeps running regardless. We stopped losing revenue we didn&apos;t even know we were losing.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[#8fd8ff] flex items-center justify-center text-black font-bold text-sm">JK</div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">James K.</p>
                  <p className="text-xs text-white/50">Nairobi Grand Hotel · Pilot Customer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works — 3 Steps */}
        <section>
          <div className="text-center mb-12">
            <span className="public-kicker">How It Works</span>
            <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
              LIVE IN <span className="resmg-title-accent">THREE STEPS.</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { step: "01", icon: Wrench, title: "We deploy your local server", desc: "Our team sets it up on-site. Takes one day. No IT team required on your end." },
              { step: "02", icon: Clock, title: "Staff go live on day 2", desc: "Waiters, kitchen, and admin are all trained and running. We don't leave until you're confident." },
              { step: "03", icon: Wifi, title: "Internet syncs automatically", desc: "Your ERP always has clean, reconciled data. Cloud and local stay perfectly in sync." },
            ].map((item) => (
              <div key={item.step} className="relative p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-[var(--gold)] tracking-widest">{item.step}</span>
                  <item.icon className="h-5 w-5 text-white/40" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center flex flex-col items-center">
            <p className="text-sm text-white/40 mb-6">That&apos;s it. No IT team required. No downtime.</p>
            <Link href="/products/restaurant-manager/experience" className="public-button-secondary px-8 py-4 text-base border-white/10 hover:bg-white/5 inline-flex">
              <PlayCircle className="h-5 w-5 mr-2 text-[var(--gold)]" />
              EXPLORE THE FLOW
            </Link>
          </div>
        </section>

        {/* Section 03: The Experience (The Benefit) */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <h2 className="public-section-title text-4xl text-white sm:text-5xl">
              SMOOTH FOR GUESTS. <br />
              POWERFUL FOR STAFF.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Guests scan a QR code and order from their own phones. No app downloads. No logins. Just instant service. Waiters get alerts where they are, and kitchen staff stay focused on the next ticket.
            </p>
            <div className="mt-10 space-y-5">
              {[
                { icon: Smartphone, text: "Your guests order in 60 seconds flat — no app, no login, just scan and go." },
                { icon: ShieldCheck, text: "No more paper tickets. No more fraud. Every order is tracked, timestamped, and audited." },
                { icon: Receipt, text: "Reconcile M-Pesa automatically — close the books in minutes, not hours." },
                { icon: WifiOff, text: "Your kitchen never misses a ticket — even when the internet does." },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15">
                    <item.icon className="h-3.5 w-3.5 text-[var(--gold)]" />
                  </div>
                  <span className="text-white/80 text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10">
            <Image 
              src="/images/guest_qr_scan_menu_1777357267301.png" 
              alt="Guest QR Scan" 
              fill 
              className="object-cover"
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <div className="text-center mb-12">
            <span className="public-kicker">Transparent Pricing</span>
            <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
              PLANS THAT <span className="resmg-title-accent">SCALE WITH YOU.</span>
            </h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">From a single cafe to a hotel chain. Pick the plan that fits — upgrade anytime.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Core Plan */}
            <div className="p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
              <p className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">GTSS Core</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$40</span>
                <span className="text-sm text-white/40">/mo</span>
              </div>
              <p className="mt-2 text-sm text-white/50">Cafes & small restaurants</p>
              <div className="mt-6 space-y-3">
                {["Local server included", "Guest QR ordering", "Kitchen display board", "M-Pesa integration", "Daily CSV exports"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="h-4 w-4 text-[var(--gold)] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            {/* Pro Plan */}
            <div className="relative p-6 lg:p-8 rounded-2xl border border-[var(--gold)]/40 bg-[var(--gold)]/[0.04] shadow-[0_0_60px_-30px_rgba(232,184,75,0.3)]">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[var(--gold)] text-black text-[10px] font-bold tracking-widest uppercase">Most Popular</div>
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--gold)] uppercase">GTSS Pro</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$100</span>
                <span className="text-sm text-white/40">/mo</span>
              </div>
              <p className="mt-2 text-sm text-white/50">Busy restaurants & boutique hotels</p>
              <div className="mt-6 space-y-3">
                {["Everything in Core", "Multi-floor support", "Staff accountability & tracking", "Commission reconciliation", "Live occupancy view", "Unlimited tables"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="h-4 w-4 text-[var(--gold)] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            {/* Nexus Plan */}
            <div className="p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
              <p className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">GTSS Nexus</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$250+</span>
                <span className="text-sm text-white/40">/mo</span>
              </div>
              <p className="mt-2 text-sm text-white/50">Large hotels & chains</p>
              <div className="mt-6 space-y-3">
                {["Everything in Pro", "Multi-branch management", "ERP & Business Central sync", "Priority support SLA", "Custom integrations"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="h-4 w-4 text-[var(--gold)] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Push to Experience CTA Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,184,75,0.15),transparent_70%)]"></div>
          <div className="public-panel-strong public-card-outline rounded-4xl p-10 lg:p-16 text-center relative z-10">
            <span className="public-kicker text-[var(--gold)] mb-6">Interactive Tour</span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              SEE GTSS IN YOUR<br />REAL SERVICE FLOW.
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed max-w-2xl mx-auto text-lg mb-10">
              Stop guessing if the software will work for your team. Take our interactive journey through the eyes of a Guest, Waiter, Kitchen, and Admin.
            </p>
            <div className="flex flex-col items-center justify-center gap-6">
              <Link href="/products/restaurant-manager/experience" className="public-button-primary px-10 py-5 text-xl w-full sm:w-auto shadow-[0_0_40px_rgba(232,184,75,0.4)]">
                ENTER THE EXPERIENCE
                <ArrowRight className="h-6 w-6" />
              </Link>
              <p className="text-xs tracking-[0.15em] text-white/40 font-mono uppercase">
                35+ Screens · Full System Flow · Real UI
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
