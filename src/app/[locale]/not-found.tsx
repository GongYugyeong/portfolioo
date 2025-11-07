// src/app/[locale]/not-found.tsx
'use client';

import { useTranslation } from "react-i18next";
import Link from "next/link";

import styles from '@/styles/common/Components.module.scss';

type Props = {
  locale: string;
};

export default function NotFoundPage({ locale }: Props) {
  const { t } = useTranslation();

  return (
    <main className={styles.notFound}>
      <img src="/images/common/icon_notFound.svg" alt="notFound" />
      <div className={styles.box}>
        <h2>페이지를 찾을 수 없습니다</h2>
        <p>
          주소를 잘못 입력하였거나, 변경 혹은 삭제되었을 수 있습니다.<br />
          올바른 주소를 입력했는지 다시 한번 확인해 주세요.
        </p>
      </div>
      <Link href={'/'}>메인으로</Link>
      <p>{t('LangOption')}: {locale} {locale.toUpperCase()}</p>
    </main>
  );
}
