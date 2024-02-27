import { useQuery } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const QUERY = graphql(`
  query LocalDeviceState($orderId: ID!) {
    localDeviceOrder(id: $orderId) {
      ...LocalDeviceStateItem
    }
  }
`);

export default function useLocalDevicePosState(orderId?: string) {
  return useQuery(QUERY, {
    variables: { orderId: orderId ?? '' },
    skip: orderId === undefined,
  });
}
