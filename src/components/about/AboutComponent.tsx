'use client';

import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

import styled from 'styled-components';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #fff;
`;

export default function AboutComponent() {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <>
      {/* ref를 Header에 전달 */}
      <Header ref={headerRef} />

      <Wrapper>
        {/* <Section1 headerRef={headerRef} />
        <Section2 />
        <Section3 />
        <Section4 /> */}
      </Wrapper>

      <Footer />
    </>
  );
}
