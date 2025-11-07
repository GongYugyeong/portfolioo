// src/app/layout.tsx
import { ReactNode, Suspense } from 'react';
import Script from 'next/script';

import LenisWrapper from '@/components/LenisWrapper';
import StyledComponentsRegistry from '@/lib/styledComponents';

import '@/styles/globals.scss';

// ================================
// 메타데이터 (SEO & OG)
// ================================
export const metadata = {
  title: {
    default: '공유경 포트폴리오 | Frontend Developer',
    template: '%s | 공유경 포트폴리오',
  },
  description:
    '안녕하세요. 프론트엔드 개발자 공유경입니다. 애니메이션과 인터랙션으로 생동감 있는 웹을 만듭니다.',
  openGraph: {
    title: '공유경 포트폴리오 | Frontend Developer',
    description:
      '프론트엔드 개발자 공유경의 포트폴리오입니다. GSAP, Lenis, i18next 기반 인터랙티브 웹 경험을 구현합니다.',
    url: 'https://portfolio-gongyugyeong.kr',
    siteName: 'Gong Yugyeong Portfolio',
    images: [
      {
        url: '/images/og-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Gong Yugyeong Portfolio Main Thumbnail',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// ================================
// 루트 레이아웃
// ================================
interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <head>
      </head>

      <body>
        <StyledComponentsRegistry>
          {/* 전역 스크롤 컨트롤러 */}
          <LenisWrapper />
          <Suspense>{children}</Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
