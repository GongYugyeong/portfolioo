// 프로젝트 데이터 — 대표(featured) + 그 외(more) 리스트.
// tech/url/period/slug는 로케일 공통, 텍스트만 로케일별.
import type { Locale } from '@/lib/dictionary';

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  client?: Record<Locale, string>;
  summary: Record<Locale, string>;
  role: Record<Locale, string>;
  tech: string[];
  highlights: Record<Locale, string[]>;
  badges?: Record<Locale, string>[]; // 진행 중 · 자사 프로덕트 · 상주
  url?: string;
  period?: string; // '2025.08 — 2026.04' 형태. 없으면 year로 대체
  year?: string;
};

const inProgress = { ko: '진행 중', en: 'In progress' };

export const featuredProjects: Project[] = [
  {
    slug: 'smart-tourism-kiosk',
    title: {
      ko: '스마트관광안내시스템 배리어프리 키오스크 리뉴얼',
      en: 'Smart Tourism Information Kiosk — Barrier-Free Renewal',
    },
    client: { ko: 'UA', en: 'UA' },
    summary: {
      ko: '노후 PHP 키오스크를 Next.js로 전면 재구축. 정보 구조와 컴포넌트 설계부터 담당했습니다.',
      en: 'A full rebuild of an aging PHP kiosk on Next.js — owned from information architecture and component design onward.',
    },
    role: {
      ko: '프론트엔드 리드 · 국문 / 영문 / 중문(간체 · 번체) / 일문',
      en: 'Frontend lead · KO / EN / ZH (Simplified · Traditional) / JA',
    },
    tech: ['Next.js', 'TypeScript', 'GSAP', 'Swiper', 'i18n', 'Map API'],
    highlights: {
      ko: [
        '노후 PHP 키오스크를 Next.js로 전면 재구축 — 정보 구조와 컴포넌트 설계부터 담당',
        '웹 접근성 기준 충족이 계약 조건 — ARIA 속성, 키보드 내비게이션, 포커스 관리, 스크린리더 검증',
        '키오스크 특화 UI(터치 타겟 최소 크기, 고대비 모드, 무입력 시 자동 초기화) 및 4개 국어 i18n 구조 설계',
      ],
      en: [
        'Rebuilt an aging PHP kiosk entirely on Next.js — owning information architecture and component design',
        'Meeting accessibility standards was a contractual requirement — ARIA attributes, keyboard navigation, focus management, screen-reader verification',
        'Kiosk-specific UI (minimum touch-target sizes, high-contrast mode, idle auto-reset) and a four-language i18n structure',
      ],
    },
    badges: [inProgress],
    url: '',
    period: '2026.06 — 12',
    year: '2026',
  },
  {
    slug: 'wreeting',
    title: {
      ko: 'Wreeting — Figma 문구 검수 플러그인',
      en: 'Wreeting — Figma Copy Review Plugin',
    },
    client: { ko: '(주)피터패트', en: 'PITAPAT' },
    summary: {
      ko: 'Figma 안의 문구를 규칙 기반으로 교정하고 AI 대체 문구를 제안하는 자사 플러그인.',
      en: 'An in-house Figma plugin that proofreads copy against rules and suggests AI-generated alternatives.',
    },
    role: { ko: '프론트엔드 리드', en: 'Frontend lead' },
    tech: ['React', 'TypeScript', 'Figma Plugin API', 'MUI', 'Zustand', 'webpack'],
    highlights: {
      ko: [
        'UI 스레드(React)와 메인 스레드(figma.*)를 postMessage로 통신하는 2스레드 아키텍처 설계, 메시지 프로토콜 단일 타입 관리',
        '이메일 인증 로그인 실 API 연동(동시 1세션 정책 · 토큰 기반 인증)',
        '규칙 기반 텍스트 교정 및 AI 대체 문구 생성 연동',
      ],
      en: [
        'Designed a two-thread architecture bridging the UI thread (React) and main thread (figma.*) over postMessage, with the message protocol under a single type',
        'Integrated real email-verification login (single-concurrent-session policy, token-based auth)',
        'Rule-based text correction plus AI alternative-copy generation',
      ],
    },
    badges: [inProgress, { ko: '자사 프로덕트', en: 'In-house product' }],
    url: '',
    period: '2026.06 —',
    year: '2026',
  },
  {
    slug: 'daewoong',
    title: { ko: '대웅제약 웹사이트 리뉴얼', en: 'Daewoong Pharmaceutical — Site Renewal' },
    client: { ko: '대웅제약', en: 'Daewoong Pharmaceutical' },
    summary: {
      ko: '소비자 · 의료 전문가 · 투자자가 공존하는 대규모 코퍼레이트 사이트를 Next.js(App Router) 기반으로 전면 리뉴얼.',
      en: 'A full Next.js (App Router) renewal of a large corporate site serving consumers, medical professionals, and investors at once.',
    },
    role: { ko: '프론트엔드 리드 · 국문 / 영문', en: 'Frontend lead · KO / EN' },
    tech: ['Next.js', 'TypeScript', 'SCSS', 'REST API', 'Swagger', 'SEO', 'i18n'],
    highlights: {
      ko: [
        '소비자 · 의료 전문가 · 투자자가 공존하는 대규모 코퍼레이트 사이트를 Next.js(App Router) 기반으로 전면 리뉴얼',
        'SEO 최적화 — 페이지별 메타데이터 동적 생성, Open Graph · Canonical URL, Sitemap / Robots, 검색 친화적 URL 설계',
        'Swagger 명세 기반 REST API 연동, Java(Spring) 백엔드 팀과 스펙 협의 및 사용자군별 내비게이션 재설계',
      ],
      en: [
        'Full renewal on Next.js (App Router) of a large corporate site serving consumers, medical professionals, and investors',
        'SEO work — per-page dynamic metadata, Open Graph and canonical URLs, sitemap / robots, search-friendly URL design',
        'REST API integration from Swagger specs, spec negotiation with the Java (Spring) backend team, and navigation redesigned per audience',
      ],
    },
    url: 'https://www.daewoong.co.kr/ko',
    period: '2025.08 — 2026.04',
    year: '2026',
  },
  {
    slug: 'daewoongbio',
    title: { ko: '대웅바이오 웹사이트 리뉴얼', en: 'Daewoong Bio — Site Renewal' },
    client: { ko: '대웅바이오', en: 'Daewoong Bio' },
    summary: {
      ko: '글로벌 제약사 · 바이어를 대상으로 한 CMO / CDMO B2B 사이트 전면 리뉴얼 (대웅제약과 별개 프로젝트로 독립 구축).',
      en: 'A full renewal of a CMO / CDMO B2B site aimed at global pharma companies and buyers, built independently from the Daewoong Pharmaceutical project.',
    },
    role: { ko: '프론트엔드 리드 · 국문 / 영문', en: 'Frontend lead · KO / EN' },
    tech: ['Next.js', 'TypeScript', 'SCSS', 'REST API', 'GSAP', 'i18n'],
    highlights: {
      ko: [
        '글로벌 제약사 · 바이어 대상 CMO / CDMO B2B 사이트 전면 리뉴얼 (대웅제약과 별개 프로젝트로 독립 구축)',
        '실적 지표 시각화 — 연도별 매출 · 시장 점유율 · 수출국 수를 스크롤 트리거 카운트업으로 구현',
        '생산시설 4개 센터 섹션을 일관된 컴포넌트로 설계, 국 · 영문 다국어 구조 및 IR · 연구개발 API 연동',
      ],
      en: [
        'Full renewal of a CMO / CDMO B2B site for global pharma companies and buyers, built separately from the Daewoong Pharmaceutical project',
        'Performance-metric visualization — yearly revenue, market share, and export-country counts as scroll-triggered count-ups',
        'Four production-facility sections designed as consistent components, plus KO/EN structure and IR · R&D API integration',
      ],
    },
    url: 'https://daewoongbio.co.kr/ko',
    period: '2025.05 — 12',
    year: '2025',
  },
  {
    slug: 'dno-khub',
    title: {
      ko: '디앤오 Khub 사내 웹시스템 구축 및 유지운영',
      en: 'D&O Khub — Internal Web System Build & Operations',
    },
    client: { ko: '디앤오(D&O)', en: 'D&O' },
    summary: {
      ko: '임직원이 매일 쓰는 업무 시스템을 구축하고 2년 가까이 단독으로 유지운영하고 있습니다.',
      en: 'An internal system used daily by employees — built, then maintained solo for close to two years.',
    },
    role: { ko: '프론트엔드 · 구축 + 유지운영', en: 'Frontend · build + operations' },
    tech: ['Next.js', 'TypeScript', 'Zustand', 'Chart.js', 'REST API'],
    highlights: {
      ko: [
        '임직원이 매일 사용하는 업무 시스템 — 정보 밀도와 조작 효율 중심으로 사용자 · 관리자(Admin) 화면 개발',
        '구축 이후 2년 가까이 유지운영 — 협업 요구사항 수렴부터 배포까지 단독 대응',
        '기능 추가와 점진적 리팩토링을 운영 중에 병행',
      ],
      en: [
        'A daily-use internal system — user and admin screens built around information density and operational efficiency',
        'Nearly two years of operations since launch — handling everything from requirement gathering to deployment solo',
        'Added features and refactored incrementally while the system stayed in production',
      ],
    },
    badges: [inProgress, { ko: '상주', en: 'On-site' }],
    url: '',
    period: '2024.10 —',
    year: '2024',
  },
  {
    slug: 'korean-air-aerospace',
    title: {
      ko: '대한항공 항공우주사업본부 웹사이트 구축',
      en: 'Korean Air Aerospace Division — Site Build',
    },
    client: { ko: '대한항공', en: 'Korean Air' },
    summary: {
      ko: '메인 · 본부 역사 · 신사업 파트를 담당한 인터랙션 중심 반응형 웹.',
      en: 'An interaction-heavy responsive site covering the main page, division history, and new-business sections.',
    },
    role: {
      ko: '프론트엔드 · 메인 / 본부 역사 / 신사업',
      en: 'Frontend · main / division history / new business',
    },
    tech: ['React', 'TypeScript', 'SCSS', 'GSAP'],
    highlights: {
      ko: [
        'GSAP ScrollTrigger 기반 연혁 타임라인 인터랙션, 섹션 전환 애니메이션 및 패럴랙스 효과 구현',
        '짧은 일정 안에 인터랙션 비중이 큰 파트를 완성, transform / opacity 기반 처리로 리플로우 최소화',
      ],
      en: [
        'GSAP ScrollTrigger history timeline, section transition animations, and parallax effects',
        'Delivered the interaction-heavy sections on a tight schedule, minimizing reflow by sticking to transform / opacity',
      ],
    },
    url: 'https://aerospace.koreanair.com/main',
    period: '2023.01 — 02',
    year: '2023',
  },
];

// 그 외 작업 — 연도별 아카이브 (ETC)
export type MoreCategory = {
  id: string;
  label: Record<Locale, string>;
  items: { name: Record<Locale, string>; url?: string }[];
};

export const moreProjects: MoreCategory[] = [
  {
    id: '2026',
    label: { ko: '2026', en: '2026' },
    items: [
      {
        name: { ko: '크라운파크호텔 웹사이트 리뉴얼', en: 'Crown Park Hotel — site renewal' },
        url: 'https://www.crownparkhotel.co.kr/',
      },
      {
        name: {
          ko: '미르진 사전예약 페이지 (자이언트블랙)',
          en: 'Mirzin pre-registration page (Giant Black)',
        },
      },
    ],
  },
  {
    id: '2025',
    label: { ko: '2025', en: '2025' },
    items: [
      {
        name: {
          ko: '한화그룹 캠페인 마이크로사이트',
          en: 'Hanwha Group campaign microsite',
        },
      },
      {
        name: { ko: '도루코 웹사이트 리뉴얼', en: 'Dorco — site renewal' },
        url: 'http://dorco2025.pitap.at/kor/main/',
      },
    ],
  },
  {
    id: '2024',
    label: { ko: '2024', en: '2024' },
    items: [
      {
        name: {
          ko: '인천계양산업단지 웹사이트 구축 · 유지운영',
          en: 'Incheon Gyeyang Industrial Complex — build & operations',
        },
        url: 'https://www.kicoxbunyang.co.kr/',
      },
      {
        name: { ko: '굿웨어몰 프로모션', en: 'Goodwearmall promotions' },
        url: 'https://www.goodwearmall.com/',
      },
      {
        name: { ko: '메디게이트 / 메디캐스트', en: 'Medigate / Medicast' },
        url: 'https://www.medigate.net/',
      },
    ],
  },
  {
    id: '2023',
    label: { ko: '2023', en: '2023' },
    items: [
      { name: { ko: 'SK하이닉스 뉴스룸', en: 'SK hynix Newsroom' } },
      { name: { ko: 'SK E&S 미디어룸', en: 'SK E&S Media Room' } },
      {
        name: { ko: '삼성디스플레이 유지운영', en: 'Samsung Display — operations' },
        url: 'https://www.samsungdisplay.com/kor/index.jsp',
      },
      { name: { ko: '현대모비스라이브', en: 'Hyundai Mobis Live' }, url: 'https://mobislive.com/' },
      { name: { ko: '컴투스 루나 사전예약', en: 'Com2uS Luna pre-registration' } },
      {
        name: { ko: '스마트관광키오스크', en: 'Smart Tourism Kiosk' },
        url: 'https://smarthelpdesk.co.kr/smarthelpdesk.html?is_in=Y&device=8Q%3D%3D%3A%3A78f5815530541d03026a9d2d6fca09b2',
      },
      {
        name: { ko: '메이플레이스', en: 'Mayplace' },
        url: 'https://www.mayplace.co.kr/main/main.html',
      },
      { name: { ko: '바이리즌', en: 'Byryzn' }, url: 'http://byryzn.co.kr/' },
      { name: { ko: '기프트플레이', en: 'Giftplay' } },
    ],
  },
  {
    id: '2022',
    label: { ko: '2022', en: '2022' },
    items: [
      {
        name: { ko: '삼성디스플레이 뉴스룸 리뉴얼', en: 'Samsung Display Newsroom — renewal' },
        url: 'https://news.samsungdisplay.com/',
      },
      {
        name: { ko: 'LG 컴프레서 쇼룸 Gen3 / R1', en: 'LG Compressor Showroom Gen3 / R1' },
        url: 'https://compressor-showroom.lg.com/',
      },
      { name: { ko: '클로잇', en: 'Cloit' } },
      {
        name: { ko: '하스엠', en: 'HASM' },
        url: 'http://www.hasmkorea.com/web/kor/index.html',
      },
      { name: { ko: '삼기 / 삼기EV', en: 'Samkee / Samkee EV' } },
      { name: { ko: '콜레오마케팅', en: 'Coleo Marketing' }, url: 'http://www.coleomarketing.com/' },
    ],
  },
  {
    id: '2021',
    label: { ko: '2021', en: '2021' },
    items: [
      {
        name: {
          ko: '현대해상 굿맨굿어린이케어 앱',
          en: 'Hyundai Marine Goodman Good Child Care app',
        },
      },
      { name: { ko: 'GS건설 자이가이스트', en: 'GS E&C Xi Gaeist' } },
      { name: { ko: '세노비스 이벤트 페이지', en: 'Cenovis event page' } },
    ],
  },
  {
    id: 'before-2020',
    label: { ko: '2020 이전', en: '2020 and earlier' },
    items: [
      {
        name: { ko: '경찰박물관 리뉴얼', en: 'Police Museum — renewal' },
        url: 'https://www.policemuseum.go.kr/',
      },
      { name: { ko: '위닉스 리뉴얼', en: 'Winix — renewal' } },
      { name: { ko: '신한FAN 이벤트', en: 'Shinhan FAN event' } },
      {
        name: {
          ko: '한국농수산식품유통공사(aT) AT센터',
          en: 'Korea Agro-Fisheries & Food Trade Corp. (aT) — AT Center',
        },
      },
    ],
  },
  {
    id: 'etc',
    label: { ko: '그 외', en: 'Other work' },
    items: [
      {
        name: { ko: 'SSG 뉴스룸', en: 'SSG Newsroom' },
        url: 'https://www.shinsegaegroupnewsroom.com/',
      },
      { name: { ko: 'LG화학 블로그 (국/영문)', en: 'LG Chem Blog (KO/EN)' }, url: 'https://blog.lgchem.com/' },
      {
        name: {
          ko: 'LG에너지솔루션 배터리인사이드',
          en: 'LG Energy Solution Battery Inside',
        },
        url: 'https://inside.lgensol.com/',
      },
      {
        name: { ko: '메이필드 (국/영문)', en: 'Mayfield (KO/EN)' },
        url: 'https://www.mayfield.co.kr/main/',
      },
      { name: { ko: '더채움', en: 'The Chaeum' }, url: 'https://iamthechaeum.com/' },
      { name: { ko: '다오기프트', en: 'Dao Gift' }, url: 'https://daogift.co.kr/' },
      { name: { ko: '디자인에너지', en: 'Design Energy' }, url: 'http://d-energy.co.kr/' },
      {
        name: {
          ko: '대한예수교장로회총회',
          en: 'General Assembly of the Presbyterian Church of Korea',
        },
        url: 'http://new.pck.or.kr/',
      },
    ],
  },
];
