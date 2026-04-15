import { ArrowUpRight, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { getIcon } from '@/lib/icons';

interface PublicProductCardProps {
  id: string;
  name: string;
  description: string | null;
  tagline?: string | null;
  category: string;
  pricing: string;
  pricingModel?: string;
  status: string;
  icon: string;
  priceUSD?: number | null;
  priceKES?: number | null;
  logoUrl?: string | null;
  images?: string[];
}

function stripMarkdown(value: string | null | undefined) {
  if (!value) return 'Advanced software module.';

  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[`*_>#~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
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
  icon,
  priceUSD,
  priceKES,
  logoUrl,
  images = [],
}: PublicProductCardProps) {
  const ProductIcon = getIcon(icon);

  const getStatusStyles = (currentStatus: string) => {
    switch (currentStatus?.toLowerCase()) {
      case 'live':
        return {
          bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.2)]',
          dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]',
        };
      case 'beta':
        return {
          bg: 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.2)]',
          dot: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]',
        };
      default:
        return {
          bg: 'bg-slate-500/10 border-slate-500/30 text-slate-400',
          dot: 'bg-slate-400',
        };
    }
  };

  const statusStyle = getStatusStyles(status);
  const gradients = [
    'from-blue-600 via-indigo-600 to-purple-600',
    'from-emerald-500 via-teal-500 to-cyan-600',
    'from-orange-500 via-rose-500 to-pink-600',
    'from-fuchsia-600 via-purple-600 to-blue-600',
    'from-cyan-500 via-blue-500 to-indigo-600',
  ];
  const gradientClass = gradients[(name?.charCodeAt(0) || 0) % gradients.length];
  const summary = stripMarkdown(tagline || description);

  return (
    <article className="group relative h-full flex flex-col rounded-[2rem] bg-[#0F172A]/80 backdrop-blur-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <Link href={`/products/${id}`} className="flex flex-col h-full relative z-10 w-full">
        <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-white/5">
          {images[0] ? (
            <div className="relative w-full h-full">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent pointer-events-none" />
              <Image
                src={images[0]}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          ) : (
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] z-10 pointer-events-none" />
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-20 pointer-events-none`} />
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] transform perspective-[500px] rotateX-[60deg] scale-[2] origin-bottom animate-[pulse_4s_ease-in-out_infinite] pointer-events-none" />
              <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-white/5 pointer-events-none" />
            </div>
          )}

          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-xl ${statusStyle.bg}`}>
              <div className={`size-1.5 rounded-full ${statusStyle.dot} animate-pulse`} />
              <span className="text-[9px] font-black uppercase tracking-widest">{status}</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 px-6 -mt-12 mb-4 pointer-events-none">
          <div className="relative size-20 rounded-[1.5rem] bg-[#0F172A] p-0.5 shadow-2xl shadow-black/50 group-hover:-translate-y-2 transition-transform duration-500">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-50 rounded-[1.5rem] blur-md group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
            <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-b from-white/20 to-transparent p-[1px]">
              <div className="w-full h-full rounded-[1.4rem] bg-[#0F172A] flex items-center justify-center overflow-hidden">
                {logoUrl ? (
                  <Image src={logoUrl} alt={name} fill className="object-cover" sizes="80px" />
                ) : (
                  <ProductIcon className="w-8 h-8 text-white relative z-10" />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 z-20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 px-6 pb-6 flex flex-col">
          <div className="flex-1">
            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-white/10 px-2.5 py-1 rounded-lg bg-white/5">
                {category}
              </span>
            </div>

            <h3 className="text-lg md:text-2xl font-black text-white tracking-tight leading-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
              {name}
            </h3>

            <p className="h-[72px] line-clamp-3 text-slate-400 font-medium leading-relaxed">
              {summary}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-end justify-between relative">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1.5 opacity-60">
                <span className="w-1 h-1 rounded-sm bg-slate-500" />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  License Tier
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                {pricingModel === 'free' ? (
                  <span className="text-base md:text-xl font-black text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    OPEN ACCESS
                  </span>
                ) : (
                  <>
                    <span className="text-base md:text-xl font-black text-white tracking-tight">
                      {priceUSD ? `$${priceUSD}` : priceKES ? `KES ${priceKES}` : pricing}
                    </span>
                    {pricingModel === 'subscription' && (
                      <span className="text-[10px] font-bold text-slate-500 uppercase">/month</span>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center size-10 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#0F172A] group-hover:rotate-45 group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${gradientClass} transition-all duration-700 ease-out group-hover:w-full`} />
      </Link>
    </article>
  );
}
