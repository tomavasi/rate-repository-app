import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($after: String, $first: Int, $orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
  repositories(after: $after, first: $first, orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
    pageInfo {
      hasNextPage
      endCursor
      startCursor
    }
    totalCount
    edges {
      cursor
      node {
        id
        createdAt
        description
        forksCount
        fullName
        language
        ratingAverage
        reviewCount
        ownerAvatarUrl
        stargazersCount
      }
    }
  }
}
`;

export const GET_REPOS_DATE = gql`
query Query($orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
  repositories(orderBy: $orderBy, searchKeyword: $searchKeyword) {
    edges {
      node {
        createdAt
        description
        forksCount
        fullName
        id
        language
        ownerAvatarUrl
        ownerName
        ratingAverage
        reviewCount
        stargazersCount
        url
      }
    }
  }
}
`
export const GET_REPOS_RATING = gql`
query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
  repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
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
`

export const GET_ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
                node {
                  id
                  rating
                  text
                  createdAt
                  repositoryId
                }
              }
      }
    }
  }
`

export const SINGLE_REPO = gql`
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    id
    fullName
    forksCount
    description
    createdAt
    language
    ownerAvatarUrl
    ratingAverage
    reviewCount
    stargazersCount
    url
    reviews(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
      edges {
        cursor
        node {
          id
          rating
          text
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`
// other queries...