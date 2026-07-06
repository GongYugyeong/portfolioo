import { ImageResponse } from 'next/og';
import { locales } from '@/lib/dictionary';

// 로케일 라우트에 적용되는 정적 OG 이미지(언어 중립). 빌드 타임 생성.
export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Gong Yugyeong · Frontend Developer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f5f1ea',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 28,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#6a655c',
          }}
        >
          <span>Portfolio / 2026</span>
          <span>Seoul, KR</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 128, fontWeight: 700, color: '#0a0a0a', lineHeight: 1 }}>
            Gong Yugyeong
          </div>
          <div style={{ fontSize: 44, color: '#c73211', marginTop: 24 }}>
            Publisher · Frontend Developer
          </div>
        </div>

        <div style={{ display: 'flex', gap: 20, fontSize: 26, color: '#0a0a0a' }}>
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>GSAP</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
