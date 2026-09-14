import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { scrollToSection } from '../utils/scroll';

export function ScrollIndicator() {
  const { lang } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => scrollToSection('about')}
      className="group flex flex-col items-center gap-2 text-ink-secondary hover:text-accent transition-colors duration-300"
      aria-label={lang === 'en' ? 'Scroll to About section' : 'الانتقال إلى قسم نبذة عني'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.9, duration: 0.6 }}
    >
      <span className="text-[11px] tracking-wide">{lang === 'en' ? 'Scroll' : 'مرر لأسفل'}</span>
      <motion.span
        className="h-9 w-px bg-current"
        animate={reduced ? {} : { scaleY: [1, 0.4, 1] }}
        style={{ transformOrigin: 'top' }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.button>
  );
}
