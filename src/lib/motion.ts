import { Variants } from 'motion/react';

// Centralized ease curve for fast, lag-free feel
export const SYSTEM_EASE = "easeOut";

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: 0.15, ease: SYSTEM_EASE, staggerChildren: 0.03 } 
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.12, ease: SYSTEM_EASE } 
  }
};

export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.03 } },
  exit: { opacity: 0, transition: { duration: 0.1, ease: SYSTEM_EASE } }
};

export const slideUpItem: Variants = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.15, ease: SYSTEM_EASE } },
  exit: { opacity: 0, transition: { duration: 0.1, ease: SYSTEM_EASE } }
};

export const scaleUpItem: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: SYSTEM_EASE } },
  exit: { opacity: 0, transition: { duration: 0.1, ease: SYSTEM_EASE } }
};

// Subtle hover state - very lightweight
export const glassCardHover = {
  scale: 1.01,
  backgroundColor: 'rgba(255,255,255,0.06)',
  transition: { duration: 0.15, ease: SYSTEM_EASE }
};

// Button press interaction
export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.1, ease: 'easeOut' }
};

export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.15, ease: SYSTEM_EASE }
};
