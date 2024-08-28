import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FFFF55',
        'light-cyan': '#55FFFF',
        'dark-cyan': '#00AAAA',
        'light-gray': '#AAAAAA',
        'dark-blue': '#0000AA',
      },
      fontFamily: {
        dos: ['ModernDOS', 'monospace'],
      },
      fontSize: {
        md: '32px',
        lg: '36px',
      },
      gap: {
        xxs: '4px',
      },
      padding: {
        xxs: '4px',
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
      },
      borderColor: {
        DEFAULT: '#55FFFF',
      },
    },
  },
  plugins: [],
};
export default config;
