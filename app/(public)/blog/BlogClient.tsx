'use client';

import { motion } from 'framer-motion';
import { Rss, Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Software Solutions in Africa",
    excerpt: "Exploring how practical, scalable software is transforming local businesses and communities across the continent.",
    date: "Jan 1, 2026",
    author: "Elvin Omondi",
    category: "Insights"
  },
  {
    title: "Building Bespoke Systems: A GTSS Approach",
    excerpt: "How we tailor our development process to meet the unique requirements of every business we partner with.",
    date: "Dec 20, 2025",
    author: "GTSS Team",
    category: "Engineering"
  },
  {
    title: "Why Community Platforms Matter",
    excerpt: "The role of trust-first ecosystems like JustInTime in empowering local service providers.",
    date: "Dec 15, 2025",
    author: "Product Team",
    category: "Community"
  }
];

export function BlogClient() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6">
            <Rss className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Our Blog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Latest Insights & Updates
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Stay updated with the latest news, engineering insights, and community stories from GTSS.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-xs font-bold text-blue-600">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
