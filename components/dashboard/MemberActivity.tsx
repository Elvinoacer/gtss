'use client';

import { dashboardActivities } from '@/data/dashboard';
import { motion } from 'framer-motion';
import { History, UserPlus, Ticket, Clock, CheckCircle, Terminal } from 'lucide-react';

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

const iconMap: any = {
  UserPlus: UserPlus,
  Ticket: Ticket,
  Clock: Clock,
  CheckCircle: CheckCircle
};

export function MemberActivity({ data }: MemberActivityProps) {
  const activities = data !== undefined ? data : dashboardActivities;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[rgba(255,255,255,0.02)] border border-[var(--border)] p-8 flex flex-col h-full relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-[var(--gold)]" />
          <h2 className="text-xl font-bebas tracking-widest text-[var(--text)] uppercase">
            Command_Logs
          </h2>
        </div>
        <button className="text-[var(--gold-dim)] hover:text-[var(--gold)] transition-colors">
          <History className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto pr-2 scrollbar-hide relative z-10">
        {activities.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-8 text-[var(--text-muted)]">
            <History className="w-10 h-10 mb-4 opacity-20" />
            <p className="text-xs uppercase tracking-widest font-mono-dm opacity-50">Null_History_Found</p>
          </div>
        ) : (
          activities.map((activity: any, index: number) => {
            const Icon = iconMap[activity.iconName] || (activity.icon ? activity.icon : History);
            
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 group cursor-default"
              >
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 w-8 h-8 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center text-[var(--gold)] group-hover:border-[var(--gold-dim)] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  {index !== activities.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--border)] my-2" />
                  )}
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs font-bold text-[var(--text)] uppercase tracking-wider group-hover:text-[var(--gold)] transition-colors">
                      {activity.title}
                    </p>
                    <span className="text-[10px] font-mono-dm text-[var(--gold-dim)] opacity-50">
                      [{new Date(activity.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}]
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-cormorant italic">
                    {activity.description}
                  </p>
                  <p className="text-[9px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-tighter mt-1 opacity-50">
                    EVENT_ID: {(activity.id || 'EVT_UNKNOWN').substring(0, 12)}
                  </p>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-8 py-3 text-[10px] text-[var(--text-muted)] hover:text-[var(--gold)] font-bold uppercase tracking-[0.3em] transition-all border border-[var(--border)] hover:border-[var(--gold)] bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(212,175,55,0.05)]"
      >
        Decrypt_Full_Registry
      </motion.button>

      {/* Background Pulse Effect */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--gold)] opacity-[0.02] rounded-full blur-3xl animate-pulse pointer-events-none" />
    </motion.div>
  );
}
