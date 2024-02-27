import * as path from 'path';

export default {
  content: [
    'index.html',
    './src/**/*.{tsx,ts}',
    '../../packages/*/src/**/*.{tsx,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
};
