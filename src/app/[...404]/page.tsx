// src/app/[...404]/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CatchAll404() {
  const router = useRouter();

  useEffect(() => {
    const lang = navigator.language.startsWith('en') ? 'en' : 'ko';
    router.replace(`/${lang}/not-found`);
  }, [router]);

  return null;
}
