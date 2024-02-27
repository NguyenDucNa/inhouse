import { useMutation } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const LOCAL_DEVICE_ORDER_START = graphql(`
  mutation localDeviceOrderStart($companyId: String!, $data: CreateOrderData!) {
    localDeviceOrderStart(companyId: $companyId, data: $data) {
      id
      state
    }
  }
`);

export default function useLocalDeviceCreate() {
  return useMutation(LOCAL_DEVICE_ORDER_START, {});
}
