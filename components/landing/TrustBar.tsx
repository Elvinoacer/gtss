import { landingCompanies } from "@/data/landing";

export function TrustBar() {
  return (
    <section className="relative px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="public-panel overflow-hidden rounded-[1.75rem] px-5 py-6 sm:px-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                Trusted operating categories
              </p>
              <p className="mt-2 text-sm leading-7 text-white/62 sm:text-base">
                GTSS is a fit when downtime is expensive, customer experience is
                visible, and the business needs software that feels calmer than
                the environment it supports.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              {landingCompanies.map((company) => (
                <div
                  key={company}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/72 transition-colors hover:border-white/20 hover:text-white"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
