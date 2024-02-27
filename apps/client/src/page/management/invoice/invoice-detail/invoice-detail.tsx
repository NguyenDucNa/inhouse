import { useParams } from 'react-router-dom';
import Card from 'ui/src/card/card';
import CardContent from 'ui/src/card/card-content';
import CurrencyView from 'core/src/utils/currency-view';
import CardHeader from '@packages/ui/card/card-header.tsx';
import Invoice from './component/invoice-management';
import { useInvoiceManagement } from './logic/use-invoice-management';

export default function InvoiceDetail() {
  const invoiceId = useParams().invoiceId ?? '';
  const { data: invoiceData } = useInvoiceManagement(invoiceId);
  console.log(invoiceData);
  if (!invoiceData) {
    return <div>Data is empty</div>;
  }
  return (
    <div className="p-2">
      <Card>
        <CardHeader title={`#Invoice: ${invoiceData.invoice.id}`} />

        <CardContent>
          <p className="mt-12">
            <p className="text-xl italic">Information</p>
            <ul className="italic text-lg text-gray-600">
              <li>OrderId: {invoiceData.invoice.orderId} </li>
              <li>Place: {invoiceData.invoice.place} </li>
            </ul>
          </p>

          <Invoice invoiceLines={invoiceData.invoice.invoiceLines} />

          <div className="mt-12 text-xl flex justify-end font-semibold">
            Total: <CurrencyView price={invoiceData.invoice.total} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
