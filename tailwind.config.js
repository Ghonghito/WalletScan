/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        darkBackground: '#031E30',
        darkText: '#C2C2C2',
        darkModal: '#101110',
        darkHover: '#000000',
        darkCard: '#101110',
        darkBorder: '#1D3444',
        lightBackground: '#FEFEFF',
        lightText: '#212529',
        lightModal: '#f8f9fa',
        lightHover: '#e9ecef',
        lightCard: '#FFFFFF',
        lightBorder: '#E6EAF2',
        primary: '#CC9600',
        dark: '#320073',
        warning: '#EDC31A',
        info: '#1AAAED',
        error: '#ED1A1A',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
