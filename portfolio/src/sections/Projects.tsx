import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { portfolioData } from '../data/portfolioData';

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-20">
      <SectionHeading
        index="05"
        title={{ en: 'Projects', ar: 'المشروعات' }}
        subtitle={{
          en: 'Technical projects spanning mechanical design, materials, thermodynamics, programming, and electronics.',
          ar: 'مشروعات تقنية تمتد عبر التصميم الميكانيكي والمواد والديناميكا الحرارية والبرمجة والإلكترونيات.',
        }}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
