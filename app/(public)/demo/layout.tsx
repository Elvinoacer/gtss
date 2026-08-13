import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a demo",
  description: "Book a 30-minute walkthrough of a GTSS product against your actual workflow.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
