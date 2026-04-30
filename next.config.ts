// next.config.ts
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolioo' : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isProd ? '/portfolioo/' : '',
  trailingSlash: true,
  images: { unoptimized: true },
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  // public 폴더 자산을 직접 참조하는 코드(예: <video src="/videos/...">)에서 쓸 수 있게 노출
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} as any; // 타입 경고 무시 (NextConfig에 없는 필드 허용)

export default nextConfig satisfies NextConfig;
