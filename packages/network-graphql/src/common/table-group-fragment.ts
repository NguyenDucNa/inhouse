import { graphql } from '../graphql/types';

export const TableGroupFragment = graphql(`
  fragment TableGroupItem on TableGroup {
    id
    name
    arrangementCode
  }
`);
