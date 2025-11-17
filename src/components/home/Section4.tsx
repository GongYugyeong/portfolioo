'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  width: 100%;
  padding: 200px 5vw;
  background: #f7f7f7;
  text-align: center;

  .title {
    margin-bottom: 50px;

    h3 {
      font-size: 2.8rem;
      font-weight: 800;
      color: #111;
      line-height: 1.2;
      overflow: hidden;
    }

    p {
      color: #555;
      margin-top: 16px;
      font-size: 1.1rem;
      opacity: 0;
    }
  }

  .btnWrap {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    a {
      padding: 16px 48px;
      background: #111;
      color: #fff;
      border-radius: 999px;
      font-size: 1rem;
      font-weight: 600;
      display: inline-block;
      transform: scale(0.9);
      cursor: pointer;
    }
  }
`;

export default function Section4() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const titleEl = titleRef.current;
    const paraEl = paraRef.current;
    const btnEl = buttonRef.current;

    if (!sectionEl || !titleEl || !paraEl || !btnEl) return;

    // Split text
    const chars = titleEl.innerText.split('');
    titleEl.innerHTML = chars.map((c) => `<span class="char">${c}</span>`).join('');

    const charEls = titleEl.querySelectorAll('.char');
    gsap.set(charEls, { display: 'inline-block' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(sectionEl, { opacity: 1, duration: 0.4 })

      .fromTo(
        charEls,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.025,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.2'
      )
      .fromTo(
        paraEl,
        { opacity: 0, y: 0 },
        { opacity: 1, y: -10, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        btnEl,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.6)' },
        '-=0.3'
      );

    btnEl.addEventListener('mouseenter', () => {
      gsap.to(btnEl, { scale: 1.08, boxShadow: '0 10px 20px rgba(0,0,0,0.2)', duration: 0.3 });
    });
    btnEl.addEventListener('mouseleave', () => {
      gsap.to(btnEl, { scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.3 });
    });
  }, []);

  return (
    <Section ref={sectionRef}>
      <div className="title">
        <h3 ref={titleRef}>Let’s Work Together</h3>
        <p ref={paraRef}>프로젝트 / 협업 문의는 언제든지 환영해요!</p>
      </div>

      <div className="btnWrap">
        <a ref={buttonRef} href="/contact">Contact Me</a>
      </div>
    </Section>
  );
}
