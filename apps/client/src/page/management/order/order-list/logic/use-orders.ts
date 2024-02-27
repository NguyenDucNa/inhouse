import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const QUERY = graphql(`
  query Orders($offset: Int!, $limit: Int!, $filter: OrderFilter) {
    orders(offset: $offset, limit: $limit, filter: $filter) {
      id
      state
      tableOrder {
        id
        customTableName
        table {
          id
          name
          tableGroup {
            id
            name
          }
        }
      }
      ... on LocalDeviceOrder {
        data {
          guests {
            id
            name
          }
        }
      }
    }
  }
`);

export default function useOrders(
  offset: number,
  limit: number,
  filter?: {
    state?: string;
  }
) {
  return useQuery(QUERY, {
    variables: {
      offset: offset,
      limit: limit,
      filter: filter,
    },
  });
}
