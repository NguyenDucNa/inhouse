import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

const QUERY = graphql(`
  query InvoiceCount($branchId: String!) {
    invoiceCount(filter: { branchId: $branchId })
  }
`);

export default function useInvoiceCount(
  branchId: string,
) {
  return useQuery(QUERY, {
    variables: {
      branchId: branchId
    },
  });
}
