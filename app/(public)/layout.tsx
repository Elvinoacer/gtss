import { Navbar, Footer } from "@/components/landing";
import { DeferredViewTracker } from "@/components/analytics/DeferredViewTracker";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden antialiased">
      <Navbar />
      <DeferredViewTracker />
      <main className="flex-grow pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}
