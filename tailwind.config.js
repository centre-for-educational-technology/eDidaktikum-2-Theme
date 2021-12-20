module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'edidaktikum': {
          'primary': '#1abc9c',
          'primary-focus': '#078d74',
          'primary-content': '#ffffff',
          'secondary': '#c55b4d',
          'secondary-focus': '#a94437',
          'secondary-content': '#ffffff',
          'accent': '#0aa1f0',
          'accent-focus': '#087fbf',
          'accent-content': '#ffffff',
          'neutral': '#2f4957',
          'neutral-focus': '#1d2c35',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#0aa1f0',
          'success': '#1abc9c',
          'warning': '#f0850a',
          'error': '#f00a1e',
        },
      },
    ],
  },

};
