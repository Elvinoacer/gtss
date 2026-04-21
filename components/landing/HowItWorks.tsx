import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { landingHowItWorks } from "@/data/landing";

export function HowItWorks() {
  return (
    <section
      className="relative px-4 py-20 sm:px-6 lg:px-8 [content-visibility:auto] [contain-intrinsic-size:1px_1000px]"
      id="how-it-works"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-3xl">
          <span className="public-kicker">How we deliver</span>
          <h2 className="public-section-title mt-5 text-4xl text-white sm:text-5xl">
            A rollout process that respects both speed and polish.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            GTSS combines ready-made software leverage with enough deployment
            attention to make the finished product feel deliberate instead of
            improvised.
          </p>
        </div>

        {landingHowItWorks.map((row, index) => (
          <div
            key={row.title}
            className={`grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.025] p-4 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8 ${
              row.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="public-panel-strong relative overflow-hidden rounded-[1.75rem] p-3">
              <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#f3d79a]/18 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.24em] text-white/40">
                  <span>Step 0{index + 1}</span>
                  <span>GTSS delivery</span>
                </div>
                <div className="relative aspect-[16/11]">
                  <Image
                    src={row.image}
                    alt={row.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-82"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050709] via-transparent to-transparent" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8fd8ff]">
                Step 0{index + 1}
              </span>
              <h3 className="public-section-title text-3xl text-white sm:text-4xl">
                {row.title}
              </h3>
              <p className="text-base leading-8 text-white/65 sm:text-lg">
                {row.description}
              </p>

              {row.items && row.items.length > 0 ? (
                <ul className="mt-2 flex flex-col gap-3">
                  {row.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <Check className="h-4 w-4 text-[#f3d79a]" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {row.cta ? (
                <Link
                  href={row.ctaHref || "#"}
                  className="mt-4 flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d79a] transition-colors hover:text-white"
                >
                  {row.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
