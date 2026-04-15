import ProtectedAppProviders from '@/components/providers/ProtectedAppProviders';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedAppProviders>{children}</ProtectedAppProviders>;
}
