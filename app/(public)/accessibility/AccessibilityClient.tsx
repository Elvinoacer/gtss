'use client';

import { motion } from 'framer-motion';
import { Accessibility } from 'lucide-react';

export function AccessibilityClient() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6">
            <Accessibility className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Accessibility Statement
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We are committed to ensuring digital accessibility for people with disabilities.
          </p>
        </motion.div>

        <div className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3>1. Our Commitment</h3>
          <p>
            GTSS is committed to making our website's content accessible and user-friendly to everyone. If you are having difficulty viewing or navigating the content on this website, please contact us.
          </p>

          <h3>2. Standards</h3>
          <p>
            We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to ensure a high level of accessibility for all users.
          </p>

          <h3>3. Ongoing Efforts</h3>
          <p>
            We are continually improving the user experience for everyone and applying the relevant accessibility standards. We conduct regular audits to identify and fix accessibility issues.
          </p>

          <h3>4. Feedback</h3>
          <p>
            We welcome your feedback on the accessibility of GTSS. Please let us know if you encounter accessibility barriers by emailing us at omondielvin@gmail.com.
          </p>
        </div>
      </section>
    </div>
  );
}
