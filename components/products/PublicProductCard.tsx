import { ArrowUpRight, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PublicProductCardProps {
  id: string;
  name: string;
  description: string | null;
  tagline?: string | null;
  category: string;
  pricing: string;
  pricingModel?: string | null;
  status: string;
  priceUSD?: number | null;
  priceKES?: number | null;
  logoUrl?: string | null;
  images?: string[];
}

function stripMarkdown(value: string | null | undefined) {
  if (!value) return "Advanced software module.";

  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[`*_>#~-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPrice(
  pricing: string,
  pricingModel: string | null | undefined,
  priceUSD: number | null | undefined,
  priceKES: number | null | undefined,
) {
  if (pricingModel === "free") return "Free";
  if (priceUSD != null) return `$${priceUSD}`;
  if (priceKES != null) return `KES ${priceKES.toLocaleString()}`;
  return pricing;
}

export function PublicProductCard({
  id,
  name,
  description,
  tagline,
  category,
  pricing,
  pricingModel,
  status,
  priceUSD,
  priceKES,
  logoUrl,
  images = [],
}: PublicProductCardProps) {
  const summary = stripMarkdown(tagline || description);
  const price = formatPrice(pricing, pricingModel, priceUSD, priceKES);

  return (
    <article className="group public-panel public-card-outline flex h-full flex-col overflow-hidden rounded-[1.2rem] transition-transform duration-300 hover:-translate-y-1 sm:rounded-[1.75rem]">
      <Link href={`/products/${id}`} className="flex h-full flex-col">
        <div className="relative h-36 overflow-hidden border-b border-white/10 bg-[#05080b] sm:h-60">
          {images[0] ? (
            <Image
              src={images[0]}
              alt={name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 100vw, 33vw"
              className="object-cover opacity-82 transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,154,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(143,216,255,0.20),transparent_28%),linear-gradient(180deg,#0b1117_0%,#05080b_100%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06090d] via-transparent to-transparent" />

          <div className="absolute left-3 top-3 flex items-center gap-2 sm:left-5 sm:top-5">
            <span className="rounded-full border border-white/10 bg-[#0a1117]/85 px-2 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-white/72 sm:px-3 sm:py-1.5 sm:text-[0.7rem] sm:tracking-[0.18em]">
              {category}
            </span>
          </div>

          <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-[#0a1117]/85 px-2 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-white/72 sm:right-5 sm:top-5 sm:px-3 sm:py-1.5 sm:text-[0.7rem] sm:tracking-[0.18em]">
            {status}
          </div>
        </div>

        <div className="relative -mt-6 px-3 sm:-mt-10 sm:px-6">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1rem] border border-white/10 bg-[#0a1117] shadow-[0_20px_45px_rgba(0,0,0,0.35)] sm:h-20 sm:w-20 sm:rounded-[1.5rem]">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            ) : (
              <Package className="h-5 w-5 text-[#f3d79a] sm:h-8 sm:w-8" />
            )}
          </div>
        </div>

        <div className="flex h-full flex-col px-3 pb-3 pt-2 sm:px-6 sm:pb-6 sm:pt-5">
          <div className="flex-1">
            <h3 className="text-sm font-semibold leading-tight text-white transition-colors group-hover:text-[#f8e4b7] sm:text-2xl">
              {name}
            </h3>
            <p className="mt-2 line-clamp-2 text-[0.68rem] leading-4 text-white/62 sm:mt-3 sm:line-clamp-3 sm:text-base sm:leading-7">
              {summary}
            </p>
          </div>

          <div className="mt-4 flex items-end justify-between gap-2 border-t border-white/10 pt-3 sm:mt-8 sm:gap-4 sm:pt-5">
            <div>
              <p className="text-[0.52rem] uppercase tracking-[0.14em] text-white/38 sm:text-xs sm:tracking-[0.2em]">
                Pricing
              </p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-xl">
                {price}
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors group-hover:border-white/20 group-hover:bg-white group-hover:text-slate-950 sm:h-12 sm:w-12 sm:rounded-2xl">
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
