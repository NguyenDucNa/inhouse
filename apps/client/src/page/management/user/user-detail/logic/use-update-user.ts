import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const MUTATION = graphql(`
  mutation UpdateUser($id: String!, $data: UpdateUserData!) {
    updateUser(id: $id, data: $data) {
      id
      firstName
      lastName
      username
      email
      status
    }
  }
`);

export default function useUpdateUser() {
  return useMutation(MUTATION);
}
