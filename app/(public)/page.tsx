import {
  Hero,
  StatsBar,
  ArchitectureEngine,
  BentoGrid,
  RolloutEstimator,
  SequenceExecution,
  ComparisonMatrix,
  Testimonials,
  FAQSection,
  CTA,
} from "@/components/landing";

export const metadata = {
  title: "GTSS — Enterprise Systems for African Operators",
  description:
    "Practical, scalable, offline-first software systems for hotels, restaurants, commerce, and faith institutions across East Africa. Deployed and trained in 21 days.",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ArchitectureEngine />
      <BentoGrid />
      <RolloutEstimator />
      <SequenceExecution />
      <ComparisonMatrix />
      <Testimonials />
      <FAQSection />
      <CTA />
    </>
  );
}
