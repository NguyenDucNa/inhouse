import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

const QUERY = graphql(`
  query Invoice($invoiceID: ID!) {
    invoice(invoiceID: $invoiceID) {
      id
      total
      orderId
      place
      invoiceLines {
        id
        title
        subtitle
        quantity
        price
        total
      }
    }
  }
`);

export function useInvoiceManagement(invoiceID: string) {
  return useQuery(QUERY, {
    variables: {
      invoiceID: invoiceID,
    },
  });
}
