import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

// AI 검색 크롤러를 명시적으로 허용. `*: allow`로도 통과하지만
// 봇 이름을 적어두면 나중에 정책을 바꿀 때 고칠 지점이 분명해진다.
const AI_BOTS = [
  'GPTBot', // OpenAI 학습·색인
  'OAI-SearchBot', // ChatGPT 검색
  'ChatGPT-User', // ChatGPT가 사용자 요청으로 가져갈 때
  'ClaudeBot', // Anthropic
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended', // Gemini · AI Overviews
  'Applebot-Extended',
  'CCBot', // Common Crawl
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_BOTS, allow: '/' },
    ],
    sitemap: `${site.baseUrl}/sitemap.xml`,
  };
}
