import { immer as _immer } from 'zustand/middleware/immer';
import { LineProduct } from '@packages/local-device-order/page/servicing/model/line-product.ts';
import { StateCreator } from 'zustand';
import {
  ServicingSetupType,
  ServicingState,
} from '@packages/local-device-order/page/servicing/store/servicing-slice.ts';

export interface CartState {
  isLocked: boolean;

  /** The line products in the cart. */
  lineProducts: Map<string, LineProduct[]>;

  /** Load the cart for the given order id.
   *
   * @param orderId - The order id
   */
  setupCart: (type: ServicingSetupType) => void;

  /** Add a line product to the cart.
   *
   * @param lineProduct - The line product to add.
   * @param guestId - The guest id.
   */
  addLineProduct: (
    lineProduct: LineProduct,
    guestId: string,
    quantity: number
  ) => void;

  /** Remove a line product from the cart.
   *
   * @param lineProductId - The line product id.
   * @param guestId - The guest id.
   */
  removeLineProduct: (lineProductId: string, guestId: string) => void;
}

export const createCartSlice: StateCreator<
  ServicingState & CartState,
  [['zustand/immer', never]],
  [],
  CartState
> = (set) => ({
  isLocked: false,

  lineProducts: new Map(),

  setupCart(type: ServicingSetupType) {
    set((state) => {
      switch (type) {
        case ServicingSetupType.NEW_ORDER: {
          state.lineProducts = new Map();
          break;
        }
        case ServicingSetupType.CONTINUE_ORDER: {
          break;
        }
      }
    });
  },

  addLineProduct: (lineProduct: LineProduct, guestId: string) => {
    set((state: CartState) => {
      const guestLineProducts = state.lineProducts.get(guestId);

      if (guestLineProducts) {
        // Insert the line product if it doesn't exist, otherwise update the
        const existingLineProduct = guestLineProducts.find(
          (lp) => lp.id === lineProduct.id
        );

        if (existingLineProduct) {
          // If the line product already exists, update the quantity
          existingLineProduct.quantity += lineProduct.quantity;
        } else {
          // Otherwise, add the line product
          guestLineProducts.push(lineProduct);
        }
      } else {
        // If the guest doesn't have any line products, add the line product
        state.lineProducts.set(guestId, [lineProduct]);
      }
    });
  },

  removeLineProduct: (lineProductId: string, guestId: string) => {
    set((state: CartState) => {
      const guestLineProducts = state.lineProducts.get(guestId);

      if (guestLineProducts) {
        // Remove the line product if it exists
        const index = guestLineProducts.findIndex(
          (lp) => lp.id === lineProductId
        );

        if (index !== -1) {
          guestLineProducts.splice(index, 1);
        }
      }
    });
  },
});
