import type { Dictionary, Locale } from '@/lib/dictionary';
import MagneticButton from '@/components/common/MagneticButton';
import s from '@/styles/sections/hero.module.scss';

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className={s.hero}>
      <div className={s.grain} aria-hidden />

      <div className={s.statusBar}>
        <span className={s.status} data-reveal>
          {dict.hero.status}
        </span>
        <span data-reveal>{dict.hero.role}</span>
        <span data-reveal>{dict.hero.location}</span>
      </div>

      <div className={s.center}>
        <p className={s.eyebrow} data-reveal>
          {dict.hero.eyebrow}
        </p>
        <h1 className={s.name} data-reveal>
          {dict.Name}
        </h1>
        <p className={s.tagline} data-reveal>
          {dict.hero.tagline}
        </p>

        <div className={s.cta} data-reveal>
          <MagneticButton href={`/${locale}/projects`} variant="solid">
            {dict.hero.cta}
          </MagneticButton>
          <MagneticButton href={`/${locale}/contact`}>
            {dict.hero.ctaContact}
          </MagneticButton>
        </div>
      </div>

      <div className={s.scrollHint} aria-hidden>
        <span>{dict.hero.scroll}</span>
        <span className={s.arrow} />
      </div>
    </section>
  );
}
