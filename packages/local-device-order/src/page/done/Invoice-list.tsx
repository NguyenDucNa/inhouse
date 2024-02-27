import { useNavigate, useParams } from 'react-router-dom';
import { useInvoicesByOrder } from './logic/use-invoice-by-order';
import Invoice from './component/invoice';

export default function InvoiceList() {
  const orderId = useParams().orderId ?? '';
  const navigate = useNavigate();
  const { data: invoiceData } = useInvoicesByOrder(orderId);
  if (!invoiceData) {
    return <div>Data is empty</div>;
  }
  return (
    <>
      <div className="flex justify-end">
        <button
          className="py-4 px-6 bg-red-500 rounded-md text-xl text-white m-6 mb-0"
          onClick={() => {
            navigate('..');
          }}
        >
          Back to order list
        </button>
      </div>
      {invoiceData.invoicesByOrder.map((invoice) => (
        <div
          key={invoice?.id}
          className="p-10 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            #Invoice: {invoice?.id}
          </p>

          <p className="mt-12">
            <p className="text-2xl italic">Information</p>
            <ul className="italic text-lg text-gray-600">
              <li>OrderId: {invoice?.orderId} </li>
              <li>Place: {invoice?.place} </li>
            </ul>
          </p>

          <Invoice invoiceLines={invoice?.invoiceLines} />

          <div className="mt-12 text-3xl flex justify-end font-semibold">
            Total: {invoice?.total}
          </div>
        </div>
      ))}
    </>
  );
}
