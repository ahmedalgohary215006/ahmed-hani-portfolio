import { Compass, Linkedin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeading } from '../components/SectionHeading';
import { ExternalLinkButton } from '../components/ExternalLinkButton';
import { portfolioData } from '../data/portfolioData';

export function Activities() {
  const { t, lang } = useLanguage();

  if (portfolioData.activities.length === 0) return null;

  return (
    <section id="activities" className="mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-20">
      <SectionHeading
        index="07"
        title={{ en: 'Activities', ar: 'الأنشطة' }}
        subtitle={{
          en: 'Engineering exhibitions and events attended outside coursework and internships.',
          ar: 'فعاليات ومعارض هندسية تم حضورها خارج نطاق المقررات الدراسية والتدريبات.',
        }}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {portfolioData.activities.map((activity, i) => (
          <AnimatedSection key={activity.id} delay={i * 0.06}>
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-card p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 text-accent">
                <Compass size={20} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="text-xs text-ink-muted">{t(activity.type)} · {activity.year}</span>
                <h3 className="mt-1 font-semibold text-ink text-balance">{t(activity.title)}</h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{t(activity.description)}</p>
                {activity.linkedinUrl && (
                  <div className="mt-4">
                    <ExternalLinkButton
                      href={activity.linkedinUrl}
                      variant="ghost"
                      icon={<Linkedin size={15} aria-hidden="true" />}
                      showArrow={false}
                    >
                      {lang === 'en' ? 'LinkedIn post' : 'منشور لينكدإن'}
                    </ExternalLinkButton>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
