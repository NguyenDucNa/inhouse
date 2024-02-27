import { graphql } from '@client/graphql/types';

export const InvoiceFragment = graphql(`
  fragment InvoiceItem on Invoice {
    id
    total
    place
  }
`);
