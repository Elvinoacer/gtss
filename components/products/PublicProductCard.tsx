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
  if (pricingModel === "free") return "FREE_ACCESS";
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
  const isPharmacy =
    name.toLowerCase().includes("pharmacy") ||
    name.toLowerCase().includes("pharmacare") ||
    id === "cmkwhlte000004hlth9001gtss" ||
    id === "pharmacy-platform" ||
    id === "pharmacy";
  const isRestaurantManager =
    name.toLowerCase().includes("restaurant") ||
    id === "cmkwglu7u000004jv50w2cmcj" ||
    id === "restaurant-manager";
  const href = isPharmacy
    ? "/products/pharmacy"
    : isRestaurantManager
    ? "/products/restaurant-manager"
    : `/products/${id}`;

  return (
    <article className="group relative border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-xl transition-all duration-500 hover:border-[var(--border-bright)] hover:shadow-[var(--glow-gold-dim)] overflow-hidden">
      <Link href={href} className="flex flex-col cursor-none">
        {/* Visual Feed */}
        <div className="relative h-48 overflow-hidden border-b border-[var(--border)]">
          {images[0] ? (
            <Image
              src={images[0]}
              alt={name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 100vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
            />
          ) : (
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.02)]" />
          )}
          
          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent opacity-60" />

          {/* Tags */}
          <div className="absolute top-4 left-4 font-mono-dm text-[8px] tracking-[0.2em] border border-[var(--gold-dim)] px-2 py-1 bg-[var(--black)] text-[var(--gold)] uppercase z-10">
            {category}
          </div>
          
          <div className="absolute top-4 right-4 font-mono-dm text-[8px] tracking-[0.2em] bg-[var(--gold-dim)] text-[var(--black)] px-2 py-1 uppercase z-10 opacity-70 group-hover:opacity-100 transition-opacity">
            {status}
          </div>
          
          {/* Product Logo Overlay */}
          <div className="absolute bottom-4 left-4 w-12 h-12 border border-[var(--border)] bg-[var(--black)] p-1 z-10 transition-transform group-hover:scale-110">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={name}
                width={48}
                height={48}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <Package className="h-5 w-5 text-[var(--gold-dim)]" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bebas text-3xl text-[var(--text)] group-hover:text-[var(--gold)] transition-colors tracking-wide">
              {name}
            </h3>
            <div className="p-2 border border-[var(--border)] text-[var(--gold-dim)] group-hover:bg-[var(--gold)] group-hover:text-[var(--black)] transition-all">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          
          <p className="font-rajdhani text-base text-[var(--text-muted)] line-clamp-2 mb-6 leading-snug">
            {summary}
          </p>

          <div className="pt-4 border-t border-[var(--border)] flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-50 mb-1">UNIT_VALUATION</span>
              <span className="font-rajdhani text-lg font-bold text-[var(--text)] tracking-tight uppercase">{price}</span>
            </div>
            
            <div className="font-mono-dm text-[8px] tracking-[0.1em] text-[var(--gold-dim)] opacity-30">
              ID: {id.slice(0, 8).toUpperCase()}
            </div>
          </div>
        </div>
        
        {/* Card Accents */}
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Link>
    </article>
  );
}
