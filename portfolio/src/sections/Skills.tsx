import { SectionHeading } from '../components/SectionHeading';
import { SkillGroup } from '../components/SkillGroup';
import { portfolioData } from '../data/portfolioData';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-20">
      <SectionHeading index="04" title={{ en: 'Skills', ar: 'المهارات' }} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.skillGroups.map((group, i) => (
          <SkillGroup key={group.id} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
