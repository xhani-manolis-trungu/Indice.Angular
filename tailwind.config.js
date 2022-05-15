module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-once': 'bounce 1s ease-in-out',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins:
  [require('@tailwindcss/aspect-ratio')
  ,require('@tailwindcss/forms')
  ,require('@tailwindcss/line-clamp')
  ,require('@tailwindcss/typography')],
};
