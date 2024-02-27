import { useLocalDevicePosOrderContext } from 'src/logic/local-device-pos-context';
import CurrencyView from '@packages/core/utils/currency-view.tsx';
interface GuestPreInvoiceProduct {
  productId: string;
  title: string;
  price: number[];
  quantity: number;
  final: number[];
}

interface GuestPreInvoice {
  guestID: string;
  data: GuestPreInvoiceProduct[];
}

export default function PrepareInvoiceList() {
  const invoiceList: GuestPreInvoice[] = [];
  const orderContext = useLocalDevicePosOrderContext();

  for (const guest of orderContext.orderState.data.guests) {
    const invoiceData: GuestPreInvoiceProduct[] = [];
    for (const orderTask of orderContext.orderState.orderTasks) {
      if (guest.id == orderTask.data.guestID) {
        orderTask.products.forEach((product) => {
          const position = invoiceData.findIndex(
            (data) => data.productId === product.menuProductId
          );
          if (position != -1) {
            orderTask.products[position].quantity =
              orderTask.products[position].quantity + product.quantity;
          } else {
            invoiceData.push({
              productId: product.menuProductId,
              title: product.title,
              price: product.configurations.map((conf) => conf.price),
              quantity: product.quantity,
              final: product.configurations.map(
                (conf) => conf.price * product.quantity
              ),
            });
          }
        });
      }
    }
    invoiceList.push({
      guestID: guest.id,
      data: invoiceData,
    });
  }

  return (
    <div>
      {invoiceList.map((invoice) => (
        <div
          key={invoice.guestID}
          className="p-10 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            #GuestId: {invoice.guestID}
          </p>

          <div className="overflow-x-auto mt-12">
            <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Prices
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Final
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoice.data.map((invoiceLine) => (
                  <tr
                    key={invoiceLine.productId}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{invoiceLine.title}</td>
                    <td className="px-6 py-4">
                      {invoiceLine.price.map((itemPrice) => (
                        <span key={itemPrice}>
                          <CurrencyView price={itemPrice} />
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-4">{invoiceLine.quantity}</td>
                    <td className="px-6 py-4">
                      {invoiceLine.final.map((itemFinal) => (
                        <span key={itemFinal}>
                          <CurrencyView price={itemFinal} />
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mt-2 text-2xl font-semibold">
              Total:
              <CurrencyView
                price={invoice.data.reduce(
                  (previos, current) =>
                    previos +
                    current.final.reduce(
                      (previos2, current2) => previos2 + current2,
                      0
                    ),
                  0
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
