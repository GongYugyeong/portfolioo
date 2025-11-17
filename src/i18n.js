import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ko from '@/locales/ko/translation.json';
import en from '@/locales/en/translation.json';

const resources = {
  ko: { translation: ko },
  en: { translation: en },
};

// 이미 초기화된 경우 다시 초기화하지 않도록 보호
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ko',
    interpolation: { escapeValue: false },
  });
}

// 단순 export만 (비동기 없음)
export default i18n;
