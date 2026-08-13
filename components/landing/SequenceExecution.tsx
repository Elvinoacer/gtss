const steps = [
  {
    id: "01",
    time: "Days 1–3",
    title: "We map the work",
    copy: "A short operational audit. What breaks today, who touches the system, and which GTSS product actually fits.",
  },
  {
    id: "02",
    time: "Days 4–14",
    title: "We install and configure",
    copy: "Hardware if needed, local network, payments, menus or catalogs, and the roles your staff already use.",
  },
  {
    id: "03",
    time: "Days 15–18",
    title: "We train the team",
    copy: "On the floor, not in a slide deck. Waiters, cashiers, kitchen, front desk — whoever will live in the software.",
  },
  {
    id: "04",
    time: "Day 21",
    title: "We hand it over",
    copy: "The system is yours. Support stays on a short line so the first busy weekend is not a surprise.",
  },
];

export function SequenceExecution() {
  return (
    <section className="bg-[var(--section-alt)] py-20 lg:py-28">
      <div className="site-wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="site-kicker">How a rollout actually goes</p>
          <h2 className="site-title mt-4">Twenty-one days. Four clear hand-offs.</h2>
          <p className="site-lead mt-5">
            No mystery phases. You always know what is happening this week, who is on site, and what “done” looks like.
          </p>
        </div>

        <ol className="relative list-none space-y-0 border-l border-[var(--border)] p-0">
          {steps.map((step) => (
            <li key={step.id} className="relative py-6 pl-8">
              <span className="absolute top-8 -left-[5px] h-2.5 w-2.5 rounded-full bg-[var(--accent)]" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                {step.id} · {step.time}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text)]">{step.title}</h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--text-muted)]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
