'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export function TermsClient() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6">
            <FileText className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        <div className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using GTSS services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h3>2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials on GTSS's website for personal, non-commercial transitory viewing only.
          </p>

          <h3>3. Disclaimer</h3>
          <p>
            The materials on GTSS's website are provided on an 'as is' basis. GTSS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
          </p>

          <h3>4. Limitations</h3>
          <p>
            In no event shall GTSS or its suppliers be liable for any damages arising out of the use or inability to use the materials on GTSS's website.
          </p>

          <h3>5. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Kenya and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h3>6. Changes to Terms</h3>
          <p>
            GTSS reserves the right to revise these terms of service for its website at any time without notice.
          </p>
        </div>
      </section>
    </div>
  );
}
