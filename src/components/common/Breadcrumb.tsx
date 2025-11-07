// src/components/common/Breadcrumb.tsx
'use client';

import Link from 'next/link';
import styles from '@/styles/layout/components/Breadcrumb.module.scss';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, idx) => (
        <span key={idx}>
          {idx > 0 && <span className={styles.separator}>›</span>}
          {idx < items.length - 1 ? (
            <Link href={item.href}>{item.name}</Link>
          ) : (
            <span className={styles.current}>{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
