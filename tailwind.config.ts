import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        md: '32px',
      },
      margin: {
        xxs: '4px',
        md: '32px',
      },
      padding: {
        xxs: '4px',
        xs: '6px',
        sm: '16px',
        md: '32px',
        lg: '48px',
      },
      borderColor: {
        DEFAULT: '#55FFFF',
      },
      flex: {
        divider: '0 1 4px',
      },
    },
  },
  plugins: [],
};
export default config;
