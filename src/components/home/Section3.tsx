'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useFetchProjects } from '@/hooks/useFetchProjects';

import styled from 'styled-components';
import secStyle from '@/styles/layout/Home.module.scss';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 10vw;
  background-color: #fff;
  overflow: hidden;

  .titleBox {
    text-align: center;
    margin-bottom: 100px;

    h3 {
      font-size: 2.8rem;
      font-weight: 700;
      color: #111;
    }

    p {
      color: #555;
      margin-top: 10px;
      font-size: 1.1rem;
    }
  }

  .projectGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 60px;
  }

  .card {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    background: #f9f9f9;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(100px);
    opacity: 0;

    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-bottom: 1px solid #eee;
    }

    .info {
      padding: 24px;

      h4 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #111;
      }

      p {
        font-size: 1rem;
        color: #666;
        margin-top: 8px;
        line-height: 1.6;
      }
    }

    &:hover {
      transform: translateY(-10px) scale(1.02);
      transition: 0.3s ease;
    }
  }

  .moreBtn {
    display: flex;
    justify-content: center;
    margin-top: 80px;

    button {
      background: #111;
      color: #fff;
      padding: 14px 40px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #333;
      }
    }
  }
`;

export default function Section3() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale ?? 'ko';

  const { projects, loading, error } = useFetchProjects({ limit: 6 });

  useEffect(() => {
    if (!sectionRef.current || loading || error) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.card').forEach((card, i) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: i * 0.15,
        });
      });

      gsap.to('.card img', {
        yPercent: -15,
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
  }, [projects, loading, error]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Section ref={sectionRef} className={`${secStyle.sec} ${secStyle.section3}`}>
      <div className="titleBox">
        <h3>Projects</h3>
        <p>다양한 기술과 감각으로 완성한 작업들입니다.</p>
      </div>

      <div className="projectGrid">
        {projects.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.title} loading="lazy" />
            <div className="info">
              <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
              <p dangerouslySetInnerHTML={{ __html: item.desc }} />
              
              {Array.isArray(item.award) && item.award.length > 0 && (
                <div className="awards">
                  {item.award.map((a: any, idx: number) => (
                    <div className="award-item" key={idx}>
                      <img src={`/images/${a.icon}`} alt="award icon" loading="lazy" />
                      <div className="tooltip">Award</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="moreBtn">
        <button onClick={() => router.push(`/${locale}/project`)}>
          More
        </button>
      </div>
    </Section>
  );
}
