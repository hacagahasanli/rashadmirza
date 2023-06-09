/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/styles.css', // Include your styles.css file here
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif']
      },
      height: {
        'calc-screen-minus-header': 'calc(100vh - var(--header-height))',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

