import { graphql } from '../graphql/types';

export const MenuProductConfigurationFragment = graphql(`
  fragment MenuProductConfigurationItem on MenuProductConfiguration {
    id
    title
    type
    values {
      ...MenuProductConfigurationValueItem
    }
  }
`);
