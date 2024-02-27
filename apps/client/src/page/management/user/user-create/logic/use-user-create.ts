import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const MUTATION = graphql(`
  mutation CreateUser($companyID: ID!, $data: CreateUserData!) {
    createUser(companyID: $companyID, data: $data) {
      user {
        username
        email
        role
      }
      password
    }
  }
`);

export default function useCreateUser() {
  return useMutation(MUTATION, {});
}
