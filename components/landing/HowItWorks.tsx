import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { landingHowItWorks } from '@/data/landing';

export function HowItWorks() {
  return (
    <section className="py-24 relative [content-visibility:auto] [contain-intrinsic-size:1px_1000px]" id="how-it-works">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col gap-24">
        <div className="text-center max-w-2xl mx-auto">
          <div>
            <span className="text-sm font-semibold text-[#00C2FF] uppercase tracking-widest mb-4 block">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">
              How It <span className="gradient-text-static">Works</span>
            </h2>
          </div>
        </div>

        {landingHowItWorks.map((row, index) => (
          <div
            key={row.title}
            className={`flex flex-col md:flex-row items-center gap-12 ${row.reverse ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#007AFF]/20 to-[#6200EA]/20 rounded-3xl blur-2xl opacity-50" />

                <div className="relative glass-strong rounded-2xl overflow-hidden p-1.5">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                    <Image
                      src={row.image}
                      alt={row.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00C2FF] flex items-center justify-center shadow-lg glow-blue">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {row.title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                {row.description}
              </p>

              {row.items && row.items.length > 0 && (
                <ul className="flex flex-col gap-3 mt-2">
                  {row.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/70">
                      <div className="w-6 h-6 rounded-lg bg-[#007AFF]/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#00C2FF]" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {row.cta && (
                <Link
                  href={row.ctaHref || '#'}
                  className="w-fit mt-4 text-[#00C2FF] font-bold hover:text-white transition-colors flex items-center gap-2 group"
                >
                  {row.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
