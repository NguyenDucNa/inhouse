import { graphql } from '../graphql/types';

export const MenuProductConfigurationValueFragment = graphql(`
  fragment MenuProductConfigurationValueItem on MenuProductConfigurationValue {
    id
    name
    price
  }
`);
