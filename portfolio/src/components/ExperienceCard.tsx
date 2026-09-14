import { motion } from 'framer-motion';
import { FileText, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp } from '../utils/motionVariants';
import { ExternalLinkButton } from './ExternalLinkButton';
import type { ExperienceItem } from '../types';

export function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="relative ps-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp(reduced, index * 0.08)}
    >
      <span
        className="absolute start-0 top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-glow"
        aria-hidden="true"
      />
      <span className="absolute start-[4.5px] top-4 bottom-[-2rem] w-px bg-white/10" aria-hidden="true" />

      <div className="rounded-2xl border border-white/10 bg-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-ink">{item.company}</h3>
            <p className="mt-0.5 text-accent text-sm font-medium">{t(item.role)}</p>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-muted whitespace-nowrap">
            {t(item.period)}
          </span>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-muted">
          <MapPin size={14} aria-hidden="true" />
          {t(item.location)}
        </p>
        <ul className="mt-4 space-y-2">
          {item.details.map((d) => (
            <li key={d.en} className="flex gap-2.5 text-sm text-ink-secondary leading-relaxed">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
              <span>{t(d)}</span>
            </li>
          ))}
        </ul>

        {item.certificateUrl && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <ExternalLinkButton
              href={item.certificateUrl}
              variant="ghost"
              icon={<FileText size={15} aria-hidden="true" />}
              showArrow={false}
            >
              {lang === 'en' ? 'View training certificate' : 'عرض شهادة التدريب'}
            </ExternalLinkButton>
          </div>
        )}
      </div>
    </motion.div>
  );
}
