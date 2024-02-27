import { graphql } from '../graphql/types';

export const TableFragment = graphql(`
  fragment TableItem on Table {
    id
    name
    seats
    tableGroupId
  }
`);
