/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'rgb(var(--ink-950) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
        },
        mist: {
          500: 'rgb(var(--mist-500) / <alpha-value>)',
          400: 'rgb(var(--mist-400) / <alpha-value>)',
          300: 'rgb(var(--mist-300) / <alpha-value>)',
          200: 'rgb(var(--mist-200) / <alpha-value>)',
          100: 'rgb(var(--mist-100) / <alpha-value>)',
        },
        signal: {
          blue: 'rgb(var(--signal-blue) / <alpha-value>)',
          cyan: 'rgb(var(--signal-cyan) / <alpha-value>)',
          violet: 'rgb(var(--signal-violet) / <alpha-value>)',
          mint: 'rgb(var(--signal-mint) / <alpha-value>)',
        },
        // Hairline borders/overlays: white on dark, slate on light.
        white: 'rgb(var(--overlay) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'signal-gradient':
          'linear-gradient(135deg, rgb(var(--signal-blue)) 0%, rgb(var(--signal-cyan)) 50%, rgb(var(--signal-blue)) 100%)',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgb(var(--signal-blue) / var(--glow-alpha))',
        'glow-sm': '0 0 24px -8px rgb(var(--signal-blue) / var(--glow-alpha))',
        card: 'var(--shadow-card)',
      },
      animation: {
        blob: 'blob 22s infinite',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 40s linear infinite',
        ping: 'ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        rise: 'rise linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 20px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rise: {
          '0%': { transform: 'translateY(0)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(-110vh)', opacity: 0 },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate(-6%, 4%) rotate(8deg) scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
