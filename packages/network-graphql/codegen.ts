import type { CodegenConfig } from '@graphql-codegen/cli';
import { resolve } from 'node:path';

const schema = resolve(__dirname, 'schema.graphql');

const config: CodegenConfig = {
  overwrite: true,
  schema: schema,
  documents: ['src/**/*.tsx', 'src/**/*.ts', `${__dirname}/src/**/*.ts`],
  generates: {
    './src/graphql/types/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
      plugins: [],
    },
  },
};

export default config;
