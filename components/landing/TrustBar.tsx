'use client';

import { landingCompanies } from '@/data/landing';
import { motion } from 'framer-motion';

export function TrustBar() {
  return (
    <section className="border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#151a29] py-10">
      <div className="max-w-[1280px] mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
          Trusted by industry leaders worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {landingCompanies.map((company, index) => (
            <motion.span
              key={company}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-xl font-bold text-gray-800 dark:text-gray-200"
            >
              {company}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
