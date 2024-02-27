import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

const QUERY = graphql(`
  query InvoicesByBranch($branchId: String, $offset: Int!, $limit: Int!) {
    invoicesByBranch(branchId: $branchId, offset: $offset, limit: $limit) {
      ...InvoiceItem
    }
  }
`);

export default function useGetInvoicesByBranch(branchId: string, offset: number, limit: number) {
  return useQuery(QUERY, {
    variables: {
      branchId: branchId,
      offset: offset,
      limit: limit
    },
  });
}
