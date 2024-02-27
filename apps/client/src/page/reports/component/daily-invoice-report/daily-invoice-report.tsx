import { useDailyInvoiceReport } from '@client/page/reports/component/daily-invoice-report/logic/use-daily-invoice-report.ts';
import {
  useCompanyCurrency,
  useCompanyId,
} from '@packages/core/company/company-context.ts';
import Card from '@packages/ui/card/card.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import { Bar } from 'react-chartjs-2';
import Loading from '@packages/ui/loading.tsx';
import { formatRawCurrency } from '@packages/core/utils/currency-formatter.ts';

const DailyInvoiceReport = () => {
  const companyID = useCompanyId();
  const currency = useCompanyCurrency();
  const { data } = useDailyInvoiceReport(companyID);

  const dailyInvoice = data?.analytic__invoice_report.daily.slice(-7) ?? [];

  const labels = dailyInvoice.map((item) => item.date);
  const dataDailyInvoice = dailyInvoice.map(
    (item) => formatRawCurrency(item.total, currency).value
  );

  if (!data) {
    return <Loading />;
  }

  return (
    <Card>
      <CardHeader title="Daily invoice report" />
      <CardContent>
        {
          <Bar
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    format: {
                      style: 'currency',
                      currency: 'EUR',
                    },
                  },
                },
                x: {},
              },
            }}
            data={{
              labels: labels,
              datasets: [
                {
                  data: dataDailyInvoice,
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  label: 'Daily invoice',
                },
              ],
            }}
          />
        }
      </CardContent>
    </Card>
  );
};

export default DailyInvoiceReport;
