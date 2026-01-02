'use client';

export function FrequencyDigests() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-b border-border-light dark:border-border-dark pb-3">
        Frequency & Digests
      </h2>
      <div className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-lg">
            <p className="text-text-main dark:text-white text-base font-bold">
              Email Digest Frequency
            </p>
            <p className="text-text-sub dark:text-gray-400 text-sm font-normal">
              Choose how often you want to receive a summary of your non-urgent notifications.
            </p>
          </div>
          <div className="min-w-[200px]">
            <div className="relative">
              <select className="appearance-none w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-main dark:text-white text-sm rounded-lg focus:ring-[#1337ec] focus:border-[#1337ec] block p-3 pr-8 outline-none">
                <option>Instant (No digest)</option>
                <option selected>Daily Summary (9:00 AM)</option>
                <option>Weekly Digest (Mondays)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
