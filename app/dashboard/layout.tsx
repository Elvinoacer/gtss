import ProtectedAppProviders from '@/components/providers/ProtectedAppProviders';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedAppProviders>{children}</ProtectedAppProviders>;
}
