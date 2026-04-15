import ProtectedAppProviders from '@/components/providers/ProtectedAppProviders';

export default function DeploymentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedAppProviders>{children}</ProtectedAppProviders>;
}
