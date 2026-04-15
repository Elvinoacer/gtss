import ProtectedAppProviders from '@/components/providers/ProtectedAppProviders';

export default function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedAppProviders>{children}</ProtectedAppProviders>;
}
