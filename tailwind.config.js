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
      height: {
        'calc-screen-minus-header': 'calc(100vh - var(--header-height))',
      },
      screens: {
        sm: '680px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./index.html",
  ],
}

