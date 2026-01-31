'use client';

import { motion } from 'framer-motion';

export function PricingHero() {
  return (
    <section className="px-4 py-12 md:py-20 flex justify-center">
      <div className="flex flex-col items-center max-w-[960px] w-full text-center space-y-4">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold text-[#00C2FF] uppercase tracking-widest"
        >
          Transparent Pricing
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.02em]"
        >
          Flexible Pricing for{' '}
          <span className="gradient-text-static">Every Business</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/50 text-lg font-normal max-w-2xl mx-auto"
        >
          We offer different pricing models to match your needs. From one-time purchases to flexible subscriptions — choose what works best for your business.
        </motion.p>
      </div>
    </section>
  );
}
