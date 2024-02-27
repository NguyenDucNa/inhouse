import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const GET_MENU_PRODUCT = graphql(`
  query GetMenuProductDetail($id: ID!) {
    menuProduct(id: $id) {
      id
      section {
        id
        name
        description
      }
      configurations {
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
  }
`);

export default function useGetMenuProduct(menuId: string) {
  return useQuery(GET_MENU_PRODUCT, {
    variables: {
      id: menuId,
    },
  });
}
