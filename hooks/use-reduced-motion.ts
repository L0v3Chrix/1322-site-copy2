'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to detect user's reduced motion preference
 *
 * Returns true if the user has enabled "Reduce motion" in their OS settings.
 * This should be used to disable or simplify animations for accessibility.
 *
 * Usage:
 * ```tsx
 * const prefersReducedMotion = useReducedMotion()
 *
 * // In your animation
 * const variants = prefersReducedMotion
 *   ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } // Simple fade
 *   : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } } // Full animation
 * ```
 */
export function useReducedMotion(): boolean {
  // Default to false on server
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === 'undefined') return

    // Create media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Add listener (using addEventListener for modern browsers)
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion
}

/**
 * Returns animation variants based on reduced motion preference
 *
 * If reduced motion is preferred, returns simplified variants that only use opacity.
 * Otherwise, returns the full animation variants.
 */
export function useAnimationVariants<T extends Record<string, unknown>>(
  fullVariants: T,
  reducedVariants?: T
): T {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    // If reduced variants provided, use those
    if (reducedVariants) return reducedVariants

    // Otherwise, create simple fade variants
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
    } as T
  }

  return fullVariants
}

export default useReducedMotion
