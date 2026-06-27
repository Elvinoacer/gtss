"use client";

const stats = [
  { label: "Systems Deployed", value: "50+", unit: "Across East Africa" },
  { label: "Target Uptime", value: "99.95%", unit: "Service continuity" },
  { label: "Avg Rollout", value: "3 Weeks", unit: "From call to live" },
  { label: "Operating Region", value: "East Africa", unit: "Kenya, Uganda, Tanzania" },
];

export function StatsBar() {
  return (
    <div className="relative z-20 border-y border-[var(--border)] bg-[var(--stat-bg)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border)]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 lg:p-10 flex flex-col items-center justify-center text-center group"
            >
              <div className="text-[10px] lg:text-xs tracking-[0.15em] text-[var(--text-dim)] uppercase mb-2 lg:mb-3 font-medium group-hover:text-[var(--accent)] transition-colors">
                {stat.label}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl lg:text-4xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {stat.value}
                </span>
              </div>
              <div className="text-[10px] lg:text-xs text-[var(--text-muted)] mt-1 tracking-wide">
                {stat.unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
