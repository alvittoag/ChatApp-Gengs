import { gql } from "@apollo/client";

export const putChannel = gql`
  mutation MyMutation(
    $channel_id: Int!
    $setUpdateChannel: channels_set_input!
  ) {
    update_channels_by_pk(
      pk_columns: { id: $channel_id }
      _set: $setUpdateChannel
    ) {
      id
    }
  }
`;
