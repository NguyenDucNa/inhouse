import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

const GET_PRODUCT_CONFIGURATION = graphql(`
  query GetProductConfiguration($productId: ID!) {
    menuProductConfigurations(productId: $productId) {
      id
      type
      title
      values {
        id
        name
        price
      }
    }
  }
`);

export function useProductConfigurations(productId: string) {
  return useQuery(GET_PRODUCT_CONFIGURATION, { variables: { productId } });
}
