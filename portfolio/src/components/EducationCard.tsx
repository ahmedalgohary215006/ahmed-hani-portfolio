import { GraduationCap, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import type { EducationItem } from '../types';

export function EducationCard({ item }: { item: EducationItem }) {
  const { t, lang } = useLanguage();

  return (
    <div className="rounded-2xl border border-white/10 bg-card p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/25 text-accent">
            <GraduationCap size={22} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-ink">{t(item.degree)}</h3>
            <p className="mt-1 text-ink-secondary">{t(item.institution)}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
              <MapPin size={14} aria-hidden="true" />
              {t(item.location)}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-start md:items-end gap-1 text-sm">
          <span className="rounded-full border border-accent/25 px-3 py-1 text-accent">
            {lang === 'en' ? `Expected ${item.expectedGraduation}` : `التخرج المتوقع ${item.expectedGraduation}`}
          </span>
          <span className="text-ink-muted">
            {lang === 'en' ? `${item.average} weighted average` : `المعدل الموزون ${item.average}`}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-secondary">{t(item.classification)}</p>

      <div className="mt-6">
        <h4 className="text-xs uppercase tracking-wide text-ink-muted mb-3">
          {lang === 'en' ? 'Relevant coursework' : 'المقررات ذات الصلة'}
        </h4>
        <ul className="flex flex-wrap gap-2">
          {item.coursework.map((course) => (
            <li
              key={course.en}
              className="rounded-full border border-white/10 bg-bg px-3 py-1.5 text-sm text-ink-secondary"
            >
              {t(course)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
