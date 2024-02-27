import { Guest } from '@packages/local-device-order/page/servicing/model/guest.ts';
import { immer as _immer } from 'zustand/middleware/immer';
import { StateCreator } from 'zustand';
import {
  ServicingSetupType,
  ServicingState,
} from '@packages/local-device-order/page/servicing/store/servicing-slice.ts';

export interface GuestState {
  /** The selected guest. */
  selectedGuest?: Guest;

  /** The guests. */
  guests: Guest[];

  /** Load the cart for the given order id.
   *
   * @param orderId - The order id
   * @param guests - The guests.
   */
  setupGuest: (type: ServicingSetupType, guests: Guest[]) => void;

  /** Set the guest.
   *
   * @param guest - The guest.
   */
  setSelectedGuest: (guest: Guest) => void;
}

export const createGuestSlice: StateCreator<
  ServicingState & GuestState,
  [['zustand/immer', never]],
  [],
  GuestState
> = (set) => ({
  selectedGuest: undefined,
  guests: [],

  setupGuest(type: ServicingSetupType, guests: Guest[]) {
    set((state) => {
      console.log('setupGuest', type, guests);
      switch (type) {
        case ServicingSetupType.NEW_ORDER: {
          state.selectedGuest = guests.length > 0 ? guests[0] : undefined;
          state.guests = guests;
          break;
        }
        case ServicingSetupType.CONTINUE_ORDER:
          break;
      }
    });
  },

  setSelectedGuest(guest: Guest) {
    set((state) => {
      state.selectedGuest = guest;
    });
  },
});
