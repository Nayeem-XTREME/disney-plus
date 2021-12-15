module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/background.png')",
      }),
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
