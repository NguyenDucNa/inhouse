import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';
const ORDERS_COUNT = graphql(`
  query OrdersCount($filter: OrderFilter) {
    ordersCount(filter: $filter)
  }
`);

export default function useOrdersCount(filter?: { state?: string }) {
  return useQuery(ORDERS_COUNT, {
    variables: { filter: filter },
  });
}
