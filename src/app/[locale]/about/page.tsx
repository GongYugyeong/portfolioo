import type { Metadata } from 'next';

import { getDictionary, isLocale, defaultLocale, type Locale } from '@/lib/dictionary';
import { pageMetadata } from '@/lib/metadata';
import { experiences } from '@/data/experience';
import { stackGroups } from '@/data/stack';
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
        </div>
      </section>

      {/* 핵심 역량 */}
      <section className={s.section}>
        <div className={s.wrap}>
          <span className={s.kicker}>(02) — {dict.about.highlightsTitle}</span>
          <ul className={s.dashList}>
            {dict.about.highlights.map((item, i) => (
              <li key={i} data-reveal>
                {item}
              </li>
            ))}
          </ul>
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
                  <span className={s.period}>{exp.period}</span>
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

      {/* 학력 · 자격 */}
      <section className={s.section}>
        <div className={s.wrap}>
          <span className={s.kicker}>
            (05) — {dict.about.educationTitle} · {dict.about.certTitle}
          </span>
          <div className={s.twoCol}>
            <div data-reveal>
              <h3 className={s.colTitle}>{dict.about.educationTitle}</h3>
              <ul className={s.dashList}>
                {dict.about.education.map((item, i) => (
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
