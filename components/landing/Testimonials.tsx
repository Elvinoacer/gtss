import { Quote, Star } from "lucide-react";
import Image from "next/image";

import { landingTestimonials } from "@/data/landing";

export function Testimonials() {
  return (
    <section className="relative px-3 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <span className="public-kicker">What clients remember</span>
          <h2 className="public-section-title mt-4 text-2xl text-white sm:mt-5 sm:text-4xl lg:text-5xl">
            GTSS tends to win on composure.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:mt-5 sm:text-lg sm:leading-8">
            The strongest compliment we hear is that the product makes teams
            feel more in control. That is usually the difference between
            software people tolerate and software they trust.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {landingTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="public-panel public-card-outline relative flex h-full flex-col gap-4 overflow-hidden rounded-[1.35rem] p-4 sm:gap-6 sm:rounded-[1.75rem] sm:p-7"
            >
              <div className="absolute right-4 top-4 text-white/8 sm:right-5 sm:top-5">
                <Quote className="h-8 w-8 sm:h-12 sm:w-12" />
              </div>

              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`${testimonial.name}-${index}`}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      index < Math.floor(testimonial.rating)
                        ? "fill-[#FFD700] text-[#FFD700]"
                        : index < testimonial.rating
                          ? "fill-[#FFD700] text-[#FFD700] opacity-50"
                          : "text-white/20"
                    }`}
                  />
                ))}
              </div>

              <p className="relative z-10 flex-1 text-sm leading-6 text-white/68 sm:text-base sm:leading-8">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3 border-t border-white/10 pt-4 sm:gap-4 sm:pt-5">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#f3d79a] to-[#8fd8ff] blur opacity-55" />
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="relative h-10 w-10 rounded-full object-cover ring-2 ring-black sm:h-12 sm:w-12"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/55 sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
