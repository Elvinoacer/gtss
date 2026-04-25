import { Metadata } from 'next';
import { PricingClient } from './PricingClient';

export const metadata: Metadata = {
  title: "Pricing Protocols",
  description: "Flexible pricing models for technical sovereignty. Choose from Sovereign Units, Enterprise Nodes, or Strategic Partnerships.",
  openGraph: {
    title: "GTSS Pricing Protocols",
    description: "Flexible pricing models for technical sovereignty.",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
