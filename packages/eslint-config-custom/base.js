const format = require('prettier-eslint');
const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');
const projectWithNode = resolve(process.cwd(), 'tsconfig.node.json');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'tailwind.config.js',
    'src/graphql/types/*',
    'vite.config.ts',
    'tests/setup.ts',
    'codegen.ts',
    'codegen.dev.ts',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'no-unused-vars': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '_immer' },
    ],
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/order': 'error',
    // indent: ['error', 2],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [project, projectWithNode],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
