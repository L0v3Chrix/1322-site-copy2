'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardElevation, staggerChild, fadeInUp } from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Enhanced Card Component
 *
 * A sophisticated card component with elevation effects on hover.
 * Designed for the "Principled Authority" aesthetic.
 *
 * Features:
 * - Shadow elevation on hover
 * - Optional translateY lift
 * - Optional gold accent border
 * - Staggered children entrance support
 * - Responsive and accessible
 */

export interface EnhancedCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode
  /** Whether to show elevation effect on hover */
  elevate?: boolean
  /** Whether to show subtle elevation (for less prominent cards) */
  subtle?: boolean
  /** Whether to show gold accent bar on left */
  accentBar?: boolean
  /** Whether to animate entrance when scrolling into view */
  animateOnScroll?: boolean
  /** Whether this card is part of a stagger group */
  staggerChild?: boolean
  /** Additional class names */
  className?: string
  /** Whether the card is clickable/interactive */
  interactive?: boolean
  /** Padding preset */
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function EnhancedCard({
  children,
  elevate = true,
  subtle = false,
  accentBar = false,
  animateOnScroll = false,
  staggerChild: isStaggerChild = false,
  className,
  interactive = false,
  padding = 'md',
  ...props
}: EnhancedCardProps) {
  // Determine animation variants
  const getVariants = () => {
    if (isStaggerChild) return staggerChild
    if (animateOnScroll) return fadeInUp
    if (elevate && !subtle) return cardElevation
    return undefined
  }

  // Determine initial/animate states based on animation type
  const getInitialState = () => {
    if (isStaggerChild || animateOnScroll) return 'hidden'
    if (elevate) return 'rest'
    return undefined
  }

  const getAnimateState = () => {
    if (isStaggerChild || animateOnScroll) return 'visible'
    return undefined
  }

  const getHoverState = () => {
    if (elevate && !isStaggerChild && !animateOnScroll) return 'hover'
    return undefined
  }

  return (
    <motion.div
      className={cn(
        // Base styles
        'relative bg-white rounded-sm overflow-hidden',
        // Padding
        paddingClasses[padding],
        // Elevation styles (CSS fallback when not using framer motion hover)
        elevate && !subtle && 'shadow-card transition-all duration-300',
        subtle && 'shadow-sm transition-all duration-300',
        // CSS hover fallback for non-interactive cards
        elevate && !subtle && 'hover:shadow-card-hover hover:-translate-y-1',
        subtle && 'hover:shadow-md hover:-translate-y-0.5',
        // Accent bar
        accentBar && 'border-l-4 border-gold',
        // Interactive cursor
        interactive && 'cursor-pointer',
        // Custom classes
        className
      )}
      variants={getVariants()}
      initial={getInitialState()}
      animate={getAnimateState()}
      whileHover={getHoverState()}
      whileInView={animateOnScroll ? 'visible' : undefined}
      viewport={animateOnScroll ? { once: true, margin: '-100px' } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * Enhanced Card Header
 *
 * For consistent card header styling
 */
export interface EnhancedCardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function EnhancedCardHeader({ children, className }: EnhancedCardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  )
}

/**
 * Enhanced Card Title
 */
export interface EnhancedCardTitleProps {
  children: React.ReactNode
  className?: string
  as?: 'h2' | 'h3' | 'h4' | 'h5'
}

export function EnhancedCardTitle({
  children,
  className,
  as: Component = 'h3'
}: EnhancedCardTitleProps) {
  return (
    <Component
      className={cn(
        'font-heading text-navy tracking-tight',
        Component === 'h2' && 'text-2xl',
        Component === 'h3' && 'text-xl',
        Component === 'h4' && 'text-lg',
        Component === 'h5' && 'text-base',
        className
      )}
    >
      {children}
    </Component>
  )
}

/**
 * Enhanced Card Content
 */
export interface EnhancedCardContentProps {
  children: React.ReactNode
  className?: string
}

export function EnhancedCardContent({ children, className }: EnhancedCardContentProps) {
  return (
    <div className={cn('text-navy/80', className)}>
      {children}
    </div>
  )
}

/**
 * Enhanced Card Footer
 */
export interface EnhancedCardFooterProps {
  children: React.ReactNode
  className?: string
}

export function EnhancedCardFooter({ children, className }: EnhancedCardFooterProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-navy/10', className)}>
      {children}
    </div>
  )
}

/**
 * Enhanced Card Image
 *
 * Properly handles image aspect ratios to prevent container breaking
 */
export interface EnhancedCardImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1'
}

export function EnhancedCardImage({
  src,
  alt,
  className,
  aspectRatio = '4/3'
}: EnhancedCardImageProps) {
  const aspectClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
  }

  return (
    <div className={cn('relative overflow-hidden', aspectClasses[aspectRatio], className)}>
      {/* Using img tag for simplicity - can be replaced with Next.js Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}

/**
 * Stagger Card Container
 *
 * Use this to wrap multiple EnhancedCards for staggered entrance animation
 */
export interface StaggerCardContainerProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function StaggerCardContainer({
  children,
  className,
  delay = 0.1
}: StaggerCardContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: delay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Feature Card
 *
 * A specialized card for feature/benefit displays with icon
 */
export interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  animateOnScroll?: boolean
  staggerChild?: boolean
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  animateOnScroll = false,
  staggerChild: isStaggerChild = false,
}: FeatureCardProps) {
  return (
    <EnhancedCard
      className={cn('text-center', className)}
      animateOnScroll={animateOnScroll}
      staggerChild={isStaggerChild}
      padding="lg"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gold/10 text-gold">
        {icon}
      </div>
      <EnhancedCardTitle className="mb-2">{title}</EnhancedCardTitle>
      <EnhancedCardContent>
        <p className="text-navy/70 mb-0">{description}</p>
      </EnhancedCardContent>
    </EnhancedCard>
  )
}

export default EnhancedCard
