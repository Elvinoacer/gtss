import { landingFeatures } from "@/data/landing";

export function Features() {
  return (
    <section
      className="relative px-3 py-14 sm:px-6 sm:py-20 lg:px-8 [content-visibility:auto] [contain-intrinsic-size:1px_900px]"
      id="features"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10">
        <div className="max-w-3xl">
          <span className="public-kicker">Why GTSS lands well</span>
          <h2 className="public-section-title mt-4 text-2xl text-white sm:mt-5 sm:text-4xl lg:text-5xl">
            The product looks premium because the system thinking is premium.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:mt-5 sm:text-lg sm:leading-8">
            Design quality matters, but so do the invisible things: failure
            handling, rollout practicality, role-based workflows, and the
            discipline required to make software feel quiet under pressure.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
          {landingFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`public-panel public-card-outline group rounded-[1.35rem] p-4 sm:rounded-[1.75rem] sm:p-7 ${
                  index === 0 ? "lg:col-span-6" : "lg:col-span-3"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Icon className="h-4 w-4 text-[#f3d79a] sm:h-6 sm:w-6" />
                </div>

                <h3 className="mt-4 text-base font-semibold text-white sm:mt-8 sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-white/62 sm:mt-3 sm:text-base sm:leading-7">
                  {feature.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.14em] text-white/35 sm:mt-8 sm:text-xs sm:tracking-[0.22em]">
                  <span className="h-2 w-2 rounded-full bg-[#8fd8ff]" />
                  GTSS capability layer
                </div>
              </div>
            );
          })}

          <div className="public-panel public-card-outline rounded-[1.35rem] p-4 sm:rounded-[1.75rem] sm:p-7 lg:col-span-12">
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
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
                  className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.5rem] sm:p-5"
                >
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/38 sm:text-xs sm:tracking-[0.22em]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/62 sm:mt-3 sm:text-sm sm:leading-7">
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
