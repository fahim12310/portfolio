module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Rajdhani',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#4892fe',
      },
      backgroundImage: {
        color: '#4b6cb7',
        site: "url('./assets/images2.jpg')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
