'use client';

import { dashboardActivities } from '@/data/dashboard';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';

export function MemberActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-[#1e293b] rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm p-6 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Member Activity</h2>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          <History className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-1">
        {dashboardActivities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg -mx-2 transition-colors cursor-default group"
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full ${activity.iconBg} flex items-center justify-center ${activity.iconColor}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-gray-900 dark:text-white">
                  {activity.title.includes('Emma W.') ? (
                    <>
                      <span className="font-semibold">Emma W.</span> joined the Team
                    </>
                  ) : activity.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                  {activity.description.includes('GTSS Analytics') ? (
                    <>
                      Assigned to <span className="text-gray-700 dark:text-gray-300">GTSS Analytics</span> project.
                    </>
                  ) : activity.description.includes('Senior Lead') ? (
                    <>
                      Mike T. promoted to <span className="text-gray-700 dark:text-gray-300">Senior Lead</span>.
                    </>
                  ) : activity.description}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">{activity.time}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 text-xs font-semibold text-gray-500 dark:text-slate-400 hover:text-[#0f172a] dark:hover:text-white bg-gray-50 dark:bg-white/5 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all">
        View All History
      </button>
    </motion.div>
  );
}
