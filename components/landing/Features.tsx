import { landingFeatures } from "@/data/landing";

export function Features() {
  return (
    <section
      className="relative px-4 py-20 sm:px-6 lg:px-8 [content-visibility:auto] [contain-intrinsic-size:1px_900px]"
      id="features"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-3xl">
          <span className="public-kicker">Why GTSS lands well</span>
          <h2 className="public-section-title mt-5 text-4xl text-white sm:text-5xl">
            The product looks premium because the system thinking is premium.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Design quality matters, but so do the invisible things: failure
            handling, rollout practicality, role-based workflows, and the
            discipline required to make software feel quiet under pressure.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {landingFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`public-panel public-card-outline group rounded-[1.75rem] p-6 sm:p-7 ${
                  index === 0 ? "lg:col-span-6" : "lg:col-span-3"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-6 w-6 text-[#f3d79a]" />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62 sm:text-base">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/35">
                  <span className="h-2 w-2 rounded-full bg-[#8fd8ff]" />
                  GTSS capability layer
                </div>
              </div>
            );
          })}

          <div className="public-panel public-card-outline rounded-[1.75rem] p-6 sm:p-7 lg:col-span-12">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Workflow design",
                  copy: "Interfaces are shaped by the people using them, not by the easiest database schema.",
                },
                {
                  title: "Operational resilience",
                  copy: "We build for unreliable networks, busy teams, and moments where software cannot freeze.",
                },
                {
                  title: "Executive confidence",
                  copy: "The end result should feel credible in demos, in audits, and on the busiest day of the month.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/38">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
