// 구조화 데이터(JSON-LD) 빌더 — 검색 리치결과와 AI 검색 인용의 공통 근거.
// 화면에 실제 보이는 내용만 담는다(허위 마크업 금지).
import type { Locale, Dictionary } from '@/lib/dictionary';
import { site } from '@/data/site';
import { stackGroups } from '@/data/stack';
import { featuredProjects } from '@/data/projects';
import { experiences } from '@/data/experience';

// trailingSlash: true 라서 canonical과 같은 형태로 맞춘다
export function absUrl(locale: Locale, path = '') {
  return `${site.baseUrl}/${locale}${path}/`;
}

const PERSON_ID = `${site.baseUrl}/#person`;
const SITE_ID = `${site.baseUrl}/#website`;

function person(locale: Locale, dict: Dictionary) {
  const current = experiences.find((e) => e.current);

  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: dict.Name,
    alternateName: locale === 'ko' ? 'Gong Yugyeong' : '공유경',
    url: absUrl(locale),
    jobTitle: locale === 'ko' ? '프론트엔드 개발자' : 'Frontend Developer',
    description: dict.meta.home.description,
    email: `mailto:${site.email}`,
    knowsAbout: stackGroups.flatMap((g) => g.items),
    knowsLanguage: ['ko', 'en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: locale === 'ko' ? '서울특별시 마포구' : 'Mapo-gu, Seoul',
      addressCountry: 'KR',
    },
    ...(current && {
      worksFor: {
        '@type': 'Organization',
        name: current.company[locale],
      },
    }),
    alumniOf: dict.about.education.map((name) => ({
      '@type': 'EducationalOrganization',
      name,
    })),
    sameAs: [site.github, site.resume],
  };
}

function website(locale: Locale, dict: Dictionary) {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: dict.SiteName,
    url: absUrl(locale),
    description: dict.meta.home.description,
    inLanguage: locale === 'ko' ? 'ko-KR' : 'en-US',
    publisher: { '@id': PERSON_ID },
    author: { '@id': PERSON_ID },
  };
}

/** 사이트 전역 그래프 — Person + WebSite. 로케일 레이아웃에서 한 번만 주입. */
export function siteGraph(locale: Locale, dict: Dictionary) {
  return {
    '@context': 'https://schema.org',
    '@graph': [person(locale, dict), website(locale, dict)],
  };
}

/** 페이지 그래프 — WebPage + 이동경로. path는 '/about'처럼 로케일 뒤 경로. */
export function pageGraph({
  locale,
  dict,
  path,
  title,
  description,
}: {
  locale: Locale;
  dict: Dictionary;
  path: string;
  title: string;
  description: string;
}) {
  const url = absUrl(locale, path);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { '@id': SITE_ID },
        about: { '@id': PERSON_ID },
        inLanguage: locale === 'ko' ? 'ko-KR' : 'en-US',
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: dict.nav.home,
            item: absUrl(locale),
          },
          { '@type': 'ListItem', position: 2, name: title, item: url },
        ],
      },
    ],
  };
}

/** 프로젝트 목록 — AI가 "무슨 프로젝트를 했나"를 발췌하기 쉽게 ItemList로 노출. */
export function projectListGraph(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: locale === 'ko' ? '주요 프로젝트' : 'Selected Work',
    numberOfItems: featuredProjects.length,
    itemListElement: featuredProjects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.title[locale],
        description: p.summary[locale],
        creator: { '@id': PERSON_ID },
        ...(p.client && { sourceOrganization: { '@type': 'Organization', name: p.client[locale] } }),
        ...(p.url && { url: p.url }),
        ...(p.year && { dateCreated: p.year }),
        keywords: p.tech.join(', '),
      },
    })),
  };
}
