import { gql } from "@apollo/client";

export const getChannel = gql`
  subscription MySubscription($value: String) {
    channels(where: { name: { _like: $value } }) {
      name
      id
      image
      description
      messages_info {
        message
      }
    }
  }
`;

export const getChannelById = gql`
  subscription MySubscription($channel_id: Int!) {
    channels(where: { id: { _eq: $channel_id } }) {
      id
      name
      description
      image
      messages_info {
        id
        message
        user {
          username
        }
      }
    }
  }
`;
