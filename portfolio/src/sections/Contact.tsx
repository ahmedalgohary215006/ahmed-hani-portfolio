import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactItem } from '../components/ContactItem';
import { portfolioData } from '../data/portfolioData';

export function Contact() {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const { contactInfo } = portfolioData;

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable — fail silently, mailto link still works.
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-20">
      <SectionHeading
        index="09"
        title={{ en: 'Contact', ar: 'تواصل معي' }}
        subtitle={{
          en: 'Open to internship and engineering opportunities. Reach out directly.',
          ar: 'متاح لفرص التدريب والعمل الهندسي. تواصل معي مباشرة.',
        }}
      />

      <div className="relative grid gap-4 max-w-xl">
        <AnimatedSection>
          <ContactItem
            icon={<Mail size={17} aria-hidden="true" />}
            label={lang === 'en' ? 'Email' : 'البريد الإلكتروني'}
            value={contactInfo.email}
            href={`mailto:${contactInfo.email}`}
            action={
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-ink-secondary hover:border-accent/40 hover:text-accent transition-colors duration-300"
                aria-label={lang === 'en' ? 'Copy email address' : 'نسخ البريد الإلكتروني'}
              >
                {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
              </button>
            }
          />
        </AnimatedSection>

        <AnimatedSection delay={0.06}>
          <ContactItem
            icon={<Phone size={17} aria-hidden="true" />}
            label={lang === 'en' ? 'Phone' : 'الهاتف'}
            value={contactInfo.phone}
            href={`tel:${contactInfo.phone}`}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <ContactItem
            icon={<MapPin size={17} aria-hidden="true" />}
            label={lang === 'en' ? 'Location' : 'الموقع'}
            value={t(contactInfo.location)}
            href="#contact"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.18}>
          <ContactItem
            icon={<Linkedin size={17} aria-hidden="true" />}
            label="LinkedIn"
            value="ahmed-hani-algohary"
            href={contactInfo.linkedin}
          />
        </AnimatedSection>
      </div>

      <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 pointer-events-none" aria-live="polite">
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto rounded-full border border-accent/30 bg-card px-5 py-2.5 text-sm text-ink shadow-lg"
            >
              {lang === 'en' ? 'Email copied to clipboard' : 'تم نسخ البريد الإلكتروني'}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
