import { DeferredViewTracker } from "@/components/analytics/DeferredViewTracker";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DeferredViewTracker />
      {children}
    </>
  );
}
