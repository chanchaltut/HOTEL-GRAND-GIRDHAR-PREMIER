/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'forest': {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce4ca',
          300: '#8fcea5',
          400: '#5cb078',
          500: '#389155',
          600: '#2a7443',
          700: '#235c37',
          800: '#1f4a2f',
          900: '#1a3e28',
        },
      },
    },
  },
  plugins: [],
}

