import { 
  PricingHero, 
  PricingCards, 
  PricingSocialProof, 
  PricingFAQ
} from '@/components/pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing",
  description: "Flexible pricing models for every business. Choose from one-time payments, subscriptions, or platform access.",
  openGraph: {
    title: "GTSS Pricing - Flexible & Transparent",
    description: "Flexible pricing models for every business. Choose from one-time payments, subscriptions, or platform access.",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <PricingSocialProof />
      <PricingFAQ />
    </>
  );
}
