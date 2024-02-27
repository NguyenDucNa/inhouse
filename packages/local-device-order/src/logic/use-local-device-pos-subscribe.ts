import { useSubscription } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const QUERY = graphql(`
  subscription LocalDeviceStateSubscribe($orderId: ID!) {
    localDeviceOrderUpdateSubscribe(id: $orderId) {
      ...LocalDeviceStateItem
    }
  }
`);

export default function useLocalDevicePosOrderStateUpdateSubscribe(
  orderId?: string
) {
  return useSubscription(QUERY, {
    variables: { orderId: orderId ?? '' },
  });
}
