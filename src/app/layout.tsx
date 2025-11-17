// src/app/layout.tsx
import { ReactNode, Suspense } from 'react';
import Script from 'next/script';

import LenisWrapper from '@/components/LenisWrapper';
import StyledComponentsRegistry from '@/lib/styledComponents';

import '@/styles/globals.scss';

export const metadata = {
  title: '공유경 포트폴리오',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <LenisWrapper />
          <Suspense>{children}</Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
