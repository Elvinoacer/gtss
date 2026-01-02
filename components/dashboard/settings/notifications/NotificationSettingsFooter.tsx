'use client';

export function NotificationSettingsFooter() {
  return (
    <div className="fixed bottom-0 w-full z-30 lg:pl-[280px] left-0">
      <div className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-[960px] mx-auto flex items-center justify-between">
          <button className="text-sm font-medium text-text-sub dark:text-gray-400 hover:text-text-main dark:hover:text-white transition-colors">
            Reset to defaults
          </button>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-background-dark text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-[#1337ec] text-white text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
