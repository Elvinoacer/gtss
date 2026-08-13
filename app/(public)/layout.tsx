import { DeferredViewTracker } from "@/components/analytics/DeferredViewTracker";
import { SiteChrome } from "@/components/layout/SiteChrome";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteChrome>
      <DeferredViewTracker />
      {children}
    </SiteChrome>
  );
}
