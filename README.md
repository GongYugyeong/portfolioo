# 공유경 · 프론트엔드 포트폴리오

> **Next.js 16 (App Router)** · 웹 · 반응형

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node-20%20LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Sass](https://img.shields.io/badge/Sass-SCSS-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)

퍼블리셔에서 시작해 React·Next.js 기반 서비스를 만드는 프론트엔드 개발자 **공유경**의 포트폴리오입니다.
**SEO를 최우선**으로 콘텐츠를 서버에서 렌더해 정적 HTML로 만들고, 한국어/영어 다국어를 지원합니다.

🌐 **Live**: <https://gongyugyeong.github.io/portfolioo/>

| Locale | URL |
|---|---|
| 한국어 | <https://gongyugyeong.github.io/portfolioo/ko/> |
| English | <https://gongyugyeong.github.io/portfolioo/en/> |

📄 **이력서**: [사이트에서 보기](https://gongyugyeong.github.io/portfolioo/ko/resume/) · [PDF](https://gongyugyeong.github.io/portfolioo/resume/gong-yugyeong-resume.pdf)

---

## 핵심 특징

- **SEO 최우선 아키텍처** — 서버에서 사전(dictionary)을 로드해 콘텐츠를 정적 HTML로 렌더. `/ko`·`/en`이 각각 해당 언어 HTML로 색인됨 (client 전용 i18n 아님).
- **라우트별 메타데이터** — `generateMetadata` + canonical + `hreflang`(ko/en/x-default) + Open Graph/Twitter. `sitemap.xml`(hreflang·lastmod 포함)·`robots.txt` 자동 생성.
- **구조화 데이터 (JSON-LD)** — 전역 `Person`+`WebSite`, 페이지별 `WebPage`+`BreadcrumbList`, 프로젝트 목록은 `ItemList`. `@id`로 엔티티를 연결.
- **GEO (AI 검색) 대응** — `robots.txt`에 AI 크롤러 명시 허용, `/llms.txt`로 AI용 콘텐츠 인덱스 제공.
- **멀티 페이지** — 홈 / 소개(경력·스택) / 프로젝트(주요+아카이브) / 이력서(PDF 열람) / 연락처, 각 `/[locale]/…`.
- **인터랙션(클라이언트)** — GSAP 스크롤 리빌, 커스텀 커서, 마그네틱 버튼. 모두 `prefers-reduced-motion` 대응.
- **스타일 규약** — 페이지/섹션은 **CSS Modules**, 버튼 등 소형 컴포넌트만 **styled-components**. 색·간격은 전역 디자인 토큰(`theme.scss`).

## 기술 스택

| Category | Stack |
|---|---|
| **Framework** | Next.js 16 (App Router, `output: 'export'`) |
| **UI** | React 19 (+ React Compiler) |
| **Language** | TypeScript |
| **Styling** | CSS Modules (SCSS) + styled-components · 전역 토큰 |
| **Animation** | GSAP + ScrollTrigger, Lenis |
| **Typography** | Pretendard(로컬), Instrument Serif · JetBrains Mono (`next/font`) |
| **i18n** | 서버 사전 로딩 (ko / en) |
| **Build / Host** | Turbopack · GitHub Pages + GitHub Actions |
| **Package Manager** | pnpm (정확 버전 고정 · 자동 업데이트 방지) |

## 요구 사항 / 설치

- Node.js 20+, pnpm 10+

```bash
pnpm install          # lockfile 그대로 재현 설치
```

## 실행 · 빌드

```bash
pnpm dev              # 개발 서버
pnpm build            # 프로덕션 정적 export → out/
```

## 디렉터리 구조

```
src/
├── app/
│   ├── [locale]/                 # 다국어 라우팅 (ko, en)
│   │   ├── layout.tsx            # 서버 레이아웃 (nav·SEO·전역 JSON-LD·클라이언트 인핸서)
│   │   ├── page.tsx              # 홈 (Hero + About 미리보기 + 대표 프로젝트 + Contact CTA)
│   │   ├── about/page.tsx        # 소개 (프로필 · 핵심 역량 · 경력 · 스택 · 학력/교육/자격)
│   │   ├── projects/page.tsx     # 프로젝트 (주요 6건 + 연도별 아카이브)
│   │   ├── resume/page.tsx       # 이력서 (PDF 인라인 미리보기 + 다운로드 + Notion)
│   │   ├── contact/page.tsx      # 연락처
│   │   └── not-found.tsx
│   ├── layout.tsx                # 루트 레이아웃 (html/body·폰트·Providers)
│   ├── page.tsx                  # / 진입 (언어 선택 + 자동 리다이렉트, canonical → /ko)
│   ├── sitemap.ts / robots.ts    # SEO 파일 컨벤션
│   └── providers.tsx             # styled-components SSR 레지스트리 + Lenis
│
├── components/
│   ├── anim/ScrollReveal.tsx     # [data-reveal] 스크롤 진입 애니메이터
│   ├── common/CustomCursor.tsx   # lerp 커서 (mix-blend-mode)
│   ├── common/MagneticButton.tsx # 마그네틱 버튼 (내부 link·외부·button 분기)
│   ├── layout/SiteHeader.tsx     # 네비 + 로케일 스위처 (모바일 2줄)
│   ├── layout/SiteFooter.tsx     # 푸터
│   ├── seo/JsonLd.tsx            # JSON-LD 주입 (서버 전용)
│   ├── sections/Hero.tsx         # 홈 Hero
│   ├── sections/ProjectCard.tsx  # 프로젝트 카드(공용)
│   ├── SetLang.tsx               # 로케일 lang 보정
│   └── LenisWrapper.tsx          # 스무스 스크롤
│
├── lib/
│   ├── dictionary.ts             # 서버 사전 로더 · Locale 타입
│   ├── metadata.ts               # 라우트별 메타데이터 헬퍼(canonical·hreflang·OG)
│   ├── jsonLd.ts                 # 구조화 데이터 빌더 (Person·WebSite·WebPage·ItemList)
│   ├── asset.ts                  # public 자산 경로에 basePath 접두
│   ├── fonts.ts                  # next/font 설정
│   └── styledComponents.tsx      # styled-components SSR 레지스트리
│
├── data/                         # 콘텐츠 데이터 (로케일 필드 포함)
│   ├── site.ts                   # 이름·이메일·GitHub·이력서 링크·baseUrl
│   ├── profile.ts                # 프로필 지표 · 주력 분야 태그
│   ├── strengths.ts              # 핵심 역량 (라벨 + 설명)
│   └── experience.ts · projects.ts · stack.ts
│
├── locales/{ko,en}/translation.json   # UI 문자열 사전
│
└── styles/
    ├── theme.scss                # 전역 디자인 토큰(:root, --header-h 포함)
    ├── globals.scss · base/      # 리셋 · Pretendard @font-face
    ├── sections/*.module.scss    # 페이지/섹션 스타일
    └── layout/site-*.module.scss # 헤더/푸터 스타일

public/
├── resume/gong-yugyeong-resume.pdf   # 이력서 원본 (URL은 ASCII, 다운로드명은 한글)
├── og/cover.png                      # OG 이미지 (1200×630)
└── llms.txt                          # AI 검색용 콘텐츠 인덱스
```

## 다국어 · SEO 메모

- 콘텐츠는 서버 사전으로 렌더돼 `/ko`·`/en` 정적 HTML이 각 언어로 생성됩니다.
- 페이지마다 canonical·hreflang(ko/en/x-default)·OG/Twitter가 자동 부여됩니다. `sitemap.xml`에는 `xhtml:link` 대체 언어와 `lastmod`가 들어갑니다.
- URL은 `trailingSlash: true` 기준(`/ko/about/`). canonical·sitemap·JSON-LD가 모두 같은 형태를 씁니다.
- **OG 이미지는 `public/og/cover.png` 정적 파일**입니다. `opengraph-image` 라우트는 정적 export에서 확장자 없는 파일로 떨어져 GitHub Pages가 image content-type을 붙여주지 않고, 그러면 SNS 미리보기가 깨집니다. 디자인을 바꾸려면 이 PNG를 교체하세요.
- **favicon은 `app/favicon.ico` 파일 컨벤션에만 맡깁니다.** `metadata.icons`로 직접 지정하면 `basePath`가 안 붙어 404가 됩니다.
- 정적 export 특성상 `<html lang>`은 루트 기본값(ko)이며, 로케일 페이지에서 클라이언트가 실제 언어로 보정합니다(언어 신호는 hreflang·콘텐츠·JSON-LD `inLanguage`가 담당). JS를 실행하지 않는 크롤러는 `/en/*`에서도 `lang="ko"`를 보게 됩니다 — 로케일별 root layout(route group)으로 분리하면 해결됩니다.

## GEO (AI 검색) 메모

- `robots.txt`에 GPTBot·OAI-SearchBot·ClaudeBot·PerplexityBot·Google-Extended 등을 명시 허용합니다.
- `/llms.txt`에 AI가 인용하기 쉬운 형태(요약 → 페이지 목록 → 역량·경력·프로젝트)로 콘텐츠 인덱스를 둡니다. 내용을 바꿨으면 이 파일도 함께 갱신하세요.
- 이력서 PDF는 sitemap에 포함돼 본문이 그대로 크롤링됩니다.
- ⚠️ **GitHub Pages 프로젝트 사이트 한계** — 크롤러는 `robots.txt`·`llms.txt`를 도메인 루트(`gongyugyeong.github.io/robots.txt`)에서 찾습니다. 현재는 `/portfolioo/` 아래에 생성되므로 완전히 인식되지 않습니다. 커스텀 도메인을 붙이거나 `gongyugyeong.github.io` 사용자 사이트 저장소 루트에 같은 파일을 두면 해결됩니다.

## 배포

`main` 푸시 시 GitHub Actions(`.github/workflows/deploy.yml`)가 정적 빌드 후 GitHub Pages로 배포합니다. `basePath`는 `/portfolioo`.

---

## 작성자

Gong Yugyeong (공유경)

## Template Version

```
Version: 1.6.1
Last Update: 2026-07-06
```

## 라이선스

© 2026 Gong Yugyeong. 개인 포트폴리오 용도.
