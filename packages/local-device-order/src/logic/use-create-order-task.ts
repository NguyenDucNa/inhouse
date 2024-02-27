import { useMutation } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const CREATE_ORDER_TASK = graphql(`
  mutation localDeviceOrderCreateOrderTask(
    $orderId: String!
    $data: CreateOrderTask!
  ) {
    localDeviceOrderCreateOrderTask(orderId: $orderId, data: $data) {
      id
      state
    }
  }
`);

export default function useCreateOrderTask() {
  return useMutation(CREATE_ORDER_TASK, {});
}
