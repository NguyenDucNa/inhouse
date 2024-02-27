import { useServicingStore } from '@packages/local-device-order/page/servicing/store/servicing-store.ts';
import { useCallback } from 'react';
import { LineProduct } from '@packages/local-device-order/page/servicing/model/line-product.ts';

export const useAddToCart = () => {
  const guest = useServicingStore((state) => state.selectedGuest);
  const addLineProduct = useServicingStore((state) => state.addLineProduct);

  return useCallback(
    (lineProduct: LineProduct) => {
      if (!guest) {
        throw new Error('Guest is not selected');
      }

      addLineProduct(lineProduct, guest.id);
    },
    [guest, addLineProduct]
  );
};
