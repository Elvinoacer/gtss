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
} from "lucide-react";

import { RestaurantManagerLeadForm } from "./RestaurantManagerLeadForm";

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
              <Link href="/products/restaurant-manager/experience" className="public-button-primary px-8 py-5 text-lg">
                EXPLORE EXPERIENCE
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="#demo-form" className="public-button-secondary px-8 py-5 text-lg border-white/10 hover:bg-white/5">
                BOOK A DEMO
              </a>
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
              When the cloud goes down, your operation shouldn't. Traditional POS systems leave staff blind and guests frustrated during outages. Manual tickets lead to errors, lost revenue, and damaged trust.
            </p>
            <div className="mt-8 grid gap-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <Zap className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Loss of Visibility</h4>
                  <p className="text-sm text-white/50">Managers can't track occupancy or revenue in real-time during drops.</p>
                </div>
              </div>
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
              We deploy a dedicated local server on your premises. All orders, payments, and kitchen alerts run on your local network instantly. When the internet returns, GTSS automatically syncs everything to the cloud and your ERP.
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
            <div className="mt-10 space-y-4">
               <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-[var(--gold)]" />
                  <span className="text-white/80">0s Login Time for Guests</span>
               </div>
               <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[var(--gold)]" />
                  <span className="text-white/80">Audit Confidence & Integrity</span>
               </div>
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

        {/* Lead Form Section */}
        <section id="demo-form" className="scroll-mt-32">
          <div className="public-panel-strong public-card-outline rounded-4xl p-6 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
              <div>
                <span className="public-kicker text-[var(--gold)]">Secure Access</span>
                <h2 className="text-4xl font-bold text-white mt-4">INITIALIZE <br />DEPLOYMENT.</h2>
                <p className="mt-6 text-white/50 leading-relaxed">
                  Ready to secure your restaurant's infrastructure? Fill out the form and our team will reach out for a full system audit.
                </p>
              </div>
              <div>
                <RestaurantManagerLeadForm />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
