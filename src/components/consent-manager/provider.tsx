'use client';

import type { ConsentManagerProviderProps } from '@c15t/nextjs';
import { ConsentManagerProvider } from '@c15t/nextjs/headless';
import { ConsentBanner } from './ConsentBanner';

type SSRData = ConsentManagerProviderProps['options'] extends { ssrData?: infer S } ? S : unknown;

interface Props {
  children: React.ReactNode;
  ssrData?: SSRData;
}

export default function ConsentManagerClient({ children, ssrData }: Props) {
  return (
    <ConsentManagerProvider
      options={{
        mode: 'hosted',
        backendURL: '/api/c15t',
        ssrData,
      }}
    >
      <ConsentBanner />
      {children}
    </ConsentManagerProvider>
  );
}
