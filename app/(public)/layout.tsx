import { Navbar, Footer } from '@/components/landing';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#020617] min-h-screen font-display text-[#111317] dark:text-white antialiased overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
