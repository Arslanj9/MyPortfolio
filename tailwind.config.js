/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],  // For Space Mono
        fira: ['Fira Sans', 'sans-serif'],  // For Fira Sans
      },
      colors: {
        primary: '#387FC8',  // Color 1 - Blue
        primary2: '#295787',  // Color 2 - Dark Blue
        secondary: '#F3B552',  // Color 2 - Yellow
        dark: '#393943',  // Color 3 - Dark Gray
      },
    },
  },
  plugins: [],
}

