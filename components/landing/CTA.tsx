'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { landingCTA } from '@/data/landing';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[#007AFF]/30 to-[#6200EA]/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-[#00C2FF]/30 to-[#007AFF]/30 rounded-full blur-[80px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 w-8 h-8 rounded-lg bg-gradient-to-br from-[#007AFF]/20 to-[#00C2FF]/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#00C2FF]" />
          </div>
          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-lg bg-gradient-to-br from-[#6200EA]/20 to-[#9D4EDD]/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#9D4EDD]" />
          </div>
          
          {/* Content */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white"
          >
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            {landingCTA.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href={landingCTA.primaryCta.href} 
              className="btn-primary-glow flex items-center justify-center gap-2 text-lg py-4 px-8"
            >
              {landingCTA.primaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href={landingCTA.secondaryCta.href} 
              className="btn-glass flex items-center justify-center gap-2 text-lg py-4 px-8"
            >
              {landingCTA.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
