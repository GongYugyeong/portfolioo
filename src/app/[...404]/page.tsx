// src/app/[...404]/page.tsx
"use client";

import { useEffect } from "react";
import NotFound from "@/app/[locale]/not-found";
import { useParams } from "next/navigation";
import i18n from "@/i18n"; // i18n 인스턴스 import

export default function NotFoundCatchAll() {
  const params = useParams();
  const locale = Array.isArray(params["404"]) ? params["404"][0] : "ko";

  // locale이 바뀔 때마다 i18n 언어도 변경
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return <NotFound locale={locale} />;
}
