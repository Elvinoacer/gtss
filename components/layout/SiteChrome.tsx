import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <main id="main-content" className="flex-grow pt-[4.5rem]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
