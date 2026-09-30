import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from './LanguageContext';
import { TRANSLATIONS, type Language, type TranslationKey } from '../data/translations';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('abule_lang');
    return (saved === 'am' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('abule_lang', lang);
  };

  const t = (key: TranslationKey, params?: Record<string, string | number>): string => {
    let text: string = TRANSLATIONS[language][key] || TRANSLATIONS['en'][key] || key;
    if (params) {
      Object.entries(params).forEach(([paramKey, paramVal]) => {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramVal));
      });
    }
    return text;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
