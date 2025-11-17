// src/app/[locale]/layout.server.tsx
import { Metadata } from 'next';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const isKorean = locale === 'ko';

  const title = isKorean
    ? '포트폴리오 | 프론트엔드 공유경'
    : 'Portfolio | Frontend Developer Gong Yugyeong';

  const description = isKorean
    ? '안녕하세요. 프론트엔드 개발자 공유경입니다. 애니메이션과 인터랙션을 통해 생동감 있는 웹 경험을 만듭니다.'
    : 'Hi, I’m Gong Yugyeong — a frontend developer who builds delightful web experiences with animation and interaction.';

  const localeCode = isKorean ? 'ko_KR' : 'en_US';
  const siteUrl = isKorean
    ? 'https://portfolio-gongyugyeong.kr'
    : 'https://portfolio-gongyugyeong.com';

  const ogImage = `${siteUrl}/images/og-thumbnail.jpg`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: siteUrl,
      languages: {
        ko: 'https://portfolio-gongyugyeong.kr',
        en: 'https://portfolio-gongyugyeong.com',
      },
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: title,
      locale: localeCode,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Gong Yugyeong Portfolio Thumbnail',
        },
      ],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  };
}

export default function LocaleServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
