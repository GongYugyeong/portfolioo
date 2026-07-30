import type { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/dictionary';
import { site } from '@/data/site';

export const dynamic = 'force-static';

const routes = ['', '/about', '/projects', '/resume', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  // trailingSlash: true라서 canonical과 같은 형태로 맞춘다 (다르면 중복 URL로 취급될 수 있다)
  const url = (locale: string, route: string) => `${site.baseUrl}/${locale}${route}/`;
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = routes.flatMap((route) =>
    locales.map((locale) => ({
      url: url(locale, route),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, url(l, route)])),
          'x-default': url(defaultLocale, route),
        },
      },
    }))
  );

  // 이력서 PDF도 색인 대상 — AI 크롤러가 본문을 그대로 읽는다
  entries.push({
    url: `${site.baseUrl}${site.resumePdf}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  });

  return entries;
}
