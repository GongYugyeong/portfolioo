// 기술 스택 — 그룹 라벨만 로케일별, 항목(기술명)은 고유명이라 공통.
import type { Locale } from '@/lib/dictionary';

export type StackGroup = {
  id: string;
  label: Record<Locale, string>;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    id: 'frontend',
    label: { ko: '프론트엔드', en: 'Frontend' },
    items: [
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5',
      'CSS3 · SCSS',
    ],
  },
  {
    id: 'state-api',
    label: { ko: '상태 · API', en: 'State / API' },
    items: ['Zustand', 'Redux Toolkit', 'REST API', 'Axios', 'Swagger'],
  },
  {
    id: 'ui-viz',
    label: { ko: 'UI · 시각화', en: 'UI / Viz' },
    items: ['GSAP', 'Swiper', 'Lenis', 'Chart.js', 'i18n'],
  },
  {
    id: 'devops-ai',
    label: { ko: 'DevOps · AI', en: 'DevOps / AI' },
    items: [
      'Git · GitLab · Gitea',
      'Jenkins',
      'Docker',
      'Node.js',
      'Claude Code · MCP',
    ],
  },
  {
    id: 'collab',
    label: { ko: '협업', en: 'Collaboration' },
    items: ['Figma', 'Zeplin', 'Adobe XD', 'Notion', 'ClickUp'],
  },
];
