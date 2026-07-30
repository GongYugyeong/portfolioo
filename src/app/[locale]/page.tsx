import type { Metadata } from 'next';
import Link from 'next/link';

import { getDictionary, isLocale, defaultLocale, type Locale } from '@/lib/dictionary';
import { pageMetadata } from '@/lib/metadata';
import { featuredProjects } from '@/data/projects';
import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/sections/ProjectCard';
import MagneticButton from '@/components/common/MagneticButton';
import s from '@/styles/sections/home.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: '',
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    siteName: dict.Name,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(loc);
  const featured = featuredProjects.slice(0, 3);

  return (
    <>
      <Hero locale={loc} dict={dict} />

      {/* About preview */}
      <section className={s.section}>
        <div className={s.wrap}>
          <span className={s.kicker}>(01) — {dict.home.aboutTitle}</span>
          <p className={s.lead} data-reveal>
            {dict.home.aboutLead}
          </p>
          <Link className={s.textLink} href={`/${loc}/about`} data-cursor="hover" data-reveal>
            {dict.home.aboutMore} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.head}>
            <span className={s.kicker}>(02) — {dict.home.projectsTitle}</span>
            <p className={s.subtitle} data-reveal>
              {dict.home.projectsLead}
            </p>
          </div>
          <div className={s.grid}>
            {featured.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                locale={loc}
                visitLabel={dict.projects.visit}
                index={i}
              />
            ))}
          </div>
          <Link className={s.textLink} href={`/${loc}/projects`} data-cursor="hover" data-reveal>
            {dict.home.projectsMore} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={s.ctaSection}>
        <div className={s.wrap}>
          <span className={s.kicker}>(03) — {dict.home.contactTitle}</span>
          <h2 className={s.ctaTitle} data-reveal>
            {dict.home.contactLead}
          </h2>
          <div data-reveal>
            <MagneticButton href={`/${loc}/contact`} variant="solid">
              {dict.home.contactCta}
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
