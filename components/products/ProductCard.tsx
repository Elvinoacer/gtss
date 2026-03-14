'use client';

import { motion } from 'framer-motion';
import { MoreVertical, ArrowRight, Archive, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { getIcon } from '@/lib/icons';

interface ProductCardProps {
  id: string;
  name: string;
  productId: string;
  category: string;
  pricing: string;
  pricingModel?: string;
  priceUSD?: number | null;
  priceKES?: number | null;
  status: 'live' | 'beta' | 'deprecated' | 'draft';
  icon: string;
  iconColor: string;
  logoUrl?: string;
  index: number;
  onDelete?: () => void;
}

export function ProductCard({
  id,
  name,
  productId,
  category,
  pricing,
  pricingModel,
  priceUSD,
  priceKES,
  status,
  icon,
  iconColor,
  logoUrl,
  index,
  onDelete,
}: ProductCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const Icon = getIcon(icon);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getStatusStyles = () => {
    switch (status) {
      case 'live':
        return {
          bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
          dot: 'bg-emerald-500',
          label: 'Live'
        };
      case 'beta':
        return {
          bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
          dot: 'bg-purple-500',
          label: 'Beta'
        };
      case 'deprecated':
        return {
          bg: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
          dot: 'bg-red-500',
          label: 'Deprecated'
        };
      case 'draft':
      default:
        return {
          bg: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
          dot: 'bg-slate-500',
          label: 'Draft'
        };
    }
  };

  const statusStyle = getStatusStyles();
  const isDeprecated = status === 'deprecated';

  // Generate a consistent gradient based on the first character of the name
  const gradients = [
    'from-blue-500 to-violet-600',
    'from-emerald-400 to-cyan-500',
    'from-orange-400 to-rose-500',
    'from-pink-500 to-purple-600',
    'from-indigo-400 to-cyan-400',
  ];
  const gradientIndex = name.charCodeAt(0) % gradients.length;
  const gradientClass = gradients[gradientIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-900/50"
    >
      {/* Background Gradient Blob */}
      <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${gradientClass} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`} />

      <div>
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
             {logoUrl ? (
                <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <Image src={logoUrl} alt={name} fill className="object-cover" sizes="56px" />
                </div>
             ) : (
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${isDeprecated ? 'from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 grayscale' : gradientClass} text-white shadow-inner`}>
                  <Icon className="h-7 w-7" />
                </div>
             )}
             
             {/* Status Badge */}
             <div className={`absolute -bottom-2 -right-2 flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${statusStyle.bg}`}>
                <div className={`h-1.5 w-1.5 rounded-full ${statusStyle.dot}`} />
                {statusStyle.label}
             </div>
          </div>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
            >
              <MoreVertical className="h-5 w-5" />
            </button>
            
            {showMenu && (
              <div className="absolute right-0 top-10 z-20 w-40 origin-top-right rounded-xl border border-slate-200 bg-white p-1 shadow-lg ring-1 ring-black/5 focus:outline-none dark:border-slate-700 dark:bg-slate-800">
                <Link
                  href={`/dashboard/products/${id}/edit`}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <Pencil className="h-4 w-4" />
                  Edit Details
                </Link>
                <div className="my-1 h-px bg-slate-100 dark:bg-slate-700" />
                <button
                  onClick={() => {
                    setShowMenu(false);
                    onDelete?.();
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-900/20 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Product
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h3 className={`text-xl font-bold tracking-tight ${isDeprecated ? 'text-slate-500 line-through decoration-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'}`}>
            {name}
          </h3>
          <p className="mt-1 font-mono text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {productId}
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400">Category</span>
            <span className="font-medium text-slate-900 dark:text-slate-200">{category}</span>
          </div>
          <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400">Model</span>
            <span className="font-medium text-slate-900 dark:text-slate-200">{pricing}</span>
          </div>
           {priceUSD && (
            <>
              <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Price</span>
                <span className="font-bold text-slate-900 dark:text-white">${priceUSD.toLocaleString()}</span>
              </div>
            </>
           )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
        <Link
          href={`/dashboard/products/${id}`}
          className={`group/btn flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all ${
            isDeprecated
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500'
              : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:scale-[1.02] dark:bg-white dark:text-slate-900 dark:shadow-white/10 dark:hover:bg-slate-100'
          }`}
        >
          {isDeprecated ? (
            <>
              Archived <Archive className="h-4 w-4" />
            </>
          ) : (
            <>
              Manage Product <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </>
          )}
        </Link>
      </div>
    </motion.div>
  );
}


