import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import {
  getDictionary,
  isLocale,
  locales,
  defaultLocale,
  type Locale,
} from '@/lib/dictionary';
import { site } from '@/data/site';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import CustomCursor from '@/components/common/CustomCursor';
import ScrollReveal from '@/components/anim/ScrollReveal';
import SetLang from '@/components/SetLang';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(site.baseUrl),
    title: { default: dict.meta.home.title, template: `%s · ${dict.Name}` },
    description: dict.meta.home.description,
    openGraph: {
      siteName: dict.SiteName,
      locale: locale === 'en' ? 'en_US' : 'ko_KR',
      type: 'website',
    },
    icons: { icon: '/favicon.ico' },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(loc);

  const nav = [
    { href: `/${loc}`, label: dict.nav.home },
    { href: `/${loc}/about`, label: dict.nav.about },
    { href: `/${loc}/projects`, label: dict.nav.projects },
    { href: `/${loc}/resume`, label: dict.nav.resume },
    { href: `/${loc}/contact`, label: dict.nav.contact },
  ];

  return (
    <>
      <SetLang locale={loc} />
      <CustomCursor />
      <ScrollReveal />
      <SiteHeader
        locale={loc}
        brand="Gong Yugyeong"
        nav={nav}
        switchLabel={dict.nav.switchLang}
      />
      <main id="content">{children}</main>
      <SiteFooter locale={loc} dict={dict} />
    </>
  );
}
