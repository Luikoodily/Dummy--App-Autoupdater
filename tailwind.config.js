/** @type {import('tailwindcss').Config} */

import { themeColors } from './src/renderer/src/utils/theme'

module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"', 'sans-serif']
      },
      colors: {
        ...themeColors
      },
      boxShadow: {
        card: '0px 4px 6px 0px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
}
