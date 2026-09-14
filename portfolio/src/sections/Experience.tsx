import { SectionHeading } from '../components/SectionHeading';
import { ExperienceCard } from '../components/ExperienceCard';
import { portfolioData } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-20">
      <SectionHeading
        index="03"
        title={{ en: 'Internship Experience', ar: 'الخبرات التدريبية' }}
        subtitle={{
          en: 'Hands-on maintenance and manufacturing experience across four industrial internships.',
          ar: 'خبرة عملية في الصيانة والتصنيع عبر أربعة تدريبات صناعية.',
        }}
      />
      <div className="space-y-8 max-w-2xl">
        {portfolioData.experience.map((item, i) => (
          <ExperienceCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
