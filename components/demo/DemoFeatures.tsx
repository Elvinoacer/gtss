'use client';

import { demoFeatures } from '@/data/demo';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function DemoFeatures() {
  return (
    <section className="w-full bg-white dark:bg-[#111218] py-20 px-4">
      <div className="max-w-[1024px] mx-auto flex flex-col gap-24">
        {demoFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={feature.title} 
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${feature.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-[#f0f1f4] dark:border-gray-800 bg-white dark:bg-gray-900 aspect-[4/3] relative">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${feature.image}')` }}
                  ></div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 flex flex-col gap-4"
              >
                <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[#1337ec] mb-2">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111218] dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-[#616889] dark:text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-2">
                  <button className="inline-flex items-center text-[#1337ec] font-bold hover:underline">
                    {feature.link}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
