import { Metadata } from 'next';
import { CookiesClient } from './CookiesClient';

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how GTSS uses cookies and similar technologies to recognize you when you visit our website.",
  openGraph: {
    title: "GTSS Cookie Policy",
    description: "Learn how GTSS uses cookies and similar technologies.",
  },
};

export default function CookiesPage() {
  return <CookiesClient />;
}
