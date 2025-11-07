// src/app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { I18nProvider } from '@/components/I18nProvider';

export function generateStaticParams() {
  return [
    { locale: 'ko' },
    { locale: 'en' },
  ];
}

interface Props {
  children: ReactNode;
  params: {
    locale?: string;
  };
}

export default function LocaleLayout({ children, params }: Props) {
  const locale = params?.locale ?? 'ko';

  return (
    <I18nProvider locale={locale}>
      {children}
    </I18nProvider>
  );
}
