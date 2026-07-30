import type { Metadata } from 'next';
import Link from 'next/link';
import RootRedirect from './RootRedirect';
import s from '@/styles/sections/root.module.scss';

// 언어 선택 스텁이라 자체 콘텐츠가 없다 — 신호는 canonical로 /ko에 모은다.
export const metadata: Metadata = {
  title: 'Gong Yugyeong · Frontend Portfolio',
  description:
    '프론트엔드 개발자 공유경의 포트폴리오 · Portfolio of frontend developer Gong Yugyeong. 한국어 / English',
  alternates: {
    canonical: '/ko',
    languages: { ko: '/ko', en: '/en', 'x-default': '/ko' },
  },
  openGraph: {
    title: 'Gong Yugyeong · Frontend Portfolio',
    description: '프론트엔드 개발자 공유경의 포트폴리오 · Portfolio of frontend developer Gong Yugyeong',
    url: '/ko',
    images: [{ url: '/og/cover.png', width: 1200, height: 630 }],
  },
};

// 루트 진입점 — 브라우저 언어로 자동 이동하되, 크롤러/무JS를 위해 콘텐츠와 언어 링크를 렌더.
export default function RootPage() {
  return (
    <main className={s.wrap}>
      <RootRedirect />
      <p className={s.brand}>Gong Yugyeong</p>
      <p className={s.role}>Frontend Developer</p>
      <nav className={s.links} aria-label="Choose language">
        <Link href="/ko" data-cursor="hover">
          한국어
        </Link>
        <Link href="/en" data-cursor="hover">
          English
        </Link>
      </nav>
    </main>
  );
}
