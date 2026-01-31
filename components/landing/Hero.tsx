'use client';

import { ArrowRight, Sparkles, Users, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { landingHero } from '@/data/landing';

export function Hero() {
  const stats = [
    { value: '50+', label: 'Products Built', icon: Sparkles },
    { value: '200+', label: 'Happy Clients', icon: Users },
    { value: '5', label: 'Countries Served', icon: Globe },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit mx-auto lg:mx-0"
            >
              <Zap className="w-4 h-4 text-[#00C2FF]" />
              <span className="text-sm font-medium text-white/80">Powering Local Businesses</span>
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-[-0.02em]">
              <span className="text-white">Practical </span>
              <span className="gradient-text">Software</span>
              <br />
              <span className="text-white">for Local </span>
              <span className="gradient-text-static">Businesses</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {landingHero.description}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <Link 
                href={landingHero.primaryCta.href} 
                className="btn-primary-glow flex items-center justify-center gap-2 text-base sm:text-lg"
              >
                {landingHero.primaryCta.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href={landingHero.secondaryCta.href} 
                className="btn-glass flex items-center justify-center gap-2 text-base sm:text-lg"
              >
                {landingHero.secondaryCta.label}
              </Link>
            </div>
            
            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="stats-card flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#007AFF]/20 to-[#00C2FF]/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#00C2FF]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/50">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Content - Hero Image/Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative w-full"
          >
            {/* Floating glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#007AFF]/20 via-[#6200EA]/20 to-[#00C2FF]/20 rounded-3xl blur-2xl opacity-60" />
            
            {/* Main card */}
            <div className="relative glass-strong rounded-3xl overflow-hidden p-2">
              <div 
                className="w-full aspect-[4/3] rounded-2xl bg-cover bg-center" 
                style={{ backgroundImage: `url("${landingHero.image}")` }}
              />
              
              {/* Floating stats card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-8 glass-strong rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00C2FF] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">99.9%</p>
                    <p className="text-sm text-white/50">Uptime Guarantee</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Top left badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-6 -left-4 lg:-left-8 glass-strong rounded-2xl py-3 px-4 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-white">Works Offline</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
