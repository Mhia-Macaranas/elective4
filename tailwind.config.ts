import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#11251E',
          light: '#1A382E',
        },
        background: '#FAF8F5',
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F4F0E8',
        },
        accent: {
          DEFAULT: '#966F2D', // Darkened for AAA text contrast
          light: '#F5EBD9',
        },
        secondary: {
          DEFAULT: '#254E44', // Darkened for sharp text contrast
          light: '#E8F0EC',
        },
        terracotta: '#8F3F28',
        text: {
          DEFAULT: '#141A17',
          muted: '#4A5B53', // Darkened for pristine reading contrast
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
      },
      boxShadow: {
        subtle: '0 1px 4px rgba(17, 37, 30, 0.04)',
        card: '0 8px 24px -4px rgba(17, 37, 30, 0.06), 0 2px 6px -1px rgba(17, 37, 30, 0.02)',
        elevated: '0 16px 36px -8px rgba(17, 37, 30, 0.09), 0 4px 12px -2px rgba(17, 37, 30, 0.03)',
      },
    },
  },
  plugins: [],
};
export default config;
