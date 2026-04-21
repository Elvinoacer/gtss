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
    <header className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-18 lg:pt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <span className="public-kicker">Product ecosystem</span>
          <h1 className="public-section-title mt-6 text-5xl text-white sm:text-6xl">
            Systems built to carry serious day-to-day operations.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
            Explore GTSS products spanning hospitality, internal operations,
            commerce, and business infrastructure. The portfolio is designed to
            feel premium on the surface and dependable when the work gets messy.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Offline-ready where it counts",
              "Deployment included",
              "Built for African operators",
            ].map((item) => (
              <span key={item} className="public-chip text-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="public-button-primary px-6 py-4 text-base"
            >
              Request a Product Walkthrough
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="public-button-secondary px-6 py-4 text-base"
            >
              See how GTSS delivers
            </Link>
          </div>
        </div>

        <div className="public-panel-strong public-card-outline rounded-[2rem] p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
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
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <item.icon className="h-5 w-5 text-[#f3d79a]" />
                </div>
                <p className="mt-5 text-3xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/40">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(243,215,154,0.10),rgba(143,216,255,0.08))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
              Portfolio notes
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              Each product is positioned to reduce friction, raise perceived
              quality, and improve operator confidence.
            </p>
            <p className="mt-3 text-sm leading-7 text-white/62">
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
