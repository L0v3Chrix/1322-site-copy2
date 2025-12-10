'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { underlineGrow } from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Animated Link Component
 *
 * A sophisticated link component with animated underline effect.
 * The underline grows from left to right on hover.
 *
 * Features:
 * - Animated underline that grows from left
 * - Internal/external link detection
 * - Multiple underline color variants
 * - Accessible focus states
 */

export interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  underlineColor?: 'gold' | 'copper' | 'navy' | 'cream'
  external?: boolean
  onClick?: () => void
}

const underlineColors = {
  gold: 'bg-gold',
  copper: 'bg-copper',
  navy: 'bg-navy',
  cream: 'bg-cream',
}

export function AnimatedLink({
  href,
  children,
  className,
  underlineColor = 'gold',
  external,
  onClick,
}: AnimatedLinkProps) {
  // Auto-detect external links
  const isExternal = external ?? (href.startsWith('http') || href.startsWith('mailto:'))

  const linkContent = (
    <motion.span
      className={cn(
        'relative inline-flex flex-col group cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
        className
      )}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className={cn(
          'absolute bottom-0 left-0 h-[2px] w-full',
          underlineColors[underlineColor]
        )}
        variants={underlineGrow}
      />
    </motion.span>
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="inline-block"
      >
        {linkContent}
      </a>
    )
  }

  return (
    <Link href={href} onClick={onClick} className="inline-block">
      {linkContent}
    </Link>
  )
}

/**
 * Animated Navigation Link
 *
 * A variant specifically designed for navigation menus.
 * Includes additional styling for nav contexts.
 */
export interface AnimatedNavLinkProps extends AnimatedLinkProps {
  isActive?: boolean
}

export function AnimatedNavLink({
  href,
  children,
  className,
  underlineColor = 'gold',
  isActive = false,
  onClick,
}: AnimatedNavLinkProps) {
  return (
    <Link href={href} onClick={onClick} className="inline-block">
      <motion.span
        className={cn(
          'relative inline-flex flex-col',
          'text-sm font-medium tracking-wide uppercase',
          'transition-colors duration-200',
          isActive ? 'text-gold' : 'text-navy hover:text-navy/80',
          className
        )}
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          className={cn(
            'absolute bottom-0 left-0 h-[2px] w-full',
            underlineColors[underlineColor]
          )}
          variants={underlineGrow}
          initial={isActive ? 'hover' : 'rest'}
        />
      </motion.span>
    </Link>
  )
}

/**
 * Animated Text Link
 *
 * For inline text links within body content.
 * Slightly more subtle than the standard AnimatedLink.
 */
export function AnimatedTextLink({
  href,
  children,
  className,
  underlineColor = 'copper',
  external,
  onClick,
}: AnimatedLinkProps) {
  const isExternal = external ?? (href.startsWith('http') || href.startsWith('mailto:'))

  const linkContent = (
    <motion.span
      className={cn(
        'relative inline text-copper hover:text-copper/80 transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
        className
      )}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
    >
      {children}
      <motion.span
        className={cn(
          'absolute bottom-0 left-0 h-[1px] w-full',
          underlineColors[underlineColor]
        )}
        variants={underlineGrow}
      />
    </motion.span>
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="inline"
      >
        {linkContent}
      </a>
    )
  }

  return (
    <Link href={href} onClick={onClick} className="inline">
      {linkContent}
    </Link>
  )
}

export default AnimatedLink
