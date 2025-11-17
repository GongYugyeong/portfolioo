import { Metadata } from 'next';

import AboutComponent from '@/components/about/AboutComponent';

import styles from '@/styles/common/Components.module.scss';

// ================================
// 메타데이터 (SEO)
// ================================
export const metadata: Metadata = {
  title: '소개 | 프론트엔드 공유경',
  description: '안녕하세요. 프론트엔드 개발자 공유경입니다.',
  openGraph: {
    title: '소개 | 프론트엔드 공유경',
    description: '프론트엔드 개발자 공유경의 포트폴리오 소개 페이지입니다.',
    type: 'website',
    url: 'https://portfolio-gongyugyeong.kr',
    siteName: '공유경 포트폴리오',
    images: [
      {
        url: '/images/og-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Gong Yugyeong Portfolio Main',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// ================================
// 소개 페이지
// ================================
export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AboutComponent />
      </main>
    </div>
  );
}
