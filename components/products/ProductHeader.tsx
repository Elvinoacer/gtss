import { ArrowRight, Boxes, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProductHeaderProps {
  categoryCount: number;
  liveCount: number;
  productCount: number;
}

export function ProductHeader({
  categoryCount,
  liveCount,
  productCount,
}: ProductHeaderProps) {
  return (
    <header className="relative overflow-hidden px-3 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-18 lg:pt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <span className="public-kicker">Product ecosystem</span>
          <h1 className="public-section-title mt-5 text-3xl text-white sm:mt-6 sm:text-5xl lg:text-6xl">
            Systems built to carry serious day-to-day operations.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/66 sm:mt-5 sm:text-lg sm:leading-8">
            Explore GTSS products spanning hospitality, internal operations,
            commerce, and business infrastructure. The portfolio is designed to
            feel premium on the surface and dependable when the work gets messy.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
            {[
              "Offline-ready where it counts",
              "Deployment included",
              "Built for African operators",
            ].map((item) => (
              <span key={item} className="public-chip text-[0.68rem] sm:text-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="public-button-primary px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base"
            >
              Request a Product Walkthrough
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="public-button-secondary px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base"
            >
              See how GTSS delivers
            </Link>
          </div>
        </div>

        <div className="public-panel-strong public-card-outline rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {[
              {
                label: "Products",
                value: String(productCount),
                icon: Boxes,
              },
              {
                label: "Live systems",
                value: String(liveCount),
                icon: ShieldCheck,
              },
              {
                label: "Categories",
                value: String(categoryCount),
                icon: Sparkles,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3 sm:rounded-[1.5rem] sm:p-5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-11 sm:w-11 sm:rounded-2xl">
                  <item.icon className="h-4 w-4 text-[#f3d79a] sm:h-5 sm:w-5" />
                </div>
                <p className="mt-3 text-lg font-semibold text-white sm:mt-5 sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[0.55rem] uppercase tracking-[0.14em] text-white/40 sm:text-xs sm:tracking-[0.22em]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(243,215,154,0.10),rgba(143,216,255,0.08))] p-4 sm:mt-4 sm:rounded-[1.75rem] sm:p-6">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-xs sm:tracking-[0.24em]">
              Portfolio notes
            </p>
            <p className="mt-2 text-base font-semibold text-white sm:mt-3 sm:text-lg">
              Each product is positioned to reduce friction, raise perceived
              quality, and improve operator confidence.
            </p>
            <p className="mt-2 text-xs leading-6 text-white/62 sm:mt-3 sm:text-sm sm:leading-7">
              Browse the catalog by operational fit, compare delivery patterns,
              and open a product page for the deeper architecture and resource
              view.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
