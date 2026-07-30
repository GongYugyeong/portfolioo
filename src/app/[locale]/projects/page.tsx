import type { Metadata } from 'next';

import { getDictionary, isLocale, defaultLocale, type Locale } from '@/lib/dictionary';
import { pageMetadata } from '@/lib/metadata';
import { pageGraph, projectListGraph } from '@/lib/jsonLd';
import JsonLd from '@/components/seo/JsonLd';
import { featuredProjects, moreProjects } from '@/data/projects';
import ProjectCard from '@/components/sections/ProjectCard';
import s from '@/styles/sections/projects.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: '/projects',
    title: dict.meta.projects.title,
    description: dict.meta.projects.description,
    siteName: dict.Name,
  });
}

export default async function ProjectsPage({
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
          path: '/projects',
          title: dict.meta.projects.title,
          description: dict.meta.projects.description,
        })}
      />
      <JsonLd data={projectListGraph(loc)} />

      <section className={s.headerSection}>
        <div className={s.wrap}>
          <span className={s.kicker}>(01) — {dict.projects.featuredTitle}</span>
          <h1 className={s.headline} data-reveal>
            {dict.projects.title}
          </h1>
          <p className={s.lead} data-reveal>
            {dict.projects.lead}
          </p>
        </div>
      </section>

      {/* Featured projects */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.grid}>
            {featuredProjects.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                locale={loc}
                visitLabel={dict.projects.visit}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* More work */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.head}>
            <span className={s.kicker}>(02) — {dict.projects.moreTitle}</span>
          </div>
          <div className={s.categories}>
            {moreProjects.map((category) => (
              <div className={s.category} key={category.id} data-reveal>
                <h2 className={s.categoryLabel}>{category.label[loc]}</h2>
                <ul className={s.items}>
                  {category.items.map((item, i) => (
                    <li className={s.item} key={item.url ?? `${category.id}-${i}`}>
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer" data-cursor="hover">
                          {item.name[loc]} <span aria-hidden>↗</span>
                        </a>
                      ) : (
                        item.name[loc]
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
