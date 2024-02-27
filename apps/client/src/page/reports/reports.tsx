import DailyInvoiceReport from '@client/page/reports/component/daily-invoice-report/daily-invoice-report.tsx';
import ReportsHeader from '@client/page/reports/component/reports-header.tsx';

function Reports() {
  return (
    <div className="flex flex-col space-y-4">
      <ReportsHeader />
      <DailyInvoiceReport />
    </div>
  );
}

export default Reports;
