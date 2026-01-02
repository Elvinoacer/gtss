"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface PublicProductCardProps {
  id: string;
  name: string;
  description: string | null;
  category: string;
  pricing: string;
  pricingModel?: string;
  status: string;
  icon: string;
  priceUSD?: number | null;
  priceKES?: number | null;
  logoUrl?: string | null;
  images?: string[];
  index: number;
}

export function PublicProductCard({
  id,
  name,
  description,
  category,
  pricing,
  pricingModel,
  status,
  icon,
  priceUSD,
  priceKES,
  logoUrl,
  images = [],
  index,
}: PublicProductCardProps) {
  const ProductIcon = getIcon(icon);

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s === "live") return "bg-emerald-500";
    if (s === "beta") return "bg-amber-500";
    return "bg-slate-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group h-full"
    >
      <Link href={`/products/${id}`} className="block h-full outline-none">
        <div className="relative h-full flex flex-col bg-white dark:bg-[#0F172A] rounded-2xl md:rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          {/* Banner */}
          <div className="relative h-28 md:h-40 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-white dark:from-[#0F172A] via-transparent to-transparent" />
            {images?.[0] ? (
              <img
                src={images[0]}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-slate-300 dark:text-slate-700" />
              </div>
            )}
            
            <div className="absolute top-4 right-4 z-20">
              <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20 backdrop-blur-md bg-black/20 text-white shadow-lg`}>
                <span className={`size-1.5 rounded-full ${getStatusColor(status)} animate-pulse`} />
                {status}
              </span>
            </div>
          </div>

          {/* Logo Overlap */}
          <div className="relative z-20 -mt-8 md:-mt-10 px-4 md:px-6">
            <div className="size-12 md:size-16 rounded-xl md:rounded-2xl bg-white dark:bg-[#1E293B] p-1 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-700">
              <div className="w-full h-full rounded-lg md:rounded-[0.8rem] overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                {logoUrl ? (
                  <img src={logoUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <ProductIcon className="w-5 h-5 md:w-8 md:h-8 text-blue-600" />
                )}
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex flex-1 flex-col p-3 md:p-6 pt-3 md:pt-4">
            <div className="flex-1">
              <h3 className="text-base md:text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {name}
              </h3>
              
              <div className="mt-2 md:mt-3 prose prose-sm dark:prose-invert line-clamp-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {description || "No description provided."}
                </ReactMarkdown>
              </div>

              <div className="mt-3 md:mt-4 flex flex-wrap items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tighter">
                  <Zap className="w-3 h-3 text-amber-500" />
                  {category}
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">
                  <Shield className="w-3 h-3" />
                  {pricing}
                </div>
              </div>
            </div>

            {/* Price Footer */}
            <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                {pricingModel === 'free' ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm md:text-lg font-black text-emerald-600 dark:text-emerald-400 uppercase">Free</span>
                  </div>
                ) : priceUSD ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm md:text-lg font-black text-slate-900 dark:text-white">${priceUSD}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      {pricingModel === 'subscription' ? '/ mo' : '/ start'}
                    </span>
                  </div>
                ) : priceKES ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm md:text-lg font-black text-slate-900 dark:text-white">Ksh {priceKES}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      {pricingModel === 'subscription' ? '/ mo' : '/ start'}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm md:text-lg font-black text-slate-900 dark:text-white">{pricing}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-1 text-xs md:text-sm font-black text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                <span>View</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Bottom decorative bar (Pure CSS) */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
        </div>
      </Link>
    </motion.div>
  );
}
