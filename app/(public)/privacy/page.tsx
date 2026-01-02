import { Metadata } from 'next';
import { PrivacyClient } from './PrivacyClient';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Your privacy is important to us. Read how GTSS collects, uses, and protects your personal information.",
  openGraph: {
    title: "GTSS Privacy Policy",
    description: "Your privacy is important to us. Read how GTSS collects, uses, and protects your personal information.",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
