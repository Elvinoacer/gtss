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

const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  ? process.env.NEXT_PUBLIC_APP_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
      "Practical, scalable software products for real-world local problems. Building the digital foundation for Africa's growth.",
    url: "https://gtss.vercel.app",
    siteName: "GTSS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/marketing_banner.png",
        width: 1456,
        height: 816,
        alt: "GTSS - Software That Means Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTSS - Software That Means Business",
    description:
      "Practical. Scalable. Trusted. Building the digital foundation for Africa's growth.",
    images: ["/images/marketing_banner.png"],
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
        {children}
      </body>
    </html>
  );
}
