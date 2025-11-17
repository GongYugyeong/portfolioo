'use client';

import StyledComponentsRegistry from '@/lib/styledComponents';
import LenisWrapper from '@/components/LenisWrapper';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <LenisWrapper />
      {children}
    </StyledComponentsRegistry>
  );
}
