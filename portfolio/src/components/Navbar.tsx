import { useState } from 'react';
import { Download, Menu } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { portfolioData } from '../data/portfolioData';
import { scrollToSection } from '../utils/scroll';
import type { Bilingual } from '../types';

const NAV_ITEMS: { id: string; label: Bilingual }[] = [
  { id: 'about', label: { en: 'About', ar: 'نبذة عني' } },
  { id: 'education', label: { en: 'Education', ar: 'التعليم' } },
  { id: 'experience', label: { en: 'Experience', ar: 'الخبرات' } },
  { id: 'skills', label: { en: 'Skills', ar: 'المهارات' } },
  { id: 'projects', label: { en: 'Projects', ar: 'المشروعات' } },
  { id: 'certificates', label: { en: 'Certificates', ar: 'الشهادات' } },
  { id: 'activity', label: { en: 'Annual Activity', ar: 'النشاط السنوي' } },
  { id: 'contact', label: { en: 'Contact', ar: 'تواصل معي' } },
];

export function Navbar() {
  const { t, lang } = useLanguage();
  const scrolled = useScrollPosition(20);
  const activeSection = useActiveSection(NAV_ITEMS.map((n) => n.id));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="sr-only-focusable fixed top-3 start-3 z-[60] rounded-full bg-accent px-4 py-2 text-bg font-medium">
        {lang === 'en' ? 'Skip to content' : 'الانتقال إلى المحتوى'}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="font-en text-lg font-bold tracking-wide text-ink"
            aria-label={lang === 'en' ? 'Go to top' : 'الانتقال للأعلى'}
          >
            AH<span className="text-accent">.</span>
          </button>

          <nav className="hidden md:flex items-center gap-1" aria-label={lang === 'en' ? 'Primary' : 'التنقل الرئيسي'}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                  activeSection === item.id ? 'text-accent' : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {t(item.label)}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher compact />
            <a
              href={portfolioData.contactInfo.cvPath}
              download
              className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg hover:bg-accent/85 transition-colors duration-300"
            >
              <Download size={15} aria-hidden="true" />
              {lang === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية'}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink md:hidden"
            aria-label={lang === 'en' ? 'Open menu' : 'فتح القائمة'}
          >
            <Menu size={18} aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navItems={NAV_ITEMS} activeSection={activeSection} />
    </>
  );
}
