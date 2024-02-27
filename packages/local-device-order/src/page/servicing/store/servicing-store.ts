import { create } from 'zustand';
import {
  CartState,
  createCartSlice,
} from '@packages/local-device-order/page/servicing/store/cart-slice.ts';
import {
  createGuestSlice,
  GuestState,
} from '@packages/local-device-order/page/servicing/store/guest-slice.ts';
import { immer } from 'zustand/middleware/immer';
import {
  createOrderingSlice,
  OrderingState,
} from '@packages/local-device-order/page/servicing/store/ordering-slice.ts';
import {
  createServicingSlice,
  ServicingState,
} from '@packages/local-device-order/page/servicing/store/servicing-slice.ts';

export const useServicingStore = create<
  ServicingState & CartState & GuestState & OrderingState
>()(
  immer((...a) => ({
    ...createServicingSlice(...a),
    ...createCartSlice(...a),
    ...createGuestSlice(...a),
    ...createOrderingSlice(...a),
  }))
);
