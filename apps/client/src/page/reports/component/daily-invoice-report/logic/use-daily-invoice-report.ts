import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

const QUERY = graphql(`
  query DailyInvoiceReport($companyID: ID!) {
    analytic__invoice_report(companyID: $companyID) {
      daily {
        date
        total
        count
      }
    }
  }
`);

export function useDailyInvoiceReport(companyID: string) {
  return useQuery(QUERY, { variables: { companyID: companyID } });
}
