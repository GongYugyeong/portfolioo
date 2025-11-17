import { ReactNode, Suspense } from 'react';
import { Providers } from '@/app/providers';
import '@/styles/globals.scss';

export const metadata = {
  title: '공유경 포트폴리오',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Providers>
          <Suspense>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
