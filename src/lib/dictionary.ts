// 서버에서 로케일 사전을 동기 로드한다. (client i18next를 대체 — 콘텐츠는 서버 렌더)
// Locale 타입/유틸은 순수(클라이언트에서도 type import 안전).
import ko from '@/locales/ko/translation.json';
import en from '@/locales/en/translation.json';

export type Locale = 'ko' | 'en';
export const locales: Locale[] = ['ko', 'en'];
export const defaultLocale: Locale = 'ko';

const dictionaries = { ko, en } as const;
export type Dictionary = typeof ko;

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function getDictionary(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}
