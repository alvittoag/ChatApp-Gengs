import { gql } from "@apollo/client";

export const postChat = gql`
  mutation MyMutation($object: chats_insert_input!) {
    insert_chats_one(object: $object) {
      created_at
    }
  }
`;
