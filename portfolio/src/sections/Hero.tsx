import { motion } from 'framer-motion';
import { Download, Linkedin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ScrollIndicator } from '../components/ScrollIndicator';
import { ExternalLinkButton } from '../components/ExternalLinkButton';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { portfolioData } from '../data/portfolioData';
import { scrollToSection } from '../utils/scroll';

export function Hero() {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();
  const { personalInfo, professionalSummary, contactInfo } = portfolioData;

  const nameWords = t(personalInfo.fullName).split(' ');

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background: photographic image path with an elegant CSS fallback */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: reduced ? 1 : 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduced ? 0.4 : 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.75) 55%, #050505 100%), radial-gradient(ellipse at 50% 30%, rgba(103,232,249,0.10), transparent 60%), url('/images/hero-background.jpg')",
          }}
        />
        {/* CSS fallback layer: engineering grid + vignette, visible whenever the photo is absent */}
        <div className="absolute inset-0 bg-bg engineering-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(103,232,249,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#050505_95%)]" />
        {!reduced && (
          <div
            className="absolute inset-0 opacity-[0.04] animate-grain"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
            aria-hidden="true"
          />
        )}
      </motion.div>

      {/* Thin geometric engineering decoration */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
        <motion.div
          className="absolute left-[8%] top-[18%] h-24 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent"
          animate={reduced ? {} : { opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[10%] bottom-[22%] h-px w-24 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          animate={reduced ? {} : { opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="absolute top-6 end-6 z-10 sm:hidden">
        <LanguageSwitcher compact />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 text-lg font-semibold tracking-wide text-accent"
        >
          {personalInfo.monogram}
        </motion.div>

        {/* Divider line expanding from center */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 48, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-px bg-accent/50"
        />

        {/* Name reveal */}
        <h1 className="mt-6 flex flex-wrap justify-center gap-x-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
          {nameWords.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.75 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base font-medium tracking-wide text-accent sm:text-lg"
        >
          {t(personalInfo.title)}
        </motion.p>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-balance leading-relaxed text-ink-secondary"
        >
          {t(professionalSummary)}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 1.65 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg hover:bg-accent/85 transition-colors duration-300"
            >
              {lang === 'en' ? 'View Projects' : 'عرض المشروعات'}
            </button>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
            <ExternalLinkButton href={contactInfo.cvPath} variant="outline" icon={<Download size={15} aria-hidden="true" />} showArrow={false}>
              {lang === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية'}
            </ExternalLinkButton>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
            <ExternalLinkButton href={contactInfo.linkedin} variant="ghost" icon={<Linkedin size={15} aria-hidden="true" />}>
              LinkedIn
            </ExternalLinkButton>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 z-10 hidden sm:block">
        <ScrollIndicator />
      </div>
    </section>
  );
}
