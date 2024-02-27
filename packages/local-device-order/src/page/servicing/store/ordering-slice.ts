import { StateCreator } from 'zustand';
import { CartState } from '@packages/local-device-order/page/servicing/store/cart-slice.ts';
import { GuestState } from '@packages/local-device-order/page/servicing/store/guest-slice.ts';
import { immer as _immer } from 'zustand/middleware/immer';
import { LineProduct } from '@packages/local-device-order/page/servicing/model/line-product.ts';
import { Guest } from '@packages/local-device-order/page/servicing/model/guest.ts';

export interface OrderingState {
  /** Place order into kitchen.
   *
   * @param orderingFn - function that handle the ordering process
   */
  order: (
    orderingFn: (lineProducts: LineProduct[], guest: Guest) => Promise<void>
  ) => Promise<void>;
}

export const createOrderingSlice: StateCreator<
  CartState & GuestState,
  [['zustand/immer', never]],
  [],
  OrderingState
> = (set, get) => ({
  order: async (orderingFn) => {
    if (get().isLocked) {
      // If the cart is locked, do nothing
      return;
    }

    const state = get();
    const guest = state.selectedGuest;
    if (guest === undefined) {
      throw new Error('No guest selected');
    }

    const lineProducts = state.lineProducts.get(guest.id) ?? [];
    if (lineProducts.length == 0) {
      // If there is no line product, do nothing
      return;
    }

    set((state) => {
      state.isLocked = true;
    });

    try {
      await orderingFn(lineProducts, guest);

      set((state) => {
        state.lineProducts.set(guest.id, []);
      });
    } finally {
      // Unlock the cart
      set((state) => {
        state.isLocked = false;
      });
    }
  },
});
