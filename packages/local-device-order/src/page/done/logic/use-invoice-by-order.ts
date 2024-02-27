import { graphql } from 'src/graphql/types';
import { useQuery } from '@apollo/client';

const QUERY = graphql(`
  query InvoicesByOrder($orderId : String!){
    invoicesByOrder(orderId: $orderId){
      id
      total
      orderId
      place
      invoiceLines{
        id
        title
        quantity
        price
      }
    }
  }
`);

export function useInvoicesByOrder(orderId: string) {
  return useQuery(QUERY, {
    variables: {
      orderId: orderId,
    },
  });
}
