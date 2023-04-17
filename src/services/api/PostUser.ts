import { gql } from "@apollo/client";

export const postUser = gql`
  mutation MyMutation($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
    }
  }
`;
