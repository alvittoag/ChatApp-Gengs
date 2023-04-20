import { gql } from "@apollo/client";

export const deleteChannel = gql`
  mutation MyMutation($channel_id: Int!) {
    delete_channels_by_pk(id: $channel_id) {
      id
    }
  }
`;
