const stats = [
  { value: "50+", label: "Systems deployed across East Africa" },
  { value: "99.95%", label: "Target service continuity" },
  { value: "3 weeks", label: "Average time from call to live" },
  { value: "< 24 hrs", label: "Typical response on support" },
];

export function StatsBar() {
  return (
    <section aria-label="Company figures" className="border-y border-[var(--border)] bg-[var(--section-alt)]">
      <div className="site-wrap grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-[var(--border)] px-4 py-8 sm:px-6 lg:border-r lg:last:border-r-0">
            <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--text)] lg:text-4xl">{stat.value}</p>
            <p className="mt-2 max-w-[16ch] text-sm leading-snug text-[var(--text-muted)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
