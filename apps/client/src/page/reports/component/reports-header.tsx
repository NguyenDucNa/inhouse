import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import {
  useCompanyCurrency,
  useCompanyId,
} from 'core/src/company/company-context';
import { formatCurrency } from 'core/src/utils/currency-formatter';
import { useReportHeaderData } from './report-header/logic/use-invoice-aggregated-report-by-date';

interface Start {
  title: string;
  stat: string;
  previousStat: string;
  change: string;
  changeType: string;
}

export default function ReportsHeader() {
  const currency = useCompanyCurrency();
  const companyId = useCompanyId();
  const { data: previousMonthData } = useReportHeaderData(
    companyId,
    getDateData().startDateOfPreviousMonth,
    getDateData().endDateOfPreviousMonth
  );

  const { data: currentMonthData } = useReportHeaderData(
    companyId,
    getDateData().startDateOfCurrenMonth,
    getDateData().endDateOfCurrenMonth
  );

  const stats: Start[] = [];
  stats.push(
    analyticInvoiceData(
      currentMonthData?.analytic__invoice_aggregated_report_by_date
        .totalInvoices ?? 0,
      previousMonthData?.analytic__invoice_aggregated_report_by_date
        .totalInvoices ?? 0,
      'Total invoices'
    )
  );

  const rawTotalAmount = analyticInvoiceData(
    currentMonthData?.analytic__invoice_aggregated_report_by_date.totalAmount ??
      0,
    previousMonthData?.analytic__invoice_aggregated_report_by_date
      .totalAmount ?? 0,
    'Total amount'
  );

  rawTotalAmount.stat = formatCurrency(+rawTotalAmount.stat, currency)
  rawTotalAmount.previousStat = formatCurrency(+rawTotalAmount.previousStat, currency),
  stats.push(
    rawTotalAmount
  );

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Last 30 days
      </h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-2 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div key={item.title} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">
              {item.title}
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  from {item.previousStat}
                </span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase'
                    ? 'bg-green-100 text-green-800'
                    : item.changeType === 'decrease'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-400 text-white',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : item.changeType === 'decrease' ? (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                ) : (
                  <div> Empty data </div>
                )}

                <span className="sr-only">
                  {' '}
                  {item.changeType === 'increase'
                    ? 'Increased'
                    : 'Decreased'}{' '}
                  by{' '}
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function getDateData() {
  const currentMonth = new Date();

  const startDateOfCurrenMonth = `${currentMonth.getFullYear()}-${(
    currentMonth.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-01`;

  const endDateOfCurrenMonth = `${currentMonth.getFullYear()}-${(
    currentMonth.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${(currentMonth.getDate() + 1)
    .toString()
    .padStart(2, '0')}`;

  // get endDate of last month
  const previousMonth = new Date();
  previousMonth.setMonth(previousMonth.getMonth() - 1);

  const startDateOfPreviousMonth = `${previousMonth.getFullYear()}-${(
    previousMonth.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-01`;

  const endDateOfPreviousMonth = `${previousMonth.getFullYear()}-${(
    previousMonth.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${(previousMonth.getDate() + 1)
    .toString()
    .padStart(2, '0')}`;

  return {
    startDateOfCurrenMonth,
    endDateOfCurrenMonth,
    startDateOfPreviousMonth,
    endDateOfPreviousMonth,
  };
}

function analyticInvoiceData(
  currentInvoice: number,
  lastInvoice: number,
  title: string
) {
  let changeType = '';
  let change = '';
  if (currentInvoice > lastInvoice && lastInvoice != 0) {
    changeType = 'increase';
    change = ((currentInvoice - lastInvoice) / lastInvoice).toString() + '%';
  }
  if (currentInvoice < lastInvoice && currentInvoice != 0) {
    changeType = 'decrease';
    change = '-' + ((lastInvoice - currentInvoice) / 100).toString() + '%';
  }

  const totalInvoice: Start = {
    title: title,
    stat: currentInvoice.toString(),
    previousStat: lastInvoice.toString(),
    change: change,
    changeType: changeType,
  };

  return totalInvoice;
}
