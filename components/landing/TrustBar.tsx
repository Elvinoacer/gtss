'use client';

import { landingCompanies } from '@/data/landing';
import { motion } from 'framer-motion';

export function TrustBar() {
  return (
    <section className="py-16 relative">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="glass-card rounded-2xl py-8 px-6">
          <p className="text-sm font-semibold text-white/40 uppercase tracking-widest text-center mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {landingCompanies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <span className="text-xl md:text-2xl font-bold text-white/30 group-hover:text-white/70 transition-all duration-300 cursor-default">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
