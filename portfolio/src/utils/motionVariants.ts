import type { Variants } from 'framer-motion';

// Direction-aware fade-up used across sections. `dir` flips the
// horizontal entry direction for RTL (Arabic) vs LTR (English).
export function fadeUp(reduced: boolean, delay = 0): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3, delay } },
    };
  }
  return {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function fadeIn(reduced: boolean, delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: reduced ? 0.2 : 0.5, delay },
    },
  };
}

export function directionalReveal(reduced: boolean, dir: 'ltr' | 'rtl', delay = 0): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3, delay } },
    };
  }
  const offset = dir === 'rtl' ? 24 : -24;
  return {
    hidden: { opacity: 0, x: offset },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function staggerContainer(stagger = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}
