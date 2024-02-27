import { useLocalDevicePosOrderContext } from 'src/logic/local-device-pos-context';
import { LocalDeviceOrderInvoiceRecord } from '@packages/local-device-order/graphql/types/graphql.ts';
import { useLocalDeviceOrderCreateInvoice } from '@packages/local-device-order/page/preparingInvoice/logic/use-local-device-order-create-invoices.ts';
import { createOrderInvoice } from '@packages/local-device-order/page/preparingInvoice/logic/create-order-invoice.ts';
import PrepareInvoiceList from './component/prepare-invoice-list';

export default function LocalDeviceOrderCreateInvoice() {
  const [create] = useLocalDeviceOrderCreateInvoice();
  const orderContext = useLocalDevicePosOrderContext();

  const invoices: LocalDeviceOrderInvoiceRecord[] =
    createOrderInvoice(orderContext);

  const createInvoice = () => {
    create({
      variables: {
        orderId: orderContext.orderState.id,
        input: {
          invoices: invoices,
        },
      },
    })
      .then(() => {
        console.log('success');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        className="m-5 py-6 px-9 bg-red-500 text-white rounded-md"
        onClick={createInvoice}
      >
        Create Invoice
      </button>

      <PrepareInvoiceList />
    </>
  );
}
