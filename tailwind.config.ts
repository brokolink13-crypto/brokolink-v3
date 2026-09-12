import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        broko: {
          primary: "#2D7A3A",
          body: "#3A9B4B",
          hoodie: "#1A4D2E",
          accent: "#FFFFFF",
          light: "#F0FAF2",
          shoe: "#4CAF50"
        },
        neutral: {
          50: "#FAFAFA", 100: "#F5F5F5", 200: "#E5E5E5", 300: "#D4D4D4",
          400: "#A3A3A3", 500: "#737373", 600: "#525252", 700: "#404040",
          800: "#262626", 900: "#171717", 950: "#0A0A0A"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display": ["3rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.5", fontWeight: "500" }]
      },
      boxShadow: {
        "soft": "0 1px 3px 0 rgb(0 0 0 / 0.04)",
        "medium": "0 4px 6px -1px rgb(0 0 0 / 0.05)",
        "elevated": "0 10px 25px -3px rgb(0 0 0 / 0.06)"
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        pulseSoft: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.7" } }
      }
    }
  },
  plugins: []
};
export default config;
