'use client';

import { useFetchProjects } from '@/hooks/useFetchProjects';
import styled from 'styled-components';
import SubLayout from '@/components/layout/SubLayout';

const ProjectWrap = styled.div`
  padding: 120px 10vw 200px;
  background: #fff;

  h2 {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 60px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 60px;
  }

  .card {
    background: #fafafa;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    position: relative;

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);

      img {
        transform: scale(1.06);
      }
    }

    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      transition: transform 0.4s ease;
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
        margin-top: 10px;
        color: #555;
        line-height: 1.6;
      }
    }

    .awards {
      display: flex;
      gap: 10px;
      margin-top: 16px;
      align-items: center;

      .award-item {
        position: relative;
        width: 32px;
        height: 32px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Tooltip */
        &:hover .tooltip {
          opacity: 1;
          transform: translate(-50%, -8px);
          pointer-events: auto;
        }

        .tooltip {
          position: absolute;
          left: 50%;
          bottom: 40px;
          transform: translate(-50%, 5px);
          background: #222;
          color: #fff;
          padding: 6px 10px;
          font-size: 0.8rem;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          transition: all 0.25s ease;
          pointer-events: none;
        }
      }
    }
  }
`;

export default function ProjectPage() {
  const { projects, loading, error } = useFetchProjects();

  return (
    <SubLayout>
      <ProjectWrap>
        <h2>All Projects</h2>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="grid">
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
      </ProjectWrap>
    </SubLayout>
  );
}
