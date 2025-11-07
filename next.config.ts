// next.config.ts
import type { NextConfig } from 'next';

const nextConfig = {
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} as any; // 타입 경고 무시 (NextConfig에 없는 필드 허용)

export default nextConfig satisfies NextConfig;
