import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * 1322 Legacy Strategies - Enhanced Button Component
 *
 * Brand variants added:
 * - gold: Primary CTA with gold background
 * - navySolid: Navy filled button
 * - navyOutline: Navy outlined button
 * - creamOutline: Cream outlined (for dark backgrounds)
 *
 * All buttons include:
 * - Hover scale effect (1.02)
 * - Active press effect (0.98)
 * - Sharp corners on CTAs (classical aesthetic)
 * - Smooth transitions
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-wider uppercase ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // === BRAND VARIANTS (Primary Use) ===
        gold: "bg-gold text-navy hover:bg-gold/90 hover:scale-[1.02] active:scale-[0.98] border-0",
        navySolid: "bg-navy text-cream hover:bg-navy/90 hover:scale-[1.02] active:scale-[0.98] border-0",
        navyOutline: "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-cream hover:scale-[1.02] active:scale-[0.98]",
        creamOutline: "border-2 border-cream text-cream bg-transparent hover:bg-cream hover:text-navy hover:scale-[1.02] active:scale-[0.98]",

        // === LEGACY/SHADCN VARIANTS (Backwards Compatibility) ===
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] rounded-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-[1.02] active:scale-[0.98] rounded-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98] rounded-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-[1.02] active:scale-[0.98] rounded-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98] rounded-sm",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "navyOutline",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
