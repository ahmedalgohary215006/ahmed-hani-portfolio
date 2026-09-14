import { useMemo } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { AnimatedSection } from '../components/AnimatedSection';
import { AchievementChart } from '../components/AchievementChart';
import { AchievementTimeline } from '../components/AchievementTimeline';
import { getAnnualBreakdown } from '../data/portfolioData';

export function AnnualActivity() {
  const data = useMemo(() => getAnnualBreakdown(), []);

  return (
    <section id="activity" className="mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-20">
      <SectionHeading
        index="08"
        title={{ en: 'Annual Portfolio Activity', ar: 'النشاط السنوي للملف المهني' }}
        subtitle={{
          en: 'A yearly view of projects, internships, certificates, and activities completed.',
          ar: 'نظرة سنوية على المشروعات والتدريبات والشهادات والأنشطة المُنجزة.',
        }}
      />

      <AnimatedSection className="mb-8">
        <AchievementChart data={data} />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <AchievementTimeline data={data} />
      </AnimatedSection>
    </section>
  );
}
