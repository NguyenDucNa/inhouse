import { gql, useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
  CompanyQuery,
  CompanyQueryVariables,
} from '@packages/core/graphql/types/graphql.ts';

export const GET_COMPANY_QUERY = gql`
  query Company($id: ID!) {
    company(id: $id) {
      id
      name
      settings {
        currency
      }
    }
  }
`;

export interface Company {
  id: string;
  name: string;
  settings: CompanySettings;
}

export interface CompanySettings {
  currency: string;
}

export const useCompany = (id: string | undefined) => {
  const client = useApolloClient();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    // id is not defined.
    if (!id) {
      setLoading(false);
      setCompany(null);
      setError(null);
      return;
    }

    setLoading(true);

    client
      .query<CompanyQuery, CompanyQueryVariables>({
        query: GET_COMPANY_QUERY,
        variables: { id: id },
      })
      .then((result) => {
        setLoading(false);
        if (result.data.company) {
          setCompany(result.data.company);
        }
      })
      .catch((error) => {
        setLoading(false);

        if (error instanceof Error) {
          setError(error);
        } else {
          // Handle unexpected error.
        }

        setCompany(null);
      });
  }, [id, client]);

  return { company, loading, error };
};
