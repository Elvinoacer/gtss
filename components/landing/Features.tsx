import { landingFeatures } from "@/data/landing";

export function Features() {
  return (
    <section
      className="py-24 relative [content-visibility:auto] [contain-intrinsic-size:1px_900px]"
      id="features"
    >
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col gap-16">
        <div className="text-center max-w-2xl mx-auto">
          <div>
            <span className="text-sm font-semibold text-[#00C2FF] uppercase tracking-widest mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">
              Key <span className="gradient-text-static">Capabilities</span>
            </h2>
            <p className="text-white/70 text-lg">
              Everything you need to manage your enterprise projects effectively
              without the clutter.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {landingFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group glass-card rounded-2xl p-6 gradient-border hover:glow-blue-hover"
              >
                <div className="icon-glow w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-[#00C2FF] group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text-static transition-all">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
