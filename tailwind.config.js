/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#81705F',
          beige: '#E6D8C3',
          'off-white': '#F8F7F4',
          // Antes era um verde; agora um marrom/dourado que harmoniza com a paleta
          olive: '#A0896A',
          'dark-brown': '#4F3E32',
        },
      },
      fontFamily: {
        // Fonte principal para títulos e textos: Montserrat (sem serifa)
        display: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
