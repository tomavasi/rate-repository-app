import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
   query {
    repositories {
        edges {
        node {
            description
            forksCount
            fullName
            language
            reviewCount
            stargazersCount
            ownerAvatarUrl
            ratingAverage
      }
    }
  }
}
`;

export const GET_ME = gql`
  {
  me {
    id
    username
  }
}
`

// other queries...