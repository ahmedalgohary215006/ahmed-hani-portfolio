import { SectionHeading } from '../components/SectionHeading';
import { AnimatedSection } from '../components/AnimatedSection';
import { EducationCard } from '../components/EducationCard';
import { portfolioData } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-20">
      <SectionHeading index="02" title={{ en: 'Education', ar: 'التعليم' }} />
      <div className="space-y-6">
        {portfolioData.education.map((item, i) => (
          <AnimatedSection key={item.id} delay={i * 0.08}>
            <EducationCard item={item} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
