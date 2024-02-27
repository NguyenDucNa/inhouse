import { useMutation } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const NEXT_STATE = graphql(`
  mutation localDeviceOrderNextState($orderId: String!) {
    localDeviceOrderNextState(orderId: $orderId) {
      id
      state
    }
  }
`);

export default function useLocalDeviceOrderNextState() {
  return useMutation(NEXT_STATE, {});
}
