import type { Metadata } from 'next';
import { locales, defaultLocale } from '@/lib/dictionary';

// 라우트별 메타데이터를 일관되게 생성 — canonical + hreflang(alternates.languages) + OG.
// metadataBase는 layout에서 설정하므로 여기선 상대 경로만 준다.
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string;
  path: string; // '' | '/about' | '/projects' | '/contact'
  title: string;
  description: string;
}): Metadata {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `/${l}${path}`;
  languages['x-default'] = `/${defaultLocale}${path}`;

  return {
    title,
    description,
    alternates: { canonical: `/${locale}${path}`, languages },
    openGraph: {
      title,
      description,
      url: `/${locale}${path}`,
      // [locale]/opengraph-image.tsx가 빌드 타임에 생성하는 로케일별 OG 이미지
      images: [`/${locale}/opengraph-image`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/${locale}/opengraph-image`],
    },
  };
}
