import {
  Activity,
  ArrowRight,
  Banknote,
  Globe,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { landingHero } from "@/data/landing";

export function Hero() {
  const stats = [
    { value: "50+", label: "systems shipped", icon: Sparkles },
    { value: "99.95%", label: "target service continuity", icon: ShieldCheck },
    { value: "3 weeks", label: "average rollout window", icon: Globe },
  ];

  const operatingLanes = [
    {
      title: "Hospitality Command",
      detail: "Offline ordering, KDS, waiter workflows, and M-Pesa settlement.",
    },
    {
      title: "Commercial Experience",
      detail: "Customer journeys, storefronts, internal tooling, and reporting.",
    },
  ];

  const proofPoints = [
    { label: "Deployment", value: "Scoped, configured, and trained" },
    { label: "Payments", value: "Cash, card, M-Pesa, and ERP-ready flows" },
    { label: "Support", value: "Real humans who stay close after launch" },
  ];

  return (
    <section className="relative w-full overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="mx-auto flex max-w-2xl flex-col gap-8 text-center lg:mx-0 lg:text-left">
            <span className="public-kicker mx-auto lg:mx-0">
              Premium systems for high-friction operations
            </span>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[#8fd8ff]">
                <Zap className="h-4 w-4" />
                GTSS builds software that is elegant in front of customers and
                ruthlessly practical behind the scenes.
              </div>

              <h1 className="public-section-title text-5xl text-white sm:text-6xl xl:text-7xl">
                Systems that make ambitious businesses
                <span className="block bg-gradient-to-r from-[#f8e4b7] via-white to-[#8fd8ff] bg-clip-text text-transparent">
                  look expensive and run smoothly.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                {landingHero.description}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href={landingHero.primaryCta.href}
                className="public-button-primary px-6 py-4 text-base"
              >
                {landingHero.primaryCta.label}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={landingHero.secondaryCta.href}
                className="public-button-secondary px-6 py-4 text-base"
              >
                {landingHero.secondaryCta.label}
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {proofPoints.map((item) => (
                <div key={item.label} className="public-chip text-sm">
                  <span className="font-semibold text-white">{item.label}</span>
                  <span className="text-white/55">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="public-stat text-left">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <stat.icon className="h-5 w-5 text-[#f3d79a]" />
                  </div>
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/42">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-x-6 -top-6 h-24 rounded-full bg-[#f3d79a]/22 blur-3xl" />
            <div className="public-panel-strong public-card-outline relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,215,154,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(143,216,255,0.18),transparent_26%)]" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#06090d]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.24em] text-white/42">
                  <span>GTSS Overview</span>
                  <span>Live product studio</span>
                </div>
                <div className="relative aspect-[5/4]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#06090d] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 top-0 z-10 flex flex-wrap gap-2 px-4 py-4">
                    {["Offline-first", "M-Pesa ready", "Deployment included"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-[#0b1117]/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/72"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                  <Image
                    src={landingHero.image}
                    alt="GTSS platform preview"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-78"
                  />
                </div>
              </div>

              <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
                {operatingLanes.map((lane, index) => (
                  <div
                    key={lane.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.22em] text-white/42">
                        Lane 0{index + 1}
                      </span>
                      {index === 0 ? (
                        <Banknote className="h-4 w-4 text-[#f3d79a]" />
                      ) : (
                        <Activity className="h-4 w-4 text-[#8fd8ff]" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {lane.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/62">
                      {lane.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-4 right-4 rounded-[1.5rem] border border-white/10 bg-[#0d131b]/95 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10">
                    <Users className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      Hands-on rollout
                    </p>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Product, training, and support in one motion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
