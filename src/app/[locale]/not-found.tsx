// src/app/[locale]/not-found.tsx
'use client';

import i18n from "@/i18n";

export default function LocaleNotFoundPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;
  i18n.changeLanguage(locale);

  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      {locale === "ko" ? (
        <>
          <h1>페이지를 찾을 수 없습니다.</h1>
          <p>요청하신 페이지가 존재하지 않습니다.</p>
        </>
      ) : (
        <>
          <h1>Page Not Found</h1>
          <p>The page you requested does not exist.</p>
        </>
      )}
    </div>
  );
}
