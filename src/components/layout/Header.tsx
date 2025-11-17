'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '@/styles/common/Header.module.scss';
import { forwardRef } from 'react';
import { useParams } from 'next/navigation';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  z-index: 100;
`;

const Header = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.locale ?? 'ko';

  return (
    <HeaderWrapper ref={ref}>
      <div className={styles.header}>
        <h1>
          <Link href={`/${locale}`}>YUGYEONG</Link>
        </h1>
        <nav>
          <ul>
            <li><Link href={`/${locale}`}>Home</Link></li>
            <li><Link href={`/${locale}/about`}>About</Link></li>
            <li><Link href={`/${locale}/project`}>Projects</Link></li>
            <li><Link href={`/${locale}/contact`}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  );
});

Header.displayName = 'Header';
export default Header;
