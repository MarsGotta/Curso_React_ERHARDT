import { gql } from 'apollo-boost';

export const USER_DATA = gql`
  {
    viewer {
      login
      bio
      avatarUrl(size: 10)
      company
      email
    }
  }
`;