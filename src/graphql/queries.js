import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
   query {
    repositories {
        edges {
        node {
            id
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

export const SINGLE_REPO = gql`
  query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
            id
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
`
// other queries...