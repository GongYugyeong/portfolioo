import type { Metadata } from 'next';
import Link from 'next/link';

import { getDictionary, isLocale, defaultLocale, type Locale } from '@/lib/dictionary';
import { pageMetadata } from '@/lib/metadata';
import { pageGraph } from '@/lib/jsonLd';
import JsonLd from '@/components/seo/JsonLd';
import { asset } from '@/lib/asset';
import { site } from '@/data/site';
import MagneticButton from '@/components/common/MagneticButton';
import s from '@/styles/sections/contact.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: '/contact',
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    siteName: dict.Name,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(loc);

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale: loc,
          dict,
          path: '/contact',
          title: dict.meta.contact.title,
          description: dict.meta.contact.description,
        })}
      />

      <section className={s.section}>
        <div className={s.wrap}>
          <span className={s.kicker}>(01) — {dict.contact.title}</span>
          <h1 className={s.headline} data-reveal>
            {dict.contact.title}
          </h1>
          <p className={s.lead} data-reveal>
            {dict.contact.lead}
          </p>

          <div className={s.list}>
            <div className={s.row} data-reveal>
              <span className={s.label}>{dict.contact.emailLabel}</span>
              <a
                className={`${s.value} ${s.valueLink}`}
                href={`mailto:${site.email}`}
                data-cursor="hover"
              >
                {site.email}
              </a>
            </div>
            <div className={s.row} data-reveal>
              <span className={s.label}>{dict.contact.githubLabel}</span>
              <a
                className={`${s.value} ${s.valueLink}`}
                href={site.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
              >
                {site.github} ↗
              </a>
            </div>
            <div className={s.row} data-reveal>
              <span className={s.label}>{dict.contact.resumeLabel}</span>
              <a
                className={`${s.value} ${s.valueLink}`}
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
              >
                Notion ↗
              </a>
            </div>
            <div className={s.row} data-reveal>
              <span className={s.label}>{dict.contact.resumePdfLabel}</span>
              <span className={s.valueGroup}>
                <Link className={`${s.value} ${s.valueLink}`} href={`/${loc}/resume`} data-cursor="hover">
                  {dict.resume.title}
                </Link>
                <a
                  className={s.subLink}
                  href={asset(site.resumePdf)}
                  download={site.resumePdfName}
                  data-cursor="hover"
                >
                  {dict.resume.download} ↓
                </a>
              </span>
            </div>
            <div className={s.row} data-reveal>
              <span className={s.label}>{dict.contact.locationLabel}</span>
              <span className={s.value}>{dict.contact.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={s.ctaSection}>
        <div className={s.wrap}>
          <div data-reveal>
            <MagneticButton href={`mailto:${site.email}`} variant="solid">
              {dict.contact.emailLabel}
            </MagneticButton>
          </div>
          <p className={s.note} data-reveal>
            {dict.contact.note}
          </p>
        </div>
      </section>
    </>
  );
}
