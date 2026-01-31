'use client';

import { contactHero } from '@/data/contact';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-10">
      <div className="mx-auto max-w-[1280px] grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-left max-w-[600px]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit">
            <span className="w-2 h-2 rounded-full bg-[#00C2FF]"></span>
            <span className="text-[#00C2FF] text-xs font-bold uppercase tracking-widest">{contactHero.badge}</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.02em]">
            {contactHero.title.includes('Together') ? (
              <>
                Let's Build{' '}
                <span className="gradient-text-static">Something Great</span>{' '}
                Together
              </>
            ) : contactHero.title}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            {contactHero.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="https://wa.me/254790670542?text=Hello%20GTSS%20Team,%20I'm%20interested%20in%20starting%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow flex items-center gap-2"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              href="/faq"
              className="btn-glass flex items-center gap-2"
            >
              View FAQ
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-video lg:aspect-square lg:h-[400px] rounded-2xl overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#007AFF]/20 via-[#6200EA]/20 to-[#00C2FF]/20 rounded-3xl blur-2xl opacity-60" />
          
          <div className="relative glass-strong rounded-2xl overflow-hidden p-1.5 h-full">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url('${contactHero.image}')` }}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
