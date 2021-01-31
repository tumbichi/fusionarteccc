// tailwind.config.js
module.exports = {
  purge: ['./**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: '.75rem',
      xs: '.87rem',
      sm: '.9375rem',
      tiny: '1rem',
      base: '1.0625rem',
      lb: '1.07rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      borderWidth: {
        5: '5px',
      },
      colors: {
        primary: '#3B937B',
        secondary: '#fafafa',
        tertiary: '#d8e3e7',
        acent: '#238D70',
        link: '#335eea',
        linkHover: '#332eea',
        alert: '#df4759',
        warning: '#fad776',
      },
      spacing: {
        4.5: '1.1rem',
        13: '3.451rem',
        18: '4.5rem',
        22: '5.6rem',
        105: '27rem',
        110: '28rem',
        115: '29rem',
        120: '30rem',
        125: '31rem',
        160: '40rem',
        260: '65rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
};
