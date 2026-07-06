'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styled from 'styled-components';

type Variant = 'solid' | 'ghost';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  strength?: number; // 0~1, 끌림 정도 (default 0.4)
  variant?: Variant;
};

// 버튼 hover 시 마우스를 따라 미세하게 움직이는 magnetic 효과.
// href가 내부 경로(/…)면 next/link(basePath 처리), 외부/해시/메일이면 <a>, 없으면 <button>.
export default function MagneticButton({
  children,
  href,
  onClick,
  strength = 0.4,
  variant = 'ghost',
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power3.out' });
    };
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    };

    const move = onMove as EventListener;
    const leave = onLeave as EventListener;
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, [strength]);

  const inner = <span>{children}</span>;

  if (href && href.startsWith('/')) {
    return (
      <NavLink
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        $variant={variant}
        data-cursor="hover"
      >
        {inner}
      </NavLink>
    );
  }

  if (href) {
    return (
      <Anchor
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        $variant={variant}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        data-cursor="hover"
      >
        {inner}
      </Anchor>
    );
  }

  return (
    <Btn
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      $variant={variant}
      data-cursor="hover"
    >
      {inner}
    </Btn>
  );
}

const base = ($variant: Variant) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  padding: 1em 2rem;
  border: 1px solid var(--fg, #0a0a0a);
  border-radius: 999px;
  background: ${$variant === 'solid' ? 'var(--fg, #0a0a0a)' : 'transparent'};
  color: ${$variant === 'solid' ? 'var(--bg, #f5f1ea)' : 'var(--fg, #0a0a0a)'};
  font-family: var(--font-mono), ui-monospace, monospace;
  font-size: var(--fs-mono, 0.8rem);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s var(--ease-out-expo), background 0.3s var(--ease-out-expo);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent, #ff4d2e);
    transform: translateY(101%);
    transition: transform 0.5s var(--ease-out-expo);
    z-index: 0;
  }
  &:hover {
    color: #fff;
  }
  &:hover::before {
    transform: translateY(0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent, #ff4d2e);
    outline-offset: 3px;
  }
  span {
    position: relative;
    z-index: 1;
  }
`;

const NavLink = styled(Link)<{ $variant: Variant }>`
  ${(p) => base(p.$variant)}
`;
const Anchor = styled.a<{ $variant: Variant }>`
  ${(p) => base(p.$variant)}
`;
const Btn = styled.button<{ $variant: Variant }>`
  ${(p) => base(p.$variant)}
`;
