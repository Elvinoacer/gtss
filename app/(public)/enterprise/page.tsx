import { Metadata } from 'next';
import { EnterpriseClient } from './EnterpriseClient';

export const metadata: Metadata = {
  title: "Enterprise Solutions",
  description: "Tailored software infrastructure for large-scale organizations. Dedicated support, custom integrations, and technical sovereignty.",
  openGraph: {
    title: "GTSS Enterprise Solutions",
    description: "Tailored software infrastructure for large-scale organizations.",
  },
};

export default function EnterprisePage() {
  return <EnterpriseClient />;
}
