import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { landingCTA } from "@/data/landing";

export function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 [content-visibility:auto] [contain-intrinsic-size:1px_800px]">
      <div className="mx-auto max-w-7xl">
        <div className="public-panel-strong public-card-outline relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-14">
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-[#8fd8ff]/18 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-[#f3d79a]/18 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <span className="public-kicker">
                <Sparkles className="h-4 w-4" />
                Next move
              </span>
              <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
                If the business is ready for a cleaner operating system,
                let&apos;s map it.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                {landingCTA.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Product audit", "Deployment plan", "Launch support"].map(
                  (item) => (
                    <span key={item} className="public-chip text-sm">
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:min-w-[240px]">
              <Link
                href={landingCTA.primaryCta.href}
                className="public-button-primary px-6 py-4 text-base"
              >
                {landingCTA.primaryCta.label}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={landingCTA.secondaryCta.href}
                className="public-button-secondary px-6 py-4 text-base"
              >
                {landingCTA.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
