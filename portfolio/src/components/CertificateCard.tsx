import { motion } from 'framer-motion';
import { Award, Linkedin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp } from '../utils/motionVariants';
import { ExternalLinkButton } from './ExternalLinkButton';
import type { CertificateItem } from '../types';

export function CertificateCard({ cert, index }: { cert: CertificateItem; index: number }) {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-300 hover:border-accent/25 sm:flex-row sm:items-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp(reduced, (index % 3) * 0.06)}
    >
      {cert.imageUrl ? (
        <img
          src={cert.imageUrl}
          alt={cert.imageAlt ? t(cert.imageAlt) : t(cert.title)}
          loading="lazy"
          className="h-28 w-full shrink-0 rounded-xl border border-white/10 object-cover sm:h-24 sm:w-36"
        />
      ) : (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 text-accent">
          <Award size={20} aria-hidden="true" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-ink text-balance">{t(cert.title)}</h3>
        <p className="mt-1 text-sm text-ink-secondary">{t(cert.issuer)}</p>
        <p className="mt-1 text-xs text-ink-muted">{t(cert.issueDate)}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <ExternalLinkButton href={cert.credentialUrl} variant="outline">
            {lang === 'en' ? 'View credential' : 'عرض الشهادة'}
          </ExternalLinkButton>
          {cert.linkedinUrl && (
            <ExternalLinkButton
              href={cert.linkedinUrl}
              variant="ghost"
              icon={<Linkedin size={15} aria-hidden="true" />}
              showArrow={false}
            >
              {lang === 'en' ? 'LinkedIn post' : 'منشور لينكدإن'}
            </ExternalLinkButton>
          )}
        </div>
      </div>
    </motion.article>
  );
}
