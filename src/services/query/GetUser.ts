import { gql } from "@apollo/client";

export const getUserByUsernameAndPassword = gql`
  query MyQuery($username: String!, $password: String!) {
    users(
      where: { username: { _eq: $username }, password: { _eq: $password } }
    ) {
      id
      username
      password
      image
    }
  }
`;
