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
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1230px',
    },
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
