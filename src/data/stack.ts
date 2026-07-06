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
    items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    id: 'state',
    label: { ko: '상태 관리', en: 'State' },
    items: ['Zustand'],
  },
  {
    id: 'api',
    label: { ko: 'API', en: 'API' },
    items: ['REST API', 'Fetch', 'Axios', 'Swagger'],
  },
  {
    id: 'animation',
    label: { ko: '애니메이션 · UI', en: 'Animation · UI' },
    items: ['GSAP', 'Swiper', 'Lenis'],
  },
  {
    id: 'devops',
    label: { ko: 'DevOps', en: 'DevOps' },
    items: ['Git', 'GitLab', 'Gitea', 'Jenkins', 'Docker'],
  },
  {
    id: 'collab',
    label: { ko: '협업', en: 'Collaboration' },
    items: ['Figma', 'Zeplin', 'Adobe XD', 'Notion', 'ClickUp'],
  },
  {
    id: 'ai',
    label: { ko: 'AI 도구', en: 'AI Tools' },
    items: ['Claude Code', 'ChatGPT', 'MCP'],
  },
];
