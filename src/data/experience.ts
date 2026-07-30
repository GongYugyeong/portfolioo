// 경력 데이터 — 로케일 비의존 필드(기간)와 로케일별 텍스트를 함께 보관.
// 서버 컴포넌트에서 locale로 골라 렌더한다.
import type { Locale } from '@/lib/dictionary';

export type Experience = {
  id: string;
  company: Record<Locale, string>;
  role: Record<Locale, string>;
  period: string; // 로케일 공통 표기
  duration?: Record<Locale, string>;
  current?: boolean;
  points: Record<Locale, string[]>;
};

export const experiences: Experience[] = [
  {
    id: 'pitapat-2024',
    company: { ko: '(주)피터패트', en: 'PITAPAT' },
    role: { ko: '개발팀 팀장 (과장)', en: 'Dev Team Lead (Manager)' },
    period: '2024.10 — Present',
    duration: { ko: '1년 10개월', en: '1 yr 10 mos' },
    current: true,
    points: {
      ko: [
        '프론트엔드 팀 리드 — Next.js 기반 구축 · 리뉴얼 프로젝트 총괄 및 일정 관리',
        '레거시 PHP 시스템의 Next.js 전면 리뉴얼 리드, 다국어 배리어프리 키오스크 구축',
        '사내 React 개발 표준 수립, Jenkins CI/CD · Docker 환경 구축',
        'AI 개발도구(Claude Code) 사내 최초 도입 — MCP 연동, 기술 문서 자동화',
      ],
      en: [
        'Frontend team lead — owning Next.js builds and renewals end to end, including scheduling',
        'Led the full Next.js rebuild of a legacy PHP system and built a multilingual barrier-free kiosk',
        'Set the in-house React development standard; built Jenkins CI/CD and Docker environments',
        'First to introduce AI dev tooling (Claude Code) company-wide — MCP integration, automated technical docs',
      ],
    },
  },
  {
    id: 'medicnc-seesterm-2024',
    company: { ko: '(주)메디씨앤씨 · (주)씨스텀', en: 'MEDI C&C · SEESTERM' },
    role: { ko: '개발팀 대리', en: 'Frontend Developer (Assistant Manager)' },
    period: '2024.05 — 2024.10',
    points: {
      ko: [
        '메디게이트 · 메디캐스트 웹사이트 구축 — 국내 최대 의사 커뮤니티 플랫폼, React · Redux Toolkit · TypeScript 기반 레거시 리팩토링',
        '신세계인터내셔날 서비스 운영 · UI 개선, 굿웨어몰 프로모션 구축 및 유지운영',
      ],
      en: [
        'Built the Medigate · Medicast sites — Korea’s largest physician community platform; refactored legacy code onto React · Redux Toolkit · TypeScript',
        'Operated and improved the UI for Shinsegae International; built and maintained Goodwearmall promotions',
      ],
    },
  },
  {
    id: 'pitapat-2018',
    company: { ko: '(주)피터패트', en: 'PITAPAT' },
    role: { ko: 'Frontend Developer / 퍼블리셔', en: 'Frontend Developer / Publisher' },
    period: '2018.08 — 2023.12',
    duration: { ko: '5년 5개월', en: '5 yrs 5 mos' },
    points: {
      ko: [
        '대기업 · 공공기관 브랜드 사이트 및 뉴스룸 구축 30여 건 (국 · 영문 다국어 다수)',
        '대한항공 항공우주사업본부 등 React · TypeScript 기반 개발로 역할 확장',
        '하이브리드 앱 프론트엔드(현대해상 굿맨굿어린이케어, 신한FAN), 관광 키오스크 구축 · 유지운영',
      ],
      en: [
        '30+ brand sites and newsrooms for enterprise and public-sector clients, many bilingual (KO/EN)',
        'Expanded into React · TypeScript development on projects such as Korean Air’s Aerospace Division',
        'Hybrid app frontends (Hyundai Marine Goodman Good Child Care, Shinhan FAN); tourism kiosk builds and maintenance',
      ],
    },
  },
  {
    id: 'agen-2014',
    company: { ko: '(주)에이젠인터넷', en: 'AGEN Internet' },
    role: { ko: '경영지원팀 주임', en: 'Business Support Team, Associate' },
    period: '2014.08 — 2017.12',
    duration: { ko: '3년 5개월', en: '3 yrs 5 mos' },
    points: {
      ko: [
        '재직 중 웹 퍼블리싱 업무를 병행하며 실무로 전향 — 한국농수산식품유통공사(aT) AT센터 웹페이지 유지보수 담당',
      ],
      en: [
        'Took on web publishing alongside the role and moved into it full-time — maintained the aT Center site for the Korea Agro-Fisheries & Food Trade Corporation',
      ],
    },
  },
];
