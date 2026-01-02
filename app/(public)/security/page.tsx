import { Metadata } from 'next';
import { SecurityClient } from './SecurityClient';

export const metadata: Metadata = {
  title: "Security & Compliance",
  description: "Security is our top priority. Learn about GTSS's data protection, access control, and infrastructure security.",
  openGraph: {
    title: "GTSS Security & Compliance",
    description: "Security is our top priority. Learn about GTSS's data protection, access control, and infrastructure security.",
  },
};

export default function SecurityPage() {
  return <SecurityClient />;
}
