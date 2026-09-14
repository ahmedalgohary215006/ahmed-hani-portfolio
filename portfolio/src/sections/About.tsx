import { Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeading } from '../components/SectionHeading';
import { ExternalLinkButton } from '../components/ExternalLinkButton';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { t, lang } = useLanguage();
  const { personalInfo, professionalSummary, contactInfo } = portfolioData;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-20">
      <SectionHeading index="01" title={{ en: 'About', ar: 'نبذة عني' }} />

      <div className="grid gap-10 md:grid-cols-[0.85fr_1.4fr_1fr] md:gap-10 lg:gap-14 items-start">
        {personalInfo.photoUrl && (
          <AnimatedSection>
            <div className="relative mx-auto max-w-[220px] md:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-card">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.photoAlt ? t(personalInfo.photoAlt) : t(personalInfo.fullName)}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale-[15%] contrast-[1.05]"
                />
              </div>
              <span
                className="pointer-events-none absolute -inset-px rounded-2xl border border-accent/20"
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={personalInfo.photoUrl ? 0.06 : 0}>
          <p className="text-lg md:text-xl leading-relaxed text-ink-secondary text-balance">
            {t(professionalSummary)}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.14}>
          <div className="rounded-2xl border border-white/10 bg-card p-6">
            <p className="text-sm text-ink-muted">{lang === 'en' ? 'Based in' : 'مقيم في'}</p>
            <p className="mt-1 flex items-center gap-2 text-ink font-medium">
              <MapPin size={16} className="text-accent" aria-hidden="true" />
              {t(personalInfo.location)}
            </p>
            <div className="mt-6">
              <ExternalLinkButton
                href={contactInfo.linkedin}
                variant="outline"
                icon={<Linkedin size={15} aria-hidden="true" />}
                className="w-full justify-center"
              >
                {lang === 'en' ? 'Connect on LinkedIn' : 'تواصل عبر لينكدإن'}
              </ExternalLinkButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
