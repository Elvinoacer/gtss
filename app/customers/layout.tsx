import ProtectedAppProviders from '@/components/providers/ProtectedAppProviders';

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedAppProviders>{children}</ProtectedAppProviders>;
}
