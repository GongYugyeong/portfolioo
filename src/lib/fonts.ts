import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

// 디스플레이용 — 모던 지오메트릭 산세리프(제목·이름).
// 라틴 전용이라 한글은 Pretendard로 폴백(시스템 궁서체 방지).
export const displaySerif = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Pretendard', 'sans-serif'],
  adjustFontFallback: false,
});

// 라벨/숫자용 — mono. 한글 라벨(홈·소개 등)은 Pretendard로 폴백.
export const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['Pretendard', 'monospace'],
  adjustFontFallback: false,
});
