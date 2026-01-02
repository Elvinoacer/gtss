'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PricingToggleProps {
  billingType: 'Monthly' | 'Yearly';
  setBillingType: (type: 'Monthly' | 'Yearly') => void;
}

export function PricingToggle({ billingType, setBillingType }: PricingToggleProps) {
  return (
    <section className="px-4 pb-10 flex justify-center">
      <div className="flex h-12 items-center justify-center rounded-lg bg-[#f0f1f4] dark:bg-gray-800 p-1 w-full max-w-[360px] relative">
        <motion.div
          className="absolute h-10 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
          initial={false}
          animate={{
            x: billingType === 'Monthly' ? '-50%' : '50%',
            width: 'calc(50% - 4px)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ left: '50%' }}
        />
        <button
          onClick={() => setBillingType('Monthly')}
          className={`relative z-10 flex h-full grow items-center justify-center px-2 text-sm font-medium transition-colors ${
            billingType === 'Monthly' ? 'text-[#111218] dark:text-white' : 'text-[#616889] dark:text-gray-400'
          }`}
        >
          Monthly Billing
        </button>
        <button
          onClick={() => setBillingType('Yearly')}
          className={`relative z-10 flex h-full grow items-center justify-center px-2 text-sm font-medium transition-colors ${
            billingType === 'Yearly' ? 'text-[#111218] dark:text-white' : 'text-[#616889] dark:text-gray-400'
          }`}
        >
          <span className="flex items-center gap-2">
            Yearly
            <span className="text-[#10b981] text-xs font-bold bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
