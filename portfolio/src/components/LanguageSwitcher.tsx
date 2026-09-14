import { useLanguage } from '../hooks/useLanguage';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`relative flex items-center rounded-full border border-white/15 text-xs font-medium text-ink-secondary hover:border-accent/40 hover:text-accent transition-colors duration-300 ${
        compact ? 'px-3 py-1.5' : 'px-3.5 py-2'
      }`}
      aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      <span className={lang === 'en' ? 'text-accent' : ''}>EN</span>
      <span className="mx-1.5 text-white/20" aria-hidden="true">
        /
      </span>
      <span className={lang === 'ar' ? 'text-accent' : ''}>عربي</span>
    </button>
  );
}
