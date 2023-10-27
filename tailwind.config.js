/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        'dark-mode': '#0F172A',
        'navcolor': '#1b294b',
        
        'light': {
          100: '#FBF5F3 ',
          200: '#374151'
        }
        
  
      },
      screens: {
        'mobile': '375px',
        // => @media (min-width: 375px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

      fontFamily:{
        title: ['Urbanist'],
      },

      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      borderRadius: {
        DEFAULT: '4px',
        'large': '12px',
      }

    }
  },
  plugins: [],
}