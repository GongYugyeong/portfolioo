import Link from 'next/link';
import type { Dictionary, Locale } from '@/lib/dictionary';
import { site } from '@/data/site';
import s from '@/styles/layout/site-footer.module.scss';

export default function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.top}>
          <p className={s.brand}>Gong Yugyeong</p>
          <nav className={s.nav} aria-label="Footer">
            <Link href={`/${locale}`}>{dict.nav.home}</Link>
            <Link href={`/${locale}/about`}>{dict.nav.about}</Link>
            <Link href={`/${locale}/projects`}>{dict.nav.projects}</Link>
            <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
          </nav>
        </div>

        <div className={s.bottom}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>{dict.contact.location}</span>
          <span className={s.copy}>© 2026 Gong Yugyeong</span>
        </div>
      </div>
    </footer>
  );
}
