import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const MUTATION = graphql(`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      id
      username
    }
  }
`);

export default function useDeleteUser() {
  return useMutation(MUTATION, {

  });
}
