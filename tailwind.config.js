/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070d',
          900: '#0a0e1a',
          800: '#0f1626',
          700: '#161f36',
          600: '#202c48',
        },
        mist: {
          400: '#94a3b8',
          300: '#b3bfd1',
          100: '#e7ecf5',
        },
        signal: {
          blue: '#3b82f6',
          cyan: '#22d3ee',
          violet: '#818cf8',
          mint: '#34d399',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'linear-gradient(to bottom, rgba(59,130,246,0.08), transparent 60%)',
        'signal-gradient': 'linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(59,130,246,0.55)',
        'glow-sm': '0 0 20px -6px rgba(59,130,246,0.5)',
      },
      animation: {
        blob: 'blob 18s infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 20px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
