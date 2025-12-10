'use client'

import * as React from 'react'
import { motion, HTMLMotionProps, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  viewportOptions,
} from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Animated Section Component
 *
 * A wrapper component that animates sections when they scroll into view.
 * Supports multiple animation types and staggered children.
 *
 * Features:
 * - Configurable animation type
 * - Stagger children option
 * - Viewport threshold control
 * - Reduced motion support
 */

export type AnimationType =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'none'

export type StaggerSpeed = 'fast' | 'default' | 'slow'

export interface AnimatedSectionProps extends Omit<HTMLMotionProps<'section'>, 'ref'> {
  children: React.ReactNode
  /** Animation type for the section */
  animation?: AnimationType
  /** Whether to stagger children animations */
  stagger?: boolean
  /** Speed of stagger animation */
  staggerSpeed?: StaggerSpeed
  /** When to trigger animation relative to viewport */
  trigger?: 'default' | 'early' | 'late'
  /** Whether animation should replay when re-entering viewport */
  repeat?: boolean
  /** Custom delay before animation starts (in seconds) */
  delay?: number
  /** Additional class names */
  className?: string
  /** HTML element to render */
  as?: 'section' | 'div' | 'article' | 'aside' | 'header' | 'footer'
}

const animationVariants: Record<AnimationType, Variants | undefined> = {
  fade: fadeIn,
  'fade-up': fadeInUp,
  'fade-down': fadeInDown,
  'slide-left': slideInLeft,
  'slide-right': slideInRight,
  scale: scaleIn,
  none: undefined,
}

const staggerVariants: Record<StaggerSpeed, Variants> = {
  fast: staggerContainerFast,
  default: staggerContainer,
  slow: staggerContainerSlow,
}

export function AnimatedSection({
  children,
  animation = 'fade-up',
  stagger = false,
  staggerSpeed = 'default',
  trigger = 'default',
  repeat = false,
  delay = 0,
  className,
  as = 'section',
  ...props
}: AnimatedSectionProps) {
  // Get the appropriate variants
  const variants = stagger
    ? staggerVariants[staggerSpeed]
    : animationVariants[animation]

  // Get viewport options
  const viewport = {
    ...viewportOptions[trigger],
    once: !repeat,
  }

  // Create the motion component dynamically based on 'as' prop
  const MotionComponent = motion[as]

  if (animation === 'none' && !stagger) {
    const Component = as
    return (
      <Component className={className} {...(props as React.HTMLAttributes<HTMLElement>)}>
        {children}
      </Component>
    )
  }

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={delay > 0 ? { delay } : undefined}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

/**
 * Animated Stagger Child
 *
 * Use inside AnimatedSection with stagger={true}
 * Each child will animate in sequence
 */
export interface AnimatedStaggerChildProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade' | 'scale'
  className?: string
  as?: 'div' | 'article' | 'li' | 'span'
}

const childVariants: Record<string, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] },
    },
  },
}

export function AnimatedStaggerChild({
  children,
  animation = 'fade-up',
  className,
  as = 'div',
  ...props
}: AnimatedStaggerChildProps) {
  const MotionComponent = motion[as]

  return (
    <MotionComponent
      className={className}
      variants={childVariants[animation]}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

/**
 * Animated Heading
 *
 * For section headings with scroll-triggered animation
 */
export interface AnimatedHeadingProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  animation?: AnimationType
  delay?: number
}

export function AnimatedHeading({
  children,
  as: Component = 'h2',
  className,
  animation = 'fade-up',
  delay = 0,
}: AnimatedHeadingProps) {
  const MotionHeading = motion[Component]
  const variants = animationVariants[animation]

  return (
    <MotionHeading
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      transition={delay > 0 ? { delay } : undefined}
    >
      {children}
    </MotionHeading>
  )
}

/**
 * Animated Paragraph
 *
 * For body text with scroll-triggered animation
 */
export interface AnimatedParagraphProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
}

export function AnimatedParagraph({
  children,
  className,
  animation = 'fade-up',
  delay = 0.1,
}: AnimatedParagraphProps) {
  const variants = animationVariants[animation]

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.p>
  )
}

/**
 * Parallax Container
 *
 * Creates a subtle parallax effect on scroll
 */
export interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
  speed?: number // 0.1 = slow, 0.5 = fast
  direction?: 'up' | 'down'
}

export function ParallaxContainer({
  children,
  className,
  speed = 0.2,
  direction = 'up',
}: ParallaxContainerProps) {
  const [offset, setOffset] = React.useState(0)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const distanceFromCenter = windowHeight / 2 - elementCenter
      setOffset(distanceFromCenter * speed * (direction === 'up' ? 1 : -1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div
        style={{ y: offset }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default AnimatedSection
