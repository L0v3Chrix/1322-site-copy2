import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        navy: "rgb(var(--navy) / <alpha-value>)",
        gold: "rgb(var(--gold) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)",
        copper: "rgb(var(--copper) / <alpha-value>)",
        olive: "rgb(var(--olive) / <alpha-value>)",
        "dark-blue": "var(--dark-blue)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "off-white": "rgb(245, 240, 230)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
        // Legacy support (can be removed after full migration)
        playfair: ["var(--font-heading)"],
        lato: ["var(--font-body)"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        tighter: "1.1",
        tight: "1.2",
        snug: "1.3",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      height: {
        screen: "100vh",
        "screen-small": "100svh",
      },
      maxWidth: {
        "prose-narrow": "45ch",
        "prose-normal": "60ch",
        "prose-wide": "75ch",
      },
      // === SPACING SCALE FOR SECTIONS ===
      spacing: {
        'section-sm': '4rem',   // 64px
        'section': '6rem',      // 96px
        'section-lg': '8rem',   // 128px
      },
      // === SHADOW ELEVATION SCALE ===
      boxShadow: {
        'card': '0 4px 12px rgba(44, 62, 80, 0.08)',
        'card-hover': '0 12px 24px rgba(44, 62, 80, 0.15)',
        'elevated': '0 20px 25px rgba(44, 62, 80, 0.15)',
        'elevated-hover': '0 25px 50px rgba(44, 62, 80, 0.20)',
      },
      // === TRANSITION UTILITIES ===
      transitionDuration: {
        'fast': '150ms',
        'default': '300ms',
        'slow': '500ms',
        'entrance': '600ms',
      },
      // === ANIMATIONS ===
      animation: {
        // Existing
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
        // New micro-interactions
        "underline-grow": "underline-grow 0.3s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "shimmer": "shimmer 1.5s linear infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 0.4s ease-out",
        "rotate-180": "rotate-180 0.3s ease-out forwards",
        "counter-up": "counter-up 0.5s ease-out forwards",
      },
      keyframes: {
        // Existing
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        // New keyframes
        "underline-grow": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-2px)" },
          "75%": { transform: "translateY(2px)" },
        },
        "rotate-180": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        "counter-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
