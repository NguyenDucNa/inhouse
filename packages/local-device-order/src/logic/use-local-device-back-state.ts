import { useMutation } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const BACK_STATE = graphql(`
  mutation localDeviceOrderBackState($orderId: String!) {
    localDeviceOrderBackState(orderId: $orderId) {
      id
      state
    }
  }
`);

export default function useLocalDeviceOrderBackState() {
  return useMutation(BACK_STATE, {});
}
