/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('https://i.ibb.co.com/vv5TsMJ/15.jpg')",
        'banner': "url('https://i.ibb.co.com/NyGtG9t/3.png')",
        'products': "url('https://i.ibb.co.com/cCNFL2b/1.png')",
        'footer-form': "url('https://i.ibb.co.com/X5ND6RL/13.jpg')",
    
        'footer-copyright': "url('https://i.ibb.co.com/8cmdf1B/24.jpg')",
    
      }
    },
  },
  plugins: [require('daisyui'),],
}

