'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Clock, LockKeyhole, UserX } from 'lucide-react';

interface ContactInfoProps {
  email: string;
  phone: string;
  slack: string;
  timezone: string;
}

export function ContactInfo({ email, phone, slack, timezone }: ContactInfoProps) {
  const contactItems = [
    { icon: Mail, label: 'Email Address', value: email },
    { icon: Phone, label: 'Work Phone', value: phone },
    { icon: MessageCircle, label: 'Slack', value: slack },
    { icon: Clock, label: 'Timezone', value: timezone },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
    >
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-5">
        Contact Information
      </h3>
      <div className="space-y-5">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            className="flex gap-4"
          >
            <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-0.5">
                {item.label}
              </p>
              <p className="text-sm font-medium text-slate-900 dark:text-white break-all">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <motion.button
            whileHover={{ x: 4 }}
            className="w-full text-left px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-lg transition-colors flex items-center gap-2"
          >
            <LockKeyhole className="w-4 h-4" />
            Reset Password
          </motion.button>
          <motion.button
            whileHover={{ x: 4 }}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex items-center gap-2"
          >
            <UserX className="w-4 h-4" />
            Deactivate Account
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
