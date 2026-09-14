import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp } from '../utils/motionVariants';
import type { SkillGroupData } from '../types';

export function SkillGroup({ group, index }: { group: SkillGroupData; index: number }) {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-300 hover:border-accent/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp(reduced, index * 0.06)}
    >
      <h3 className="text-sm font-semibold text-accent tracking-wide">{t(group.title)}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-bg px-3 py-1.5 text-sm text-ink-secondary"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
