import { useQuery } from '@apollo/client';
import { useCompanyId } from '@packages/core/company/company-context.ts';
import { graphql } from '@client/graphql/types';

export const MENU_LIST_QUERY = graphql(`
  query MenuList($companyId: ID!) {
    menus(companyId: $companyId) {
      id
      title
    }
  }
`);

export function useMenuList() {
  const companyId = useCompanyId();

  return useQuery(MENU_LIST_QUERY, {
    variables: { companyId },
  });
}
