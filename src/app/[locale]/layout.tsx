import { ReactNode } from 'react';
import { I18nProvider } from '@/components/I18nProvider';

import { Metadata } from 'next';

export function generateStaticParams() {
  return [{ locale: 'ko' }, { locale: 'en' }];
}

// SEO 통합
export function generateMetadata(
  { params }: { params: { locale: string } }
): Metadata {
  const { locale } = params;
  const isKorean = locale === 'ko';

  const title = isKorean
    ? '포트폴리오 | 프론트엔드 공유경'
    : 'Portfolio | Frontend Developer Gong Yugyeong';

  const description = isKorean
    ? '안녕하세요. 프론트엔드 개발자 공유경입니다. 애니메이션과 인터랙션을 통해 생동감 있는 웹 경험을 만듭니다.'
    : 'Hi, I’m Gong Yugyeong — a frontend developer who builds delightful web experiences with animation and interaction.';

  const localeCode = isKorean ? 'ko_KR' : 'en_US';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: localeCode,
      type: 'website',
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale ?? 'ko';

  return (
    <I18nProvider locale={locale}>
      {children}
    </I18nProvider>
  );
}
