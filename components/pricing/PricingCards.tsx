import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

import { pricingModels } from '@/data/pricing';

export function PricingCards() {
  return (
    <section className="px-4 md:px-10 pb-20 flex justify-center">
      <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {pricingModels.map((model) => {
          const Icon = model.icon;
          return (
            <div
              key={model.name}
              className={`group relative flex flex-col gap-6 rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                model.popular
                  ? 'glass-strong border-2 border-[#007AFF]/50 shadow-2xl shadow-blue-500/10 scale-100 md:scale-105 z-10 glow-blue'
                  : 'glass-card gradient-border hover:-translate-y-1'
              }`}
            >
              {model.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#007AFF] to-[#00C2FF] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col gap-4">
                <div
                  className={`size-14 rounded-xl flex items-center justify-center ${
                    model.popular
                      ? 'bg-gradient-to-br from-[#007AFF] to-[#00C2FF] text-white'
                      : 'icon-glow text-[#00C2FF]'
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className={`text-xl font-bold ${model.popular ? 'gradient-text-static' : 'text-white'}`}>
                  {model.name}
                </h3>
                <p className="text-sm text-white/50">{model.description}</p>
                <div className="flex flex-wrap gap-2">
                  {model.examples.map((example) => (
                    <span key={example} className="text-xs font-medium px-3 py-1.5 glass-card text-white/70 rounded-lg">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={model.ctaHref}
                className={`w-full flex items-center justify-center gap-2 cursor-pointer rounded-xl h-12 px-4 text-sm font-bold transition-all ${
                  model.popular ? 'btn-primary-glow py-3' : 'btn-glass'
                }`}
              >
                {model.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                {model.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-white/70 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#007AFF]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#00C2FF]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
