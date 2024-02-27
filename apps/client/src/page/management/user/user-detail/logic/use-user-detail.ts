import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const QUERY = graphql(`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      username
      email
      status
    }
  }
`);

export default function useUserDetail(
  id : string
) {
  return useQuery(QUERY, {
    variables: {
      id: id
    },
  });
}
