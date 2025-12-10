/**
 * 1322 Legacy Strategies - Animation Variants
 *
 * Standardized Framer Motion variants for consistent animations
 * throughout the application.
 */

import { Variants, Transition } from 'framer-motion'
import { motionDurations, easings } from './design-tokens'

// =============================================================================
// TRANSITION PRESETS
// =============================================================================

export const defaultTransition: Transition = {
  duration: motionDurations.default,
  ease: [0.4, 0, 0.2, 1],
}

export const entranceTransition: Transition = {
  duration: motionDurations.entrance,
  ease: [0.0, 0.0, 0.2, 1],
}

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
}

// =============================================================================
// FADE VARIANTS
// =============================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
}

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: entranceTransition,
  },
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: entranceTransition,
  },
}

// =============================================================================
// SLIDE VARIANTS
// =============================================================================

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: entranceTransition,
  },
}

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: entranceTransition,
  },
}

// =============================================================================
// SCALE VARIANTS
// =============================================================================

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: entranceTransition,
  },
}

export const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: motionDurations.fast,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: motionDurations.fast,
    },
  },
}

// =============================================================================
// STAGGER CONTAINERS
// =============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionDurations.stagger,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// =============================================================================
// STAGGER CHILDREN (use with staggerContainer parent)
// =============================================================================

export const staggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.default,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
}

export const staggerChildScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionDurations.default,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
}

// =============================================================================
// CARD ELEVATION
// =============================================================================

export const cardElevation: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 4px 12px rgba(44, 62, 80, 0.08)',
  },
  hover: {
    y: -4,
    boxShadow: '0 12px 24px rgba(44, 62, 80, 0.15)',
    transition: {
      duration: motionDurations.default,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// =============================================================================
// UNDERLINE GROW (for links)
// =============================================================================

export const underlineGrow: Variants = {
  rest: {
    scaleX: 0,
    originX: 0,
  },
  hover: {
    scaleX: 1,
    transition: {
      duration: motionDurations.default,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// =============================================================================
// DROPDOWN / MENU
// =============================================================================

export const dropdownMenu: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: motionDurations.fast,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    scale: 0.98,
    transition: {
      duration: motionDurations.fast,
      ease: [0.4, 0.0, 1, 1],
    },
  },
}

export const mobileMenu: Variants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: motionDurations.default,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: motionDurations.fast,
      ease: [0.4, 0.0, 1, 1],
    },
  },
}

// =============================================================================
// ICON ANIMATIONS
// =============================================================================

export const iconBounce: Variants = {
  rest: { y: 0 },
  hover: {
    y: [-2, 2, -2, 0],
    transition: {
      duration: 0.4,
      times: [0, 0.33, 0.66, 1],
    },
  },
}

export const iconRotate: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 180,
    transition: {
      duration: motionDurations.default,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const iconPulse: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.4,
      times: [0, 0.5, 1],
    },
  },
}

export const chevronRotate: Variants = {
  closed: { rotate: 0 },
  open: {
    rotate: 180,
    transition: {
      duration: motionDurations.fast,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// =============================================================================
// COUNTER / NUMBER ANIMATIONS
// =============================================================================

export const counterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.slow,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
}

// =============================================================================
// PARALLAX HELPER
// =============================================================================

export const parallaxSlow: Variants = {
  initial: { y: 0 },
  scroll: {
    y: -50,
    transition: {
      duration: 0,
    },
  },
}

// =============================================================================
// LOADING STATES
// =============================================================================

export const shimmer: Variants = {
  initial: {
    backgroundPosition: '-200% 0',
  },
  animate: {
    backgroundPosition: '200% 0',
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear',
    },
  },
}

export const pulse: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
}

// =============================================================================
// BACKDROP
// =============================================================================

export const backdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: motionDurations.fast,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: motionDurations.fast,
    },
  },
}

// =============================================================================
// VIEWPORT OPTIONS PRESETS
// =============================================================================

export const viewportOptions = {
  default: { once: true, margin: '-100px' },
  early: { once: true, margin: '-50px' },
  late: { once: true, margin: '-200px' },
  repeat: { once: false, margin: '-100px' },
}
