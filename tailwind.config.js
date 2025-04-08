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
    },
  },
  plugins: [],
}
