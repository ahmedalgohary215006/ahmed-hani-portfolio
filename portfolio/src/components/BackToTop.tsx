import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { scrollToTop } from '../utils/scroll';

export function BackToTop() {
  const visible = useScrollPosition(500);
  const { lang } = useLanguage();

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 end-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-card/90 backdrop-blur text-ink hover:border-accent/50 hover:text-accent transition-colors duration-300 shadow-lg"
          aria-label={lang === 'en' ? 'Back to top' : 'العودة إلى الأعلى'}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
