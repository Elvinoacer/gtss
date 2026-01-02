'use client';

import { contactHero } from '@/data/contact';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function ContactHero() {
  return (
    <section className="relative bg-white dark:bg-[#1a1d2d] py-12 md:py-20 px-4 md:px-10">
      <div className="mx-auto max-w-[1280px] grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-left max-w-[600px]"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1337ec]/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#1337ec]"></span>
            <span className="text-[#1337ec] text-xs font-bold uppercase tracking-wide">{contactHero.badge}</span>
          </div>
          <h1 className="text-[#111218] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
            {contactHero.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {contactHero.description}
          </p>
          <div className="flex gap-4 pt-2">
            <a 
              href="https://wa.me/254790670542?text=Hello%20GTSS%20Team,%20I'm%20interested%20in%20starting%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#1337ec] hover:bg-blue-700 text-white text-base font-bold transition-all shadow-lg shadow-blue-500/20"
            >
              Start a Conversation
            </a>
            <Link 
              href="/faq"
              className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-gray-200 dark:border-gray-700 text-[#111218] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-video lg:aspect-square lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${contactHero.image}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1337ec]/20 to-transparent mix-blend-multiply"></div>
        </motion.div>
      </div>
    </section>
  );
}
