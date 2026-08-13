import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./theme.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { themeInitScript } from "@/lib/theme-script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gtss.vercel.app"),
  title: {
    default: "GTSS — Software for East African businesses",
    template: "%s · GTSS",
  },
  description:
    "Great Thumbs Software Solutions builds practical software for hotels, restaurants, shops, and churches across East Africa. Offline-first. M-Pesa ready. Deployed in three weeks.",
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
    title: "GTSS — Software for East African businesses",
    description:
      "Practical systems for hotels, restaurants, shops, and churches. Offline-first, M-Pesa ready, deployed in three weeks.",
    siteName: "GTSS",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/images/marketing_banner.png",
        width: 1456,
        height: 816,
        alt: "GTSS — Software that keeps your business running",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTSS — Software for East African businesses",
    description:
      "Practical. Offline-first. M-Pesa ready. Built in Nairobi for East African operators.",
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
        style={{ background: "var(--bg)", color: "var(--text)" }}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}
