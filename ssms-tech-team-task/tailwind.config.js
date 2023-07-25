/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navbartext' : '#002e48',
        'bgcolorblue' : '#ddedfa',
        'bgred' : '#a31521',
        'buttonbgblue' : '#002e48',
        'bggray':'#353638'
      }
    }
  },
  plugins: [],
}
