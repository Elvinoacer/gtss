import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { landingHowItWorks } from "@/data/landing";

export function HowItWorks() {
  return (
    <section
      className="relative px-3 py-14 sm:px-6 sm:py-20 lg:px-8 [content-visibility:auto] [contain-intrinsic-size:1px_1000px]"
      id="how-it-works"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10">
        <div className="max-w-3xl">
          <span className="public-kicker">How we deliver</span>
          <h2 className="public-section-title mt-4 text-2xl text-white sm:mt-5 sm:text-4xl lg:text-5xl">
            A rollout process that respects both speed and polish.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:mt-5 sm:text-lg sm:leading-8">
            GTSS combines ready-made software leverage with enough deployment
            attention to make the finished product feel deliberate instead of
            improvised.
          </p>
        </div>

        {landingHowItWorks.map((row, index) => (
          <div
            key={row.title}
            className={`grid items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-3 sm:gap-8 sm:rounded-[2rem] sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8 ${
              row.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="public-panel-strong relative overflow-hidden rounded-[1.15rem] p-2.5 sm:rounded-[1.75rem] sm:p-3">
              <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#f3d79a]/18 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1rem] border border-white/10 sm:rounded-[1.4rem]">
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-[0.58rem] uppercase tracking-[0.16em] text-white/40 sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.24em]">
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

            <div className="flex flex-col gap-4 sm:gap-5">
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#8fd8ff] sm:text-xs sm:tracking-[0.24em]">
                Step 0{index + 1}
              </span>
              <h3 className="public-section-title text-xl text-white sm:text-3xl lg:text-4xl">
                {row.title}
              </h3>
              <p className="text-sm leading-6 text-white/65 sm:text-lg sm:leading-8">
                {row.description}
              </p>

              {row.items && row.items.length > 0 ? (
                <ul className="mt-1 flex flex-col gap-2 sm:mt-2 sm:gap-3">
                  {row.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-white/70 sm:gap-3 sm:text-base"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-7 sm:w-7">
                        <Check className="h-3.5 w-3.5 text-[#f3d79a] sm:h-4 sm:w-4" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {row.cta ? (
                <Link
                  href={row.ctaHref || "#"}
                  className="mt-3 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f3d79a] transition-colors hover:text-white sm:mt-4 sm:text-sm sm:tracking-[0.2em]"
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
