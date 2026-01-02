'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const features = [
  {
    title: 'Secure & Scalable Infrastructure',
    description:
      'Manage your software products, platforms, and teams from a centralized secure dashboard.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Product Lifecycle Management',
    description:
      'Streamline product creation, documentation, deployment, and sales from one unified platform.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Role-Based Team Access',
    description:
      'Empower your team with granular permissions and role-based access control for enhanced security.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
  },
];

export function VisualPanel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] dark:from-[#020617] dark:to-[#0f172a] items-center justify-center overflow-hidden">
      {/* Background pattern decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-20 w-72 h-72 bg-[#2563eb]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 p-12 max-w-lg text-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="mb-8 relative inline-block"
        >
          <div className="absolute inset-0 bg-[#2563eb]/30 blur-3xl rounded-full"></div>
          <img
            alt={features[currentIndex].title}
            className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-64 object-cover"
            src={features[currentIndex].image}
          />
        </motion.div>

        <motion.h3
          key={`title-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-2xl font-bold mb-4"
        >
          {features[currentIndex].title}
        </motion.h3>

        <motion.p
          key={`desc-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-300 text-lg leading-relaxed"
        >
          {features[currentIndex].description}
        </motion.p>

        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {features.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#2563eb] w-8' : 'bg-slate-600'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
