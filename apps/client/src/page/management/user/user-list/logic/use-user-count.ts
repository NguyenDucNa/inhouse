import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const USERS_COUNT = graphql(`
  query UsersCount($filter: UserFilter) {
    usersCount(filter: $filter)
  }
`);

export default function useUsersCount(status: boolean | null) {
  let filter = null;
  if(status !== null){
    filter = {
      status : status
    }
  }
  return useQuery(USERS_COUNT, {
    variables: {
      filter: filter,
    },
  });
}
