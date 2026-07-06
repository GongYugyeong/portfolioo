import type { Locale } from '@/lib/dictionary';
import type { Project } from '@/data/projects';
import ComingSoonButton from '@/components/sections/ComingSoonButton';
import s from '@/styles/sections/project-card.module.scss';

export default function ProjectCard({
  project,
  locale,
  visitLabel,
  index,
}: {
  project: Project;
  locale: Locale;
  visitLabel: string;
  index?: number;
}) {
  return (
    <article className={s.card} data-reveal>
      <div className={s.head}>
        {typeof index === 'number' && (
          <span className={s.num}>{String(index + 1).padStart(2, '0')}</span>
        )}
        <h3 className={s.title}>{project.title[locale]}</h3>
        {project.year && <span className={s.year}>{project.year}</span>}
      </div>

      <p className={s.summary}>{project.summary[locale]}</p>

      <ul className={s.highlights}>
        {project.highlights[locale].map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <ul className={s.tech}>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      {project.url ? (
        <a
          className={s.link}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
        >
          {visitLabel} <span aria-hidden>↗</span>
        </a>
      ) : (
        <ComingSoonButton className={s.link} label={visitLabel} />
      )}
    </article>
  );
}
