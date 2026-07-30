import type { Metadata } from 'next';

import { getDictionary, isLocale, defaultLocale, type Locale } from '@/lib/dictionary';
import { pageMetadata } from '@/lib/metadata';
import { asset } from '@/lib/asset';
import { site } from '@/data/site';
import { facts } from '@/data/profile';
import s from '@/styles/sections/resume.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: '/resume',
    title: dict.meta.resume.title,
    description: dict.meta.resume.description,
  });
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(loc);
  const pdf = asset(site.resumePdf);

  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <span className={s.kicker}>(01) — {dict.resume.title}</span>
        <h1 className={s.headline} data-reveal>
          {dict.resume.title}
        </h1>
        <p className={s.lead} data-reveal>
          {dict.resume.lead}
        </p>

        <div className={s.actions} data-reveal>
          <a className={s.action} href={pdf} target="_blank" rel="noreferrer" data-cursor="hover">
            {dict.resume.openPdf} <span aria-hidden>↗</span>
          </a>
          <a
            className={s.action}
            href={pdf}
            download={site.resumePdfName}
            data-cursor="hover"
          >
            {dict.resume.download} <span aria-hidden>↓</span>
          </a>
          <a
            className={s.action}
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
          >
            {dict.resume.openNotion} <span aria-hidden>↗</span>
          </a>
          <span className={s.updated}>{dict.resume.updated}</span>
        </div>

        {/* 내장 미리보기. 모바일은 object가 첫 페이지만 그리는 경우가 많아 CSS로 안내 카드로 교체 */}
        <div className={s.viewer} data-reveal>
          <object
            className={s.object}
            data={pdf}
            type="application/pdf"
            aria-label={dict.resume.viewerLabel}
          >
            <div className={s.fallback}>
              <p>{dict.resume.fallback}</p>
              <a className={s.action} href={pdf} target="_blank" rel="noreferrer">
                {dict.resume.openPdf} <span aria-hidden>↗</span>
              </a>
            </div>
          </object>

          <div className={s.mobileNote}>
            <p>{dict.resume.mobileNote}</p>
            <a className={s.action} href={pdf} target="_blank" rel="noreferrer">
              {dict.resume.openPdf} <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <dl className={s.facts}>
          {facts.map((fact) => (
            <div key={fact.id} className={s.fact}>
              <dt>{fact.label[loc]}</dt>
              <dd>{fact.value[loc]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
