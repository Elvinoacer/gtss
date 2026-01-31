'use client';

import { landingTestimonials } from '@/data/landing';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-[#00C2FF] uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
              What Our <span className="gradient-text-static">Users Say</span>
            </h2>
          </motion.div>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landingTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-5 gradient-border relative overflow-hidden group hover:glow-blue-hover"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-white/5 group-hover:text-white/10 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < Math.floor(testimonial.rating) 
                        ? 'text-[#FFD700] fill-[#FFD700]' 
                        : i < testimonial.rating 
                        ? 'text-[#FFD700] fill-[#FFD700] opacity-50' 
                        : 'text-white/20'
                    }`} 
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-white/70 leading-relaxed flex-1 relative z-10">
                {testimonial.content}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#007AFF] to-[#00C2FF] rounded-full blur opacity-50" />
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="relative size-12 rounded-full object-cover ring-2 ring-black"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/40">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
