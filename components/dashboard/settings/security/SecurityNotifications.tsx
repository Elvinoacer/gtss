'use client';

export function SecurityNotifications() {
  return (
    <div className="bg-white dark:bg-[#1a1d2d] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden mb-10">
      <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
        <h2 className="text-[#111218] dark:text-white text-lg font-bold">Security Notifications</h2>
      </div>
      <div className="p-6 md:p-8 flex flex-col gap-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <div className="flex items-center h-5">
            <input
              defaultChecked
              className="size-4 rounded border-slate-300 text-[#1337ec] focus:ring-[#1337ec] dark:border-slate-600 dark:bg-slate-800"
              type="checkbox"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#111218] dark:text-white text-sm font-medium">Unusual activity notifications</span>
            <span className="text-[#616889] dark:text-slate-400 text-xs">
              Receive an email when we detect a login from a new device or location.
            </span>
          </div>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <div className="flex items-center h-5">
            <input
              className="size-4 rounded border-slate-300 text-[#1337ec] focus:ring-[#1337ec] dark:border-slate-600 dark:bg-slate-800"
              type="checkbox"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#111218] dark:text-white text-sm font-medium">Password changes</span>
            <span className="text-[#616889] dark:text-slate-400 text-xs">
              Receive an email whenever your password is updated.
            </span>
          </div>
        </label>
      </div>
    </div>
  );
}
