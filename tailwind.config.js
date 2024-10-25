module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-gradient-start': '#3b82f6',
        'blue-gradient-end': '#0ea5e9',
      },
      boxShadow: {
        'button-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        'width-color': 'width, color',
      },
      screens: {
        'md': '890px', // Dodanie niestandardowego punktu przerwania
      },
    },
  },
  plugins: [],
}
