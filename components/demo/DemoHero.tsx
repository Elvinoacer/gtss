'use client';

import { motion } from 'framer-motion';

export function DemoHero() {
  return (
    <section className="w-full max-w-[960px] px-4 md:px-0 pt-16 pb-12 flex flex-col items-center text-center mx-auto">
      <div className="mb-10 max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#111218] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4"
        >
          Experience the Future of GTSS Operations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#616889] dark:text-gray-400 text-lg font-normal leading-normal max-w-xl mx-auto"
        >
          Streamline your workflow with our all-in-one platform. Watch how easy it is to manage your data in real-time.
        </motion.p>
      </div>
    </section>
  );
}
