import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0a0f',
        charcoal: '#1a1a24',
        slate: '#2d2d3a',
        mist: '#f8f7f4',
        cream: '#fffef9',
        sand: '#e8e6df',
        lime: '#c8ff00',
        'lime-dim': '#a3cc00',
        coral: '#ff6b4a',
        lavender: '#b4a7ff',
        mint: '#7fffd4',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 40px -12px rgba(0,0,0,0.1)',
        'soft-lg': '0 4px 60px -15px rgba(0,0,0,0.15)',
        'lime': '0 0 60px -12px rgba(200, 255, 0, 0.4)',
        'lime-sm': '0 0 30px -8px rgba(200, 255, 0, 0.3)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
