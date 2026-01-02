'use client';

import { Server, Group, Code } from 'lucide-react';

export function CommunicationChannels() {
  const channels = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'System Alerts',
      description: 'Critical downtime, maintenance windows, and security alerts.',
      email: true,
      push: true,
      inApp: true,
      disabledEmail: true,
    },
    {
      icon: <Group className="w-6 h-6" />,
      title: 'Team Activity',
      description: 'Mentions, assignment changes, and comments on your tickets.',
      email: true,
      push: false,
      inApp: true,
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Code & Deployments',
      description: 'Build failures, merge requests, and successful deployments.',
      email: false,
      push: true,
      inApp: true,
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-light dark:border-border-dark pb-3">
        <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
          Communication Channels
        </h2>
        <div className="flex gap-4 text-xs font-semibold text-text-sub dark:text-gray-400 uppercase tracking-wider pr-4 hidden md:flex">
          <span className="w-12 text-center">Email</span>
          <span className="w-12 text-center">Push</span>
          <span className="w-12 text-center">In-App</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {channels.map((channel, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-5 shadow-sm hover:border-[#1337ec]/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#1337ec] dark:text-blue-400">
                {channel.icon}
              </div>
              <div className="flex flex-col">
                <p className="text-text-main dark:text-white text-base font-bold">{channel.title}</p>
                <p className="text-text-sub dark:text-gray-400 text-sm font-normal">{channel.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8 self-end md:self-center pr-2">
              <div className="flex md:hidden gap-4 text-xs font-semibold text-text-sub uppercase">
                <span className="w-10 text-center">Mail</span>
                <span className="w-10 text-center">Push</span>
                <span className="w-10 text-center">App</span>
              </div>
              <div className="flex gap-4 md:gap-6">
                <input
                  defaultChecked={channel.email}
                  disabled={channel.disabledEmail}
                  className={`size-5 rounded border-gray-300 text-[#1337ec] focus:ring-0 ${channel.disabledEmail ? 'cursor-not-allowed bg-gray-100' : 'cursor-pointer'}`}
                  type="checkbox"
                />
                <input
                  defaultChecked={channel.push}
                  className="size-5 rounded border-gray-300 text-[#1337ec] focus:ring-[#1337ec] focus:ring-offset-0 bg-background-light dark:bg-background-dark dark:border-gray-600 cursor-pointer"
                  type="checkbox"
                />
                <input
                  defaultChecked={channel.inApp}
                  className="size-5 rounded border-gray-300 text-[#1337ec] focus:ring-[#1337ec] focus:ring-offset-0 bg-background-light dark:bg-background-dark dark:border-gray-600 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
