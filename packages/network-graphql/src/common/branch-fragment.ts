import { graphql } from '../graphql/types';

export const BranchFragment = graphql(`
  fragment BranchItem on Branch {
    id
    name
    address
  }
`);
