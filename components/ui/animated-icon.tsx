'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  iconBounce,
  iconRotate,
  iconPulse,
  chevronRotate,
  scaleOnHover,
} from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Animated Icon Component
 *
 * A wrapper component for Lucide icons with consistent animations.
 *
 * Features:
 * - Multiple animation types (bounce, rotate, pulse, scale)
 * - Trigger options (hover, inView, always)
 * - Accessible and performant
 */

export type IconAnimation = 'bounce' | 'rotate' | 'pulse' | 'scale' | 'none'
export type IconTrigger = 'hover' | 'inView' | 'always'

export interface AnimatedIconProps extends Omit<HTMLMotionProps<'span'>, 'children'> {
  /** The icon component to animate (from Lucide) */
  icon: React.ReactNode
  /** Animation type */
  animation?: IconAnimation
  /** When to trigger animation */
  trigger?: IconTrigger
  /** Size of the icon wrapper */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Color class */
  colorClass?: string
  /** Additional class names */
  className?: string
}

const animationVariants = {
  bounce: iconBounce,
  rotate: iconRotate,
  pulse: iconPulse,
  scale: scaleOnHover,
  none: undefined,
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
}

export function AnimatedIcon({
  icon,
  animation = 'bounce',
  trigger = 'hover',
  size = 'md',
  colorClass = 'text-gold',
  className,
  ...props
}: AnimatedIconProps) {
  const variants = animationVariants[animation]

  // Determine animation states based on trigger
  const getInitialState = () => {
    if (trigger === 'always') return 'rest'
    if (trigger === 'hover') return 'rest'
    if (trigger === 'inView') return 'rest'
    return undefined
  }

  const getAnimateState = () => {
    if (trigger === 'always') return 'hover'
    return undefined
  }

  const getWhileHover = () => {
    if (trigger === 'hover') return 'hover'
    return undefined
  }

  const getWhileInView = () => {
    if (trigger === 'inView') return 'hover'
    return undefined
  }

  if (animation === 'none' || !variants) {
    return (
      <span className={cn('inline-flex items-center justify-center', sizeClasses[size], colorClass, className)}>
        {icon}
      </span>
    )
  }

  return (
    <motion.span
      className={cn(
        'inline-flex items-center justify-center',
        sizeClasses[size],
        colorClass,
        className
      )}
      variants={variants}
      initial={getInitialState()}
      animate={getAnimateState()}
      whileHover={getWhileHover()}
      whileInView={getWhileInView()}
      viewport={trigger === 'inView' ? { once: true, margin: '-50px' } : undefined}
      {...props}
    >
      {icon}
    </motion.span>
  )
}

/**
 * Animated Chevron
 *
 * Special component for dropdown/accordion chevrons that rotate
 */
export interface AnimatedChevronProps {
  /** Whether the dropdown/accordion is open */
  isOpen: boolean
  /** The chevron icon */
  icon: React.ReactNode
  /** Size */
  size?: 'sm' | 'md' | 'lg'
  /** Color class */
  colorClass?: string
  /** Additional class names */
  className?: string
}

export function AnimatedChevron({
  isOpen,
  icon,
  size = 'md',
  colorClass = 'text-navy',
  className,
}: AnimatedChevronProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center justify-center',
        sizeClasses[size],
        colorClass,
        className
      )}
      variants={chevronRotate}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      {icon}
    </motion.span>
  )
}

/**
 * Icon Button with Animation
 *
 * An accessible button wrapper for icons with hover animation
 */
export interface AnimatedIconButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  /** The icon to display */
  icon: React.ReactNode
  /** Accessible label */
  label: string
  /** Animation type */
  animation?: IconAnimation
  /** Size */
  size?: 'sm' | 'md' | 'lg'
  /** Style variant */
  variant?: 'ghost' | 'outline' | 'solid'
  /** Color scheme */
  colorScheme?: 'gold' | 'navy' | 'copper'
  /** Additional class names */
  className?: string
}

const variantClasses = {
  ghost: {
    gold: 'text-gold hover:bg-gold/10',
    navy: 'text-navy hover:bg-navy/10',
    copper: 'text-copper hover:bg-copper/10',
  },
  outline: {
    gold: 'text-gold border border-gold hover:bg-gold/10',
    navy: 'text-navy border border-navy hover:bg-navy/10',
    copper: 'text-copper border border-copper hover:bg-copper/10',
  },
  solid: {
    gold: 'bg-gold text-navy hover:bg-gold/90',
    navy: 'bg-navy text-cream hover:bg-navy/90',
    copper: 'bg-copper text-cream hover:bg-copper/90',
  },
}

const buttonSizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

export function AnimatedIconButton({
  icon,
  label,
  animation = 'scale',
  size = 'md',
  variant = 'ghost',
  colorScheme = 'gold',
  className,
  ...props
}: AnimatedIconButtonProps) {
  const variants = animationVariants[animation]

  return (
    <motion.button
      className={cn(
        'inline-flex items-center justify-center rounded-sm transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
        buttonSizeClasses[size],
        variantClasses[variant][colorScheme],
        className
      )}
      variants={variants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      aria-label={label}
      {...props}
    >
      <span className={sizeClasses[size === 'lg' ? 'md' : size === 'md' ? 'sm' : 'sm']}>
        {icon}
      </span>
    </motion.button>
  )
}

/**
 * Loading Spinner Icon
 *
 * An animated loading indicator
 */
export interface LoadingSpinnerProps {
  /** Size */
  size?: 'sm' | 'md' | 'lg'
  /** Color class */
  colorClass?: string
  /** Additional class names */
  className?: string
}

export function LoadingSpinner({
  size = 'md',
  colorClass = 'text-gold',
  className,
}: LoadingSpinnerProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center justify-center',
        sizeClasses[size],
        colorClass,
        className
      )}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </motion.span>
  )
}

export default AnimatedIcon
