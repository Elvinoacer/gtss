"use client";

const stats = [
  { label: "Active Deployments", value: "50+", unit: "NODES" },
  { label: "Target Continuity", value: "99.95", unit: "PCT" },
  { label: "Avg Rollout Window", value: "03", unit: "WEEKS" },
  { label: "Operations Region", value: "EA", unit: "GRID" },
];

export function StatsBar() {
  return (
    <div className="stats-bar relative z-20 border-y border-[var(--border)] bg-[rgba(3,5,8,0.85)] backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--gold)]/5 to-transparent"></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border)]">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item p-4 lg:p-10 flex flex-col items-center justify-center text-center group border-b lg:border-b-0 border-[var(--border)]">
            <div className="stat-label font-mono-dm text-[8px] lg:text-[9px] tracking-[0.2em] lg:tracking-[0.25em] text-[var(--text-dim)] uppercase mb-2 lg:mb-3 group-hover:text-[var(--gold)] transition-colors">
              {stat.label}
            </div>
            <div className="stat-value-box flex items-baseline gap-1.5 lg:gap-2">
              <span className="stat-value font-bebas text-3xl lg:text-5xl text-[var(--text)] group-hover:text-[var(--gold)] transition-colors">
                {stat.value}
              </span>
              <span className="stat-unit font-mono-dm text-[9px] lg:text-[10px] text-[var(--gold-dim)] tracking-widest">
                {stat.unit}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
