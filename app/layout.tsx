import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./theme.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

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
  title: "GTSS - Great Thumbs Software Solutions",
  description:
    "Practical, scalable software products for real-world local problems. Empowering businesses across Africa with digital infrastructure.",
  keywords: [
    "Software Solutions",
    "Africa",
    "Kenya",
    "Nairobi",
    "Business Software",
    "SaaS",
    "E-commerce",
    "Church Management",
    "Hotel System",
    "Restaurant Manager",
    "M-Pesa",
    "Offline-first",
    "Local Business",
  ],
  authors: [{ name: "GTSS Team" }, { name: "Elvin Omondi" }],
  creator: "GTSS",
  publisher: "GTSS",
  icons: {
    icon: "/images/GTSS-logo.png",
  },
  openGraph: {
    title: "GTSS - Great Thumbs Software Solutions",
    description:
      "Practical, scalable software products for real-world local problems. Building the digital foundation for Africa's growth.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "var(--bg)", color: "var(--text)" }}
      >
        <ThemeProvider defaultTheme="light">
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-[72px]">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
