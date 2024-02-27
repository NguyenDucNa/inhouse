import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

const QUERY = graphql(`
  query Analytic__invoice_aggregated_report_by_date(
    $companyID: ID!
    $startDate: String!
    $endDate: String!
  ) {
    analytic__invoice_aggregated_report_by_date(
      companyID: $companyID
      startDate: $startDate
      endDate: $endDate
    ) {
      totalInvoices
      totalAmount
    }
  }
`);

export function useReportHeaderData(
  companyID: string,
  startDate: string,
  endDate: string
) {
  return useQuery(QUERY, {
    variables: { companyID: companyID, startDate: startDate, endDate: endDate },
  });
}
