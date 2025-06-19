/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: '#0b7044',
            secondary: '#1b3868',

        },

      },
    },
    plugins: [],
  } 