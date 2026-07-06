'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

// 서버가 렌더한 [data-reveal] 요소를 스크롤 진입 시 페이드업.
// 콘텐츠는 DOM에 그대로 있으므로 SEO/no-JS 안전. reduced-motion은 즉시 표시.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = gsap.utils.toArray<HTMLElement>('[data-reveal]');
    if (!els.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(els, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      els.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
