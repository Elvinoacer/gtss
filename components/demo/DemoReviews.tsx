'use client';

import { demoReviews } from '@/data/demo';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function DemoReviews() {
  return (
    <section className="w-full bg-[#f8fafc] dark:bg-gray-900/50 py-20 px-4">
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111218] dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-[#616889] dark:text-gray-400">
            See what our partners are saying about the GTSS platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoReviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="size-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-[#111218] dark:text-white text-base font-medium leading-normal">
                    {review.name}
                  </p>
                  <p className="text-[#616889] dark:text-gray-400 text-sm font-normal leading-normal">
                    {review.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-200 dark:text-gray-600'}`} 
                  />
                ))}
              </div>
              <p className="text-[#111218] dark:text-gray-200 text-base font-normal leading-normal">
                {review.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
