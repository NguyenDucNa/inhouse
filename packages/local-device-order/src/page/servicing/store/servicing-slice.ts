import { Guest } from '@packages/local-device-order/page/servicing/model/guest.ts';
import { StateCreator } from 'zustand';
import { CartState } from '@packages/local-device-order/page/servicing/store/cart-slice.ts';
import { GuestState } from '@packages/local-device-order/page/servicing/store/guest-slice.ts';

export enum ServicingSetupType {
  NEW_ORDER = 'NEW_ORDER',
  CONTINUE_ORDER = 'CONTINUE_ORDER',
}

export interface SetupParams {
  orderId: string;
  guests: Guest[];
}

export interface ServicingState {
  /** The order id. */
  orderId?: string;

  setup: (params: SetupParams) => void;
}

export const createServicingSlice: StateCreator<
  ServicingState & CartState & GuestState,
  [['zustand/immer', never]],
  [],
  ServicingState
> = (set, get) => ({
  setup: (params: SetupParams) => {
    const state = get();
    const type =
      state.orderId === params.orderId
        ? ServicingSetupType.CONTINUE_ORDER
        : ServicingSetupType.NEW_ORDER;

    set((state) => {
      state.orderId = params.orderId;
    });

    console.log('setup 1', state.orderId, params.orderId, params);

    get().setupCart(type);
    get().setupGuest(type, params.guests);
  },
});
