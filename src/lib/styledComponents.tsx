'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

/**
 * StyledComponentsRegistry
 * ----------------------------------------
 * Next.js App Router 환경에서 styled-components의 SSR을 지원하기 위한 레지스트리입니다.
 * 서버에서 렌더링 시 스타일이 중복 적용되거나 누락되지 않도록 합니다.
 * 
 * 사용 위치: app/layout.tsx
 */

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // 서버 렌더링 시 생성된 스타일시트를 보관
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  // 서버 HTML이 삽입되기 전에 styled-components 스타일 태그를 포함시킴
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // 클라이언트 및 서버 모두에서 StyleSheetManager로 감싸줌
  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
