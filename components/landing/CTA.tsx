'use client';

import { motion } from 'framer-motion';
import { landingCTA } from '@/data/landing';

export function CTA() {
  return (
    <section className="py-24 bg-[#3f65e4] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tight mb-6"
        >
          {landingCTA.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          {landingCTA.description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-white text-[#3f65e4] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
            {landingCTA.primaryCta.label}
          </button>
          <button className="bg-blue-800 text-white hover:bg-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors border border-blue-400/30">
            {landingCTA.secondaryCta.label}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
