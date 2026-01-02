'use client';

import { motion } from 'framer-motion';
import { MoreVertical, ArrowRight, Archive, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';
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
          bg: 'bg-[#0bda62]/10',
          text: 'text-[#0bda62]',
          dot: 'bg-[#0bda62]',
          pulse: 'animate-pulse',
        };
      case 'beta':
        return {
          bg: 'bg-amber-100 dark:bg-amber-900/40',
          text: 'text-amber-700 dark:text-amber-400',
          dot: 'bg-amber-500',
          pulse: '',
        };
      case 'deprecated':
        return {
          bg: 'bg-red-100 dark:bg-red-900/40',
          text: 'text-red-700 dark:text-red-400',
          dot: 'bg-red-500',
          pulse: '',
        };
      case 'draft':
      default:
        return {
          bg: 'bg-gray-100 dark:bg-gray-800',
          text: 'text-gray-600 dark:text-gray-400',
          dot: 'bg-gray-400',
          pulse: '',
        };
    }
  };

  const statusConfig = getStatusStyles();
  const isDeprecated = status === 'deprecated';
  const borderColor = status === 'beta' ? 'hover:border-amber-400/40' : status === 'deprecated' ? 'hover:border-red-400/40' : 'hover:border-[#0bda62]/40';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={`group flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg ${borderColor} transition-all dark:bg-[#1e293b] dark:border-gray-700`}
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className={`flex items-center justify-center size-12 rounded-lg ${iconColor}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="relative" ref={menuRef}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-400 hover:text-slate-900 dark:hover:text-white rounded-full p-1 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <MoreVertical className="w-5 h-5" />
            </motion.button>
            
            {showMenu && (
              <div className="absolute right-0 top-8 z-10 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                <Link
                  href={`/dashboard/products/${id}/edit`}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                  Edit
                </Link>
                <button
                  onClick={() => {
                    setShowMenu(false);
                    onDelete?.();
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <h3 className={`text-lg font-bold mb-1 ${isDeprecated ? 'text-gray-500 dark:text-gray-400 line-through decoration-red-500/50' : 'text-slate-900 dark:text-white'}`}>
          {name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mb-4">
          ID: {productId}
        </p>
        <div className="flex flex-col gap-2 border-t border-dashed border-gray-200 dark:border-gray-700 pt-3">
          <div className="flex justify-between items-center text-sm">
            <span className={isDeprecated ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}>Category</span>
            <span className={`font-medium ${isDeprecated ? 'text-gray-500 dark:text-gray-400' : 'text-slate-900 dark:text-gray-200'}`}>
              {category}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className={isDeprecated ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}>Pricing</span>
            <span className={`font-medium ${isDeprecated ? 'text-gray-500 dark:text-gray-400' : 'text-slate-900 dark:text-gray-200'}`}>
              {pricing}
            </span>
          </div>
          {priceUSD && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 dark:text-gray-400">Price</span>
              <span className="font-medium text-slate-900 dark:text-gray-200">${priceUSD}</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 ${statusConfig.bg}`}>
          <div className={`size-2 rounded-full ${statusConfig.dot} ${statusConfig.pulse}`}></div>
          <span className={`text-xs font-bold uppercase tracking-wider ${statusConfig.text}`}>
            {status === 'live' ? 'Live' : status === 'beta' ? 'Beta' : status === 'deprecated' ? 'Deprecated' : 'Draft'}
          </span>
        </div>
        <Link
          href={`/dashboard/products/${id}`}
          className={`text-sm font-bold transition-colors flex items-center gap-1 ${
            isDeprecated
              ? 'text-gray-400 hover:text-red-600 dark:hover:text-red-400'
              : status === 'beta'
              ? 'text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400'
              : 'text-gray-500 hover:text-[#0bda62] dark:text-gray-400 dark:hover:text-[#0bda62]'
          }`}
        >
          {isDeprecated ? (
            <>
              Archive <Archive className="w-4 h-4" />
            </>
          ) : (
            <>
              Manage <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Link>
      </div>
    </motion.div>
  );
}


