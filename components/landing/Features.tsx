'use client';

import { landingFeatures } from '@/data/landing';
import { motion } from 'framer-motion';

export function Features() {
  return (
    <section className="py-20 bg-white dark:bg-[#111521]" id="features">
      <div className="max-w-[960px] mx-auto px-4 flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111317] dark:text-white">Key Capabilities</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Everything you need to manage your enterprise projects effectively without the clutter.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {landingFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a202e] hover:shadow-xl hover:border-[#3f65e4]/50 transition-all duration-300"
              >
                <div className="size-12 rounded-lg bg-[#3f65e4]/10 flex items-center justify-center text-[#3f65e4] mb-4 group-hover:bg-[#3f65e4] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#111317] dark:text-white">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
