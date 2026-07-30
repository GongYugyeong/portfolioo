import type { Metadata } from 'next';
import { locales, defaultLocale } from '@/lib/dictionary';

// OG 이미지는 public의 실제 .png를 쓴다.
// opengraph-image 라우트는 static export에서 확장자 없는 파일로 떨어져
// GitHub Pages가 image content-type을 안 붙여주고, 그러면 SNS 미리보기가 깨진다.
const OG_IMAGE = {
  url: '/og/cover.png',
  width: 1200,
  height: 630,
  alt: 'Gong Yugyeong · Frontend Developer',
};

// 라우트별 메타데이터를 일관되게 생성 — canonical + hreflang(alternates.languages) + OG.
// metadataBase는 layout에서 설정하므로 여기선 상대 경로만 준다.
export function pageMetadata({
  locale,
  path,
  title,
  description,
  siteName,
}: {
  locale: string;
  path: string; // '' | '/about' | '/projects' | '/resume' | '/contact'
  title: string;
  description: string;
  siteName?: string; // og:title에 붙일 이름 — 공유 카드에서 제목만 있으면 누구 건지 모른다
}): Metadata {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `/${l}${path}`;
  languages['x-default'] = `/${defaultLocale}${path}`;

  const ogTitle = siteName && path ? `${title} · ${siteName}` : title;

  return {
    title,
    description,
    alternates: { canonical: `/${locale}${path}`, languages },
    openGraph: {
      title: ogTitle,
      description,
      url: `/${locale}${path}`,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
