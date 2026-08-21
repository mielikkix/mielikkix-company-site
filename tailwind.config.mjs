/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#0F2A1F',
        'aurora-neon': '#00E5A0',
        'antler-gold': '#D4AF37',
        'mist-white': '#E8F0EB',
      },
    },
  },
  plugins: [],
};
