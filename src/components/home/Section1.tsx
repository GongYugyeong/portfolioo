'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import secStyle from '@/styles/layout/Home.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  // cursor: none;
`;

export default function Section1({ headerRef }: { headerRef: React.RefObject<HTMLElement | null>; }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const overlayEl = overlayRef.current;
    const headerEl = headerRef.current;
    const textEl = textRef.current;
    if (!sectionEl || !overlayEl || !headerEl || !textEl) return;

    const h2 = textEl.querySelector('h2');
    const p = textEl.querySelector('p');
    if (!h2 || !p) return;

    // 초기 상태
    gsap.set(overlayEl, { clipPath: 'circle(120px at 50% 50%)', opacity: 0.35 });
    gsap.set([h2, p], { color: '#111' });

    // 마우스 따라다니는 동그라미
    // → gsap.set() + overwrite:true
    const moveCircle = (e: MouseEvent) => {
      const rect = sectionEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(overlayEl, {
        clipPath: `circle(120px at ${x}px ${y}px)`,
        overwrite: true,
      });
    };

    sectionEl.addEventListener('mousemove', moveCircle);

    // 스크롤 → circle 확장 + 텍스트 White
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top top+=1',
        end: 'bottom top',
        scrub: 2,
        pin: true,
        onEnter: () => sectionEl.removeEventListener('mousemove', moveCircle),
      },
    });

    tl.to(overlayEl, {
      clipPath: 'circle(150% at 50% 50%)',
      opacity: 1,
      duration: 1.6,
      ease: 'power3.out',
    });

    tl.to([h2, p], {
      color: '#fff',
      duration: 1.2,
      ease: 'power2.out',
    }, '-=1.2');

    tl.fromTo(headerEl, { y: '-100%' }, { y: '0%', duration: 1.2 }, '-=1.0');

    return () => {
      sectionEl.removeEventListener('mousemove', moveCircle);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [headerRef]);

  return (
    <Section ref={sectionRef} className={`${secStyle.sec} ${secStyle.section1}`}>
      <div ref={textRef} className={secStyle.textBox}>
        <p>애니메이션과 인터랙션으로 생동감 있는 웹을 만듭니다.</p>
        <h2>
          FRONTEND
          <br />
          GONG YUGYEONG
        </h2>
      </div>

      <div ref={overlayRef} className={secStyle.overlay}>
        <video playsInline autoPlay loop muted className={secStyle.video}>
          <source src="/videos/main.mp4" type="video/mp4" />
        </video>
      </div>
    </Section>
  );
}
