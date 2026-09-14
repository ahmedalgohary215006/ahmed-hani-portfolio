import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { directionalReveal } from '../utils/motionVariants';
import type { Bilingual } from '../types';

interface SectionHeadingProps {
  index: string;
  title: Bilingual;
  subtitle?: Bilingual;
  id?: string;
}

export function SectionHeading({ index, title, subtitle, id }: SectionHeadingProps) {
  const { t, dir } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="mb-12 md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={directionalReveal(reduced, dir)}
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent/70" aria-hidden="true">
          {index}
        </span>
        <div className="h-px flex-1 max-w-16 bg-accent/25" aria-hidden="true" />
      </div>
      <h2 id={id} className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-ink text-balance">
        {t(title)}
      </h2>
      {subtitle && <p className="mt-3 max-w-xl text-ink-secondary leading-relaxed">{t(subtitle)}</p>}
    </motion.div>
  );
}
