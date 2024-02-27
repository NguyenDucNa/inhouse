/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {},
  plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
};
