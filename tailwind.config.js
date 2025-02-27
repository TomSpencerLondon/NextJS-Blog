const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        rose: colors.rose,
        violet: colors.violet,
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.gray.900'),
              '&:hover': {
                color: theme('colors.indigo.600'),
              },
              code: { color: theme('colors.gray.900') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.900'),
              'scroll-margin-top': spacing[32],
            },
            strong: {
              color: theme('colors.gray.900'),
            },
            ol: {
              color: theme('colors.gray.900'),
              li: {
                '&:before': { color: theme('colors.gray.900') },
              },
            },
            ul: {
              color: theme('colors.gray.900'),
              li: {
                '&:before': { color: theme('colors.gray.900') },
              },
            },
            hr: {
              borderColor: theme('colors.gray.200'),
            },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
            p: {
              color: theme('colors.gray.900'),
            },
            table: {
              color: theme('colors.gray.900'),
              tbody: {
                tr: {
                  borderBottomColor: theme('colors.gray.200'),
                },
              },
              thead: {
                color: theme('colors.gray.900'),
                borderBottomColor: theme('colors.gray.200'),
              },
            },
            code: {
              color: theme('colors.gray.900'),
            },
            'pre code': {
              color: theme('colors.gray.900'),
              backgroundColor: 'transparent',
            },
            pre: {
              color: theme('colors.gray.900'),
              backgroundColor: theme('colors.gray.100'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.white'),
              '&:hover': {
                color: theme('colors.indigo.300'),
              },
              code: { color: theme('colors.white') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.white'),
              'scroll-margin-top': spacing[32],
            },
            strong: {
              color: theme('colors.white'),
            },
            ol: {
              color: theme('colors.white'),
              li: {
                '&:before': { color: theme('colors.white') },
              },
            },
            ul: {
              color: theme('colors.white'),
              li: {
                '&:before': { color: theme('colors.white') },
              },
            },
            hr: {
              borderColor: theme('colors.gray.700'),
            },
            blockquote: {
              color: theme('colors.white'),
              borderLeftColor: theme('colors.gray.700'),
            },
            p: {
              color: theme('colors.white'),
            },
            table: {
              color: theme('colors.white'),
              tbody: {
                tr: {
                  borderBottomColor: theme('colors.gray.700'),
                },
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            code: {
              color: theme('colors.white'),
            },
            'pre code': {
              color: theme('colors.white'),
              backgroundColor: 'transparent',
            },
            pre: {
              color: theme('colors.white'),
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};