import { MockedResponse } from '@apollo/client/testing/core';
import { GET_COMPANY_QUERY } from '@packages/core/company/company-hook.ts';

export const MockBaseResponse: MockedResponse[] = [
  {
    request: {
      query: GET_COMPANY_QUERY,
      variables: {
        id: '1',
      },
    },
    result: {
      data: {
        company: {
          id: '1',
          name: '96 Sushi',
          settings: {
            id: '1',
            currency: 'EUR',
          },
        },
      },
    },
  },
];
