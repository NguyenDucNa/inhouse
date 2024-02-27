import { graphql } from '@client/graphql/types';

export const TableFragment = graphql(`
  fragment TableItem on Table {
    id
    name
    seats
    tableGroupId
  }
`);
