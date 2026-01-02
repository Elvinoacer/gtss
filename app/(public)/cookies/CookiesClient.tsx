'use client';

import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

export function CookiesClient() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6">
            <Cookie className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            This policy explains how we use cookies and similar technologies to recognize you when you visit our website.
          </p>
        </motion.div>

        <div className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3>1. What are cookies?</h3>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h3>2. Why do we use cookies?</h3>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies.
          </p>

          <h3>3. Types of cookies we use</h3>
          <ul>
            <li><strong>Essential cookies:</strong> Necessary for the website to function.</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the website.</li>
            <li><strong>Functional cookies:</strong> Remember your preferences and settings.</li>
          </ul>

          <h3>4. How can I control cookies?</h3>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.
          </p>

          <h3>5. Updates to this policy</h3>
          <p>
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.
          </p>
        </div>
      </section>
    </div>
  );
}
