import { useQuery } from '@apollo/client';
import { graphql } from '@packages/local-device-order/graphql/types';

const GET_TABLE_GROUPS = graphql(`
  query localDeviceCreate($companyId: ID!, $branchId: ID!) {
    menus(companyId: $companyId) {
      id
      title
    }

    tableGroups(branchID: $branchId) {
      id
      name
      arrangementCode
      tables {
        id
        name
        seats
        tableGroupId
      }
    }
  }
`);

export default function useLocalDeviceCreateQuery(
  companyId: string,
  branchId: string
) {
  return useQuery(GET_TABLE_GROUPS, {
    variables: { companyId: companyId, branchId: branchId },
  });
}
