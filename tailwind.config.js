module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',
    },
    container: {
      center: true,
        'sm': '90%',
        'lg': '80%',
        'xxl': '75%',
    },
    extend: {},
    
  },
  plugins: [
    require('daisyui'),
  ],
}