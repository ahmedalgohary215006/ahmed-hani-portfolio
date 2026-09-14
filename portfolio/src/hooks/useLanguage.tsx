import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Bilingual, Lang } from '../types';

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
  t: (bilingual: Bilingual) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'ahmed-hani-portfolio-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'ar') return stored;
  const browserLang = window.navigator.language?.toLowerCase() ?? 'en';
  return browserLang.startsWith('ar') ? 'ar' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.classList.toggle('font-ar', lang === 'ar');
    document.documentElement.classList.toggle('font-en', lang === 'en');
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      toggleLang: () => setLangState((prev) => (prev === 'en' ? 'ar' : 'en')),
      setLang: setLangState,
      t: (bilingual: Bilingual) => bilingual[lang],
    }),
    [lang, dir]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
