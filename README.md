# Portfolio - Gong Yugyeong (공유경)

프론트엔드 개발자 **공유경**의 포트폴리오 사이트입니다.  
Next.js(App Router) 기반으로 제작되었으며,  
GSAP·Lenis를 활용한 인터랙션과 i18next 기반 다국어 지원을 포함합니다.

---

## Tech Stack

| Category | Stack |
|-----------|--------|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org) |
| **Language** | TypeScript |
| **Styling** | SCSS (모듈 구조) |
| **Animation** | [GSAP](https://gsap.com/), [Lenis](https://github.com/studio-freight/lenis) |
| **State Management** | Zustand |
| **i18n (다국어)** | i18next + react-i18next |
| **UI Framework** | React 19 |
| **Build Tool** | Next.js 빌드 시스템 |
| **Package Manager** | npm |
| **Deployment** | Vercel |

---

## Environment Info & Getting Started

```bash
# 버전 정보
# Environment & Dependency Versions

# Node.js
v20.19.0

# npm
10.8.1

# Next.js
16.0.1

# React
19.2.0

# TypeScript
5.x

# GSAP
3.13.0

# Lenis
1.3.14

# i18next
25.6.1

# react-i18next
16.2.4


# 개발 서버 실행
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


# Folder Structure
/ (루트)
yugyeong/
├── public/                         # 정적 파일 (이미지, 폰트, favicon 등)
│   ├── images                      # 이미지 리소스
│   ├── font                        # 웹폰트
│   └── dummy                       # 더미 JSON 데이터 (예: 샘플 콘텐츠)
│
├── src/                            # 소스 코드
│   ├── app/                        # Next.js App Router 기반 페이지
│   │   ├── [...404]                # 커스텀 404 라우트
│   │   ├── [locale]/               # 다국어 라우팅 (ko, en 등)
│   │   │   ├─ layout.server.tsx    # locale별 서버 사이드 레이아웃 (i18n Provider 포함)
│   │   │   ├─ layout.tsx           # locale별 클라이언트 레이아웃 (Lenis, Header/Footer)
│   │   │   ├─ not-found.tsx        # 404 페이지
│   │   │   ├─ page.tsx             # 메인 페이지 (/ko, /en)
│   │   │   ├─ about/               # 소개 페이지
│   │   │   └─ ...                  # 기타 메뉴 페이지 (projects, contact 등)
│   │
│   │   ├─ layout.tsx               # 루트 레이아웃 (글로벌 헤더/폰트 등)
│   │   └─ page.tsx                 # / 진입 시 기본 언어로 리다이렉트
│
│   ├── components/                 # 재사용 가능한 React 컴포넌트
│   │   ├── common/                 # 범용 공통 컴포넌트 (Button, Input, Modal 등)
│   │   ├── layout/                 # 레이아웃 관련 컴포넌트 (Header, Footer, Breadcrumb 등)
│   │   ├── home/                   # 메인(Home) 페이지 전용 컴포넌트
│   │   ├── about/                  # About 섹션 전용 컴포넌트
│   │   ├── LenisWrapper.tsx        # Lenis 초기화 및 스무스 스크롤 Provider
│   │   └── I18nProvider.tsx        # i18next 전역 Provider (locale context 포함)
│
│   ├── locales/                    # 다국어 번역 JSON
│   │   ├── ko                      # 한국어 번역
│   │   │   └── translation.json
│   │   └── en                      # 영어 번역
│   │       └── translation.json
│
│   ├── styles/                     # 스타일 (SCSS / CSS)
│   │   ├── base/                   # 변수, 믹스인, 리셋, 폰트 등
│   │   ├── layout/                 # 레이아웃 전용 SCSS (Header, Footer 등)
│   │   └── globals.scss            # 전역 스타일 import 파일
│
│   ├── store/                      # Zustand 전역 상태 관리
│   │   ├── validateStore.ts        # 폼 유효성 검증 상태
│   │   ├── modalStore.ts           # 모달 on/off 관리
│   │   └── hoverStore.ts           # GNB hover 상태 관리
│
│   ├── utils/                      # 유틸리티 함수
│   │   ├── validation.ts           # 입력 검증 함수
│   │   └── format.ts               # 숫자/문자 포맷 등
│
│   └── i18n.ts                     # i18next 초기화 (리소스 및 설정 포함)
│
├── next-i18next.config.ts          # i18next Next.js 환경 설정
├── .env.local                      # 환경 변수 (로컬 개발용)
├── package.json                    # 프로젝트 메타 및 의존성 관리
├── tsconfig.json                   # TypeScript 설정
└── README.md                       # 프로젝트 문서

```

## 주요 기능
- 다국어 지원 (한/영)
- GSAP + Lenis 기반 스크롤 애니메이션
- Zustand 전역 상태 관리
- 모듈형 SCSS 구조 (컴포넌트별 스타일 분리)
- SEO & OpenGraph 메타데이터 세팅
- Next.js App Router 기반 SSR


## 라이선스
© 2025 Gong Yugyeong. All rights reserved.
본 프로젝트의 소스 코드는 개인 포트폴리오 용도로 제작되었습니다.