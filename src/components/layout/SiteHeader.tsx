'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/dictionary';
import s from '@/styles/layout/site-header.module.scss';

type NavItem = { href: string; label: string };

export default function SiteHeader({
  locale,
  brand,
  nav,
  switchLabel,
}: {
  locale: Locale;
  brand: string;
  nav: NavItem[];
  switchLabel: string;
}) {
  // trailingSlash 설정으로 pathname이 '/ko/'처럼 올 수 있어 정규화 후 비교
  const raw = usePathname() ?? `/${locale}`;
  const pathname = raw.replace(/\/+$/, '') || `/${locale}`;
  const other: Locale = locale === 'ko' ? 'en' : 'ko';
  // 현재 경로에서 로케일 세그먼트만 교체
  const switchHref = pathname.replace(/^\/(ko|en)/, `/${other}`);
  const homeHref = `/${locale}`;

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Link href={homeHref} className={s.brand} data-cursor="hover">
          {brand}
        </Link>

        <nav className={s.nav} aria-label="Primary">
          <ul>
            {nav.map((item) => {
              const active =
                item.href === homeHref
                  ? pathname === homeHref
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={active ? s.active : undefined}
                    data-cursor="hover"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href={switchHref} className={s.lang} data-cursor="hover">
          {switchLabel}
        </Link>
      </div>
    </header>
  );
}
