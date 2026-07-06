// 경력 데이터 — 로케일 비의존 필드(기간)와 로케일별 텍스트를 함께 보관.
// 서버 컴포넌트에서 locale로 골라 렌더한다.
import type { Locale } from '@/lib/dictionary';

export type Experience = {
  id: string;
  company: Record<Locale, string>;
  role: Record<Locale, string>;
  period: string; // 로케일 공통 표기
  current?: boolean;
  points: Record<Locale, string[]>;
};

export const experiences: Experience[] = [
  {
    id: 'pitapat-2024',
    company: { ko: '(주)피터패트', en: 'PITAPAT' },
    role: { ko: '프론트엔드 개발자 · 팀 리더', en: 'Frontend Developer · Team Leader' },
    period: '2024.10 — Present',
    current: true,
    points: {
      ko: [
        'Claude Code 기반 개발로 팀 생산성 향상',
        'AI Agent 기반 개발 워크플로 구축 · 반복 작업/문서 자동화',
        'Next.js 기반 신규 구축 및 레거시(PHP) 리뉴얼',
        '관광 배리어프리 키오스크 개발 · 웹 접근성(WA) 대응',
        'SEO 개선 및 코드 리뷰·개발 프로세스 정착',
      ],
      en: [
        'Raised team productivity with Claude Code–driven development',
        'Built AI-agent dev workflows; automated repetitive tasks and docs',
        'New builds on Next.js and renewals of legacy (PHP) sites',
        'Barrier-free tourism kiosk development with web accessibility (WA)',
        'SEO improvements and code-review / process ownership',
      ],
    },
  },
  {
    id: 'company-2024b',
    company: { ko: '(주)시스텀', en: 'SEESTERM' },
    role: { ko: '프론트엔드 개발자', en: 'Frontend Developer' },
    period: '2024.08 — 2024.10',
    points: {
      ko: ['전세계 인터넷서점 운영', '굿웨어몰 유지보수', '프로모션 페이지 구축'],
      en: [
        'Operated an online bookstore service',
        'Maintained the Goodwearmall shop',
        'Built promotional pages',
      ],
    },
  },
  {
    id: 'company-2024a',
    company: { ko: '(주)메디씨앤씨', en: 'MEDI C&C' },
    role: { ko: '프론트엔드 개발자', en: 'Frontend Developer' },
    period: '2024.05 — 2024.08',
    points: {
      ko: ['Medigate', 'Medicast', 'H-Link'],
      en: ['Medigate', 'Medicast', 'H-Link'],
    },
  },
  {
    id: 'pitapat-2018',
    company: { ko: '(주)피터패트', en: 'PITAPAT' },
    role: { ko: '프론트엔드 개발자', en: 'Frontend Developer' },
    period: '2018.08 — 2023.12',
    points: {
      ko: ['기업 홈페이지 구축', '프로모션 페이지', '하이브리드 앱', '키오스크 구축'],
      en: [
        'Corporate website builds',
        'Promotional pages',
        'Hybrid apps',
        'Kiosk builds',
      ],
    },
  },
];
