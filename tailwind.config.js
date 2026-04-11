const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tokens legados (mantidos para não quebrar componentes existentes)
        primary: "#030712",
        secondary: "#94a3b8",
        tertiary: "#0f172a",
        "black-100": "#0f172a",
        "black-200": "#090325",
        "white-100": "#f1f5f9",

        // Design System Tech Futurista
        ds: {
          bg: "#030712",
          surface: "#0f172a",
          surface2: "#1e293b",
          border: "rgba(255,255,255,0.07)",
          border2: "rgba(255,255,255,0.14)",
          text: "#f1f5f9",
          muted: "rgba(241,245,249,0.45)",
          accent: "#6366f1",
          accent2: "#818cf8",
        },
      },
      fontFamily: {
        display: ["Poppins", ...fontFamily.sans],
        mono: ["JetBrains Mono", "Fira Code", ...fontFamily.mono],
      },
      letterSpacing: {
        tight: "-0.04em",
        widest: "0.25em",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glow: "0 0 40px rgba(99,102,241,0.35)",
        "glow-sm": "0 0 20px rgba(99,102,241,0.25)",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
        "accent-gradient":
          "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
        "surface-gradient": "linear-gradient(180deg, #0f172a 0%, #030712 100%)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) both",
        "fade-in": "fadeIn 0.4s ease both",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(99,102,241,0.55)" },
        },
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
