'use client';

import { PlayCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { landingHero } from '@/data/landing';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#111521] pt-8 pb-12 lg:pt-24 lg:pb-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 lg:gap-6 max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-[#111317] dark:text-white">
              {landingHero.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
              {landingHero.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={landingHero.primaryCta.href} className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#3f65e4] hover:bg-blue-700 text-white text-base font-bold transition-all shadow-lg shadow-[#3f65e4]/25">
                {landingHero.primaryCta.label}
              </Link>
              <Link href={landingHero.secondaryCta.href} className="flex items-center justify-center rounded-lg h-12 px-6 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-[#111317] dark:text-white text-base font-bold transition-all">
                <PlayCircle className="mr-2 w-5 h-5" />
                {landingHero.secondaryCta.label}
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pt-2">
              {landingHero.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  {index > 0 && <span className="hidden sm:inline text-gray-300 dark:text-gray-700 mr-4">•</span>}
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url("${landingHero.image}")` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
