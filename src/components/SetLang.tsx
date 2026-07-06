'use client';

import { useEffect } from 'react';

// 정적 export에선 <html>이 루트 레이아웃 소유라 lang이 고정된다.
// 로케일 페이지에서 문서 언어를 실제 로케일로 보정(a11y/브라우저용). SEO 언어 신호는 hreflang이 담당.
export default function SetLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
