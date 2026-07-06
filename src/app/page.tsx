import Link from 'next/link';
import RootRedirect from './RootRedirect';
import s from '@/styles/sections/root.module.scss';

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
