import { gql } from "@apollo/client";

export const postChannel = gql`
  mutation MyMutation($addChannel: channels_insert_input!) {
    insert_channels_one(object: $addChannel) {
      id
    }
  }
`;
