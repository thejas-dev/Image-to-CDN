/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    	animation:{
    		loading:'loading 3s ease-in-out infinite',
    	},
    	keyframes:{
    		loading:{
    			'0%, 100%': { left: '-3%' },
          		'50%': { left: '88%' },
    		},
    	},
    },
  },
  plugins: [],
}
