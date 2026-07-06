// 프로젝트 데이터 — 대표(featured) + 그 외(more) 리스트.
// tech/url/period/slug는 로케일 공통, 텍스트만 로케일별.
import type { Locale } from '@/lib/dictionary';

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  role: Record<Locale, string>;
  tech: string[];
  highlights: Record<Locale, string[]>;
  url?: string;
  year?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: 'barrier-free-kiosk',
    title: { ko: 'Barrier Free 관광 키오스크', en: 'Barrier-Free Tourism Kiosk' },
    summary: {
      ko: 'PHP 레거시를 Next.js로 전면 리뉴얼한 배리어프리 관광 안내 키오스크.',
      en: 'A barrier-free tourism kiosk fully rebuilt from legacy PHP to Next.js.',
    },
    role: { ko: '프론트엔드 개발', en: 'Frontend Developer' },
    tech: ['Next.js', 'TypeScript', 'GSAP', 'Swiper'],
    highlights: {
      ko: ['PHP → Next.js 전면 리뉴얼', '웹 접근성(WA) 대응', '다국어 지원', '지도 API 연동'],
      en: [
        'Full rebuild from PHP to Next.js',
        'Web accessibility (WA) compliance',
        'Multilingual support',
        'Map API integration',
      ],
    },
    url: '',
    year: '2026',
  },
  {
    slug: 'daewoong',
    title: { ko: '대웅제약', en: 'Daewoong Pharmaceutical' },
    summary: {
      ko: 'Next.js 기반 사용자 서비스 리뉴얼과 관리자 시스템을 함께 구축, SEO를 중심에 둔 프로젝트.',
      en: 'Next.js user-service renewal plus an admin system, built with SEO at the center.',
    },
    role: { ko: '프론트엔드 개발', en: 'Frontend Developer' },
    tech: ['Next.js', 'TypeScript', 'REST API', 'Swagger', 'SCSS'],
    highlights: {
      ko: [
        '관리자(Admin) 시스템 개발',
        'REST API 연동 및 비즈니스 로직 구현',
        'SEO 중심 최적화 · 메타데이터/Open Graph 적용',
        'Java(Spring) 백엔드와 협업',
      ],
      en: [
        'Admin system development',
        'REST API integration and business logic',
        'SEO-focused optimization with metadata / Open Graph',
        'Collaboration with a Java (Spring) backend',
      ],
    },
    url: 'https://www.daewoong.co.kr/ko',
    year: '2025',
  },
  {
    slug: 'daewoongbio',
    title: { ko: '대웅바이오', en: 'Daewoong Bio' },
    summary: {
      ko: 'Next.js 기반 기업 사이트 리뉴얼.',
      en: 'Corporate site renewal built on Next.js.',
    },
    role: { ko: '프론트엔드 개발', en: 'Frontend Developer' },
    tech: ['Next.js', 'TypeScript', 'SCSS'],
    highlights: {
      ko: ['기업 사이트 리뉴얼', '반응형 · 컴포넌트 기반 구조', 'SEO 대응'],
      en: ['Corporate site renewal', 'Responsive, component-based structure', 'SEO support'],
    },
    url: 'https://daewoongbio.co.kr/ko',
    year: '2025',
  },
  {
    slug: 'dorco',
    title: { ko: '도루코', en: 'Dorco' },
    summary: {
      ko: 'Next.js 기반 브랜드 사이트 구축.',
      en: 'Brand site built on Next.js.',
    },
    role: { ko: '프론트엔드 개발', en: 'Frontend Developer' },
    tech: ['Next.js', 'TypeScript', 'SCSS', 'GSAP'],
    highlights: {
      ko: ['브랜드 사이트 구축', '인터랙션 구현', '반응형 웹'],
      en: ['Brand site build', 'Interaction implementation', 'Responsive web'],
    },
    url: 'http://dorco2025.pitap.at/kor/main/',
    year: '2025',
  },
  {
    slug: 'medigate',
    title: { ko: '메디게이트', en: 'Medigate' },
    summary: {
      ko: 'React 기반 의료 포털의 신규 기능 개발과 서비스 개선.',
      en: 'New features and service improvements for a React-based medical portal.',
    },
    role: { ko: '프론트엔드 개발', en: 'Frontend Developer' },
    tech: ['React', 'TypeScript', 'JavaScript', 'SCSS', 'GSAP'],
    highlights: {
      ko: ['신규 기능 개발', '유지보수', '서비스 개선'],
      en: ['New feature development', 'Maintenance', 'Service improvements'],
    },
    url: 'https://www.medigate.net/',
    year: '2024',
  },
  {
    slug: 'korean-air-aerospace',
    title: { ko: '대한항공 항공우주사업본부', en: 'Korean Air Aerospace Division' },
    summary: {
      ko: '메인·콘텐츠 구축과 스크롤 인터랙션을 담당한 반응형 웹.',
      en: 'Responsive site with main/content builds and scroll interactions.',
    },
    role: { ko: '프론트엔드 개발', en: 'Frontend Developer' },
    tech: ['React', 'TypeScript', 'SCSS', 'GSAP'],
    highlights: {
      ko: ['메인 및 콘텐츠 구축', 'GSAP 인터랙션 구현', '반응형 웹'],
      en: ['Main and content builds', 'GSAP interactions', 'Responsive web'],
    },
    url: 'https://aerospace.koreanair.com/main',
    year: '2024',
  },
];

// 그 외 작업 — 카테고리별 링크 리스트 (ETC)
export type MoreCategory = {
  id: string;
  label: Record<Locale, string>;
  items: { name: Record<Locale, string>; url?: string }[];
};

export const moreProjects: MoreCategory[] = [
  {
    id: 'build',
    label: { ko: '구축 · 리뉴얼', en: 'Builds · Renewals' },
    items: [
      { name: { ko: '인천계양산업단지', en: 'Incheon Gyeyang Industrial Complex' }, url: 'https://www.kicoxbunyang.co.kr/' },
      { name: { ko: '해성전자', en: 'Haesung' }, url: 'http://www.hasmkorea.com/web/kor/index.html' },
      { name: { ko: '콜레오 홈페이지', en: 'Coleo' }, url: 'http://www.coleomarketing.com/' },
      { name: { ko: 'LG 컴프레서 쇼룸', en: 'LG Compressor Showroom' }, url: 'https://compressor-showroom.lg.com/' },
      { name: { ko: '바이리즌', en: 'Byryzn' }, url: 'http://byryzn.co.kr/' },
      { name: { ko: '삼성디스플레이 뉴스룸', en: 'Samsung Display Newsroom' }, url: 'https://news.samsungdisplay.com/' },
      { name: { ko: '모비스라이브', en: 'Mobis Live' }, url: 'https://mobislive.com/' },
      { name: { ko: '메이필드(국/영문)', en: 'Mayfield' }, url: 'https://www.mayfield.co.kr/main/' },
      { name: { ko: '메이플레이스(국/영문)', en: 'Mayplace' }, url: 'https://www.mayplace.co.kr/main/main.html' },
      { name: { ko: '경찰박물관', en: 'Police Museum' }, url: 'https://www.policemuseum.go.kr/' },
      { name: { ko: 'LG화학 블로그(국/영문)', en: 'LG Chem Blog' }, url: 'https://blog.lgchem.com/' },
      { name: { ko: 'LG에너지솔루션 배터리인사이드', en: 'LG Energy Solution Battery Inside' }, url: 'https://inside.lgensol.com/' },
      { name: { ko: 'SSG 뉴스룸', en: 'SSG Newsroom' }, url: 'https://www.shinsegaegroupnewsroom.com/' },
      { name: { ko: '클로잇', en: 'Cloit' }, url: 'https://www.cloit.com/main/' },
      { name: { ko: '디에스이앤지', en: 'D-Energy' }, url: 'http://d-energy.co.kr/' },
      { name: { ko: '예장피어', en: 'PCK' }, url: 'http://new.pck.or.kr/' },
    ],
  },
  {
    id: 'promo',
    label: { ko: '프로모션 · 앱', en: 'Promotions · Apps' },
    items: [
      { name: { ko: '리멤버 마이크로사이트', en: 'Remember Microsite' }, url: 'https://remember121723.kr/' },
      { name: { ko: '더채움', en: 'The Chaeum' }, url: 'https://iamthechaeum.com/event' },
      { name: { ko: '루나', en: 'Luna' }, url: 'https://www.lunablueland.com/' },
      { name: { ko: '코카어셈블', en: 'Coca Assemble' }, url: 'https://www.cocassemble.co.kr/prereg/' },
    ],
  },
  {
    id: 'maintain',
    label: { ko: '유지 · 운영', en: 'Maintenance · Operations' },
    items: [
      { name: { ko: '굿웨어몰', en: 'Goodwearmall' }, url: 'https://www.goodwearmall.com/' },
      { name: { ko: '삼성디스플레이', en: 'Samsung Display' }, url: 'https://www.samsungdisplay.com/kor/index.jsp' },
      { name: { ko: '다오기프트', en: 'Dao Gift' }, url: 'https://daogift.co.kr/' },
    ],
  },
];
