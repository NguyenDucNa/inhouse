import { formatCurrency } from '@packages/core/utils/currency-formatter.ts';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import GuestPanel from '@packages/local-device-order/page/servicing/component/guest-panel.tsx';
import { useServicingStore } from '@packages/local-device-order/page/servicing/store/servicing-store.ts';
import LineProductView from '@packages/local-device-order/page/servicing/component/line-product-view.tsx';
import { calculateTotalPrice } from '@packages/local-device-order/page/servicing/logic/calculate-total-price.ts';
import { useLocalDevicePosOrderContext } from '@packages/local-device-order/logic/local-device-pos-context.ts';
import { useCallback } from 'react';
import useCreateOrderTask from '@packages/local-device-order/logic/use-create-order-task.ts';
import useLocalDeviceOrderNextState from '@packages/local-device-order/logic/use-local-device-next-state.ts';

const title = 'Current Order';
const emptyCartTitle = 'Empty';
const totalBillTitle = 'Tổng tiền';
const invoiceTitle = 'Hóa đơn';

const CartDetail = () => {
  const { orderState, menu } = useLocalDevicePosOrderContext();
  const currency = useCompanyCurrency();

  // Data
  const guest = useServicingStore((state) => state.selectedGuest);
  const lineProducts =
    useServicingStore((state) => state.lineProducts.get(guest?.id ?? '')) ?? [];

  // Aggregate data
  const totalPrice = calculateTotalPrice(lineProducts, menu);

  // Action
  const order = useServicingStore((state) => state.order);
  const [createOrderTask] = useCreateOrderTask();

  const onOrderClick = useCallback(async () => {
    await order(async (lineProducts, guest) => {
      await createOrderTask({
        variables: {
          orderId: orderState.id,
          data: {
            guestID: guest.id,
            products: lineProducts.map((lineProduct) => ({
              productId: lineProduct.productID,
              quantity: lineProduct.quantity,
              configurationValuesIds: lineProduct.configurationIDs,
            })),
          },
        },
      });
    });
  }, [createOrderTask, order, orderState.id]);

  const [closeServicing] = useLocalDeviceOrderNextState();
  const onOrderServicingClose = useCallback(async () => {
    await closeServicing({ variables: { orderId: orderState.id } });
  }, [closeServicing, orderState.id]);

  // View
  if (!guest) {
    return (
      <div className="h-full flex flex-col justify-between p-4 pt-12 space-y-4">
        Please select guest
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-between p-4 pt-12 space-y-4">
      <GuestPanel />
      {/* Bill title */}
      <div className="flex pb-2">
        <div className="text-2xl font-semibold 2xl:text-3xl">{title}</div>
      </div>

      {/* Bill list */}
      <div className="relative grow overflow-y-auto">
        <p className="italic text-gray-500 -z-50 absolute text-sm w-full mt-2 mx-2">
          {emptyCartTitle}
        </p>
        {lineProducts.map((lineProduct) => (
          <LineProductView key={lineProduct.id} itemLine={lineProduct} />
        ))}
      </div>

      {/* Total bill*/}
      <div className=" border-t pt-4 border-gray-500">
        <div className="flex justify-between px-2">
          <div className="">
            <p className="text-lg">{invoiceTitle}</p>
          </div>

          <div className="">
            <p className="text-lg">{totalBillTitle}</p>
            <p className="text-right font-semibold text-2xl">
              {formatCurrency(totalPrice, currency)}
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => void onOrderClick()}
            className="w-[49%] h-14 xl:h-16 2xl:h-18 bg-orange-600 text-white font-semibold text-xl xl:text-2xl rounded-lg"
          >
            Order
          </button>
          <button
            onClick={() => void onOrderServicingClose()}
            className="w-[49%] h-14 xl:h-16 2xl:h-18 bg-blue-600 text-white font-semibold text-xl xl:text-2xl rounded-lg"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
