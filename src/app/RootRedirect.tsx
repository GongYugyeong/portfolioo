'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 브라우저 언어에 맞춰 자동 이동(UX). 크롤러/무JS는 아래 링크로 진입 가능.
export default function RootRedirect() {
  const router = useRouter();
  useEffect(() => {
    const lang = navigator.language.startsWith('en') ? 'en' : 'ko';
    router.replace(`/${lang}`);
  }, [router]);
  return null;
}
