const theme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/icons/**/*.{js,ts,jsx,tsx}',
    './src/libs/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{ts,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...theme.fontFamily.sans],
      },
      boxShadow: {},
      keyframes: {},
      animationPlayState: {
        paused: 'paused',
      },
      transitionProperty: {
        observer: 'transform,opacity',
      },
      backgroundImage: {
        'grid-pattern': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      },
    },
  },
}
