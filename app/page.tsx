import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { BentoGrid } from "@/components/landing/BentoGrid";
import { SequenceExecution } from "@/components/landing/SequenceExecution";
import { Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote: "Our kitchen used to lose orders between the waitstaff and the cooks. Since GTSS installed Restaurant Manager, every order hits the kitchen display instantly — even when the internet drops, which happens daily here.",
    name: "Grace Wanjiku",
    title: "Owner, Java House Eldoret",
    product: "Restaurant Manager",
  },
  {
    quote: "We looked at three different church management tools. GTSS was the only one that understood how contributions work in a Kenyan church — M-Pesa, cash, bank transfer, all tracked in one place.",
    name: "Pastor David Ochieng",
    title: "Grace Community Church, Nakuru",
    product: "Church Management System",
  },
  {
    quote: "The team came in, set everything up on our local server, trained our front desk staff, and was done in under three weeks. When the hotel Wi-Fi went down last week, the system didn't even blink.",
    name: "Ahmed Hassan",
    title: "Manager, Rift Valley Lodge",
    product: "Hotel Ordering System",
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <main className="relative">
        <Hero />
        <StatsBar />
        <BentoGrid />
        <SequenceExecution />

        {/* Testimonials / Social Proof */}
        <section className="relative z-10 px-6 lg:px-20 py-16 lg:py-24 bg-[var(--section-alt)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4">
                Trusted by East African Businesses
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] tracking-tight">
                What our clients say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="p-6 lg:p-8 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] flex flex-col"
                >
                  <Quote className="w-8 h-8 text-[var(--accent)] opacity-30 mb-4" />
                  <p className="text-sm lg:text-base text-[var(--text-muted)] leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-[var(--card-border)]">
                    <div className="font-semibold text-sm text-[var(--text)]">{t.name}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-0.5">{t.title}</div>
                    <div className="text-xs text-[var(--accent)] mt-1 font-medium">{t.product}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative z-10 px-6 lg:px-20 py-20 lg:py-28 bg-[var(--bg)] text-center border-t border-[var(--border)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-3xl mx-auto">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-6 inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              Next Step
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--text)] mb-6 tracking-tight">
              If your business is ready for software that actually fits,{" "}
              <span className="text-[var(--accent)]">let&apos;s talk.</span>
            </h2>
            <p className="text-base lg:text-lg text-[var(--text-muted)] mb-10 max-w-xl mx-auto leading-relaxed">
              From a single workflow to a full operating stack, GTSS helps East African teams
              launch systems that work the first day and keep working.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)]"
              >
                View Our Products
              </Link>
              <a
                href="https://wa.me/254790670542?text=Hi%20GTSS%2C%20I%27m%20interested%20in%20your%20software%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[#25D366] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[#20bd5a]"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-sm font-semibold text-[var(--text)] bg-transparent px-8 py-3.5 rounded-lg border border-[var(--border)] no-underline transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
