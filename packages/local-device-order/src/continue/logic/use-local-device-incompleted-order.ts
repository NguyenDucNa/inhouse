import { useQuery } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const QUERY = graphql(`
  query localDeviceIncompletedOrders {
    localDeviceIncompletedOrders {
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
      data {
        guests {
          id
          name
        }
      }
    }
  }
`);

export default function useLocalDeviceIncompletedOrder() {
  return useQuery(QUERY, {});
}
