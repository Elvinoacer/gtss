'use client';

import { landingTestimonials } from '@/data/landing';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-[#111521]">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111317] dark:text-white">What our users say</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {landingTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 p-6 rounded-2xl bg-gray-50 dark:bg-[#1a202e] border border-gray-100 dark:border-gray-800 flex flex-col gap-4"
            >
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'fill-current' : i < testimonial.rating ? 'fill-current opacity-50' : ''}`} 
                  />
                ))}
              </div>
              <p className="text-[#111317] dark:text-gray-200 font-medium leading-relaxed italic">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-[#111317] dark:text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
