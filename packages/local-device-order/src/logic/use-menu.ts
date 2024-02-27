import { useQuery } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const QUERY = graphql(`
  query menu($id: ID!) {
    menu(id: $id) {
      id
      title
      menuProducts {
        id
        title
        configurations {
          id
          title
          type
          values {
            id
            name
            price
          }
        }
      }
    }
  }
`);

export default function useMenu(menuId?: string) {
  return useQuery(QUERY, {
    variables: { id: menuId ?? 'default' },
  });
}
