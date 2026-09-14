import { motion } from 'framer-motion';
import { Cpu, Linkedin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp } from '../utils/motionVariants';
import { ExternalLinkButton } from './ExternalLinkButton';
import type { ProjectItem } from '../types';

export function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:border-accent/25 hover:-translate-y-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp(reduced, (index % 3) * 0.08)}
    >
      <div className="relative h-40 w-full overflow-hidden engineering-grid bg-bg-alt">
        <div className="absolute inset-0 flex items-center justify-center">
          <Cpu size={34} className="text-accent/40" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span className="absolute top-3 start-3 rounded-full border border-white/15 bg-bg/70 px-2.5 py-1 text-xs text-ink-secondary backdrop-blur">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium text-accent">{t(project.category)}</span>
        <h3 className="mt-1.5 text-lg font-semibold text-ink text-balance">{t(project.title)}</h3>

        <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{t(project.description)}</p>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">{t(project.result)}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-ink-secondary">
              {tool}
            </span>
          ))}
        </div>

        {project.linkedinUrl && (
          <div className="mt-5 pt-4 border-t border-white/10">
            <ExternalLinkButton
              href={project.linkedinUrl}
              variant="ghost"
              icon={<Linkedin size={15} aria-hidden="true" />}
              ariaLabel={
                lang === 'en'
                  ? `View LinkedIn post about ${project.title.en}`
                  : `عرض منشور لينكدإن عن ${project.title.ar}`
              }
              showArrow={false}
            >
              {lang === 'en' ? 'View LinkedIn post' : 'عرض منشور لينكدإن'}
            </ExternalLinkButton>
          </div>
        )}
      </div>
    </motion.article>
  );
}
