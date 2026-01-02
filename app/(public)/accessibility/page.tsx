import { Metadata } from 'next';
import { AccessibilityClient } from './AccessibilityClient';

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "GTSS is committed to ensuring digital accessibility for people with disabilities. Read our accessibility statement.",
  openGraph: {
    title: "Accessibility at GTSS",
    description: "GTSS is committed to ensuring digital accessibility for people with disabilities.",
  },
};

export default function AccessibilityPage() {
  return <AccessibilityClient />;
}
