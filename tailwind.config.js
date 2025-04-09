export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightC: 'var(--lightC)',
        darkC: 'var(--darkC)',
        blueC: 'var(--blueC)',
        greyC: 'var(--greyC)',
        yellowC: 'var(--yellowC)',
      },
      borderRadius: {
        radius: 'var(--radius-radius)', 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
