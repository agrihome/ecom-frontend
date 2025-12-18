'use client';

import StoreProvider from '@/lib/redux/StoreProvider';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreProvider>{children}</StoreProvider>;
}
