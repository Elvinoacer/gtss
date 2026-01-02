'use client';

import { pricingModels } from '@/data/pricing';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function PricingCards() {
  return (
    <section className="px-4 md:px-10 pb-20 flex justify-center">
      <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {pricingModels.map((model, index) => {
          const Icon = model.icon;
          return (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col gap-6 rounded-xl border p-6 md:p-8 transition-all duration-300 ${
                model.popular 
                  ? 'border-2 border-[#1337ec] bg-white dark:bg-[#1a1d2d] shadow-2xl shadow-blue-900/10 dark:shadow-none scale-100 md:scale-105 z-10' 
                  : 'border-[#dbdde6] dark:border-gray-700 bg-white dark:bg-[#1a1d2d] hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none hover:-translate-y-1'
              }`}
            >
              {model.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10b981] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col gap-4">
                <div className={`size-12 rounded-lg flex items-center justify-center ${model.popular ? 'bg-[#1337ec]/10 text-[#1337ec]' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold ${model.popular ? 'text-[#1337ec]' : 'text-[#111218] dark:text-white'}`}>
                  {model.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {model.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {model.examples.map((example) => (
                    <span key={example} className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={model.ctaHref}
                className={`w-full flex items-center justify-center gap-2 cursor-pointer rounded-lg h-10 px-4 text-sm font-bold transition-colors ${
                  model.popular 
                    ? 'bg-[#1337ec] text-white hover:bg-blue-700 shadow-md shadow-blue-500/20' 
                    : 'bg-[#f0f1f4] dark:bg-gray-700 text-[#111218] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {model.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex flex-col gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                {model.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-[#111218] dark:text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-[#1337ec] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
