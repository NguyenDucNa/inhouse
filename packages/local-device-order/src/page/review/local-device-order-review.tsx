import { useLocalDevicePosOrderContext } from 'src/logic/local-device-pos-context.ts';
import { LocalDeviceOrderTask } from 'src/graphql/types/graphql.ts';
import OrderStateTransfer from '../../components/order-state-transfer.tsx';
interface GuestLocalOrderTask {
  guestId: string;
  OrderTask: LocalDeviceOrderTask[];
}
export default function LocalDeviceOrderReview() {
  const orderContext = useLocalDevicePosOrderContext();
  const localDeviceOrderTasks: GuestLocalOrderTask[] = [];

  for (const guest of orderContext.orderState.data.guests) {
    for (const orderTask of orderContext.orderState.orderTasks) {
      if (orderTask.data.guestID == guest.id) {
        if (!localDeviceOrderTasks.find((item) => item.guestId == guest.id)) {
          localDeviceOrderTasks.push({
            guestId: guest.id,
            OrderTask: [orderTask],
          });
        } else {
          localDeviceOrderTasks.forEach((item) => {
            if (item.guestId == guest.id) {
              item.OrderTask.push(orderTask);
            }
          });
        }
      }
    }
  }

  return (
    <div>
      <OrderStateTransfer />
      <div className="grid grid-cols-2">
        {localDeviceOrderTasks.map((item) => (
          <div key={item.guestId} className="m-8 p-4 border border-gray-400 rounded-xl">
            <p className="font-bold text-2xl underline mb-2">
              #GuestId: {item.guestId}
            </p>
            <p className="text-xl font-bold underline"> Order Task List: </p>
            {item.OrderTask.map((orderTask) => (
              <div key={orderTask.id} className="pl-2">
                <p className="font-semibold underline mb-2 text-lg">
                  #OrderTask id: {orderTask.id}
                </p>
                {orderTask.products.map((product) => (
                  <div key={product.id} className="pl-2">
                    <span className="font-semibold underline mb-2 text-md">
                      {' '}
                      #Product ID: {product.id} <br />{' '}
                    </span>
                    1. Product title: {product.title} <br />
                    2. Product Config:
                    {product.configurations.map((conf) => (
                      <span key={conf.id}> {conf.menuProductConfigurationValueId}</span>
                    ))}{' '}
                    <br /> 3. Product quantity: {product.quantity} <br />
                    <br />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
