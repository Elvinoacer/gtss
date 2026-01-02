'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    location: "Eldoret, Kenya / Remote",
    type: "Full-time",
    department: "Engineering"
  },
  {
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design"
  },
  {
    title: "Sales Representative",
    location: "Nairobi, Kenya",
    type: "Commission-based",
    department: "Sales"
  }
];

export default function CareersPage() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Careers</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Join the GTSS Team
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Help us build the digital infrastructure for the next generation of African businesses.
          </p>
        </motion.div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Open Positions</h2>
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-500/50 transition-all shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {job.department}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] text-center text-white shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h3>
          <p className="mb-8 text-slate-400">
            We're always looking for talented individuals who are passionate about our mission. Send us your CV and we'll keep you in mind for future openings.
          </p>
          <a 
            href="mailto:omondielvin@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:scale-105 transition-transform"
          >
            Send Your CV
          </a>
        </motion.div>
      </section>
    </div>
  );
}
