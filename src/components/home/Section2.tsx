'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import secStyle from '@/styles/layout/Home.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  overflow: hidden;
  padding: 0 10vw;

  .content {
    max-width: 600px;
    z-index: 2;

    h3 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #111;
      line-height: 1.3;
    }

    p {
      font-size: 1.1rem;
      color: #333;
      line-height: 1.8;
      word-break: keep-all;
    }
  }

  .imageBox {
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(0.8);
    }
  }
`;

export default function Section2() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: '+=50%',
          scrub: true,
        },
      });

      tl.from(textRef.current, {
        y: 80,
        opacity: 0,
        ease: 'power3.out',
        duration: 1.2,
      }).from(
        imgRef.current,
        {
          x: 120,
          opacity: 0,
          scale: 1.2,
          ease: 'power3.out',
          duration: 1.4,
        },
        '<0.2'
      );

      gsap.to(imgRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef} className={`${secStyle.sec} ${secStyle.section2}`}>
      <div ref={textRef} className="content">
        <h3>About Me</h3>
        <p>
          사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.  
          세련된 UI와 인터랙션, 그리고 완성도 높은 코드로  
          브랜드와 사용자를 연결하는 웹을 만듭니다.
        </p>
      </div>

      <div ref={imgRef} className="imageBox">
        {/* <img src="/images/about/IMG_4524.JPG" alt="About" /> */}
      </div>
    </Section>
  );
}
