import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { scrollToSection } from '../utils/scroll';
import type { Bilingual } from '../types';

interface NavItem {
  id: string;
  label: Bilingual;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
}

export function MobileMenu({ open, onClose, navItems, activeSection }: MobileMenuProps) {
  const { t, lang, dir } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-bg/98 backdrop-blur-sm md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'en' ? 'Navigation menu' : 'قائمة التنقل'}
          ref={dialogRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-semibold text-accent">AH</span>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink"
              aria-label={lang === 'en' ? 'Close menu' : 'إغلاق القائمة'}
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <motion.nav
            className="flex flex-col gap-1 px-6 pt-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                ref={i === 0 ? firstLinkRef : undefined}
                type="button"
                onClick={() => {
                  onClose();
                  scrollToSection(item.id);
                }}
                variants={{
                  hidden: { opacity: 0, x: dir === 'rtl' ? 12 : -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={`rounded-xl px-4 py-3.5 text-start text-lg ${
                  activeSection === item.id ? 'text-accent' : 'text-ink'
                }`}
              >
                {t(item.label)}
              </motion.button>
            ))}
          </motion.nav>

          <div className="mt-8 px-6">
            <LanguageSwitcher />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
