// 이력서 상단 프로필 — 투입 조건과 규모 지표. 로케일별 텍스트.
import type { Locale } from '@/lib/dictionary';

export type Fact = {
  id: string;
  label: Record<Locale, string>;
  value: Record<Locale, string>;
};

// 투입 가능 시점은 이력서 PDF에만 두고 페이지에는 노출하지 않는다.
export const facts: Fact[] = [
  {
    id: 'employment',
    label: { ko: '희망 형태', en: 'Employment' },
    value: { ko: '무관', en: 'Open' },
  },
  {
    id: 'location',
    label: { ko: '근무 지역', en: 'Work location' },
    value: { ko: '무관', en: 'Open' },
  },
  {
    id: 'volume',
    label: { ko: '수행 프로젝트', en: 'Projects shipped' },
    value: {
      ko: '40여 건 · 대기업/공공기관 15개사+',
      en: '40+ across 15+ enterprise & public-sector clients',
    },
  },
];

// 주력 분야 태그 — 이력서 헤더의 키워드
export const focusTags: Record<Locale, string>[] = [
  { ko: 'React · Next.js · TypeScript', en: 'React · Next.js · TypeScript' },
  { ko: '웹 접근성 WA', en: 'Web Accessibility (WA)' },
  { ko: 'SEO', en: 'SEO' },
  { ko: '다국어 i18n', en: 'Multilingual i18n' },
  { ko: '키오스크', en: 'Kiosk' },
];
