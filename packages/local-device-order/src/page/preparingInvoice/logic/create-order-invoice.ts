import { LocalDeviceOrderInvoiceRecord } from '@packages/local-device-order/graphql/types/graphql.ts';
import { LocalDevicePosOrderContextData } from '@packages/local-device-order/logic/local-device-pos-context.ts';

export const createOrderInvoice = (
  orderContext: LocalDevicePosOrderContextData
): LocalDeviceOrderInvoiceRecord[] => {
  const records = new Map<string, LocalDeviceOrderInvoiceRecord>();

  // for (const guest of orderContext.orderState.data.guests) {
  //   records.set(guest.id, { guestID: guest.id, data: [] });
  // }

  for (const orderTask of orderContext.orderState.orderTasks) {
    for (const product of orderTask.products) {
      let record = records.get(orderTask.data.guestID);

      if (!record) {
        record = {
          guestID: orderTask.data.guestID,
          data: [],
        };

        records.set(orderTask.data.guestID, record);
      }

      // Insert line data
      record.data.push({
        productId: product.menuProductId,
        configurationValueIds: product.configurations.map(
          (config) => config.menuProductConfigurationValueId
        ),
        quantity: product.quantity,
      });
    }
  }

  return Array.from(records.values());
};
