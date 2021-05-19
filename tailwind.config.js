const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // See https://tailwindcss.com/docs/customizing-colors#color-palette-reference for Tailwind colors
        gray: colors.trueGray,
        rose: colors.rose,
        violet: colors.violet,
      },
      fontFamily: {
        sans: ['Messina Sans', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.gray.600'),
              '&:hover': {
                color: theme('colors.indigo.500'),
              },
              code: { color: theme('colors.blue.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpace.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.600'),
            },
            'h1,h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            ol: {
              li: {
                '&:before': { color: theme('colors.indigo.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.indigo.500') },
              },
            },
            code: { color: theme('colors.rose.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.gray.300'),
              '&:hover': {
                color: theme('colors.gray.200'),
              },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.200'),
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpace.tight'),
              color: theme('colors.gray.200'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.200'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.200'),
            },
            'h1,h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.200') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/custom-forms'), require('@tailwindcss/typography')],
};
