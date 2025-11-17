// src/components/LenisWrapper.tsx
'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LenisWrapper() {
  const rafId = useRef<number | null>(null);
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        } else {
          return lenis.scroll;
        }
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

    const ignoreLenisScroll = (e: WheelEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('textarea') ||
        target.closest('.scrollData') ||
        target.closest('.dropList')
      ) {
        e.stopPropagation();
      }
    };

    window.addEventListener('wheel', ignoreLenisScroll, true);
    window.addEventListener('touchstart', ignoreLenisScroll, true);

    ScrollTrigger.defaults({ scroller: document.body });
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('wheel', ignoreLenisScroll, true);
      window.removeEventListener('touchstart', ignoreLenisScroll, true);
      delete (window as any).__lenis;
    };
  }, []);

  // 라우트가 바뀔 때마다 스크롤을 맨 위로 이동
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
