export default {
  content: ['./index.html', './script.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      keyframes: {
        hintPulse: {
          '0%, 100%': {
            boxShadow:
              '0 0 0 1px rgba(255,255,255,.4), 0 0 18px rgba(255,255,255,.82), 0 8px 24px rgba(166,182,209,.22)',
            transform: 'translateY(0)',
          },
          '50%': {
            boxShadow:
              '0 0 0 1px rgba(255,255,255,.5), 0 0 28px rgba(255,255,255,1), 0 10px 28px rgba(166,182,209,.3)',
            transform: 'translateY(-2px)',
          },
        },
      },
      animation: {
        'hint-pulse': 'hintPulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
