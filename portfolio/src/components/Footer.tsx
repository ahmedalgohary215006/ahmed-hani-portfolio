import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-bg-alt">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
        <div>
          <p className="font-semibold text-ink">{t(portfolioData.personalInfo.fullName)}</p>
          <p className="text-sm text-ink-muted mt-0.5">{t(portfolioData.personalInfo.title)}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={portfolioData.contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-secondary hover:border-accent/40 hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${portfolioData.contactInfo.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-secondary hover:border-accent/40 hover:text-accent transition-colors duration-300"
            aria-label={lang === 'en' ? 'Email' : 'البريد الإلكتروني'}
          >
            <Mail size={16} aria-hidden="true" />
          </a>
        </div>

        <p className="text-xs text-ink-muted">
          © {year} {t(portfolioData.personalInfo.fullName)}
        </p>
      </div>
    </footer>
  );
}
