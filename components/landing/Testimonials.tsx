import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

import { landingTestimonials } from '@/data/landing';

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-16">
          <div>
            <span className="text-sm font-semibold text-[#00C2FF] uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
              What Our <span className="gradient-text-static">Users Say</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landingTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-6 flex flex-col gap-5 gradient-border relative overflow-hidden group hover:glow-blue-hover"
            >
              <div className="absolute top-4 right-4 text-white/5 group-hover:text-white/10 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(testimonial.rating)
                        ? 'text-[#FFD700] fill-[#FFD700]'
                        : i < testimonial.rating
                        ? 'text-[#FFD700] fill-[#FFD700] opacity-50'
                        : 'text-white/20'
                    }`}
                  />
                ))}
              </div>

              <p className="text-white/70 leading-relaxed flex-1 relative z-10">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#007AFF] to-[#00C2FF] rounded-full blur opacity-50" />
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="relative size-12 rounded-full object-cover ring-2 ring-black"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
