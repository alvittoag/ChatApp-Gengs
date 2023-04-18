import { gql } from "@apollo/client";

export const putUser = gql`
  mutation MyMutation($update: users_set_input!, $id: Int!) {
    update_users(where: { id: { _eq: $id } }, _set: $update) {
      returning {
        id
        username
        password
        image
      }
    }
  }
`;
