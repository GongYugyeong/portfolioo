'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const FooterWrap = styled.footer`
  width: 100%;
  padding: 60px 5vw;
  background: #111;
  color: #fff;
  margin-top: 120px;

  .inner {
    max-width: 1600px;
    margin: 0 auto;
  }

  .top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;

    h3 {
      font-size: 1.6rem;
      font-weight: 700;
    }

    nav {
      display: flex;
      gap: 30px;

      a {
        color: #ccc;
        font-size: 1rem;
        transition: 0.25s;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .bottom {
    font-size: 0.9rem;
    color: #777;
    text-align: center;
  }
`;

export default function Footer() {
  const params = useParams();
  const locale = params?.locale ?? 'ko';

  return (
    <FooterWrap>
      <div className="inner">
        <div className="top">
          <h3>Gong Yugyeong</h3>
          <nav>
            <Link href={`/${locale}`}>Home</Link>
            <Link href={`/${locale}/project`}>Projects</Link>
            <Link href={`/${locale}/contact`}>Contact</Link>
          </nav>
        </div>

        <div className="bottom">
          © {new Date().getFullYear()} Gong Yugyeong. All Rights Reserved.
        </div>
      </div>
    </FooterWrap>
  );
}
