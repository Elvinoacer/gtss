'use client';

import { PlayCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { landingHero } from '@/data/landing';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#111521] pt-12 pb-16 lg:pt-24 lg:pb-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] sm:leading-tight tracking-[-0.033em] text-[#111317] dark:text-white">
              {landingHero.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {landingHero.description}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center lg:justify-start w-full sm:w-auto">
              <Link href={landingHero.primaryCta.href} className="flex items-center justify-center rounded-xl h-14 px-8 bg-[#3f65e4] hover:bg-blue-700 text-white text-base sm:text-lg font-bold transition-all shadow-lg shadow-[#3f65e4]/25 hover:shadow-[#3f65e4]/40 hover:-translate-y-0.5 w-full sm:w-auto">
                {landingHero.primaryCta.label}
              </Link>
              <Link href={landingHero.secondaryCta.href} className="flex items-center justify-center rounded-xl h-14 px-8 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-[#111317] dark:text-white text-base sm:text-lg font-bold transition-all w-full sm:w-auto">
                <PlayCircle className="mr-2 w-5 h-5" />
                {landingHero.secondaryCta.label}
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-400 pt-2">
              {landingHero.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group mt-4 lg:mt-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url("${landingHero.image}")` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
