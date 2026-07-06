'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

// 마우스 포인터를 lerp로 따라가는 커서.
// data-cursor="hover" 가 붙은 요소 위에서는 확장/invert.
// 터치 디바이스에선 자동으로 숨김.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // 터치 기기·모션 최소화 설정에선 커스텀 커서를 띄우지 않는다.
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduceMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // 첫 mousemove 전에 좌상단에 보이지 않도록 화면 중앙에서 시작.
    const start = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    gsap.set([dot, ring], { x: start.x, y: start.y });

    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3.out' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3.out' });
    const xToRing = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3.out' });
    const yToRing = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    const expand = () => {
      gsap.to(ring, { scale: 2.4, opacity: 0.4, duration: 0.3, ease: 'power3.out' });
      gsap.to(dot, { scale: 0, duration: 0.3, ease: 'power3.out' });
    };
    const collapse = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' });
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power3.out' });
    };

    // mouseover/out은 버블링돼서, hover 요소 내부 자식 경계를 넘을 때마다 발생한다.
    // relatedTarget이 같은 hover 요소 안이면 무시해야 깜빡임이 안 생긴다.
    const HOVER = '[data-cursor="hover"]';
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(HOVER);
      const from = e.relatedTarget as Node | null;
      if (el && !(from && el.contains(from))) expand();
    };
    const onOut = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(HOVER);
      const to = e.relatedTarget as Node | null;
      if (el && !(to && el.contains(to))) collapse();
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <Ring ref={ringRef} aria-hidden />
      <Dot ref={dotRef} aria-hidden />
    </>
  );
}

const Dot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  border-radius: 50%;
  background: var(--fg, #0a0a0a);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;

  @media (pointer: coarse), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  margin: -18px 0 0 -18px;
  border: 1.5px solid var(--fg, #0a0a0a);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;

  @media (pointer: coarse), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
