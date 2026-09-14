import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Linkedin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { portfolioData } from '../data/portfolioData';
import type { AnnualBreakdown } from '../types';

function useYearItems(year: number) {
  return {
    projects: portfolioData.projects.filter((p) => p.year === year),
    experience: portfolioData.experience.filter((e) => e.year === year),
    certificates: portfolioData.certificates.filter((c) => c.year === year),
    activities: portfolioData.activities.filter((a) => a.year === year),
  };
}

function YearPanel({ year }: { year: number }) {
  const { t, lang } = useLanguage();
  const items = useYearItems(year);

  const rows = [
    ...items.projects.map((p) => ({ key: p.id, label: t(p.title), url: p.linkedinUrl })),
    ...items.experience.map((e) => ({ key: e.id, label: `${e.company} — ${t(e.role)}`, url: undefined })),
    ...items.certificates.map((c) => ({ key: c.id, label: t(c.title), url: c.linkedinUrl })),
    ...items.activities.map((a) => ({ key: a.id, label: t(a.title), url: a.linkedinUrl })),
  ];

  return (
    <ul className="space-y-2 pt-1">
      {rows.map((row) => (
        <li
          key={row.key}
          className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-bg px-4 py-3 text-sm"
        >
          <span className="text-ink-secondary">{row.label}</span>
          {row.url && (
            <a
              href={row.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-1.5 text-xs text-accent hover:underline"
              aria-label={lang === 'en' ? `View LinkedIn post: ${row.label}` : `عرض منشور لينكدإن: ${row.label}`}
            >
              <Linkedin size={13} aria-hidden="true" />
              {lang === 'en' ? 'LinkedIn' : 'لينكدإن'}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export function AchievementTimeline({ data }: { data: AnnualBreakdown[] }) {
  const { lang } = useLanguage();
  const [openYear, setOpenYear] = useState<number | null>(data[data.length - 1]?.year ?? null);

  return (
    <div className="space-y-4">
      {[...data].reverse().map((yearData) => {
        const isOpen = openYear === yearData.year;
        return (
          <div key={yearData.year} className="rounded-2xl border border-white/10 bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenYear(isOpen ? null : yearData.year)}
              aria-expanded={isOpen}
              aria-controls={`year-panel-${yearData.year}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-start"
            >
              <div>
                <span className="text-lg font-semibold text-ink">{yearData.year}</span>
                <span className="ms-3 text-sm text-ink-muted">
                  {lang === 'en'
                    ? `${yearData.total} portfolio activities`
                    : `${yearData.total} أنشطة في الملف المهني`}
                </span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-ink-muted"
              >
                <ChevronDown size={18} aria-hidden="true" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`year-panel-${yearData.year}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="px-5 sm:px-6"
                >
                  <div className="pb-5 sm:pb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs text-ink-muted">
                      <span>{lang === 'en' ? 'Projects' : 'مشروعات'}: {yearData.projects}</span>
                      <span>{lang === 'en' ? 'Internships' : 'تدريبات'}: {yearData.internships}</span>
                      <span>{lang === 'en' ? 'Certificates' : 'شهادات'}: {yearData.certificates}</span>
                      <span>{lang === 'en' ? 'Activities' : 'أنشطة'}: {yearData.activities}</span>
                    </div>
                    <YearPanel year={yearData.year} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
