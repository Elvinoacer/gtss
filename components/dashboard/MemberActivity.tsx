'use client';

import { dashboardActivities } from '@/data/dashboard';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';

interface Activity {
  id: string;
  type: string;
  title: string;
  description: string;
  time: string;
  iconName: string;
}

interface MemberActivityProps {
  data?: Activity[];
}

import { UserPlus, Ticket, Clock, CheckCircle } from 'lucide-react';

const iconMap: any = {
  UserPlus: UserPlus,
  Ticket: Ticket,
  Clock: Clock,
  CheckCircle: CheckCircle
};

export function MemberActivity({ data }: MemberActivityProps) {
  // If data is provided (even empty array), use it. Only fallback if data is undefined (e.g. during loading or error upstream)
  const activities = data !== undefined ? data : dashboardActivities;

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
        {activities.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-8 text-gray-400 dark:text-slate-500">
            <History className="w-8 h-8 mb-2 opacity-50" />
            <p className="text-sm">No recent activity</p>
          </div>
        ) : (
          activities.map((activity: any, index: number) => {
          const Icon = iconMap[activity.iconName] || (activity.icon ? activity.icon : History);
          
          // Determine colors based on type
          let iconBg = 'bg-gray-100 dark:bg-gray-800';
          let iconColor = 'text-gray-600 dark:text-gray-400';
          
          if (activity.type === 'member_join') {
            iconBg = 'bg-blue-50 dark:bg-blue-900/20';
            iconColor = 'text-blue-600 dark:text-blue-400';
          } else if (activity.type === 'ticket_update') {
            iconBg = 'bg-amber-50 dark:bg-amber-900/20';
            iconColor = 'text-amber-600 dark:text-amber-400';
          }

          // Use existing styles if available (fallback to dummy data styles)
          if (activity.iconBg) iconBg = activity.iconBg;
          if (activity.iconColor) iconColor = activity.iconColor;

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg -mx-2 transition-colors cursor-default group"
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-gray-900 dark:text-white">
                 {activity.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                  {activity.description}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">
                  {new Date(activity.time).toLocaleString(undefined, {
                    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                  })}
                </p>
              </div>
            </motion.div>
          );
        }))}
      </div>

      <button className="w-full mt-4 py-2 text-xs font-semibold text-gray-500 dark:text-slate-400 hover:text-[#0f172a] dark:hover:text-white bg-gray-50 dark:bg-white/5 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all">
        View All History
      </button>
    </motion.div>
  );
}
