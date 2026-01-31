'use client';

import { landingFeatures } from '@/data/landing';
import { motion } from 'framer-motion';

export function Features() {
  return (
    <section className="py-24 relative" id="features">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-[#00C2FF] uppercase tracking-widest mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">
              Key <span className="gradient-text-static">Capabilities</span>
            </h2>
            <p className="text-white/50 text-lg">
              Everything you need to manage your enterprise projects effectively without the clutter.
            </p>
          </motion.div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {landingFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-6 gradient-border hover:glow-blue-hover"
              >
                {/* Icon */}
                <div className="icon-glow w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-[#00C2FF] group-hover:text-white transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text-static transition-all">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
