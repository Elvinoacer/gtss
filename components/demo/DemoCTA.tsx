'use client';

import { motion } from 'framer-motion';

export function DemoCTA() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-[#111218] border-t border-[#f0f1f4] dark:border-gray-800">
      <div className="max-w-[960px] mx-auto bg-[#1337ec]/5 dark:bg-gray-900 rounded-2xl p-10 md:p-16 text-center border border-[#1337ec]/10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#111218] dark:text-white mb-6 tracking-tight"
        >
          Ready to see it in action?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#616889] dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
        >
          Experience the full power of GTSS with a guided tour tailored to your specific needs. No commitment required.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#1337ec] text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-[#1337ec]/25">
            Schedule a Live Walkthrough
          </button>
          <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#111218] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            View Pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
