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
    default: "GTSS — Enterprise & Healthcare Systems for East Africa",
    template: "%s · GTSS",
  },
  description:
    "Great Thumbs Software Solutions builds practical software for pharmacies, healthcare clinics, hotels, restaurants, retail, and faith institutions across East Africa. Offline-first. M-Pesa ready. Deployed in three weeks.",
  keywords: [
    "Pharmacy Software",
    "PharmaCare OS",
    "Digital Pharmacy Nairobi",
    "Pharmacy Management Kenya",
    "Clinic System",
    "OTC Medicine Online",
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
    title: "GTSS — Enterprise & Healthcare Systems for East Africa",
    description:
      "Practical systems for pharmacies, healthcare clinics, hotels, restaurants, retail, and churches. Offline-first, M-Pesa ready, deployed in three weeks.",
    siteName: "GTSS",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/images/pharmacy_platform_hero.jpg",
        width: 1456,
        height: 816,
        alt: "GTSS — PharmaCare OS & Enterprise Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTSS — Enterprise & Healthcare Systems for East Africa",
    description:
      "Practical. Offline-first. M-Pesa ready. Built in Nairobi for East African pharmacies and operators.",
    images: ["/images/pharmacy_platform_hero.jpg"],
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
