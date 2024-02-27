import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const MENU_SECTION_QUERY = graphql(`
  query getMenuSection($id: ID!) {
    menuSection(id: $id) {
      id
      name
      description
    }
  }
`);

export function useGetMenuSection(sectionId: string) {
  return useQuery(MENU_SECTION_QUERY, { variables: { id: sectionId } });
}
