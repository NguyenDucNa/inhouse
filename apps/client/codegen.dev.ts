import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: ['app/**/*.tsx', 'app/**/*.ts', 'src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    './src/module/graphql/types/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
