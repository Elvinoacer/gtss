import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to GTSS about a product, rollout, or custom build. We reply within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
