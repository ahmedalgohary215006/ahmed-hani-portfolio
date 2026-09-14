import { SectionHeading } from '../components/SectionHeading';
import { CertificateCard } from '../components/CertificateCard';
import { portfolioData } from '../data/portfolioData';

export function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-20">
      <SectionHeading index="06" title={{ en: 'Certificates', ar: 'الشهادات' }} />
      <div className="grid gap-4 lg:grid-cols-2">
        {portfolioData.certificates.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
}
