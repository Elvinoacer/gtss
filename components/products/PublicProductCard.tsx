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

  const getStatusStyles = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'live': return { bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600', dot: 'bg-emerald-500' };
      case 'beta': return { bg: 'bg-amber-500/10 border-amber-500/20 text-amber-600', dot: 'bg-amber-500' };
      default: return { bg: 'bg-slate-500/10 border-slate-500/20 text-slate-600', dot: 'bg-slate-500' };
    }
  };

  const statusStyle = getStatusStyles(status);

  // Generate a consistent gradient based on name
  const gradients = [
    'from-blue-600 to-violet-700',
    'from-emerald-500 to-cyan-600',
    'from-orange-500 to-rose-600',
    'from-pink-600 to-purple-700',
    'from-indigo-500 to-cyan-500',
  ];
  const gradientIndex = (name?.charCodeAt(0) || 0) % gradients.length;
  const gradientClass = gradients[gradientIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative h-full flex flex-col overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <Link href={`/products/${id}`} className="flex flex-col h-full">
        {/* Banner Section */}
        <div className="relative h-44 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-white dark:from-slate-900 via-white/20 dark:via-slate-900/20 to-transparent" />
          {images?.[0] ? (
            <img
              src={images[0]}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradientClass} opacity-20`} />
          )}
          
          <div className="absolute top-6 right-6 z-20">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md shadow-lg ${statusStyle.bg}`}>
              <div className={`size-1.5 rounded-full ${statusStyle.dot} animate-pulse`} />
              <span className="text-[10px] font-black uppercase tracking-widest">{status}</span>
            </div>
          </div>
        </div>

        {/* Logo Overlap */}
        <div className="relative z-20 -mt-10 px-8">
           <div className={`size-20 rounded-3xl bg-gradient-to-br ${gradientClass} p-1 shadow-2xl shadow-black/20`}>
              <div className="w-full h-full rounded-[1.3rem] overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center border border-white/10">
                {logoUrl ? (
                  <img src={logoUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <ProductIcon className="w-8 h-8 text-slate-900 dark:text-white" />
                )}
              </div>
           </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-8 pt-6">
           <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                 <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10">
                    {category}
                 </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                {name}
              </h3>
              
              <div className="prose prose-sm dark:prose-invert line-clamp-3 text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {description || ""}
                </ReactMarkdown>
              </div>
           </div>

           {/* Footer */}
           <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pricing From</span>
                 <div className="flex items-baseline gap-1">
                    {pricingModel === 'free' ? (
                       <span className="text-xl font-black text-emerald-600">FREE</span>
                    ) : (
                       <>
                          <span className="text-xl font-black text-slate-900 dark:text-white">
                             {priceUSD ? `$${priceUSD}` : priceKES ? `KES ${priceKES}` : pricing}
                          </span>
                          {pricingModel === 'subscription' && <span className="text-[10px] font-bold text-slate-400">/mo</span>}
                       </>
                    )}
                 </div>
              </div>
              
              <div className="flex items-center justify-center size-12 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 shadow-lg shadow-black/5">
                 <ArrowRight className="w-5 h-5" />
              </div>
           </div>
        </div>

        {/* Hover Effect Bar */}
        <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${gradientClass} transition-all duration-500 group-hover:w-full`} />
      </Link>
    </motion.div>
  );
}
