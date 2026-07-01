/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Base — warm near-black ink, never pure black
        ink: {
          DEFAULT: '#0B0C10',
          soft: '#101218',
        },
        // Card / panel surfaces
        surface: {
          DEFAULT: '#15171D',
          raised: '#1B1E26',
          line: '#262A33',
        },
        // Warm ivory text — never pure white
        ivory: {
          DEFAULT: '#F4EFE6',
          dim: '#C9C5BC',
        },
        muted: '#8B909B',
        // Signature duo: brass (craft / trust) + indigo (digital / motion)
        brass: {
          DEFAULT: '#C9A24B',
          light: '#E2C173',
          dark: '#9C7A33',
        },
        indigo: {
          DEFAULT: '#6E5BFF',
          light: '#8F7CFF',
          dark: '#5142C9',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(0,0,0,0.5)',
        glow: '0 0 0 1px rgba(201,162,75,0.15), 0 20px 60px -15px rgba(110,91,255,0.35)',
      },
      backgroundImage: {
        'signature-gradient': 'linear-gradient(135deg, #C9A24B 0%, #6E5BFF 100%)',
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
