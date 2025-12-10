/**
 * 1322 Legacy Strategies - Design Tokens
 *
 * Centralized design system tokens for consistent spacing, timing,
 * shadows, and other design primitives.
 */

// =============================================================================
// SPACING SCALE (8px base)
// =============================================================================
export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96px
  section: '6rem', // 96px - standard section padding
  sectionSm: '4rem', // 64px - smaller section padding
  sectionLg: '8rem', // 128px - larger section padding
} as const

// =============================================================================
// ANIMATION TIMING
// =============================================================================
export const transitions = {
  fast: '150ms',
  default: '300ms',
  slow: '500ms',
  entrance: '600ms',
  stagger: '100ms', // Delay between staggered children
} as const

// =============================================================================
// EASING CURVES
// =============================================================================
export const easings = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',      // Smooth ease-in-out
  entrance: 'cubic-bezier(0.0, 0.0, 0.2, 1)',   // Ease-out for entrances
  exit: 'cubic-bezier(0.4, 0.0, 1, 1)',         // Ease-in for exits
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy spring
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',        // Sharp movement
} as const

// =============================================================================
// SHADOW ELEVATION SCALE
// =============================================================================
export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(44, 62, 80, 0.05)',
  md: '0 4px 6px rgba(44, 62, 80, 0.07)',
  lg: '0 10px 15px rgba(44, 62, 80, 0.10)',
  xl: '0 20px 25px rgba(44, 62, 80, 0.15)',
  hover: '0 25px 50px rgba(44, 62, 80, 0.20)',  // Elevated hover state
  card: '0 4px 12px rgba(44, 62, 80, 0.08)',    // Default card shadow
  cardHover: '0 12px 24px rgba(44, 62, 80, 0.15)', // Card hover shadow
} as const

// =============================================================================
// BORDER RADIUS (Mixed approach: sharp on CTAs, rounded on cards)
// =============================================================================
export const radii = {
  none: '0',          // Sharp corners for buttons/CTAs
  sm: '0.25rem',      // 4px - Subtle rounding for cards
  md: '0.375rem',     // 6px - Medium rounding
  lg: '0.5rem',       // 8px - Larger rounding
  full: '9999px',     // Pill shape
} as const

// =============================================================================
// Z-INDEX SCALE
// =============================================================================
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const

// =============================================================================
// BREAKPOINTS (matches Tailwind defaults)
// =============================================================================
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px', // Our container max-width
} as const

// =============================================================================
// BRAND COLORS (RGB values for Tailwind opacity support)
// =============================================================================
export const colors = {
  navy: { r: 44, g: 62, b: 80 },        // #2C3E50
  gold: { r: 196, g: 154, b: 108 },     // #C49A6C
  cream: { r: 245, g: 240, b: 230 },    // #F5F0E6
  copper: { r: 182, g: 110, b: 65 },    // #B66E41
  olive: { r: 125, g: 143, b: 105 },    // #7D8F69
  darkBlue: '#1f2d3d',
} as const

// =============================================================================
// TYPOGRAPHY SCALE
// =============================================================================
export const typography = {
  // Font families (references CSS variables)
  fontHeading: 'var(--font-heading)', // Libre Baskerville
  fontBody: 'var(--font-body)',       // Lora
  fontMono: 'var(--font-mono)',       // IBM Plex Mono

  // Font sizes
  sizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1.0625rem', // 17px (body default)
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },

  // Line heights
  lineHeights: {
    none: '1',
    tight: '1.2',
    snug: '1.3',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter spacing
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const

// =============================================================================
// ANIMATION DURATIONS FOR FRAMER MOTION
// =============================================================================
export const motionDurations = {
  fast: 0.15,
  default: 0.3,
  slow: 0.5,
  entrance: 0.6,
  stagger: 0.1,
} as const

// =============================================================================
// VIEWPORT THRESHOLDS FOR SCROLL ANIMATIONS
// =============================================================================
export const viewportThresholds = {
  default: 0.2,  // 20% visible before triggering
  early: 0.1,    // 10% - trigger earlier
  late: 0.4,     // 40% - trigger later
  full: 0.8,     // 80% - almost fully visible
} as const
