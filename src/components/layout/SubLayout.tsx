'use client';

import { ReactNode } from 'react';
import { usePathname, useParams } from 'next/navigation';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';

import styles from '@/styles/common/Components.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SubLayout({ children }: Props) {
  const pathname = usePathname();
  const params = useParams();

  // ================================
  // 현재 경로 기반 로케이션 (Breadcrumb용)
  // ================================
  const pathSegments = pathname
    .split('/')
    .filter((segment) => segment && segment !== params.locale);

  const locationItems = [
    { name: 'Home', href: `/${params.locale}` },
    ...pathSegments.map((segment, idx) => {
      const href = `/${params.locale}/${pathSegments.slice(0, idx + 1).join('/')}`;
      const name = decodeURIComponent(segment)
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase()); // 첫 글자 대문자화
      return { name, href };
    }),
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.wrap}>
        <Breadcrumb items={locationItems} />
        <div className={styles.container}>{children}</div>
      </div>

      <Footer />
    </div>
  );
}
