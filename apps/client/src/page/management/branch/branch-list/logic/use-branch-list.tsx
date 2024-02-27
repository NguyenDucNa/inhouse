import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';
import { useCompanyContext } from '@packages/core/company/company-context.ts';

const GET_BRANCH = graphql(`
  query CompanyBranches($companyId: ID!) {
    branches(companyId: $companyId) {
      ...BranchItem
    }
  }
`);

export function useBranchList() {
  const companyContext = useCompanyContext();
  return useQuery(GET_BRANCH, {
    variables: {
      companyId: companyContext.id,
    },
  });
}
