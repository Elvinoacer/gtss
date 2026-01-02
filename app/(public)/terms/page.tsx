import { Metadata } from 'next';
import { TermsClient } from './TermsClient';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using GTSS services.",
  openGraph: {
    title: "GTSS Terms of Service",
    description: "Read the terms and conditions for using GTSS services.",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
