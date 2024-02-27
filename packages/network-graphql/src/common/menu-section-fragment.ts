import { graphql } from '../graphql/types';

export const MenuSectionFragment = graphql(`
  fragment MenuSectionItem on MenuSection {
    id
    name
    description
  }
`);
