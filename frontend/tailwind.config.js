import { COLORS } from './src/constants/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: COLORS.primary,
          glow: COLORS.primaryGlow,
        },
        midnight: COLORS.midnight,
        charcoal: COLORS.charcoal,
        'section-bg': COLORS.sectionBg,
        'footer-bg': COLORS.footerBg,
        whatsapp: COLORS.whatsapp,
        facebook: COLORS.facebook,
        instagram: COLORS.instagram,
        youtube: COLORS.youtube,
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': `linear-gradient(to bottom, rgba(16, 16, 16, 0.8), rgba(16, 16, 16, 0.5))`,
      }
    },
  },
  plugins: [],
}
