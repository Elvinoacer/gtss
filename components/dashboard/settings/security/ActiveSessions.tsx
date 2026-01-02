'use client';

import { activeSessions } from '@/data/settings';
import { Laptop, Smartphone, Monitor, LogOut } from 'lucide-react';

export function ActiveSessions() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'laptop': return <Laptop className="w-5 h-5" />;
      case 'smartphone': return <Smartphone className="w-5 h-5" />;
      case 'monitor': return <Monitor className="w-5 h-5" />;
      default: return <Laptop className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white dark:bg-[#1a1d2d] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h2 className="text-[#111218] dark:text-white text-lg font-bold">Device History</h2>
          <p className="text-sm text-[#616889] dark:text-slate-400 mt-1">
            Manage your active sessions on other devices.
          </p>
        </div>
        <button className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent hover:bg-red-50 dark:hover:bg-red-900/20 font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-2">
          <LogOut className="w-4 h-4" />
          Log out all other sessions
        </button>
      </div>
      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {activeSessions.map((session, index) => (
          <div
            key={index}
            className={`p-4 md:px-6 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors group ${session.current ? 'bg-slate-50/50 dark:bg-slate-900/20' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
          >
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-[#616889] dark:text-slate-400">
                {getIcon(session.type)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-[#111218] dark:text-white font-semibold text-sm">
                    {session.device}
                  </h4>
                  {session.current && (
                    <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">
                      Current Session
                    </span>
                  )}
                </div>
                <p className="text-[#616889] dark:text-slate-400 text-xs mt-1">
                  {session.location} • {session.ip} • {session.time}
                </p>
              </div>
            </div>
            {!session.current && (
              <button className="text-[#616889] dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 text-sm font-medium transition-colors md:opacity-0 group-hover:opacity-100">
                Revoke
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
