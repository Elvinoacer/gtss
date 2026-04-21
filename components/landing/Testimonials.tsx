import { Quote, Star } from "lucide-react";
import Image from "next/image";

import { landingTestimonials } from "@/data/landing";

export function Testimonials() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="public-kicker">What clients remember</span>
          <h2 className="public-section-title mt-5 text-4xl text-white sm:text-5xl">
            GTSS tends to win on composure.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            The strongest compliment we hear is that the product makes teams
            feel more in control. That is usually the difference between
            software people tolerate and software they trust.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {landingTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="public-panel public-card-outline relative flex h-full flex-col gap-6 overflow-hidden rounded-[1.75rem] p-6 sm:p-7"
            >
              <div className="absolute right-5 top-5 text-white/8">
                <Quote className="h-12 w-12" />
              </div>

              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`${testimonial.name}-${index}`}
                    className={`h-5 w-5 ${
                      index < Math.floor(testimonial.rating)
                        ? "fill-[#FFD700] text-[#FFD700]"
                        : index < testimonial.rating
                          ? "fill-[#FFD700] text-[#FFD700] opacity-50"
                          : "text-white/20"
                    }`}
                  />
                ))}
              </div>

              <p className="relative z-10 flex-1 text-base leading-8 text-white/68">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#f3d79a] to-[#8fd8ff] blur opacity-55" />
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="relative h-12 w-12 rounded-full object-cover ring-2 ring-black"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/55">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
