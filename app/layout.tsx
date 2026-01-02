import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gtss.vercel.app"),
  title: {
    default: "GTSS - Great Thumbs Software Solutions",
    template: "%s | GTSS",
  },
  description:
    "Practical, scalable software products for real-world local problems. Empowering businesses across Africa with digital infrastructure.",
  keywords: [
    "Software Solutions",
    "Africa",
    "Kenya",
    "Business Software",
    "SaaS",
    "E-commerce",
    "Church Management",
    "Hotel System",
    "Local Business",
  ],
  authors: [{ name: "GTSS Team" }, { name: "Elvin Omondi" }],
  creator: "GTSS",
  publisher: "GTSS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/GTSS-logo.png",
    shortcut: "/images/GTSS-logo.png",
    apple: "/images/GTSS-logo.png",
  },
  openGraph: {
    title: "GTSS - Great Thumbs Software Solutions",
    description:
      "Practical, scalable software products for real-world local problems.",
    url: "https://gtss.vercel.app",
    siteName: "GTSS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/GTSS-logo.png",
        width: 800,
        height: 600,
        alt: "GTSS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTSS - Great Thumbs Software Solutions",
    description:
      "Practical, scalable software products for real-world local problems.",
    images: ["/images/GTSS-logo.png"],
    creator: "@Elvinoace",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import QueryProvider from "@/components/providers/QueryProvider";
import SessionProvider from "@/components/providers/SessionProvider";
import { ViewTracker } from "@/components/analytics/ViewTracker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <SessionProvider>
            <ViewTracker />
            {children}
          </SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
