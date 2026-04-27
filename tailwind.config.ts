/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium color palette
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Custom premium colors
        "luxury-gold": "#d4af37",
        "luxury-black": "#0a0a0a",
        "luxury-white": "#fafafa",
        "luxury-navy": "#1a1f35",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Cinematic typography
        "hero-lg": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "hero-md": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display": ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading": ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        "subheading": ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }],
      },
      spacing: {
        "safe-top": "var(--safe-area-inset-top)",
        "safe-bottom": "var(--safe-area-inset-bottom)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "fade-up": "fadeUp 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(212, 175, 55, 0.3)",
        "glow-lg": "0 0 40px rgba(212, 175, 55, 0.6)",
        "elevation-1": "0 2px 8px rgba(0, 0, 0, 0.1)",
        "elevation-2": "0 8px 24px rgba(0, 0, 0, 0.15)",
        "elevation-3": "0 16px 48px rgba(0, 0, 0, 0.2)",
      },
      transitionTimingFunction: {
        "smooth-ease": "cubic-bezier(0.4, 0, 0.2, 1)",
        "smooth-ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "smooth-ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          "@apply bg-white/5 backdrop-blur-md border border-white/10": {},
        },
        ".glass-dark": {
          "@apply bg-black/40 backdrop-blur-lg border border-white/5": {},
        },
        ".text-balance": {
          "text-wrap": "balance",
        },
      });
    }),
  ],
};
