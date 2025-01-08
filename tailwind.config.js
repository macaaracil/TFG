/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-purple': '#EAD7E9',
        'hover-purple': '#B084CC',
      },
    },
  },
  plugins: [],
}
