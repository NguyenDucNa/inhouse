import { useQuery } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const QUERY = graphql(`
  query localDeviceOrders {
    localDeviceOrders {
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
        guestCount
      }
    }
  }
`);

export default function useLocalDeviceOrder() {
  return useQuery(QUERY, {});
}
