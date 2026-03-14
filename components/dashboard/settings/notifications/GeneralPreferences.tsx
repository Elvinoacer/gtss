'use client';

import { notificationPreferences } from '@/data/settings';
import { motion } from 'framer-motion';

export function GeneralPreferences({ settings, setSettings }: { settings?: any, setSettings?: any }) {
  const toggleSetting = (key: string) => {
    setSettings?.({ ...settings, [key]: !settings?.[key] });
  };

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-b border-border-light dark:border-border-dark pb-3">
        General Preferences
      </h2>
      
      {/* Card: Pause All */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 md:flex-row md:items-center shadow-sm">
        <div className="flex flex-col gap-1">
          <p className="text-text-main dark:text-white text-base font-bold leading-tight">
            Pause all notifications
          </p>
          <p className="text-text-sub dark:text-gray-400 text-sm md:text-base font-normal leading-normal">
            Temporarily silence all notifications across all devices.
          </p>
        </div>
        <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-background-light dark:bg-gray-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#1337ec] transition-colors duration-200">
          <div className="h-[27px] w-[27px] rounded-full bg-white shadow-md transform transition-transform"></div>
          <input defaultChecked={notificationPreferences.pauseAll} className="invisible absolute" type="checkbox" />
        </label>
      </div>

      {/* Card: Do Not Disturb */}
      <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-text-main dark:text-white text-base font-bold leading-tight">
              Do Not Disturb Schedule
            </p>
            <p className="text-text-sub dark:text-gray-400 text-sm md:text-base font-normal leading-normal">
              Automatically mute notifications during specific hours.
            </p>
          </div>
          <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-background-light dark:bg-gray-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#1337ec] transition-colors duration-200">
            <div className="h-[27px] w-[27px] rounded-full bg-white shadow-md"></div>
            <input defaultChecked={notificationPreferences.doNotDisturb.enabled} className="invisible absolute" type="checkbox" />
          </label>
        </div>
        
        {/* Sub controls for time */}
        <div className="flex flex-wrap gap-4 items-center pt-2 border-t border-border-light dark:border-border-dark mt-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-text-sub dark:text-gray-400 uppercase tracking-wider">Start Time</label>
            <div className="relative">
              <select defaultValue={notificationPreferences.doNotDisturb.startTime} className="appearance-none bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-main dark:text-white text-sm rounded-lg focus:ring-[#1337ec] focus:border-[#1337ec] block w-32 p-2.5 outline-none">
                <option>09:00 PM</option>
                <option>10:00 PM</option>
                <option>11:00 PM</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-text-sub dark:text-gray-400 uppercase tracking-wider">End Time</label>
            <div className="relative">
              <select defaultValue={notificationPreferences.doNotDisturb.endTime} className="appearance-none bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-main dark:text-white text-sm rounded-lg focus:ring-[#1337ec] focus:border-[#1337ec] block w-32 p-2.5 outline-none">
                <option>07:00 AM</option>
                <option>08:00 AM</option>
                <option>09:00 AM</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1 grow">
            <label className="text-xs font-semibold text-text-sub dark:text-gray-400 uppercase tracking-wider">Timezone</label>
            <div className="text-sm text-text-main dark:text-white font-medium py-2.5">
              {notificationPreferences.doNotDisturb.timezone}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
