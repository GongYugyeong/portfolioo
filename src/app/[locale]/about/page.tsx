import type { Metadata } from 'next';

import { getDictionary, isLocale, defaultLocale, type Locale } from '@/lib/dictionary';
import { pageMetadata } from '@/lib/metadata';
import { pageGraph } from '@/lib/jsonLd';
import JsonLd from '@/components/seo/JsonLd';
import { experiences } from '@/data/experience';
import { stackGroups } from '@/data/stack';
import { strengths } from '@/data/strengths';
import { facts, focusTags } from '@/data/profile';
import s from '@/styles/sections/about.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: '/about',
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    siteName: dict.Name,
  });
}

export default async function AboutPage({
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
          path: '/about',
          title: dict.meta.about.title,
          description: dict.meta.about.description,
        })}
      />

      {/* 인트로 */}
      <section className={s.introSection}>
        <div className={s.wrap}>
          <span className={s.kicker}>(01) — {dict.about.title}</span>
          <h1 className={s.lead} data-reveal>
            {dict.about.lead}
          </h1>
          <div className={s.introText}>
            {dict.about.intro.map((paragraph, i) => (
              <p key={i} data-reveal>
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className={s.srOnly}>{dict.about.focusTitle}</h2>
          <ul className={`${s.chips} ${s.focusChips}`} data-reveal>
            {focusTags.map((tag) => (
              <li key={tag.en} className={s.chip}>
                {tag[loc]}
              </li>
            ))}
          </ul>

          <h2 className={s.srOnly}>{dict.about.profileTitle}</h2>
          <dl className={s.facts} data-reveal>
            {facts.map((fact) => (
              <div key={fact.id} className={s.fact}>
                <dt>{fact.label[loc]}</dt>
                <dd>{fact.value[loc]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 핵심 역량 */}
      <section className={s.section}>
        <div className={s.wrap}>
          <span className={s.kicker}>(02) — {dict.about.highlightsTitle}</span>
          <dl className={s.strengths}>
            {strengths.map((item) => (
              <div key={item.id} className={s.strength} data-reveal>
                <dt>{item.label[loc]}</dt>
                <dd>{item.body[loc]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 경력 */}
      <section className={s.section}>
        <div className={s.wrap}>
          <span className={s.kicker}>(03) — {dict.about.experienceTitle}</span>
          <div className={s.experienceList}>
            {experiences.map((exp) => (
              <article key={exp.id} className={s.experienceItem} data-reveal>
                <div className={s.expHead}>
                  <h3 className={s.company}>{exp.company[loc]}</h3>
                  {exp.current && <span className={s.badge}>{dict.common.current}</span>}
                  <span className={s.period}>
                    {exp.period}
                    {exp.duration && ` · ${exp.duration[loc]}`}
                  </span>
                </div>
                <p className={s.role}>{exp.role[loc]}</p>
                <ul className={s.dashList}>
                  {exp.points[loc].map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className={s.section}>
        <div className={s.wrap}>
          <span className={s.kicker}>(04) — {dict.about.stackTitle}</span>
          <div className={s.stackGroups}>
            {stackGroups.map((group) => (
              <div key={group.id} className={s.stackGroup} data-reveal>
                <span className={s.stackLabel}>{group.label[loc]}</span>
                <ul className={s.chips}>
                  {group.items.map((item) => (
                    <li key={item} className={s.chip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 학력 · 교육 · 자격 */}
      <section className={s.section}>
        <div className={s.wrap}>
          <span className={s.kicker}>
            (05) — {dict.about.educationTitle} · {dict.about.certTitle}
          </span>
          <div className={s.threeCol}>
            <div data-reveal>
              <h3 className={s.colTitle}>{dict.about.educationTitle}</h3>
              <ul className={s.dashList}>
                {dict.about.education.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h3 className={s.colTitle}>{dict.about.trainingTitle}</h3>
              <ul className={s.dashList}>
                {dict.about.training.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h3 className={s.colTitle}>{dict.about.certTitle}</h3>
              <ul className={s.dashList}>
                {dict.about.certs.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
