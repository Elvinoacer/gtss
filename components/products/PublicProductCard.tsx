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
    <article className="group public-panel public-card-outline flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/products/${id}`} className="flex h-full flex-col">
        <div className="relative h-60 overflow-hidden border-b border-white/10 bg-[#05080b]">
          {images[0] ? (
            <Image
              src={images[0]}
              alt={name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover opacity-82 transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,154,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(143,216,255,0.20),transparent_28%),linear-gradient(180deg,#0b1117_0%,#05080b_100%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06090d] via-transparent to-transparent" />

          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="rounded-full border border-white/10 bg-[#0a1117]/85 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/72">
              {category}
            </span>
          </div>

          <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-[#0a1117]/85 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/72">
            {status}
          </div>
        </div>

        <div className="relative -mt-10 px-6">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a1117] shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            ) : (
              <Package className="h-8 w-8 text-[#f3d79a]" />
            )}
          </div>
        </div>

        <div className="flex h-full flex-col px-6 pb-6 pt-5">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-[#f8e4b7]">
              {name}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/62 sm:text-base">
              {summary}
            </p>
          </div>

          <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/38">
                Pricing
              </p>
              <p className="mt-1 text-xl font-semibold text-white">{price}</p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition-colors group-hover:border-white/20 group-hover:bg-white group-hover:text-slate-950">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
