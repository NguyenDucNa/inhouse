import { graphql } from '@client/graphql/types';

export const TableGroupFragment = graphql(`
  fragment TableGroupItem on TableGroup {
    id
    name
    arrangementCode
  }
`);
