/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
 
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
    options: {
      safelist: ['dark'], //specific classes
    },
  },
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
      extend: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
