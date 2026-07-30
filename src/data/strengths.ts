// 핵심 역량 — 이력서 STRENGTHS. 라벨 + 설명 한 줄 구조라 locale JSON 대신 데이터로 뺐다.
import type { Locale } from '@/lib/dictionary';

export type Strength = {
  id: string;
  label: Record<Locale, string>;
  body: Record<Locale, string>;
};

export const strengths: Strength[] = [
  {
    id: 'legacy',
    label: { ko: '레거시 전환', en: 'Legacy migration' },
    body: {
      ko: 'PHP · jQuery 서비스를 Next.js / TypeScript로 전면 리뉴얼. 구조 설계 · 단계적 이관 · 백엔드 협업 주도',
      en: 'Full rebuilds of PHP · jQuery services into Next.js / TypeScript — leading information architecture, phased migration, and backend collaboration',
    },
  },
  {
    id: 'a11y',
    label: { ko: '웹 접근성 WA', en: 'Web accessibility (WA)' },
    body: {
      ko: 'ARIA 속성, 키보드 내비게이션, 포커스 관리, 고대비 모드, 스크린리더 검증까지 구현 레벨에서 직접 대응',
      en: 'ARIA attributes, keyboard navigation, focus management, high-contrast mode, and screen-reader verification — handled hands-on at the implementation level',
    },
  },
  {
    id: 'seo',
    label: { ko: 'SEO 구조 설계', en: 'SEO architecture' },
    body: {
      ko: 'Metadata API 동적 메타데이터, Open Graph, Canonical URL, Sitemap / Robots, 검색 친화적 URL 구조',
      en: 'Dynamic metadata via the Metadata API, Open Graph, canonical URLs, sitemap / robots, and search-friendly URL structure',
    },
  },
  {
    id: 'publishing',
    label: { ko: '퍼블 + 개발', en: 'Publishing + development' },
    body: {
      ko: '퍼블리셔 출신으로 마크업 품질과 크로스 브라우징 기준 보유. 다국어 · 반응형 대응 경험 다수',
      en: 'A publisher background brings standards for markup quality and cross-browser support, with extensive multilingual and responsive work',
    },
  },
  {
    id: 'lead',
    label: { ko: '팀 리딩', en: 'Team leadership' },
    body: {
      ko: '코드 리뷰 문화 정착, 공통 컴포넌트 표준화, Jenkins CI/CD · Docker 환경 구축, AI 개발도구 사내 도입',
      en: 'Established code-review practice and shared-component standards, built Jenkins CI/CD and Docker environments, and introduced AI dev tooling company-wide',
    },
  },
];
