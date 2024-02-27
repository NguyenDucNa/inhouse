import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const QUERY = graphql(`
  query Users($offset: Int!, $limit: Int!, $filter: UserFilter) {
    users(offset: $offset, limit: $limit, filter: $filter) {
      id
      firstName
      lastName
      username
      email
      status
    }
  }
`);

export default function useUser(
  offset: number,
  limit: number,
  status: boolean | null
) {
  let filter = null;
  if (status !== null) {
    filter = {
      status: status,
    };
  }
  return useQuery(QUERY, {
    variables: {
      offset: offset,
      limit: limit,
      filter: filter,
    },
  });
}
