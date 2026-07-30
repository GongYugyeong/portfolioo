import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Providers } from '@/app/providers';
import { displaySerif, mono } from '@/lib/fonts';
import { site } from '@/data/site';
import '@/styles/globals.scss';
import '@/styles/theme.scss';

// 루트 레이아웃이 <html>/<body>를 소유(모든 라우트에 유효한 문서 보장).
// 로케일 페이지의 lang은 SetLang이 보정한다.
export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: 'Gong Yugyeong · Frontend Portfolio',
  // Search Console 소유확인 — 루트에 둬야 / 와 /[locale] 전부에 붙는다(하위에서 verification을 덮지 않음)
  verification: { google: 'GlZfrfXOUlv2GCUqc3fKLQnKdN1KcHUpLbvAaKmyyxU' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // 아래 인라인 스크립트가 하이드레이션 전에 html에 'js' 클래스를 추가하므로
    // 서버/클라이언트 className 불일치 경고를 이 엘리먼트에 한해 억제.
    <html lang="ko" suppressHydrationWarning>
      <body className={`${displaySerif.variable} ${mono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
