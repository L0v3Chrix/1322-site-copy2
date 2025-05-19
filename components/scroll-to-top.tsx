"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Force scroll to top with a slight delay to ensure it works after page transition
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Use instant instead of smooth for more reliable behavior
      })
    }

    // Execute immediately
    scrollToTop()

    // Also execute after a slight delay to ensure it works after any content loads
    const timeoutId = setTimeout(scrollToTop, 100)

    // And again after a longer delay to override any other scripts
    const longTimeoutId = setTimeout(scrollToTop, 500)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(longTimeoutId)
    }
  }, [pathname, searchParams])

  return null
}
