'use client';

import { contactInfo } from '@/data/contact';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-[#1a1d2d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8"
    >
      <h3 className="text-xl font-bold text-[#111218] dark:text-white mb-6">
        Contact Information
      </h3>
      <div className="flex flex-col gap-6">
        <a className="flex items-start gap-4 group" href={`mailto:${contactInfo.email}`}>
          <div className="size-10 rounded-full bg-[#1337ec]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1337ec] group-hover:text-white transition-colors text-[#1337ec]">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Email us</span>
            <span className="text-base font-semibold text-[#111218] dark:text-white">{contactInfo.email}</span>
          </div>
        </a>
        <a className="flex items-start gap-4 group" href={`tel:+254790670542`}>
          <div className="size-10 rounded-full bg-[#1337ec]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1337ec] group-hover:text-white transition-colors text-[#1337ec]">
            <Phone className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Call us</span>
            <span className="text-base font-semibold text-[#111218] dark:text-white">{contactInfo.phone}</span>
          </div>
        </a>
        <div className="flex items-start gap-4">
          <div className="size-10 rounded-full bg-[#1337ec]/10 flex items-center justify-center shrink-0 text-[#1337ec]">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Visit us</span>
            <span className="text-base font-semibold text-[#111218] dark:text-white whitespace-pre-line">
              {contactInfo.address}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
