import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const GET_SECTIONS = graphql(`
  query GetSections($menuId: ID!) {
    menuSections(menuId: $menuId) {
      id
      name
    }
  }
`);

export default function useGetSections(menuId: string) {
  return useQuery(GET_SECTIONS, { variables: { menuId: menuId } });
}
