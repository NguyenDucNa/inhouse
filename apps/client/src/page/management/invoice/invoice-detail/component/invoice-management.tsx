import { InvoiceLine } from '@client/graphql/types/graphql';
import CurrencyView from 'core/src/utils/currency-view';

export default function Invoice({
  invoiceLines,
}: {
  invoiceLines: InvoiceLine[] | undefined;
}) {
  if (invoiceLines === undefined) {
    return <div>Data is empty</div>;
  }
  return (
    <>
      <div className="overflow-x-auto mt-12">
        <table className="w-full text-lg text-left rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Price
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
            {invoiceLines.map((invoiceLine) => (
              <tr
                key={invoiceLine.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">
                  <p>{invoiceLine.title}</p>
                  <p className="text-sm text-gray-500">
                    {invoiceLine.subtitle}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <CurrencyView price={invoiceLine.price} />
                </td>
                <td className="px-6 py-4">{invoiceLine.quantity}</td>
                <td className="px-6 py-4">
                  <CurrencyView price={invoiceLine.total} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
