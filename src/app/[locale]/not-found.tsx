import Link from 'next/link';
import s from '@/styles/sections/not-found.module.scss';

// not-found는 params를 받지 못하므로 로케일 중립(양언어)으로 표기.
export default function LocaleNotFound() {
  return (
    <section className={s.wrap}>
      <p className={s.code}>404</p>
      <h1 className={s.title}>Page not found · 페이지를 찾을 수 없습니다</h1>
      <div className={s.links}>
        <Link href="/ko" data-cursor="hover">
          홈으로
        </Link>
        <Link href="/en" data-cursor="hover">
          Back home
        </Link>
      </div>
    </section>
  );
}
