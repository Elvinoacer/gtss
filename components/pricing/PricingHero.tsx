'use client';

import { motion } from 'framer-motion';

export function PricingHero() {
  return (
    <section className="px-4 py-12 md:py-20 flex justify-center">
      <div className="flex flex-col items-center max-w-[960px] w-full text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#111218] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]"
        >
          Flexible Pricing for Every Business
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#616889] dark:text-gray-400 text-lg font-normal max-w-2xl mx-auto"
        >
          We offer different pricing models to match your needs. From one-time purchases to flexible subscriptions — choose what works best for your business.
        </motion.p>
      </div>
    </section>
  );
}
